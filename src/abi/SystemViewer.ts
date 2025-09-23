import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './SystemViewer.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Initialized: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    UPGRADE_INTERFACE_VERSION: new Func<[], {}, string>(
        abi, '0xad3cb1cc'
    ),
    clearing: new Func<[], {}, string>(
        abi, '0x027cb7c6'
    ),
    initialize: new Func<[_clearing: string, _productRegistry: string, _marginAccountRegistry: string], {_clearing: string, _productRegistry: string, _marginAccountRegistry: string}, []>(
        abi, '0xc0c53b8b'
    ),
    maeByCollateralAsset: new Func<[collateralAsset: string, accounts: Array<string>], {collateralAsset: string, accounts: Array<string>}, Array<bigint>>(
        abi, '0x6068f0e4'
    ),
    maeByCollateralAssets: new Func<[collateralAssets: Array<string>, accounts: Array<string>], {collateralAssets: Array<string>, accounts: Array<string>}, Array<bigint>>(
        abi, '0x17149d03'
    ),
    maeChecksByCollateralAsset: new Func<[collateralAsset: string, accounts: Array<string>, settlements: Array<([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})>], {collateralAsset: string, accounts: Array<string>, settlements: Array<([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})>}, ([results: Array<boolean>, maeAfter: Array<bigint>, mmuAfter: Array<bigint>] & {results: Array<boolean>, maeAfter: Array<bigint>, mmuAfter: Array<bigint>})>(
        abi, '0x2d6685d7'
    ),
    marginAccountRegistry: new Func<[], {}, string>(
        abi, '0x0e1c61b2'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    positionsByCollateralAsset: new Func<[collateralAsset: string, accounts: Array<string>], {collateralAsset: string, accounts: Array<string>}, Array<Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>>>(
        abi, '0x56893fd5'
    ),
    positionsByCollateralAssets: new Func<[collateralAssets: Array<string>, accounts: Array<string>], {collateralAssets: Array<string>, accounts: Array<string>}, Array<Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>>>(
        abi, '0xcb674f3e'
    ),
    productDetails: new Func<[productIds: Array<string>], {productIds: Array<string>}, Array<([metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, offerPriceBuffer: bigint, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string] & {metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, offerPriceBuffer: bigint, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string})>>(
        abi, '0xf2391a3a'
    ),
    productRegistry: new Func<[], {}, string>(
        abi, '0xfff218c3'
    ),
    productStates: new Func<[productIds: Array<string>], {productIds: Array<string>}, Array<number>>(
        abi, '0x2315fda3'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
    userMarginDataByCollateralAsset: new Func<[collateralAsset: string, accounts: Array<string>], {collateralAsset: string, accounts: Array<string>}, Array<([collateralAsset: string, marginAccountId: string, mae: bigint, mmu: bigint, positions: Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>] & {collateralAsset: string, marginAccountId: string, mae: bigint, mmu: bigint, positions: Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>})>>(
        abi, '0xa4c96e68'
    ),
    userMarginDataByCollateralAssets: new Func<[collateralAssets: Array<string>, accounts: Array<string>], {collateralAssets: Array<string>, accounts: Array<string>}, Array<([collateralAsset: string, marginAccountId: string, mae: bigint, mmu: bigint, positions: Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>] & {collateralAsset: string, marginAccountId: string, mae: bigint, mmu: bigint, positions: Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>})>>(
        abi, '0x3ddddb7c'
    ),
    valuations: new Func<[productIds: Array<string>], {productIds: Array<string>}, Array<bigint>>(
        abi, '0xfe3d5a45'
    ),
}

export class Contract extends ContractBase {

    UPGRADE_INTERFACE_VERSION(): Promise<string> {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, [])
    }

    clearing(): Promise<string> {
        return this.eth_call(functions.clearing, [])
    }

    maeByCollateralAsset(collateralAsset: string, accounts: Array<string>): Promise<Array<bigint>> {
        return this.eth_call(functions.maeByCollateralAsset, [collateralAsset, accounts])
    }

    maeByCollateralAssets(collateralAssets: Array<string>, accounts: Array<string>): Promise<Array<bigint>> {
        return this.eth_call(functions.maeByCollateralAssets, [collateralAssets, accounts])
    }

    maeChecksByCollateralAsset(collateralAsset: string, accounts: Array<string>, settlements: Array<([positionId: string, quantity: bigint, price: bigint] & {positionId: string, quantity: bigint, price: bigint})>): Promise<([results: Array<boolean>, maeAfter: Array<bigint>, mmuAfter: Array<bigint>] & {results: Array<boolean>, maeAfter: Array<bigint>, mmuAfter: Array<bigint>})> {
        return this.eth_call(functions.maeChecksByCollateralAsset, [collateralAsset, accounts, settlements])
    }

    marginAccountRegistry(): Promise<string> {
        return this.eth_call(functions.marginAccountRegistry, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    positionsByCollateralAsset(collateralAsset: string, accounts: Array<string>): Promise<Array<Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>>> {
        return this.eth_call(functions.positionsByCollateralAsset, [collateralAsset, accounts])
    }

    positionsByCollateralAssets(collateralAssets: Array<string>, accounts: Array<string>): Promise<Array<Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>>> {
        return this.eth_call(functions.positionsByCollateralAssets, [collateralAssets, accounts])
    }

    productDetails(productIds: Array<string>): Promise<Array<([metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, offerPriceBuffer: bigint, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string] & {metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, offerPriceBuffer: bigint, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string})>> {
        return this.eth_call(functions.productDetails, [productIds])
    }

    productRegistry(): Promise<string> {
        return this.eth_call(functions.productRegistry, [])
    }

    productStates(productIds: Array<string>): Promise<Array<number>> {
        return this.eth_call(functions.productStates, [productIds])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    userMarginDataByCollateralAsset(collateralAsset: string, accounts: Array<string>): Promise<Array<([collateralAsset: string, marginAccountId: string, mae: bigint, mmu: bigint, positions: Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>] & {collateralAsset: string, marginAccountId: string, mae: bigint, mmu: bigint, positions: Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>})>> {
        return this.eth_call(functions.userMarginDataByCollateralAsset, [collateralAsset, accounts])
    }

    userMarginDataByCollateralAssets(collateralAssets: Array<string>, accounts: Array<string>): Promise<Array<([collateralAsset: string, marginAccountId: string, mae: bigint, mmu: bigint, positions: Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>] & {collateralAsset: string, marginAccountId: string, mae: bigint, mmu: bigint, positions: Array<([positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {positionId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>})>> {
        return this.eth_call(functions.userMarginDataByCollateralAssets, [collateralAssets, accounts])
    }

    valuations(productIds: Array<string>): Promise<Array<bigint>> {
        return this.eth_call(functions.valuations, [productIds])
    }
}
