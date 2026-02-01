import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './MarginAccountRegistryFacet.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    getMarginAccount: new Func<[collateralToken: string], {collateralToken: string}, string>(
        abi, '0x002bc164'
    ),
    isInitialized: new Func<[collateralToken: string], {collateralToken: string}, boolean>(
        abi, '0xd60b347f'
    ),
    registerMarginAccount: new Func<[collateralToken: string, marginAccount: string], {collateralToken: string, marginAccount: string}, string>(
        abi, '0xae86d324'
    ),
}

export class Contract extends ContractBase {

    getMarginAccount(collateralToken: string): Promise<string> {
        return this.eth_call(functions.getMarginAccount, [collateralToken])
    }

    isInitialized(collateralToken: string): Promise<boolean> {
        return this.eth_call(functions.isInitialized, [collateralToken])
    }
}
