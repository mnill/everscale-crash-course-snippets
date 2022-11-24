import {Address} from "locklift";
import {checkIsContractDeployed, GetMsig2ForSigner} from "./utils";

async function main() {
    const signer = (await locklift.keystore.getSigner("0"))!;

    // Get Msig for Owner, must be already deployed,
    const ownerMsig = await GetMsig2ForSigner(signer, false, '0');

    // Put there address of the token root the previous script.
    const tokenRootAddress = '0:ee0eafb66766d3fa04fd3746d5802acf8de6c427a6222ae328a95915aef98517';
    await checkIsContractDeployed(new Address(tokenRootAddress), 'TokenRoot')

    // We will deploy TokenDice.sol by the internal message from our msig2.
    const TokenDice = locklift.factory.getContractArtifacts("TokenDice");

    // Calculate the state init for tvc and initial params.
    // StateInit - code + static variables, to deploy the contract
    // Also this function return address of the future contract
    // Because address it is a hash(stateInit)
    const {address: diceContractAddress, stateInit: stateInit} = await locklift.provider.getStateInit(TokenDice.abi, {
        workchain: 0,
        tvc: TokenDice.tvc,
        initParams: {
            tokenRoot_: new Address(tokenRootAddress),
            owner_: ownerMsig.address
        }
    })


    // Encode constructor function call
    const payload = await (new locklift.provider.Contract(TokenDice.abi, diceContractAddress)).methods
        .constructor({}).encodeInternal();

    // Check is tokenDice contract already deployed
    const tokenDiceAccountState = (await locklift.provider.getFullContractState({
        address: diceContractAddress
    })).state;

    if (tokenDiceAccountState !== undefined && tokenDiceAccountState.isDeployed) {
        throw new Error(`TokenDice contract already deployed at ${diceContractAddress.toString()}`);
    }

    // Call submitTransaction method of msig2
    // by external message with arguments
    // Tracing is just parsing all messages in transaction tree
    // and throwing error if any of children transactions fails.
    // You can specify valid error codes for every tracing,
    // just follow locklift documentation
    const tracing = await locklift.tracing.trace(ownerMsig.methods
        .submitTransaction({
            dest: diceContractAddress,
            value: locklift.utils.toNano(3), // 3 evers
            bounce: true,
            allBalance: false,
            payload: payload,
            stateInit: stateInit
        })
        .sendExternal({
            // We specify pubkey
            // Locklift will look into keystore to try to find secret key
            // for this pubkey
            publicKey: signer.publicKey,
        }));

    await checkIsContractDeployed(diceContractAddress, 'TokenDice')
    console.log(`Token dice deployed at: ${diceContractAddress.toString()}`);
}

main()
    .then(() => process.exit(0))
    .catch(e => {
        console.log(e);
        process.exit(1);
    });
