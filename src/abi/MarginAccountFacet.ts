import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './MarginAccountFacet.abi'

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
}

export const functions = {
    authorize: new Func<[owner: string, intentAccount: string], {owner: string, intentAccount: string}, []>(
        abi, '0x2bef4595'
    ),
    collateral: new Func<[], {}, string>(
        abi, '0xd8dfeb45'
    ),
    deposit: new Func<[owner: string, amount: bigint], {owner: string, amount: bigint}, []>(
        abi, '0x47e7ef24'
    ),
    estimateAdditionalMargin: new Func<[marginAccountId: string, settlement: ([productId: string, quantity: bigint, price: bigint] & {productId: string, quantity: bigint, price: bigint})], {marginAccountId: string, settlement: ([productId: string, quantity: bigint, price: bigint] & {productId: string, quantity: bigint, price: bigint})}, bigint>(
        abi, '0x04a19559'
    ),
    isAuthorized: new Func<[marginAccountId: string, intentAccount: string], {marginAccountId: string, intentAccount: string}, boolean>(
        abi, '0x65e4ad9e'
    ),
    maeCheck: new Func<[marginAccountId: string, settlement: ([productId: string, quantity: bigint, price: bigint] & {productId: string, quantity: bigint, price: bigint})], {marginAccountId: string, settlement: ([productId: string, quantity: bigint, price: bigint] & {productId: string, quantity: bigint, price: bigint})}, boolean>(
        abi, '0xf60fe9c5'
    ),
    marginData: new Func<[marginAccountId: string], {marginAccountId: string}, ([capital: bigint, mae: bigint, mmu: bigint, pnl: bigint] & {capital: bigint, mae: bigint, mmu: bigint, pnl: bigint})>(
        abi, '0xedba5dbd'
    ),
    position: new Func<[marginAccountId: string, productId: string], {marginAccountId: string, productId: string}, ([productId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {productId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>(
        abi, '0xefe10643'
    ),
    products: new Func<[marginAccountId: string], {marginAccountId: string}, Array<string>>(
        abi, '0x793a8e71'
    ),
    revoke: new Func<[owner: string, intentAccount: string], {owner: string, intentAccount: string}, []>(
        abi, '0xdcf3fb2a'
    ),
    stateAfterSettlement: new Func<[marginAccountId: string, settlement: ([productId: string, quantity: bigint, price: bigint] & {productId: string, quantity: bigint, price: bigint})], {marginAccountId: string, settlement: ([productId: string, quantity: bigint, price: bigint] & {productId: string, quantity: bigint, price: bigint})}, ([maeAfter: bigint, mmuAfter: bigint] & {maeAfter: bigint, mmuAfter: bigint})>(
        abi, '0xc2f2a694'
    ),
    withdraw: new Func<[owner: string, amount: bigint], {owner: string, amount: bigint}, []>(
        abi, '0xf3fef3a3'
    ),
}

export class Contract extends ContractBase {

    collateral(): Promise<string> {
        return this.eth_call(functions.collateral, [])
    }

    estimateAdditionalMargin(marginAccountId: string, settlement: ([productId: string, quantity: bigint, price: bigint] & {productId: string, quantity: bigint, price: bigint})): Promise<bigint> {
        return this.eth_call(functions.estimateAdditionalMargin, [marginAccountId, settlement])
    }

    isAuthorized(marginAccountId: string, intentAccount: string): Promise<boolean> {
        return this.eth_call(functions.isAuthorized, [marginAccountId, intentAccount])
    }

    maeCheck(marginAccountId: string, settlement: ([productId: string, quantity: bigint, price: bigint] & {productId: string, quantity: bigint, price: bigint})): Promise<boolean> {
        return this.eth_call(functions.maeCheck, [marginAccountId, settlement])
    }

    marginData(marginAccountId: string): Promise<([capital: bigint, mae: bigint, mmu: bigint, pnl: bigint] & {capital: bigint, mae: bigint, mmu: bigint, pnl: bigint})> {
        return this.eth_call(functions.marginData, [marginAccountId])
    }

    position(marginAccountId: string, productId: string): Promise<([productId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {productId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})> {
        return this.eth_call(functions.position, [marginAccountId, productId])
    }

    products(marginAccountId: string): Promise<Array<string>> {
        return this.eth_call(functions.products, [marginAccountId])
    }

    stateAfterSettlement(marginAccountId: string, settlement: ([productId: string, quantity: bigint, price: bigint] & {productId: string, quantity: bigint, price: bigint})): Promise<([maeAfter: bigint, mmuAfter: bigint] & {maeAfter: bigint, mmuAfter: bigint})> {
        return this.eth_call(functions.stateAfterSettlement, [marginAccountId, settlement])
    }
}
