import {Address} from "locklift";
import {checkIsContractDeployed, GetMsig2ForSigner} from "./utils";

async function main() {
    const signer = (await locklift.keystore.getSigner("0"))!;

    // Get Msig for Owner, must be already deployed,
    const ownerMsig = await GetMsig2ForSigner(signer, false, '0');
    const mintTo = ownerMsig.address;

    // Put there address of the token root the previous script.
    const tokenRootAddress = '0:ee0eafb66766d3fa04fd3746d5802acf8de6c427a6222ae328a95915aef98517';

    await checkIsContractDeployed(new Address(tokenRootAddress), 'TokenRootUpgradeable')
    const TokenRoot = locklift.factory.getDeployedContract('TokenRootUpgradeable', new Address(tokenRootAddress));

    // Our internal message which one we will send from our msig2
    const mintTokensPayload = await TokenRoot.methods.mint({
        amount: 10_000_000_000, //10 tokens * 9 decimals
        recipient: mintTo,
        deployWalletValue: locklift.utils.toNano(0.1), // 0.1 ever
        remainingGasTo: ownerMsig.address,
        notify: false,
        payload: "",
    }).encodeInternal();

    // Call the method from msig
    const tracing = await locklift.tracing.trace(ownerMsig.methods
        .sendTransaction({
            dest: TokenRoot.address,
            value: locklift.utils.toNano(1), // 1 ever
            bounce: true,
            flags: 0,
            payload: mintTokensPayload,
        })
        .sendExternal({
            publicKey: signer.publicKey,
        }));


    const tokenWalletAddress = (await TokenRoot.methods.walletOf({answerId: 0, walletOwner: mintTo}).call()).value0;
    const TokenWallet = locklift.factory.getDeployedContract('TokenWalletUpgradeable', tokenWalletAddress);

    const {value0: tokenWalletBalance} = await TokenWallet.methods.balance({ answerId: 0 }).call();
    const { value0: totalSupply } = await TokenRoot.methods.totalSupply({ answerId: 0 }).call();

    console.log(`Tokens minted to ${mintTo.toString()}, wallet balance is ${tokenWalletBalance}, total supply is ${totalSupply}`);
}

main()
    .then(() => process.exit(0))
    .catch(e => {
        console.log(e);
        process.exit(1);
    });
