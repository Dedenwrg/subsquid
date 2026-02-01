import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './SwapRouter02.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    WETH9: new Func<[], {}, string>(
        abi, '0x4aa4a4fc'
    ),
    approveMax: new Func<[token: string], {token: string}, []>(
        abi, '0x571ac8b0'
    ),
    approveMaxMinusOne: new Func<[token: string], {token: string}, []>(
        abi, '0xcab372ce'
    ),
    approveZeroThenMax: new Func<[token: string], {token: string}, []>(
        abi, '0x639d71a9'
    ),
    approveZeroThenMaxMinusOne: new Func<[token: string], {token: string}, []>(
        abi, '0xab3fdd50'
    ),
    callPositionManager: new Func<[data: string], {data: string}, string>(
        abi, '0xb3a2af13'
    ),
    'checkOracleSlippage(bytes[],uint128[],uint24,uint32)': new Func<[paths: Array<string>, amounts: Array<bigint>, maximumTickDivergence: number, secondsAgo: number], {paths: Array<string>, amounts: Array<bigint>, maximumTickDivergence: number, secondsAgo: number}, []>(
        abi, '0xefdeed8e'
    ),
    'checkOracleSlippage(bytes,uint24,uint32)': new Func<[path: string, maximumTickDivergence: number, secondsAgo: number], {path: string, maximumTickDivergence: number, secondsAgo: number}, []>(
        abi, '0xf25801a7'
    ),
    exactInput: new Func<[params: ([path: string, recipient: string, amountIn: bigint, amountOutMinimum: bigint] & {path: string, recipient: string, amountIn: bigint, amountOutMinimum: bigint})], {params: ([path: string, recipient: string, amountIn: bigint, amountOutMinimum: bigint] & {path: string, recipient: string, amountIn: bigint, amountOutMinimum: bigint})}, bigint>(
        abi, '0xb858183f'
    ),
    exactInputSingle: new Func<[params: ([tokenIn: string, tokenOut: string, fee: number, recipient: string, amountIn: bigint, amountOutMinimum: bigint, sqrtPriceLimitX96: bigint] & {tokenIn: string, tokenOut: string, fee: number, recipient: string, amountIn: bigint, amountOutMinimum: bigint, sqrtPriceLimitX96: bigint})], {params: ([tokenIn: string, tokenOut: string, fee: number, recipient: string, amountIn: bigint, amountOutMinimum: bigint, sqrtPriceLimitX96: bigint] & {tokenIn: string, tokenOut: string, fee: number, recipient: string, amountIn: bigint, amountOutMinimum: bigint, sqrtPriceLimitX96: bigint})}, bigint>(
        abi, '0x04e45aaf'
    ),
    exactOutput: new Func<[params: ([path: string, recipient: string, amountOut: bigint, amountInMaximum: bigint] & {path: string, recipient: string, amountOut: bigint, amountInMaximum: bigint})], {params: ([path: string, recipient: string, amountOut: bigint, amountInMaximum: bigint] & {path: string, recipient: string, amountOut: bigint, amountInMaximum: bigint})}, bigint>(
        abi, '0x09b81346'
    ),
    exactOutputSingle: new Func<[params: ([tokenIn: string, tokenOut: string, fee: number, recipient: string, amountOut: bigint, amountInMaximum: bigint, sqrtPriceLimitX96: bigint] & {tokenIn: string, tokenOut: string, fee: number, recipient: string, amountOut: bigint, amountInMaximum: bigint, sqrtPriceLimitX96: bigint})], {params: ([tokenIn: string, tokenOut: string, fee: number, recipient: string, amountOut: bigint, amountInMaximum: bigint, sqrtPriceLimitX96: bigint] & {tokenIn: string, tokenOut: string, fee: number, recipient: string, amountOut: bigint, amountInMaximum: bigint, sqrtPriceLimitX96: bigint})}, bigint>(
        abi, '0x5023b4df'
    ),
    factory: new Func<[], {}, string>(
        abi, '0xc45a0155'
    ),
    factoryV2: new Func<[], {}, string>(
        abi, '0x68e0d4e1'
    ),
    getApprovalType: new Func<[token: string, amount: bigint], {token: string, amount: bigint}, number>(
        abi, '0xdee00f35'
    ),
    increaseLiquidity: new Func<[params: ([token0: string, token1: string, tokenId: bigint, amount0Min: bigint, amount1Min: bigint] & {token0: string, token1: string, tokenId: bigint, amount0Min: bigint, amount1Min: bigint})], {params: ([token0: string, token1: string, tokenId: bigint, amount0Min: bigint, amount1Min: bigint] & {token0: string, token1: string, tokenId: bigint, amount0Min: bigint, amount1Min: bigint})}, string>(
        abi, '0xf100b205'
    ),
    mint: new Func<[params: ([token0: string, token1: string, fee: number, tickLower: number, tickUpper: number, amount0Min: bigint, amount1Min: bigint, recipient: string] & {token0: string, token1: string, fee: number, tickLower: number, tickUpper: number, amount0Min: bigint, amount1Min: bigint, recipient: string})], {params: ([token0: string, token1: string, fee: number, tickLower: number, tickUpper: number, amount0Min: bigint, amount1Min: bigint, recipient: string] & {token0: string, token1: string, fee: number, tickLower: number, tickUpper: number, amount0Min: bigint, amount1Min: bigint, recipient: string})}, string>(
        abi, '0x11ed56c9'
    ),
    'multicall(bytes32,bytes[])': new Func<[previousBlockhash: string, data: Array<string>], {previousBlockhash: string, data: Array<string>}, Array<string>>(
        abi, '0x1f0464d1'
    ),
    'multicall(uint256,bytes[])': new Func<[deadline: bigint, data: Array<string>], {deadline: bigint, data: Array<string>}, Array<string>>(
        abi, '0x5ae401dc'
    ),
    'multicall(bytes[])': new Func<[data: Array<string>], {data: Array<string>}, Array<string>>(
        abi, '0xac9650d8'
    ),
    positionManager: new Func<[], {}, string>(
        abi, '0x791b98bc'
    ),
    pull: new Func<[token: string, value: bigint], {token: string, value: bigint}, []>(
        abi, '0xf2d5d56b'
    ),
    refundETH: new Func<[], {}, []>(
        abi, '0x12210e8a'
    ),
    selfPermit: new Func<[token: string, value: bigint, deadline: bigint, v: number, r: string, s: string], {token: string, value: bigint, deadline: bigint, v: number, r: string, s: string}, []>(
        abi, '0xf3995c67'
    ),
    selfPermitAllowed: new Func<[token: string, nonce: bigint, expiry: bigint, v: number, r: string, s: string], {token: string, nonce: bigint, expiry: bigint, v: number, r: string, s: string}, []>(
        abi, '0x4659a494'
    ),
    selfPermitAllowedIfNecessary: new Func<[token: string, nonce: bigint, expiry: bigint, v: number, r: string, s: string], {token: string, nonce: bigint, expiry: bigint, v: number, r: string, s: string}, []>(
        abi, '0xa4a78f0c'
    ),
    selfPermitIfNecessary: new Func<[token: string, value: bigint, deadline: bigint, v: number, r: string, s: string], {token: string, value: bigint, deadline: bigint, v: number, r: string, s: string}, []>(
        abi, '0xc2e3140a'
    ),
    swapExactTokensForTokens: new Func<[amountIn: bigint, amountOutMin: bigint, path: Array<string>, to: string], {amountIn: bigint, amountOutMin: bigint, path: Array<string>, to: string}, bigint>(
        abi, '0x472b43f3'
    ),
    swapTokensForExactTokens: new Func<[amountOut: bigint, amountInMax: bigint, path: Array<string>, to: string], {amountOut: bigint, amountInMax: bigint, path: Array<string>, to: string}, bigint>(
        abi, '0x42712a67'
    ),
    'sweepToken(address,uint256,address)': new Func<[token: string, amountMinimum: bigint, recipient: string], {token: string, amountMinimum: bigint, recipient: string}, []>(
        abi, '0xdf2ab5bb'
    ),
    'sweepToken(address,uint256)': new Func<[token: string, amountMinimum: bigint], {token: string, amountMinimum: bigint}, []>(
        abi, '0xe90a182f'
    ),
    'sweepTokenWithFee(address,uint256,uint256,address)': new Func<[token: string, amountMinimum: bigint, feeBips: bigint, feeRecipient: string], {token: string, amountMinimum: bigint, feeBips: bigint, feeRecipient: string}, []>(
        abi, '0x3068c554'
    ),
    'sweepTokenWithFee(address,uint256,address,uint256,address)': new Func<[token: string, amountMinimum: bigint, recipient: string, feeBips: bigint, feeRecipient: string], {token: string, amountMinimum: bigint, recipient: string, feeBips: bigint, feeRecipient: string}, []>(
        abi, '0xe0e189a0'
    ),
    uniswapV3SwapCallback: new Func<[amount0Delta: bigint, amount1Delta: bigint, _data: string], {amount0Delta: bigint, amount1Delta: bigint, _data: string}, []>(
        abi, '0xfa461e33'
    ),
    'unwrapWETH9(uint256,address)': new Func<[amountMinimum: bigint, recipient: string], {amountMinimum: bigint, recipient: string}, []>(
        abi, '0x49404b7c'
    ),
    'unwrapWETH9(uint256)': new Func<[amountMinimum: bigint], {amountMinimum: bigint}, []>(
        abi, '0x49616997'
    ),
    'unwrapWETH9WithFee(uint256,address,uint256,address)': new Func<[amountMinimum: bigint, recipient: string, feeBips: bigint, feeRecipient: string], {amountMinimum: bigint, recipient: string, feeBips: bigint, feeRecipient: string}, []>(
        abi, '0x9b2c0a37'
    ),
    'unwrapWETH9WithFee(uint256,uint256,address)': new Func<[amountMinimum: bigint, feeBips: bigint, feeRecipient: string], {amountMinimum: bigint, feeBips: bigint, feeRecipient: string}, []>(
        abi, '0xd4ef38de'
    ),
    wrapETH: new Func<[value: bigint], {value: bigint}, []>(
        abi, '0x1c58db4f'
    ),
}

export class Contract extends ContractBase {

    WETH9(): Promise<string> {
        return this.eth_call(functions.WETH9, [])
    }

    factory(): Promise<string> {
        return this.eth_call(functions.factory, [])
    }

    factoryV2(): Promise<string> {
        return this.eth_call(functions.factoryV2, [])
    }

    positionManager(): Promise<string> {
        return this.eth_call(functions.positionManager, [])
    }
}
