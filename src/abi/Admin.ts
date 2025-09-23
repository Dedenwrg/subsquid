import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './Admin.abi'

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
    Upgraded: new LogEvent<([implementation: string] & {implementation: string})>(
        abi, '0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b'
    ),
}

export const functions = {
    DEFAULT_ADMIN_ROLE: new Func<[], {}, string>(
        abi, '0xa217fddf'
    ),
    UPGRADE_INTERFACE_VERSION: new Func<[], {}, string>(
        abi, '0xad3cb1cc'
    ),
    controlledRoles: new Func<[_: string, _: string], {}, string>(
        abi, '0x3d03911f'
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
    initialize: new Func<[], {}, []>(
        abi, '0x8129fc1c'
    ),
    isAuthorized: new Func<[selector: string, sender: string], {selector: string, sender: string}, boolean>(
        abi, '0x9399f09a'
    ),
    proxiableUUID: new Func<[], {}, string>(
        abi, '0x52d1902d'
    ),
    renounceRole: new Func<[role: string, callerConfirmation: string], {role: string, callerConfirmation: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    setActive: new Func<[controlledAddress: string, active: boolean], {controlledAddress: string, active: boolean}, []>(
        abi, '0x2ce962cf'
    ),
    setControlledContract: new Func<[controlledContract: string, selectors: Array<string>, roles: Array<string>], {controlledContract: string, selectors: Array<string>, roles: Array<string>}, []>(
        abi, '0xb87268f6'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    upgradeToAndCall: new Func<[newImplementation: string, data: string], {newImplementation: string, data: string}, []>(
        abi, '0x4f1ef286'
    ),
}

export class Contract extends ContractBase {

    DEFAULT_ADMIN_ROLE(): Promise<string> {
        return this.eth_call(functions.DEFAULT_ADMIN_ROLE, [])
    }

    UPGRADE_INTERFACE_VERSION(): Promise<string> {
        return this.eth_call(functions.UPGRADE_INTERFACE_VERSION, [])
    }

    controlledRoles(arg0: string, arg1: string): Promise<string> {
        return this.eth_call(functions.controlledRoles, [arg0, arg1])
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

    isAuthorized(selector: string, sender: string): Promise<boolean> {
        return this.eth_call(functions.isAuthorized, [selector, sender])
    }

    proxiableUUID(): Promise<string> {
        return this.eth_call(functions.proxiableUUID, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }
}
