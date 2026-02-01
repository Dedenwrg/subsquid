import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './BankruptcyFacet.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    LossMutualized: new LogEvent<([bankruptAccount: string, collateralToken: string, caller: string, lossAmount: bigint] & {bankruptAccount: string, collateralToken: string, caller: string, lossAmount: bigint})>(
        abi, '0x65705e90fa7b3e2b69d8fa0852a42fa2daa34cec0bc64e9bc71d7e79654984aa'
    ),
}

export const functions = {
    lastTradedTimestamp: new Func<[productId: string, trader: string], {productId: string, trader: string}, bigint>(
        abi, '0x37990a64'
    ),
    mutualizeLosses: new Func<[bankruptAccountId: string, collateralToken: string, productIds: Array<string>, laas: Array<Array<string>>], {bankruptAccountId: string, collateralToken: string, productIds: Array<string>, laas: Array<Array<string>>}, []>(
        abi, '0xa2dc8128'
    ),
    uniqueTraderCount: new Func<[productId: string], {productId: string}, bigint>(
        abi, '0x8cdeea95'
    ),
    validateLAAs: new Func<[marginAccount: string, bankruptAccount: string, productId: string, productOwners: Array<string>], {marginAccount: string, bankruptAccount: string, productId: string, productOwners: Array<string>}, ([positionId: string, bankruptAccountUPnL: bigint, bankruptAccountQuantity: bigint, markPrice: bigint, pointValue: bigint, tickSize: bigint, laaData: Array<([owner: string, quantity: bigint, lastTradedTimestamp: bigint, positionAge: bigint] & {owner: string, quantity: bigint, lastTradedTimestamp: bigint, positionAge: bigint})>] & {positionId: string, bankruptAccountUPnL: bigint, bankruptAccountQuantity: bigint, markPrice: bigint, pointValue: bigint, tickSize: bigint, laaData: Array<([owner: string, quantity: bigint, lastTradedTimestamp: bigint, positionAge: bigint] & {owner: string, quantity: bigint, lastTradedTimestamp: bigint, positionAge: bigint})>})>(
        abi, '0x29688369'
    ),
}

export class Contract extends ContractBase {

    lastTradedTimestamp(productId: string, trader: string): Promise<bigint> {
        return this.eth_call(functions.lastTradedTimestamp, [productId, trader])
    }

    uniqueTraderCount(productId: string): Promise<bigint> {
        return this.eth_call(functions.uniqueTraderCount, [productId])
    }

    validateLAAs(marginAccount: string, bankruptAccount: string, productId: string, productOwners: Array<string>): Promise<([positionId: string, bankruptAccountUPnL: bigint, bankruptAccountQuantity: bigint, markPrice: bigint, pointValue: bigint, tickSize: bigint, laaData: Array<([owner: string, quantity: bigint, lastTradedTimestamp: bigint, positionAge: bigint] & {owner: string, quantity: bigint, lastTradedTimestamp: bigint, positionAge: bigint})>] & {positionId: string, bankruptAccountUPnL: bigint, bankruptAccountQuantity: bigint, markPrice: bigint, pointValue: bigint, tickSize: bigint, laaData: Array<([owner: string, quantity: bigint, lastTradedTimestamp: bigint, positionAge: bigint] & {owner: string, quantity: bigint, lastTradedTimestamp: bigint, positionAge: bigint})>})> {
        return this.eth_call(functions.validateLAAs, [marginAccount, bankruptAccount, productId, productOwners])
    }
}
