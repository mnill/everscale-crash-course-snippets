import {GetMsig2ForSigner} from "./utils";

async function main() : Promise<any> {
    // Get specified pubkey/private key from the config
    const signer = (await locklift.keystore.getSigner("0"))!;

    // There we check is we need to deploy TIP3ROOT/TOKENDICE contract owner msig2
    const msig2 = await GetMsig2ForSigner(signer, true, locklift.utils.toNano(20));
    console.log('Msig2 deployed at', msig2.address.toString())
}

main()
    .then(() => process.exit(0))
    .catch(e => {
        console.log(e);
        process.exit(1);
    });
