import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './V3Migrator.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    WETH9: new Func<[], {}, string>(
        abi, '0x4aa4a4fc'
    ),
    createAndInitializePoolIfNecessary: new Func<[token0: string, token1: string, fee: number, sqrtPriceX96: bigint], {token0: string, token1: string, fee: number, sqrtPriceX96: bigint}, string>(
        abi, '0x13ead562'
    ),
    factory: new Func<[], {}, string>(
        abi, '0xc45a0155'
    ),
    migrate: new Func<[params: ([pair: string, liquidityToMigrate: bigint, percentageToMigrate: number, token0: string, token1: string, fee: number, tickLower: number, tickUpper: number, amount0Min: bigint, amount1Min: bigint, recipient: string, deadline: bigint, refundAsETH: boolean] & {pair: string, liquidityToMigrate: bigint, percentageToMigrate: number, token0: string, token1: string, fee: number, tickLower: number, tickUpper: number, amount0Min: bigint, amount1Min: bigint, recipient: string, deadline: bigint, refundAsETH: boolean})], {params: ([pair: string, liquidityToMigrate: bigint, percentageToMigrate: number, token0: string, token1: string, fee: number, tickLower: number, tickUpper: number, amount0Min: bigint, amount1Min: bigint, recipient: string, deadline: bigint, refundAsETH: boolean] & {pair: string, liquidityToMigrate: bigint, percentageToMigrate: number, token0: string, token1: string, fee: number, tickLower: number, tickUpper: number, amount0Min: bigint, amount1Min: bigint, recipient: string, deadline: bigint, refundAsETH: boolean})}, []>(
        abi, '0xd44f2bf2'
    ),
    multicall: new Func<[data: Array<string>], {data: Array<string>}, Array<string>>(
        abi, '0xac9650d8'
    ),
    nonfungiblePositionManager: new Func<[], {}, string>(
        abi, '0xb44a2722'
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
}

export class Contract extends ContractBase {

    WETH9(): Promise<string> {
        return this.eth_call(functions.WETH9, [])
    }

    factory(): Promise<string> {
        return this.eth_call(functions.factory, [])
    }

    nonfungiblePositionManager(): Promise<string> {
        return this.eth_call(functions.nonfungiblePositionManager, [])
    }
}
