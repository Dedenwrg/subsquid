import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './UniswapInterfaceMulticall.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    getCurrentBlockTimestamp: new Func<[], {}, bigint>(
        abi, '0x0f28c97d'
    ),
    getEthBalance: new Func<[addr: string], {addr: string}, bigint>(
        abi, '0x4d2301cc'
    ),
    multicall: new Func<[calls: Array<([target: string, gasLimit: bigint, callData: string] & {target: string, gasLimit: bigint, callData: string})>], {calls: Array<([target: string, gasLimit: bigint, callData: string] & {target: string, gasLimit: bigint, callData: string})>}, ([blockNumber: bigint, returnData: Array<([success: boolean, gasUsed: bigint, returnData: string] & {success: boolean, gasUsed: bigint, returnData: string})>] & {blockNumber: bigint, returnData: Array<([success: boolean, gasUsed: bigint, returnData: string] & {success: boolean, gasUsed: bigint, returnData: string})>})>(
        abi, '0x1749e1e3'
    ),
}

export class Contract extends ContractBase {

    getCurrentBlockTimestamp(): Promise<bigint> {
        return this.eth_call(functions.getCurrentBlockTimestamp, [])
    }

    getEthBalance(addr: string): Promise<bigint> {
        return this.eth_call(functions.getEthBalance, [addr])
    }
}
