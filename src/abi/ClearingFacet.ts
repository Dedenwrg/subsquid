import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './ClearingFacet.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    TradeExecuted: new LogEvent<([productID: string, protocolID: string, marginAccount: string, price: bigint, quantity: bigint] & {productID: string, protocolID: string, marginAccount: string, price: bigint, quantity: bigint})>(
        abi, '0xdf3f7279dedf7bddfcfbc4db9c4e29de1728f1ab97388ad9aaf887f62c7c186e'
    ),
}

export const functions = {
    MAX_TRADING_FEE_RATE: new Func<[], {}, bigint>(
        abi, '0x5132cd7c'
    ),
    clearingFeeRate: new Func<[], {}, bigint>(
        abi, '0x80e56008'
    ),
    config: new Func<[], {}, ([auctionConfig: ([restorationBuffer: bigint, liquidationDuration: bigint] & {restorationBuffer: bigint, liquidationDuration: bigint}), clearingConfig: ([clearingFeeRate: number] & {clearingFeeRate: number})] & {auctionConfig: ([restorationBuffer: bigint, liquidationDuration: bigint] & {restorationBuffer: bigint, liquidationDuration: bigint}), clearingConfig: ([clearingFeeRate: number] & {clearingFeeRate: number})})>(
        abi, '0x79502c55'
    ),
    estimateFees: new Func<[productID: string, price: bigint, quantity: bigint, tradingFeeRate: bigint], {productID: string, price: bigint, quantity: bigint, tradingFeeRate: bigint}, ([clearingFee: bigint, tradingFee: bigint] & {clearingFee: bigint, tradingFee: bigint})>(
        abi, '0x53a5a429'
    ),
    execute: new Func<[trade: ([productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>] & {productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>}), fallbackOnFailure: boolean], {trade: ([productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>] & {productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>}), fallbackOnFailure: boolean}, []>(
        abi, '0xcf502bc2'
    ),
    finalizeInitialization: new Func<[marginAccountRegistry: string], {marginAccountRegistry: string}, []>(
        abi, '0x1e18fca6'
    ),
    getAdmin: new Func<[], {}, string>(
        abi, '0x6e9960c3'
    ),
    getMarginAccountRegistry: new Func<[], {}, string>(
        abi, '0x9cbe7886'
    ),
    getProductRegistry: new Func<[], {}, string>(
        abi, '0xa7153c9a'
    ),
    getTreasury: new Func<[], {}, string>(
        abi, '0x3b19e84a'
    ),
    hashIntent: new Func<[intent: ([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})], {intent: ([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})}, string>(
        abi, '0xf07dcf9b'
    ),
    initialize: new Func<[_productRegistry: string, _treasury: string], {_productRegistry: string, _treasury: string}, []>(
        abi, '0x485cc955'
    ),
    isAdminActive: new Func<[], {}, boolean>(
        abi, '0x8ea36936'
    ),
    setActive: new Func<[active: boolean], {active: boolean}, []>(
        abi, '0xacec338a'
    ),
    setAdmin: new Func<[newAdmin: string], {newAdmin: string}, []>(
        abi, '0x704b6c02'
    ),
    setConfig: new Func<[_config: ([auctionConfig: ([restorationBuffer: bigint, liquidationDuration: bigint] & {restorationBuffer: bigint, liquidationDuration: bigint}), clearingConfig: ([clearingFeeRate: number] & {clearingFeeRate: number})] & {auctionConfig: ([restorationBuffer: bigint, liquidationDuration: bigint] & {restorationBuffer: bigint, liquidationDuration: bigint}), clearingConfig: ([clearingFeeRate: number] & {clearingFeeRate: number})})], {_config: ([auctionConfig: ([restorationBuffer: bigint, liquidationDuration: bigint] & {restorationBuffer: bigint, liquidationDuration: bigint}), clearingConfig: ([clearingFeeRate: number] & {clearingFeeRate: number})] & {auctionConfig: ([restorationBuffer: bigint, liquidationDuration: bigint] & {restorationBuffer: bigint, liquidationDuration: bigint}), clearingConfig: ([clearingFeeRate: number] & {clearingFeeRate: number})})}, []>(
        abi, '0x1a8247d7'
    ),
    setTreasury: new Func<[newTreasury: string], {newTreasury: string}, []>(
        abi, '0xf0f44260'
    ),
    version: new Func<[], {}, string>(
        abi, '0x54fd4d50'
    ),
}

export class Contract extends ContractBase {

    MAX_TRADING_FEE_RATE(): Promise<bigint> {
        return this.eth_call(functions.MAX_TRADING_FEE_RATE, [])
    }

    clearingFeeRate(): Promise<bigint> {
        return this.eth_call(functions.clearingFeeRate, [])
    }

    config(): Promise<([auctionConfig: ([restorationBuffer: bigint, liquidationDuration: bigint] & {restorationBuffer: bigint, liquidationDuration: bigint}), clearingConfig: ([clearingFeeRate: number] & {clearingFeeRate: number})] & {auctionConfig: ([restorationBuffer: bigint, liquidationDuration: bigint] & {restorationBuffer: bigint, liquidationDuration: bigint}), clearingConfig: ([clearingFeeRate: number] & {clearingFeeRate: number})})> {
        return this.eth_call(functions.config, [])
    }

    estimateFees(productID: string, price: bigint, quantity: bigint, tradingFeeRate: bigint): Promise<([clearingFee: bigint, tradingFee: bigint] & {clearingFee: bigint, tradingFee: bigint})> {
        return this.eth_call(functions.estimateFees, [productID, price, quantity, tradingFeeRate])
    }

    getAdmin(): Promise<string> {
        return this.eth_call(functions.getAdmin, [])
    }

    getMarginAccountRegistry(): Promise<string> {
        return this.eth_call(functions.getMarginAccountRegistry, [])
    }

    getProductRegistry(): Promise<string> {
        return this.eth_call(functions.getProductRegistry, [])
    }

    getTreasury(): Promise<string> {
        return this.eth_call(functions.getTreasury, [])
    }

    hashIntent(intent: ([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})): Promise<string> {
        return this.eth_call(functions.hashIntent, [intent])
    }

    isAdminActive(): Promise<boolean> {
        return this.eth_call(functions.isAdminActive, [])
    }

    version(): Promise<string> {
        return this.eth_call(functions.version, [])
    }
}
