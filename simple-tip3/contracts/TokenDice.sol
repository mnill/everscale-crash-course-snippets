pragma ever-solidity >= 0.64.0;

pragma AbiHeader expire;
pragma AbiHeader pubkey;

import "./interfaces/ITokenRoot.sol";
import "./interfaces/ITokenWallet.sol";
import "./interfaces/IAcceptTokensTransferCallback.sol";
import "./libraries/TokenMsgFlag.sol";

library DiceErrors {
  uint16 constant NOT_OWNER                                       = 1000;
  uint16 constant NON_ZERO_PUBLIC_KEY                             = 1001;
  uint16 constant NOT_ENOUGH_BALANCE                              = 1002;
  uint16 constant INVALID_TOKEN_ROOT                              = 1003;
  uint16 constant INVALID_TOKEN_WALLET                            = 1004;
}


contract TokenDice is IAcceptTokensTransferCallback {

  address static tokenRoot_;
  address static owner_;

  address public tokenWallet_;
  uint128 public balance_;

  event Game(address player, uint8 bet, uint8 result,  uint128 prize);

  constructor() public {
    // Check we called by the owner
    require(msg.sender == owner_, DiceErrors.NOT_OWNER);
    require(tvm.pubkey() == 0, DiceErrors.NON_ZERO_PUBLIC_KEY);

    // Contract balance at least 1.5 evers
    require(address(this).balance >= 1.5 ever, DiceErrors.NOT_ENOUGH_BALANCE);

    // Always reserve 1 ever on the contract balance
    tvm.rawReserve(1 ever, 0);

    // Call responsible function deployWallet of TokenRoot.sol contract.
    // And set callback to our onWalletDeployed function
    ITokenRoot(tokenRoot_).deployWallet{
      value: 0,
      bounce: false,
      flag: 128,
      callback: onWalletDeployed
    }(address(this), 0.15 ever);
}

  modifier onlyOwner() {
    require(msg.sender == owner_, DiceErrors.NOT_OWNER);
    _;
  }

  modifier onlyOurWallet() {
    require(tokenWallet_.value != 0 && msg.sender == tokenWallet_, DiceErrors.INVALID_TOKEN_WALLET);
    _;
  }

  function onWalletDeployed(
    address tokenWallet
  ) public {
    // There we got callback from ITokenRoot(tokenRoot_).deployWallet
    // How it is really work:
    // In constructor we called responsible function ITokenRoot(tokenRoot_).deployWallet
    // responsible keyword just adds a hidden function param "answerID"
    // answerID - just ID of function contract must call in the answer
    // So return { value: 0, flag: TokenMsgFlag.ALL_NOT_RESERVED, bounce: false } tokenWallet
    // in the deployWallet function will be compiled to something like
    // msg.sender.call{value: 0, flag: TokenMsgFlag.ALL_NOT_RESERVED, bounce: false}(answerId, tokenWallet)

    // There is no built-in check to make sure this function
    // is truly being called in answer to your call.
    // So we need to implement security checks manually
    require(msg.sender == tokenRoot_, DiceErrors.INVALID_TOKEN_ROOT);
    tokenWallet_ = tokenWallet;

    // Fun fact, when we get an answer here, that does not mean
    // that the wallet is deployed. This means that the Root
    // contract created an outgoing deploy message.
    // We can receive this message before the wallet is deployed
    // (the message is en route).
    // In principle, the LT (see additional information) guarantees us,
    // that if we want to call a wallet method from here,
    // our message will not arrive earlier than the wallet is deployed.
  }

  function onAcceptTokensTransfer(
    address tokenRoot,
    uint128 amount,
    address sender,
    address senderWallet,
    address remainingGasTo,
    TvmCell payload
  ) override external onlyOurWallet {
    tvm.rawReserve(1 ever, 0);
    balance_ += amount;

    // We got some new tokens on the our wallet.
    // To slice to decode data in payload

    TvmSlice payloadSlice = payload.toSlice();
    TvmCell empty;

    // If we have uint8 _bet_dice_value
    if (payloadSlice.bits() >= 8) {
      (uint8 _bet_dice_value) = payloadSlice.decode(uint8);

      if (balance_ >= amount * 6) {
        // We can play

        // Do not use this random in production.
        rnd.shuffle();
        uint8 dice_result_value = rnd.next(6);  // 0..5
        if (_bet_dice_value == dice_result_value) {
          // Send an external message from the contract to no where. It is a log message to easily catch all wins off-chain
          emit Game(sender, _bet_dice_value, dice_result_value, amount * 6);

          balance_ -= amount * 6;
          ITokenWallet(tokenWallet_).transfer{value: 0, bounce: true, flag: TokenMsgFlag.ALL_NOT_RESERVED}(
            amount * 6,
            sender,
            0.1 ever,
            remainingGasTo,
            false,
            empty
          );
        } else {
          emit Game(sender, _bet_dice_value, dice_result_value, 0);
          if (remainingGasTo.value != 0) {
            // Return the change
            remainingGasTo.transfer(0, false, TokenMsgFlag.ALL_NOT_RESERVED);
          }
        }
      } else {
        // cancel
        balance_ -= amount;
        ITokenWallet(tokenWallet_).transfer{value: 0, bounce: true, flag: TokenMsgFlag.ALL_NOT_RESERVED}(
            amount,
            sender,
            0.1 ever,
            remainingGasTo,
            false,
            empty
        );
      }
    } else if (remainingGasTo.value != 0) {
      // Just fulfilment
      remainingGasTo.transfer(0, false, TokenMsgFlag.ALL_NOT_RESERVED);
    }
  }

  function withdraw(address to, uint128 amount) external onlyOwner {
    tvm.rawReserve(1 ever, 0);

    // Allow to withdraw amount > balance
    // Because someone can send tokens without notification.
    if (amount > balance_) {
      balance_ = 0;
    } else {
      balance_ -= amount;
    }

    TvmCell empty;

    ITokenWallet(tokenWallet_).transfer{value: 0, bounce: true, flag: TokenMsgFlag.ALL_NOT_RESERVED}(
      amount,
      to,
      0.1 ever,
      msg.sender,
      false,
      empty
    );
  }

  function maxBet() public view returns (uint128) {
    // view method to call off-chain to get max bet
    return balance_ / 6;
  }
}
