import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './ClearingFacet.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    FeeCollected: new LogEvent<([marginAccountId: string, collateralAsset: string, capitalAmount: bigint, id: bigint] & {marginAccountId: string, collateralAsset: string, capitalAmount: bigint, id: bigint})>(
        abi, '0x9a78528c7e61bbd7e32c547f496dc925afc48d67e82feae4290fca0872b1118b'
    ),
    FeeDispersed: new LogEvent<([recipient: string, collateralAsset: string, capitalAmount: bigint, id: bigint] & {recipient: string, collateralAsset: string, capitalAmount: bigint, id: bigint})>(
        abi, '0xaa19b3bcab5536c020262233282338fa4bc46542113bebb1c0c0986a0502fb59'
    ),
    PositionUpdated: new LogEvent<([marginAccountId: string, productId: string, costBasis: bigint, price: bigint, quantity: bigint, id: bigint] & {marginAccountId: string, productId: string, costBasis: bigint, price: bigint, quantity: bigint, id: bigint})>(
        abi, '0x2e42c68f8aeee13f156d7ada14211e5ed23c0d9968ac85f1dbd7008c04bc588e'
    ),
    TradeExecuted: new LogEvent<([productId: string, protocolId: string, id: bigint, price: bigint, quantity: bigint] & {productId: string, protocolId: string, id: bigint, price: bigint, quantity: bigint})>(
        abi, '0x1822a54e61cd363465586a9a0595588cb1467be1d92ba059aec684e3f59420a3'
    ),
}

export const functions = {
    estimateFees: new Func<[productID: string, price: bigint, quantity: bigint, tradingFeeRate: bigint], {productID: string, price: bigint, quantity: bigint, tradingFeeRate: bigint}, [_: bigint, _: bigint]>(
        abi, '0x4e507502'
    ),
    execute: new Func<[trade: ([productId: string, protocolId: string, tradeId: bigint, price: bigint, timestamp: bigint, quantity: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<number>, intents: Array<([marginAccountId: string, intentAccountId: string, hash: string, data: ([nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string] & {nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string}), signature: string] & {marginAccountId: string, intentAccountId: string, hash: string, data: ([nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string] & {nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string}), signature: string})>] & {productId: string, protocolId: string, tradeId: bigint, price: bigint, timestamp: bigint, quantity: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<number>, intents: Array<([marginAccountId: string, intentAccountId: string, hash: string, data: ([nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string] & {nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string}), signature: string] & {marginAccountId: string, intentAccountId: string, hash: string, data: ([nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string] & {nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string}), signature: string})>}), fallbackOnFailure: boolean], {trade: ([productId: string, protocolId: string, tradeId: bigint, price: bigint, timestamp: bigint, quantity: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<number>, intents: Array<([marginAccountId: string, intentAccountId: string, hash: string, data: ([nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string] & {nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string}), signature: string] & {marginAccountId: string, intentAccountId: string, hash: string, data: ([nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string] & {nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string}), signature: string})>] & {productId: string, protocolId: string, tradeId: bigint, price: bigint, timestamp: bigint, quantity: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<number>, intents: Array<([marginAccountId: string, intentAccountId: string, hash: string, data: ([nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string] & {nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string}), signature: string] & {marginAccountId: string, intentAccountId: string, hash: string, data: ([nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string] & {nonce: bigint, tradingProtocolId: string, productId: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: number, goodUntil: bigint, side: number, referral: string}), signature: string})>}), fallbackOnFailure: boolean}, []>(
        abi, '0xb41cfe4d'
    ),
}

export class Contract extends ContractBase {

    estimateFees(productID: string, price: bigint, quantity: bigint, tradingFeeRate: bigint): Promise<[_: bigint, _: bigint]> {
        return this.eth_call(functions.estimateFees, [productID, price, quantity, tradingFeeRate])
    }
}
