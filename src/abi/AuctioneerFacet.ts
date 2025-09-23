import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './AuctioneerFacet.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Auctioned: new LogEvent<([liquidatingMarginAccountID: string, liquidatorMarginAccountID: string, productId: string, quantity: bigint, price: bigint] & {liquidatingMarginAccountID: string, liquidatorMarginAccountID: string, productId: string, quantity: bigint, price: bigint})>(
        abi, '0x13f77eef3e440e146b6d32f14378772a6eea95bdee2fd22de301d0e6e1fb1786'
    ),
    LiquidationStarted: new LogEvent<([marginAccountID: string, collateralToken: string] & {marginAccountID: string, collateralToken: string})>(
        abi, '0x104acc207bac67449e1063020d63badf069d9c8d9d5ad46f0aef68c2045ba856'
    ),
    LiquidationTerminated: new LogEvent<([marginAccountID: string, collateralToken: string] & {marginAccountID: string, collateralToken: string})>(
        abi, '0x8c8fcb0f67855702b5d1bf27be264637c7049d32488825fcdbcbf3e6f4271bed'
    ),
}

export const functions = {
    auctionConfig: new Func<[], {}, ([restorationBuffer: bigint, liquidationDuration: bigint] & {restorationBuffer: bigint, liquidationDuration: bigint})>(
        abi, '0xbb406135'
    ),
    auctionData: new Func<[marginAccountID: string, collateral: string], {marginAccountID: string, collateral: string}, ([startBlock: bigint, maeAtInitiation: bigint, mmuAtInitiation: bigint, maeNow: bigint, mmuNow: bigint] & {startBlock: bigint, maeAtInitiation: bigint, mmuAtInitiation: bigint, maeNow: bigint, mmuNow: bigint})>(
        abi, '0xa0912155'
    ),
    bidAuction: new Func<[marginAccountID: string, collateralToken: string, bids: Array<([productID: string, price: bigint, quantity: bigint, side: number] & {productID: string, price: bigint, quantity: bigint, side: number})>], {marginAccountID: string, collateralToken: string, bids: Array<([productID: string, price: bigint, quantity: bigint, side: number] & {productID: string, price: bigint, quantity: bigint, side: number})>}, []>(
        abi, '0x35dc0938'
    ),
    canTerminateAuctions: new Func<[marginAccountID: string, collateral: string], {marginAccountID: string, collateral: string}, boolean>(
        abi, '0xfea76bd1'
    ),
    isLiquidatable: new Func<[marginAccountID: string, collateralToken: string], {marginAccountID: string, collateralToken: string}, boolean>(
        abi, '0x3966a28b'
    ),
    isLiquidating: new Func<[marginAccountID: string, collateralToken: string], {marginAccountID: string, collateralToken: string}, boolean>(
        abi, '0x4668567f'
    ),
    maeCheckOnBid: new Func<[liquidatorMarginAccountID: string, liquidatingMarginAccountID: string, collateral: string, bids: Array<([productID: string, price: bigint, quantity: bigint, side: number] & {productID: string, price: bigint, quantity: bigint, side: number})>], {liquidatorMarginAccountID: string, liquidatingMarginAccountID: string, collateral: string, bids: Array<([productID: string, price: bigint, quantity: bigint, side: number] & {productID: string, price: bigint, quantity: bigint, side: number})>}, ([maeCheckFailed: boolean, maeOverMmuRateExceeded: boolean] & {maeCheckFailed: boolean, maeOverMmuRateExceeded: boolean})>(
        abi, '0x2847b05a'
    ),
    maxMaeOffered: new Func<[marginAccountID: string, collateral: string, mmuDecreased: bigint], {marginAccountID: string, collateral: string, mmuDecreased: bigint}, bigint>(
        abi, '0x9d259930'
    ),
    requestLiquidation: new Func<[marginAccountID: string, collateralToken: string], {marginAccountID: string, collateralToken: string}, []>(
        abi, '0x0f4b3b8e'
    ),
    terminateAuctions: new Func<[marginAccountID: string, collateral: string], {marginAccountID: string, collateral: string}, []>(
        abi, '0xc13b449d'
    ),
    validateAuctions: new Func<[marginAccountID: string, collateralToken: string, bids: Array<([productID: string, price: bigint, quantity: bigint, side: number] & {productID: string, price: bigint, quantity: bigint, side: number})>], {marginAccountID: string, collateralToken: string, bids: Array<([productID: string, price: bigint, quantity: bigint, side: number] & {productID: string, price: bigint, quantity: bigint, side: number})>}, boolean>(
        abi, '0xb2ec8dc0'
    ),
}

export class Contract extends ContractBase {

    auctionConfig(): Promise<([restorationBuffer: bigint, liquidationDuration: bigint] & {restorationBuffer: bigint, liquidationDuration: bigint})> {
        return this.eth_call(functions.auctionConfig, [])
    }

    auctionData(marginAccountID: string, collateral: string): Promise<([startBlock: bigint, maeAtInitiation: bigint, mmuAtInitiation: bigint, maeNow: bigint, mmuNow: bigint] & {startBlock: bigint, maeAtInitiation: bigint, mmuAtInitiation: bigint, maeNow: bigint, mmuNow: bigint})> {
        return this.eth_call(functions.auctionData, [marginAccountID, collateral])
    }

    canTerminateAuctions(marginAccountID: string, collateral: string): Promise<boolean> {
        return this.eth_call(functions.canTerminateAuctions, [marginAccountID, collateral])
    }

    isLiquidatable(marginAccountID: string, collateralToken: string): Promise<boolean> {
        return this.eth_call(functions.isLiquidatable, [marginAccountID, collateralToken])
    }

    isLiquidating(marginAccountID: string, collateralToken: string): Promise<boolean> {
        return this.eth_call(functions.isLiquidating, [marginAccountID, collateralToken])
    }

    maeCheckOnBid(liquidatorMarginAccountID: string, liquidatingMarginAccountID: string, collateral: string, bids: Array<([productID: string, price: bigint, quantity: bigint, side: number] & {productID: string, price: bigint, quantity: bigint, side: number})>): Promise<([maeCheckFailed: boolean, maeOverMmuRateExceeded: boolean] & {maeCheckFailed: boolean, maeOverMmuRateExceeded: boolean})> {
        return this.eth_call(functions.maeCheckOnBid, [liquidatorMarginAccountID, liquidatingMarginAccountID, collateral, bids])
    }

    maxMaeOffered(marginAccountID: string, collateral: string, mmuDecreased: bigint): Promise<bigint> {
        return this.eth_call(functions.maxMaeOffered, [marginAccountID, collateral, mmuDecreased])
    }

    validateAuctions(marginAccountID: string, collateralToken: string, bids: Array<([productID: string, price: bigint, quantity: bigint, side: number] & {productID: string, price: bigint, quantity: bigint, side: number})>): Promise<boolean> {
        return this.eth_call(functions.validateAuctions, [marginAccountID, collateralToken, bids])
    }
}
