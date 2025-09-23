import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './MarginAccount.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    FeeCollected: new LogEvent<([marginAccountID: string, capitalAmount: bigint] & {marginAccountID: string, capitalAmount: bigint})>(
        abi, '0x9cece6e5319f3ec44f6adc2261557c73eb9c2d2e661efe8b1385054f68c628b6'
    ),
    FeeDispersed: new LogEvent<([recipient: string, capitalAmount: bigint] & {recipient: string, capitalAmount: bigint})>(
        abi, '0xd9d6e400d261dbba0fc9ca4b3f88845b23264de027b9d75896a570487209773d'
    ),
    Initialized: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2'
    ),
    PositionUpdated: new LogEvent<([marginAccountID: string, positionId: string, totalQuantity: bigint, costBasis: bigint] & {marginAccountID: string, positionId: string, totalQuantity: bigint, costBasis: bigint})>(
        abi, '0x7bae7103f921e5aaaa3f3bd61d5867903a3dc5ab4b91f7857080d8e548302979'
    ),
}

export const functions = {
    authorize: new Func<[intentAccount: string], {intentAccount: string}, []>(
        abi, '0xb6a5d7de'
    ),
    authorized: new Func<[marginAccount: string, intentAccount: string], {marginAccount: string, intentAccount: string}, boolean>(
        abi, '0x8e6cc087'
    ),
    batchMaeCheck: new Func<[marginAccount: string, settlements: Array<([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})>, markPriceIfSettled: Array<bigint>], {marginAccount: string, settlements: Array<([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})>, markPriceIfSettled: Array<bigint>}, ([checkPassed: boolean, maeAfter: bigint, mmuAfter: bigint] & {checkPassed: boolean, maeAfter: bigint, mmuAfter: bigint})>(
        abi, '0x9ede1c71'
    ),
    batchSettle: new Func<[marginAccountID: string, settlements: Array<([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})>], {marginAccountID: string, settlements: Array<([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})>}, boolean>(
        abi, '0x141da77e'
    ),
    capital: new Func<[marginAccount: string], {marginAccount: string}, bigint>(
        abi, '0x7905c05f'
    ),
    clearing: new Func<[], {}, string>(
        abi, '0x027cb7c6'
    ),
    collateralAsset: new Func<[], {}, string>(
        abi, '0xaabaecd6'
    ),
    collateralToken: new Func<[], {}, string>(
        abi, '0xb2016bd4'
    ),
    collectFee: new Func<[marginAccount: string, capitalAmount: bigint], {marginAccount: string, capitalAmount: bigint}, []>(
        abi, '0xf51461f0'
    ),
    deposit: new Func<[amount: bigint], {amount: bigint}, []>(
        abi, '0xb6b55f25'
    ),
    disperseFees: new Func<[recipients: Array<string>, capitalAmounts: Array<bigint>], {recipients: Array<string>, capitalAmounts: Array<bigint>}, []>(
        abi, '0xdc6427fd'
    ),
    estimateLiquidationPrice: new Func<[marginAccountId: string, productId: string, price: bigint, quantity: bigint], {marginAccountId: string, productId: string, price: bigint, quantity: bigint}, bigint>(
        abi, '0x9e3f89a9'
    ),
    estimateLiquidationPriceForPosition: new Func<[marginAccountId: string, positionId: string], {marginAccountId: string, positionId: string}, bigint>(
        abi, '0xab014bb7'
    ),
    initialize: new Func<[_collateralToken: string, _valuation: string, _productRegistry: string, _clearing: string], {_collateralToken: string, _valuation: string, _productRegistry: string, _clearing: string}, []>(
        abi, '0xf8c8765e'
    ),
    mae: new Func<[marginAccount: string], {marginAccount: string}, bigint>(
        abi, '0xa27e1329'
    ),
    maeAndMmuAfterBatchTrade: new Func<[marginAccount: string, settlements: Array<([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})>, markPriceIfSettled: Array<bigint>], {marginAccount: string, settlements: Array<([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})>, markPriceIfSettled: Array<bigint>}, ([maeAfter: bigint, mmuAfter: bigint] & {maeAfter: bigint, mmuAfter: bigint})>(
        abi, '0x2470ca1b'
    ),
    maeCheck: new Func<[marginAccount: string, settlement: ([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint}), markPriceIfSettled: bigint], {marginAccount: string, settlement: ([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint}), markPriceIfSettled: bigint}, ([checkPassed: boolean, maeAfter: bigint, mmuAfter: bigint] & {checkPassed: boolean, maeAfter: bigint, mmuAfter: bigint})>(
        abi, '0xeca125e9'
    ),
    mma: new Func<[marginAccount: string], {marginAccount: string}, bigint>(
        abi, '0x7aec0b5a'
    ),
    mmu: new Func<[marginAccount: string], {marginAccount: string}, bigint>(
        abi, '0x3b039358'
    ),
    pnl: new Func<[marginAccount: string], {marginAccount: string}, bigint>(
        abi, '0x2b316a0b'
    ),
    positionAge: new Func<[marginAccountId: string, positionId: string], {marginAccountId: string, positionId: string}, bigint>(
        abi, '0x8b5abf72'
    ),
    positionCount: new Func<[marginAccount: string], {marginAccount: string}, bigint>(
        abi, '0x42fd3880'
    ),
    positionData: new Func<[marginAccount: string, positionId: string], {marginAccount: string, positionId: string}, ([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>(
        abi, '0x0cc7b24f'
    ),
    positionPnL: new Func<[marginAccount: string, positionId: string], {marginAccount: string, positionId: string}, bigint>(
        abi, '0xb9508b32'
    ),
    positionQuantity: new Func<[marginAccount: string, positionId: string], {marginAccount: string, positionId: string}, bigint>(
        abi, '0x91208b69'
    ),
    positions: new Func<[marginAccount: string], {marginAccount: string}, Array<string>>(
        abi, '0x55f57510'
    ),
    productRegistry: new Func<[], {}, string>(
        abi, '0xfff218c3'
    ),
    revokeAuthorization: new Func<[intentAccount: string], {intentAccount: string}, []>(
        abi, '0xb48028e3'
    ),
    settle: new Func<[marginAccount: string, intentAccount: string, settlement: ([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})], {marginAccount: string, intentAccount: string, settlement: ([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})}, boolean>(
        abi, '0xf6c0447f'
    ),
    valuation: new Func<[], {}, string>(
        abi, '0x21a7cfe4'
    ),
    withdraw: new Func<[amount: bigint], {amount: bigint}, []>(
        abi, '0x2e1a7d4d'
    ),
    withdrawable: new Func<[marginAccount: string], {marginAccount: string}, bigint>(
        abi, '0xce513b6f'
    ),
}

export class Contract extends ContractBase {

    authorized(marginAccount: string, intentAccount: string): Promise<boolean> {
        return this.eth_call(functions.authorized, [marginAccount, intentAccount])
    }

    batchMaeCheck(marginAccount: string, settlements: Array<([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})>, markPriceIfSettled: Array<bigint>): Promise<([checkPassed: boolean, maeAfter: bigint, mmuAfter: bigint] & {checkPassed: boolean, maeAfter: bigint, mmuAfter: bigint})> {
        return this.eth_call(functions.batchMaeCheck, [marginAccount, settlements, markPriceIfSettled])
    }

    capital(marginAccount: string): Promise<bigint> {
        return this.eth_call(functions.capital, [marginAccount])
    }

    clearing(): Promise<string> {
        return this.eth_call(functions.clearing, [])
    }

    collateralAsset(): Promise<string> {
        return this.eth_call(functions.collateralAsset, [])
    }

    collateralToken(): Promise<string> {
        return this.eth_call(functions.collateralToken, [])
    }

    estimateLiquidationPrice(marginAccountId: string, productId: string, price: bigint, quantity: bigint): Promise<bigint> {
        return this.eth_call(functions.estimateLiquidationPrice, [marginAccountId, productId, price, quantity])
    }

    estimateLiquidationPriceForPosition(marginAccountId: string, positionId: string): Promise<bigint> {
        return this.eth_call(functions.estimateLiquidationPriceForPosition, [marginAccountId, positionId])
    }

    mae(marginAccount: string): Promise<bigint> {
        return this.eth_call(functions.mae, [marginAccount])
    }

    maeAndMmuAfterBatchTrade(marginAccount: string, settlements: Array<([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})>, markPriceIfSettled: Array<bigint>): Promise<([maeAfter: bigint, mmuAfter: bigint] & {maeAfter: bigint, mmuAfter: bigint})> {
        return this.eth_call(functions.maeAndMmuAfterBatchTrade, [marginAccount, settlements, markPriceIfSettled])
    }

    maeCheck(marginAccount: string, settlement: ([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint}), markPriceIfSettled: bigint): Promise<([checkPassed: boolean, maeAfter: bigint, mmuAfter: bigint] & {checkPassed: boolean, maeAfter: bigint, mmuAfter: bigint})> {
        return this.eth_call(functions.maeCheck, [marginAccount, settlement, markPriceIfSettled])
    }

    mma(marginAccount: string): Promise<bigint> {
        return this.eth_call(functions.mma, [marginAccount])
    }

    mmu(marginAccount: string): Promise<bigint> {
        return this.eth_call(functions.mmu, [marginAccount])
    }

    pnl(marginAccount: string): Promise<bigint> {
        return this.eth_call(functions.pnl, [marginAccount])
    }

    positionAge(marginAccountId: string, positionId: string): Promise<bigint> {
        return this.eth_call(functions.positionAge, [marginAccountId, positionId])
    }

    positionCount(marginAccount: string): Promise<bigint> {
        return this.eth_call(functions.positionCount, [marginAccount])
    }

    positionData(marginAccount: string, positionId: string): Promise<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})> {
        return this.eth_call(functions.positionData, [marginAccount, positionId])
    }

    positionPnL(marginAccount: string, positionId: string): Promise<bigint> {
        return this.eth_call(functions.positionPnL, [marginAccount, positionId])
    }

    positionQuantity(marginAccount: string, positionId: string): Promise<bigint> {
        return this.eth_call(functions.positionQuantity, [marginAccount, positionId])
    }

    positions(marginAccount: string): Promise<Array<string>> {
        return this.eth_call(functions.positions, [marginAccount])
    }

    productRegistry(): Promise<string> {
        return this.eth_call(functions.productRegistry, [])
    }

    valuation(): Promise<string> {
        return this.eth_call(functions.valuation, [])
    }

    withdrawable(marginAccount: string): Promise<bigint> {
        return this.eth_call(functions.withdrawable, [marginAccount])
    }
}
