import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './MarginAccount.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Deposit: new LogEvent<([user: string, amount: bigint] & {user: string, amount: bigint})>(
        abi, '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c'
    ),
    Initialized: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2'
    ),
    IntentAuthorized: new LogEvent<([marginAccountId: string, intentAccount: string] & {marginAccountId: string, intentAccount: string})>(
        abi, '0x89a5329232b6f6ec08af805aa3b0b7a874301482cdbf1f02030875842a1da813'
    ),
    IntentRevoked: new LogEvent<([marginAccountId: string, intentAccount: string] & {marginAccountId: string, intentAccount: string})>(
        abi, '0xdbafe28567e6f1efc7af5e9e18f8a6c7dc3eb896d09eaa69ab5a8b7768882978'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Withdraw: new LogEvent<([user: string, amount: bigint] & {user: string, amount: bigint})>(
        abi, '0x884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a9424364'
    ),
}

export const functions = {
    addAllowed: new Func<[addr: string], {addr: string}, []>(
        abi, '0xcb8523c6'
    ),
    admin: new Func<[], {}, string>(
        abi, '0xf851a440'
    ),
    allowed: new Func<[], {}, Array<string>>(
        abi, '0x19e1fca4'
    ),
    authorize: new Func<[intentAccount: string], {intentAccount: string}, []>(
        abi, '0xb6a5d7de'
    ),
    authorized: new Func<[marginAccountId: string, intentAccount: string], {marginAccountId: string, intentAccount: string}, boolean>(
        abi, '0x8e6cc087'
    ),
    capital: new Func<[marginAccountId: string], {marginAccountId: string}, bigint>(
        abi, '0x7905c05f'
    ),
    clearing: new Func<[], {}, string>(
        abi, '0x027cb7c6'
    ),
    collateralAsset: new Func<[], {}, string>(
        abi, '0xaabaecd6'
    ),
    deposit: new Func<[amount: bigint], {amount: bigint}, []>(
        abi, '0xb6b55f25'
    ),
    depositFor: new Func<[marginAccountId: string, amount: bigint], {marginAccountId: string, amount: bigint}, []>(
        abi, '0x2f4f21e2'
    ),
    initialize: new Func<[clearing_: string], {clearing_: string}, []>(
        abi, '0xc4d66de8'
    ),
    mae: new Func<[marginAccountId: string], {marginAccountId: string}, bigint>(
        abi, '0xa27e1329'
    ),
    mma: new Func<[marginAccountId: string], {marginAccountId: string}, bigint>(
        abi, '0x7aec0b5a'
    ),
    mmu: new Func<[marginAccountId: string], {marginAccountId: string}, bigint>(
        abi, '0x3b039358'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    pnl: new Func<[marginAccountId: string], {marginAccountId: string}, bigint>(
        abi, '0x2b316a0b'
    ),
    positionCount: new Func<[marginAccountId: string], {marginAccountId: string}, bigint>(
        abi, '0x42fd3880'
    ),
    positionData: new Func<[marginAccountId: string, productId: string], {marginAccountId: string, productId: string}, ([productId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {productId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})>(
        abi, '0x0cc7b24f'
    ),
    positionPnL: new Func<[marginAccount: string, productId: string], {marginAccount: string, productId: string}, bigint>(
        abi, '0xb9508b32'
    ),
    positionQuantity: new Func<[marginAccountId: string, productId: string], {marginAccountId: string, productId: string}, bigint>(
        abi, '0x91208b69'
    ),
    positions: new Func<[marginAccountId: string], {marginAccountId: string}, Array<string>>(
        abi, '0x55f57510'
    ),
    removeAllowed: new Func<[addr: string], {addr: string}, []>(
        abi, '0x6470db2f'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    revokeAuthorization: new Func<[intentAccount: string], {intentAccount: string}, []>(
        abi, '0xb48028e3'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    withdraw: new Func<[amount: bigint], {amount: bigint}, []>(
        abi, '0x2e1a7d4d'
    ),
    withdrawable: new Func<[marginAccountId: string], {marginAccountId: string}, bigint>(
        abi, '0xce513b6f'
    ),
}

export class Contract extends ContractBase {

    admin(): Promise<string> {
        return this.eth_call(functions.admin, [])
    }

    allowed(): Promise<Array<string>> {
        return this.eth_call(functions.allowed, [])
    }

    authorized(marginAccountId: string, intentAccount: string): Promise<boolean> {
        return this.eth_call(functions.authorized, [marginAccountId, intentAccount])
    }

    capital(marginAccountId: string): Promise<bigint> {
        return this.eth_call(functions.capital, [marginAccountId])
    }

    clearing(): Promise<string> {
        return this.eth_call(functions.clearing, [])
    }

    collateralAsset(): Promise<string> {
        return this.eth_call(functions.collateralAsset, [])
    }

    mae(marginAccountId: string): Promise<bigint> {
        return this.eth_call(functions.mae, [marginAccountId])
    }

    mma(marginAccountId: string): Promise<bigint> {
        return this.eth_call(functions.mma, [marginAccountId])
    }

    mmu(marginAccountId: string): Promise<bigint> {
        return this.eth_call(functions.mmu, [marginAccountId])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    pnl(marginAccountId: string): Promise<bigint> {
        return this.eth_call(functions.pnl, [marginAccountId])
    }

    positionCount(marginAccountId: string): Promise<bigint> {
        return this.eth_call(functions.positionCount, [marginAccountId])
    }

    positionData(marginAccountId: string, productId: string): Promise<([productId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint] & {productId: string, quantity: bigint, costBasis: bigint, maintenanceMargin: bigint, pnl: bigint})> {
        return this.eth_call(functions.positionData, [marginAccountId, productId])
    }

    positionPnL(marginAccount: string, productId: string): Promise<bigint> {
        return this.eth_call(functions.positionPnL, [marginAccount, productId])
    }

    positionQuantity(marginAccountId: string, productId: string): Promise<bigint> {
        return this.eth_call(functions.positionQuantity, [marginAccountId, productId])
    }

    positions(marginAccountId: string): Promise<Array<string>> {
        return this.eth_call(functions.positions, [marginAccountId])
    }

    withdrawable(marginAccountId: string): Promise<bigint> {
        return this.eth_call(functions.withdrawable, [marginAccountId])
    }
}
