import {Address, Contract, Signer} from "locklift";
import {FactorySource} from "../build/factorySource";
import BigNumber from "bignumber.js";

export async function GetMsig2ForSigner(signer: Signer, deploy: boolean, deployNanoE?: string) : Promise<Contract<FactorySource["SetcodeMultisig"]>>  {
    // Get artifacts of built contract
    const {
        code,
        tvc,
        abi,
        codeHash,
    } = await locklift.factory.getContractArtifacts('SetcodeMultisig');

    // Our contract has no static variables (except hidden - pubkey)
    const initParams = {}

    // Calculate the address
    const address = await locklift.provider.getExpectedAddress(abi, {
        tvc: tvc,
        workchain: 0,
        publicKey: signer.publicKey,
        initParams: initParams
    })

    // Get current contract state
    const account_state = (await locklift.provider.getFullContractState({
        address
    })).state;

    if (account_state === undefined || !account_state.isDeployed) {
        if (!deploy) {
            throw new Error(`Msig2 not deployed for pubkey ${signer.publicKey}`);
        }
        // Deploy msig2 by external message.
        // Locklift will send deployNanoE evers from the
        // giver first
        const {contract} = await locklift.factory.deployContract({
            contract: 'SetcodeMultisig',
            publicKey: signer.publicKey,
            initParams: initParams,
            constructorParams: {
                owners: [`0x${signer.publicKey}`],
                reqConfirms: 1,
                lifetime: 3600
            },
            value: deployNanoE!
        })
        return contract;
    } else {
        // Contract is already deployed
        if ((new BigNumber(account_state.balance)).lt(locklift.utils.toNano(2))) {
            console.log(`Warning! msig2 ${address.toString()} has a low balance!`);
        }
        return locklift.factory.getDeployedContract('SetcodeMultisig', address);
    }
}

export async function checkIsContractDeployed(address: Address, contract_name: string) {
    const account_state = (await locklift.provider.getFullContractState({
        address: address
    })).state;

    if (account_state === undefined || !account_state.isDeployed) {
        throw new Error(`Specified ${contract_name} is not deployed. Please set address to the actual`);
    }
}

export const isValidEverAddress = (address: string) => /^(?:-1|0):[0-9a-fA-F]{64}$/.test(address);
