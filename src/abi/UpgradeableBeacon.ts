import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './UpgradeableBeacon.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    implementation: new Func<[], {}, string>(
        abi, '0x5c60da1b'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    upgradeTo: new Func<[newImplementation: string], {newImplementation: string}, []>(
        abi, '0x3659cfe6'
    ),
}

export class Contract extends ContractBase {

    implementation(): Promise<string> {
        return this.eth_call(functions.implementation, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }
}
