import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './QuoterV2.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    WETH9: new Func<[], {}, string>(
        abi, '0x4aa4a4fc'
    ),
    factory: new Func<[], {}, string>(
        abi, '0xc45a0155'
    ),
    quoteExactInput: new Func<[path: string, amountIn: bigint], {path: string, amountIn: bigint}, ([amountOut: bigint, sqrtPriceX96AfterList: Array<bigint>, initializedTicksCrossedList: Array<number>, gasEstimate: bigint] & {amountOut: bigint, sqrtPriceX96AfterList: Array<bigint>, initializedTicksCrossedList: Array<number>, gasEstimate: bigint})>(
        abi, '0xcdca1753'
    ),
    quoteExactInputSingle: new Func<[params: ([tokenIn: string, tokenOut: string, amountIn: bigint, fee: number, sqrtPriceLimitX96: bigint] & {tokenIn: string, tokenOut: string, amountIn: bigint, fee: number, sqrtPriceLimitX96: bigint})], {params: ([tokenIn: string, tokenOut: string, amountIn: bigint, fee: number, sqrtPriceLimitX96: bigint] & {tokenIn: string, tokenOut: string, amountIn: bigint, fee: number, sqrtPriceLimitX96: bigint})}, ([amountOut: bigint, sqrtPriceX96After: bigint, initializedTicksCrossed: number, gasEstimate: bigint] & {amountOut: bigint, sqrtPriceX96After: bigint, initializedTicksCrossed: number, gasEstimate: bigint})>(
        abi, '0xc6a5026a'
    ),
    quoteExactOutput: new Func<[path: string, amountOut: bigint], {path: string, amountOut: bigint}, ([amountIn: bigint, sqrtPriceX96AfterList: Array<bigint>, initializedTicksCrossedList: Array<number>, gasEstimate: bigint] & {amountIn: bigint, sqrtPriceX96AfterList: Array<bigint>, initializedTicksCrossedList: Array<number>, gasEstimate: bigint})>(
        abi, '0x2f80bb1d'
    ),
    quoteExactOutputSingle: new Func<[params: ([tokenIn: string, tokenOut: string, amount: bigint, fee: number, sqrtPriceLimitX96: bigint] & {tokenIn: string, tokenOut: string, amount: bigint, fee: number, sqrtPriceLimitX96: bigint})], {params: ([tokenIn: string, tokenOut: string, amount: bigint, fee: number, sqrtPriceLimitX96: bigint] & {tokenIn: string, tokenOut: string, amount: bigint, fee: number, sqrtPriceLimitX96: bigint})}, ([amountIn: bigint, sqrtPriceX96After: bigint, initializedTicksCrossed: number, gasEstimate: bigint] & {amountIn: bigint, sqrtPriceX96After: bigint, initializedTicksCrossed: number, gasEstimate: bigint})>(
        abi, '0xbd21704a'
    ),
    uniswapV3SwapCallback: new Func<[amount0Delta: bigint, amount1Delta: bigint, path: string], {amount0Delta: bigint, amount1Delta: bigint, path: string}, []>(
        abi, '0xfa461e33'
    ),
}

export class Contract extends ContractBase {

    WETH9(): Promise<string> {
        return this.eth_call(functions.WETH9, [])
    }

    factory(): Promise<string> {
        return this.eth_call(functions.factory, [])
    }
}
