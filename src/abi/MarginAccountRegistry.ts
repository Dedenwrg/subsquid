import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './MarginAccountRegistry.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Initialized: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2'
    ),
    MarginAccountCreated: new LogEvent<([collateralAsset: string, marginAccount: string] & {collateralAsset: string, marginAccount: string})>(
        abi, '0xde4fbb392794f87cd399190cdf8da655d7f40972138f8f1c2245554f0305fad2'
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
    getAdmin: new Func<[], {}, string>(
        abi, '0x6e9960c3'
    ),
    getMarginAccount: new Func<[collateralAsset: string], {collateralAsset: string}, string>(
        abi, '0x002bc164'
    ),
    initialize: new Func<[_clearing: string, _valuation: string, _productRegistry: string, beacon_: string], {_clearing: string, _valuation: string, _productRegistry: string, beacon_: string}, []>(
        abi, '0xf8c8765e'
    ),
    initializeMarginAccount: new Func<[collateralAsset: string], {collateralAsset: string}, string>(
        abi, '0x166fdb38'
    ),
    isAdminActive: new Func<[], {}, boolean>(
        abi, '0x8ea36936'
    ),
    marginAccounts: new Func<[_: string], {}, string>(
        abi, '0x9c498bc3'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    productRegistry: new Func<[], {}, string>(
        abi, '0xfff218c3'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    setActive: new Func<[active: boolean], {active: boolean}, []>(
        abi, '0xacec338a'
    ),
    setAdmin: new Func<[newAdmin: string], {newAdmin: string}, []>(
        abi, '0x704b6c02'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
    valuation: new Func<[], {}, string>(
        abi, '0x21a7cfe4'
    ),
}

export class Contract extends ContractBase {

    UPGRADE_INTERFACE_VERSION(): Promise<string> {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, [])
    }

    clearing(): Promise<string> {
        return this.eth_call(functions.clearing, [])
    }

    getAdmin(): Promise<string> {
        return this.eth_call(functions.getAdmin, [])
    }

    getMarginAccount(collateralAsset: string): Promise<string> {
        return this.eth_call(functions.getMarginAccount, [collateralAsset])
    }

    isAdminActive(): Promise<boolean> {
        return this.eth_call(functions.isAdminActive, [])
    }

    marginAccounts(arg0: string): Promise<string> {
        return this.eth_call(functions.marginAccounts, [arg0])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    productRegistry(): Promise<string> {
        return this.eth_call(functions.productRegistry, [])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    valuation(): Promise<string> {
        return this.eth_call(functions.valuation, [])
    }
}
