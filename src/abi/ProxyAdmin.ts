import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './ProxyAdmin.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
}

export const functions = {
    changeProxyAdmin: new Func<[proxy: string, newAdmin: string], {proxy: string, newAdmin: string}, []>(
        abi, '0x7eff275e'
    ),
    getProxyAdmin: new Func<[proxy: string], {proxy: string}, string>(
        abi, '0xf3b7dead'
    ),
    getProxyImplementation: new Func<[proxy: string], {proxy: string}, string>(
        abi, '0x204e1c7a'
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
    upgrade: new Func<[proxy: string, implementation: string], {proxy: string, implementation: string}, []>(
        abi, '0x99a88ec4'
    ),
    upgradeAndCall: new Func<[proxy: string, implementation: string, data: string], {proxy: string, implementation: string, data: string}, []>(
        abi, '0x9623609d'
    ),
}

export class Contract extends ContractBase {

    getProxyAdmin(proxy: string): Promise<string> {
        return this.eth_call(functions.getProxyAdmin, [proxy])
    }

    getProxyImplementation(proxy: string): Promise<string> {
        return this.eth_call(functions.getProxyImplementation, [proxy])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }
}
