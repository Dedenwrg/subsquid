import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './NonfungibleTokenPositionDescriptor.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    WETH9: new Func<[], {}, string>(
        abi, '0x4aa4a4fc'
    ),
    flipRatio: new Func<[token0: string, token1: string, chainId: bigint], {token0: string, token1: string, chainId: bigint}, boolean>(
        abi, '0x7e5af771'
    ),
    nativeCurrencyLabel: new Func<[], {}, string>(
        abi, '0xb7af3cdc'
    ),
    nativeCurrencyLabelBytes: new Func<[], {}, string>(
        abi, '0xa18246e2'
    ),
    tokenRatioPriority: new Func<[token: string, chainId: bigint], {token: string, chainId: bigint}, bigint>(
        abi, '0x9d7b0ea8'
    ),
    tokenURI: new Func<[positionManager: string, tokenId: bigint], {positionManager: string, tokenId: bigint}, string>(
        abi, '0xe9dc6375'
    ),
}

export class Contract extends ContractBase {

    WETH9(): Promise<string> {
        return this.eth_call(functions.WETH9, [])
    }

    flipRatio(token0: string, token1: string, chainId: bigint): Promise<boolean> {
        return this.eth_call(functions.flipRatio, [token0, token1, chainId])
    }

    nativeCurrencyLabel(): Promise<string> {
        return this.eth_call(functions.nativeCurrencyLabel, [])
    }

    nativeCurrencyLabelBytes(): Promise<string> {
        return this.eth_call(functions.nativeCurrencyLabelBytes, [])
    }

    tokenRatioPriority(token: string, chainId: bigint): Promise<bigint> {
        return this.eth_call(functions.tokenRatioPriority, [token, chainId])
    }

    tokenURI(positionManager: string, tokenId: bigint): Promise<string> {
        return this.eth_call(functions.tokenURI, [positionManager, tokenId])
    }
}
