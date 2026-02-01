import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './TickLens.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    getPopulatedTicksInWord: new Func<[pool: string, tickBitmapIndex: number], {pool: string, tickBitmapIndex: number}, Array<([tick: number, liquidityNet: bigint, liquidityGross: bigint] & {tick: number, liquidityNet: bigint, liquidityGross: bigint})>>(
        abi, '0x351fb478'
    ),
}

export class Contract extends ContractBase {

    getPopulatedTicksInWord(pool: string, tickBitmapIndex: number): Promise<Array<([tick: number, liquidityNet: bigint, liquidityGross: bigint] & {tick: number, liquidityNet: bigint, liquidityGross: bigint})>> {
        return this.eth_call(functions.getPopulatedTicksInWord, [pool, tickBitmapIndex])
    }
}
