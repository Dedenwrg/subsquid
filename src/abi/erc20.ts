import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './erc20.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    totalSupply: new Func<[], {}, bigint>(
        abi, '0x18160ddd'
    ),
    transfer: new Func<[_to: string, _value: bigint], {_to: string, _value: bigint}, boolean>(
        abi, '0xa9059cbb'
    ),
    approve: new Func<[_spender: string, _value: bigint], {_spender: string, _value: bigint}, boolean>(
        abi, '0x095ea7b3'
    ),
    transferFrom: new Func<[_from: string, _to: string, _value: bigint], {_from: string, _to: string, _value: bigint}, boolean>(
        abi, '0x23b872dd'
    ),
}

export class Contract extends ContractBase {

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    totalSupply(): Promise<bigint> {
        return this.eth_call(functions.totalSupply, [])
    }
}
