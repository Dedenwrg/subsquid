import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './OracleProvider.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Initialized: new LogEvent<([version: bigint] & {version: bigint})>(
        abi, '0xc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    PriceSubmitted: new LogEvent<([key: string, fsp: bigint, submitter: string] & {key: string, fsp: bigint, submitter: string})>(
        abi, '0x84928512d0c16fd6630642986f6fa385471f8ce198e7241d38c2b9ecd8d616a1'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    UPGRADE_INTERFACE_VERSION: new Func<[], {}, string>(
        abi, '0xad3cb1cc'
    ),
    getAdmin: new Func<[], {}, string>(
        abi, '0x6e9960c3'
    ),
    initialize: new Func<[_productRegistry: string], {_productRegistry: string}, []>(
        abi, '0xc4d66de8'
    ),
    isAdminActive: new Func<[], {}, boolean>(
        abi, '0x8ea36936'
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
    resolve: new Func<[productId: string, _: string], {productId: string}, bigint>(
        abi, '0xca48e9c3'
    ),
    setActive: new Func<[active: boolean], {active: boolean}, []>(
        abi, '0xacec338a'
    ),
    setAdmin: new Func<[admin: string], {admin: string}, []>(
        abi, '0x704b6c02'
    ),
    submit: new Func<[key: string, fsp: bigint], {key: string, fsp: bigint}, []>(
        abi, '0x612ec986'
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

    getAdmin(): Promise<string> {
        return this.eth_call(functions.getAdmin, [])
    }

    isAdminActive(): Promise<boolean> {
        return this.eth_call(functions.isAdminActive, [])
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

    resolve(productId: string, arg1: string): Promise<bigint> {
        return this.eth_call(functions.resolve, [productId, arg1])
    }
}
