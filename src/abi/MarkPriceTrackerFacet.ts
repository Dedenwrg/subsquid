import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './MarkPriceTrackerFacet.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    valuation: new Func<[productId: string], {productId: string}, bigint>(
        abi, '0x5c4902e6'
    ),
    valuationAfterTrade: new Func<[productId: string, price: bigint, quantity: bigint], {productId: string, price: bigint, quantity: bigint}, bigint>(
        abi, '0x68b89fc0'
    ),
}

export class Contract extends ContractBase {

    valuation(productId: string): Promise<bigint> {
        return this.eth_call(functions.valuation, [productId])
    }

    valuationAfterTrade(productId: string, price: bigint, quantity: bigint): Promise<bigint> {
        return this.eth_call(functions.valuationAfterTrade, [productId, price, quantity])
    }
}
