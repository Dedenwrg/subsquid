import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './ProductRegistry.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Initialized: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    ProductRegistered: new LogEvent<([builder: string, productId: string] & {builder: string, productId: string})>(
        abi, '0x44d1e2ec57484d986efbeceec5e12bead07bb545869fbcbaf2bf16e1ac52ea3e'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    UPGRADE_INTERFACE_VERSION: new Func<[], {}, string>(
        abi, '0xad3cb1cc'
    ),
    auctionBounty: new Func<[productId: string], {productId: string}, bigint>(
        abi, '0x622cc6de'
    ),
    clearing: new Func<[], {}, string>(
        abi, '0x027cb7c6'
    ),
    collateralAsset: new Func<[productId: string], {productId: string}, string>(
        abi, '0xb419cce1'
    ),
    earliestFSPSubmissionTime: new Func<[productId: string], {productId: string}, bigint>(
        abi, '0x0b408657'
    ),
    id: new Func<[product: ([metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string] & {metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string})], {product: ([metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string] & {metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string})}, string>(
        abi, '0x289d78f8'
    ),
    imr: new Func<[productId: string], {productId: string}, bigint>(
        abi, '0x5d2fa238'
    ),
    initialize: new Func<[], {}, []>(
        abi, '0x8129fc1c'
    ),
    mmr: new Func<[productId: string], {productId: string}, bigint>(
        abi, '0x0dbd1a2f'
    ),
    oracleSpecification: new Func<[productId: string], {productId: string}, ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string})>(
        abi, '0x67361d3e'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    pointValue: new Func<[productId: string], {productId: string}, bigint>(
        abi, '0xdba4d16a'
    ),
    products: new Func<[productId: string], {productId: string}, ([metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string] & {metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string})>(
        abi, '0x79054391'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
    ),
    register: new Func<[product: ([metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string] & {metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string})], {product: ([metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string] & {metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string})}, []>(
        abi, '0xbd85b916'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    setClearing: new Func<[clearing_: string], {clearing_: string}, []>(
        abi, '0xc69560ab'
    ),
    state: new Func<[productId: string], {productId: string}, number>(
        abi, '0x61d585da'
    ),
    tickSize: new Func<[productId: string], {productId: string}, bigint>(
        abi, '0x005b6b72'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
}

export class Contract extends ContractBase {

    UPGRADE_INTERFACE_VERSION(): Promise<string> {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, [])
    }

    auctionBounty(productId: string): Promise<bigint> {
        return this.eth_call(functions.auctionBounty, [productId])
    }

    clearing(): Promise<string> {
        return this.eth_call(functions.clearing, [])
    }

    collateralAsset(productId: string): Promise<string> {
        return this.eth_call(functions.collateralAsset, [productId])
    }

    earliestFSPSubmissionTime(productId: string): Promise<bigint> {
        return this.eth_call(functions.earliestFSPSubmissionTime, [productId])
    }

    id(product: ([metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string] & {metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string})): Promise<string> {
        return this.eth_call(functions.id, [product])
    }

    imr(productId: string): Promise<bigint> {
        return this.eth_call(functions.imr, [productId])
    }

    mmr(productId: string): Promise<bigint> {
        return this.eth_call(functions.mmr, [productId])
    }

    oracleSpecification(productId: string): Promise<([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string})> {
        return this.eth_call(functions.oracleSpecification, [productId])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    pointValue(productId: string): Promise<bigint> {
        return this.eth_call(functions.pointValue, [productId])
    }

    products(productId: string): Promise<([metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string] & {metadata: ([builder: string, symbol: string, description: string] & {builder: string, symbol: string, description: string}), oracleSpec: ([oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string] & {oracleAddress: string, fsvDecimals: number, fspAlpha: bigint, fspBeta: bigint, fsvCalldata: string}), priceQuotation: string, collateralAsset: string, startTime: bigint, earliestFSPSubmissionTime: bigint, unitValue: bigint, initialMarginRequirement: number, maintenanceMarginRequirement: number, auctionBounty: bigint, tradeoutInterval: number, tickSize: number, extendedMetadata: string})> {
        return this.eth_call(functions.products, [productId])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    state(productId: string): Promise<number> {
        return this.eth_call(functions.state, [productId])
    }

    tickSize(productId: string): Promise<bigint> {
        return this.eth_call(functions.tickSize, [productId])
    }
}
