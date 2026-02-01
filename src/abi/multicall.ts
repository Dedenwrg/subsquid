import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Multicall.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    multicall: new Func<[calls: Array<([target: string, allowFailure: boolean, callData: string] & {target: string, allowFailure: boolean, callData: string})>], {calls: Array<([target: string, allowFailure: boolean, callData: string] & {target: string, allowFailure: boolean, callData: string})>}, Array<([success: boolean, returnData: string] & {success: boolean, returnData: string})>>(
        abi, '0xe8bbf5d7'
    ),
}

export class Contract extends ContractBase {

    multicall(calls: Array<([target: string, allowFailure: boolean, callData: string] & {target: string, allowFailure: boolean, callData: string})>): Promise<Array<([success: boolean, returnData: string] & {success: boolean, returnData: string})>> {
        return this.eth_call(functions.multicall, [calls])
    }
}
