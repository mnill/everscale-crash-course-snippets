pragma ever-solidity >= 0.64.0;

library Errors {
    uint16 constant NON_ZERO_PUBLIC_KEY                             = 1000;
    uint16 constant NOT_OWNER                                       = 1001;
    uint16 constant BET_VALUE_TOO_SMALL                             = 1002;
    uint16 constant INSUFFICIENT_BALANCE                            = 1003;
}

contract Dice {

    address static owner;

    event Win(address winner, uint128 amount);

    constructor() public {
        // Contract pub key is NOT set
        require(tvm.pubkey() == 0, Errors.NON_ZERO_PUBLIC_KEY);

        // Constructor called by the owner
        require(msg.sender == owner, Errors.NOT_OWNER);
        tvm.accept();
    }

    modifier checkOwnerAndAccept {
        require(msg.sender == owner, Errors.NOT_OWNER);
        tvm.accept();
        _;
    }

    function roll(uint8 _bet_dice_value) external {
        // check incoming message has at least 0.5 EVERs.
        require(msg.value >= 0.5 ever, Errors.BET_VALUE_TOO_SMALL);

        // check that our contract has enough balance to payout. address(this).balance already includes msg.value.
        require(address(this).balance >= msg.value * 6, Errors.INSUFFICIENT_BALANCE);

        // shuffle rnd
        rnd.shuffle();

        // get random result
        uint8 dice_result_ = rnd.next(6);  // 0..5

        // if player won
        if (_bet_dice_value == dice_result_) {

            // tvm.rawReserve - it is like to send amount of EVERs to your self
            // there we first send to our self (address(this).balance - msg.value * 6)
            tvm.rawReserve(address(this).balance - msg.value * 6, 2);

            // Send an external message from the contract to no where. It is a log message to easily catch all wins off-chain
            emit Win(msg.sender, msg.value * 6);

            // Then we send all LEFT amount of value to the player. Read below why so.
            msg.sender.transfer({value: 0, flag: 128, bounce: false});

            // In ethereum we have separate entities - a balance of the smart contract and the user account balance
            // which one has started current transaction and transaction fees are paid from the account balance.

            // In our async system, we have another logic - We have a balance of the smart contract and the value in the
            // incoming message. The value of the incoming message are added to the smart contract balance before
            // the computation starts, but we can check it in the msg.value variable.

            // If the smart contract does not call tvm.accept() method before the gas usage will exceed the msg.value
            // the transaction will be aborted. But tvm.accept() is not necessary to successfully the finishing of the
            // transaction started by the internal message if the message has enough value to pay the gas.

            // One more confusing moment for the beginners - it doesn't matter how much msg.value has the internal
            // message the transaction can send any amount of EVERs to another account with the messages even if you
            // do not call tvm.accept(). Without tvm.accept() transactions can not use more gas than they have in the
            // msg.value but they can send any amount of EVERs so you must control this by yourself. We will talk about
            // this in the "Carefully working with the value" page of this chapter.

            // So we have the incoming message with > 0.5 EVERs and if the player wins we just reserve
            // address(this).balance - msg.value * 6 ever on this smart contract and send all the left value
            // after paying the gas fee of the transaction back to the winner. So we will send back to the winner
            // (msg.value * 6 minus all the gas fees). Pretty straightforward in my opinion.
        }
    }

    function cashOut(address to, uint128 value) external checkOwnerAndAccept {
        require(to.value != 0);
        to.transfer({
            value: value,
            flag: 0,
            bounce: false
        });
    }

    function maxBet() public view returns (uint128) {
        if (address(this).balance < 0.5 ever * 6)
            return 0;
        return address(this).balance / 6;
    }
}