import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './TradingProtocol.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Initialized: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2'
    ),
    RoleAdminChanged: new LogEvent<([role: string, previousAdminRole: string, newAdminRole: string] & {role: string, previousAdminRole: string, newAdminRole: string})>(
        abi, '0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff'
    ),
    RoleGranted: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d'
    ),
    RoleRevoked: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b'
    ),
    SequenceExecuted: new LogEvent<([results: Array<boolean>, errors: Array<string>] & {results: Array<boolean>, errors: Array<string>})>(
        abi, '0x0802ede76f6fad3b47025bab75476459687768d8e15abe0aca1c48cb841081ab'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    TRADE_SUBMITTER_ROLE: new Func<[], {}, string>(
        abi, '0x11439904'
    ),
    UPGRADE_INTERFACE_VERSION: new Func<[], {}, string>(
        abi, '0xad3cb1cc'
    ),
    addTradeSubmitter: new Func<[submitter: string], {submitter: string}, []>(
        abi, '0x2f8ffc72'
    ),
    changeOwner: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xa6f9dae1'
    ),
    deposit: new Func<[marginAccountContract: string, amount: bigint], {marginAccountContract: string, amount: bigint}, []>(
        abi, '0x47e7ef24'
    ),
    execute: new Func<[trade: ([productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>] & {productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>}), fallbackOnFailure: boolean], {trade: ([productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>] & {productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>}), fallbackOnFailure: boolean}, []>(
        abi, '0xcf502bc2'
    ),
    executeSequence: new Func<[trades: Array<([productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>] & {productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>})>, fallbackOnFailure: boolean], {trades: Array<([productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>] & {productID: string, protocolID: string, tradeID: bigint, price: bigint, timestamp: bigint, accounts: Array<string>, quantities: Array<bigint>, feeRates: Array<bigint>, intents: Array<([marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string] & {marginAccountID: string, intentAccountID: string, hash: string, data: ([nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number] & {nonce: bigint, tradingProtocolID: string, productID: string, limitPrice: bigint, quantity: bigint, maxTradingFeeRate: bigint, goodUntil: bigint, side: number}), signature: string})>})>, fallbackOnFailure: boolean}, []>(
        abi, '0x1af1d832'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    getRoleMember: new Func<[role: string, index: bigint], {role: string, index: bigint}, string>(
        abi, '0x9010d07c'
    ),
    getRoleMemberCount: new Func<[role: string], {role: string}, bigint>(
        abi, '0xca15c873'
    ),
    getRoleMembers: new Func<[role: string], {role: string}, Array<string>>(
        abi, '0xa3246ad3'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    initialize: new Func<[clearingAddress: string], {clearingAddress: string}, []>(
        abi, '0xc4d66de8'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
    ),
    removeTradeSubmitter: new Func<[submitter: string], {submitter: string}, []>(
        abi, '0x8c2027fc'
    ),
    renounceRole: new Func<[role: string, callerConfirmation: string], {role: string, callerConfirmation: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
    withdraw: new Func<[marginAccountContract: string, amount: bigint], {marginAccountContract: string, amount: bigint}, []>(
        abi, '0xf3fef3a3'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    TRADE_SUBMITTER_ROLE(): Promise<string> {
        return this.eth_call(functions.TRADE_SUBMITTER_ROLE, [])
    }

    UPGRADE_INTERFACE_VERSION(): Promise<string> {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, [])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    getRoleMember(role: string, index: bigint): Promise<string> {
        return this.eth_call(functions.getRoleMember, [role, index])
    }

    getRoleMemberCount(role: string): Promise<bigint> {
        return this.eth_call(functions.getRoleMemberCount, [role])
    }

    getRoleMembers(role: string): Promise<Array<string>> {
        return this.eth_call(functions.getRoleMembers, [role])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }
}
