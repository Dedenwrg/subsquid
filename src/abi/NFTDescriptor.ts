import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './NFTDescriptor.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    constructTokenURI: new Func<[params: ([tokenId: bigint, quoteTokenAddress: string, baseTokenAddress: string, quoteTokenSymbol: string, baseTokenSymbol: string, quoteTokenDecimals: number, baseTokenDecimals: number, flipRatio: boolean, tickLower: number, tickUpper: number, tickCurrent: number, tickSpacing: number, fee: number, poolAddress: string] & {tokenId: bigint, quoteTokenAddress: string, baseTokenAddress: string, quoteTokenSymbol: string, baseTokenSymbol: string, quoteTokenDecimals: number, baseTokenDecimals: number, flipRatio: boolean, tickLower: number, tickUpper: number, tickCurrent: number, tickSpacing: number, fee: number, poolAddress: string})], {params: ([tokenId: bigint, quoteTokenAddress: string, baseTokenAddress: string, quoteTokenSymbol: string, baseTokenSymbol: string, quoteTokenDecimals: number, baseTokenDecimals: number, flipRatio: boolean, tickLower: number, tickUpper: number, tickCurrent: number, tickSpacing: number, fee: number, poolAddress: string] & {tokenId: bigint, quoteTokenAddress: string, baseTokenAddress: string, quoteTokenSymbol: string, baseTokenSymbol: string, quoteTokenDecimals: number, baseTokenDecimals: number, flipRatio: boolean, tickLower: number, tickUpper: number, tickCurrent: number, tickSpacing: number, fee: number, poolAddress: string})}, string>(
        abi, '0xf93a7911'
    ),
}

export class Contract extends ContractBase {

    constructTokenURI(params: ([tokenId: bigint, quoteTokenAddress: string, baseTokenAddress: string, quoteTokenSymbol: string, baseTokenSymbol: string, quoteTokenDecimals: number, baseTokenDecimals: number, flipRatio: boolean, tickLower: number, tickUpper: number, tickCurrent: number, tickSpacing: number, fee: number, poolAddress: string] & {tokenId: bigint, quoteTokenAddress: string, baseTokenAddress: string, quoteTokenSymbol: string, baseTokenSymbol: string, quoteTokenDecimals: number, baseTokenDecimals: number, flipRatio: boolean, tickLower: number, tickUpper: number, tickCurrent: number, tickSpacing: number, fee: number, poolAddress: string})): Promise<string> {
        return this.eth_call(functions.constructTokenURI, [params])
    }
}
