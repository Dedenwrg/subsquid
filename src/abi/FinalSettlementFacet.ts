import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './FinalSettlementFacet.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    FSPFinalized: new LogEvent<([productID: string, fsp: bigint] & {productID: string, fsp: bigint})>(
        abi, '0x35e4ce4a980806056b2264c17e6edc87317ca0800953e78aa1d81a62df0f504a'
    ),
    FeeCollected: new LogEvent<([marginAccountId: string, collateralAsset: string, capitalAmount: bigint, id: bigint] & {marginAccountId: string, collateralAsset: string, capitalAmount: bigint, id: bigint})>(
        abi, '0x9a78528c7e61bbd7e32c547f496dc925afc48d67e82feae4290fca0872b1118b'
    ),
    FeeDispersed: new LogEvent<([recipient: string, collateralAsset: string, capitalAmount: bigint, id: bigint] & {recipient: string, collateralAsset: string, capitalAmount: bigint, id: bigint})>(
        abi, '0xaa19b3bcab5536c020262233282338fa4bc46542113bebb1c0c0986a0502fb59'
    ),
    FinalSettlementCloseout: new LogEvent<([productID: string, accountLength: bigint, closedBy: string] & {productID: string, accountLength: bigint, closedBy: string})>(
        abi, '0xa324297bf52afc6cf144742a0ae133f305a59974633f525ba2399bbad23a6d89'
    ),
    PositionUpdated: new LogEvent<([marginAccountId: string, productId: string, costBasis: bigint, price: bigint, quantity: bigint, id: bigint] & {marginAccountId: string, productId: string, costBasis: bigint, price: bigint, quantity: bigint, id: bigint})>(
        abi, '0x2e42c68f8aeee13f156d7ada14211e5ed23c0d9968ac85f1dbd7008c04bc588e'
    ),
}

export const functions = {
    FINAL_SETTLEMENT_ID: new Func<[], {}, bigint>(
        abi, '0x154f8c53'
    ),
    finalizeFsp: new Func<[productID: string], {productID: string}, bigint>(
        abi, '0x899827cc'
    ),
    getFsp: new Func<[productId: string], {productId: string}, ([fsp: bigint, finalized: boolean] & {fsp: bigint, finalized: boolean})>(
        abi, '0x8097cb5a'
    ),
    getFspFinalizationTime: new Func<[productId: string], {productId: string}, bigint>(
        abi, '0x0567e905'
    ),
    initiateFinalSettlement: new Func<[productID: string, accounts: Array<string>], {productID: string, accounts: Array<string>}, []>(
        abi, '0x75c2db48'
    ),
    openInterest: new Func<[productId: string], {productId: string}, bigint>(
        abi, '0x31d860bc'
    ),
}

export class Contract extends ContractBase {

    FINAL_SETTLEMENT_ID(): Promise<bigint> {
        return this.eth_call(functions.FINAL_SETTLEMENT_ID, [])
    }

    getFsp(productId: string): Promise<([fsp: bigint, finalized: boolean] & {fsp: bigint, finalized: boolean})> {
        return this.eth_call(functions.getFsp, [productId])
    }

    getFspFinalizationTime(productId: string): Promise<bigint> {
        return this.eth_call(functions.getFspFinalizationTime, [productId])
    }

    openInterest(productId: string): Promise<bigint> {
        return this.eth_call(functions.openInterest, [productId])
    }
}
