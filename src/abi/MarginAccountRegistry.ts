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
    beacon: new Func<[], {}, string>(
        abi, '0x59659e90'
    ),
    clearing: new Func<[], {}, string>(
        abi, '0x027cb7c6'
    ),
    getMarginAccount: new Func<[collateralAsset: string], {collateralAsset: string}, string>(
        abi, '0x002bc164'
    ),
    initialize: new Func<[clearing_: string, beacon_: string], {clearing_: string, beacon_: string}, []>(
        abi, '0x485cc955'
    ),
    initializeMarginAccount: new Func<[collateralAsset: string], {collateralAsset: string}, string>(
        abi, '0x166fdb38'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
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
}

export class Contract extends ContractBase {

    UPGRADE_INTERFACE_VERSION(): Promise<string> {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, [])
    }

    beacon(): Promise<string> {
        return this.eth_call(functions.beacon, [])
    }

    clearing(): Promise<string> {
        return this.eth_call(functions.clearing, [])
    }

    getMarginAccount(collateralAsset: string): Promise<string> {
        return this.eth_call(functions.getMarginAccount, [collateralAsset])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }
}
