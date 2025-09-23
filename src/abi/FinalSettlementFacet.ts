import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './FinalSettlementFacet.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    FSPFinalized: new LogEvent<([productID: string, fsp: bigint] & {productID: string, fsp: bigint})>(
        abi, '0x994435ce1c088ed5bded85f72776500e89a98c381b0e8098357ae89c7e23d27e'
    ),
    FinalSettlementCloseout: new LogEvent<([productID: string, accountLength: bigint, closedBy: string] & {productID: string, accountLength: bigint, closedBy: string})>(
        abi, '0xa324297bf52afc6cf144742a0ae133f305a59974633f525ba2399bbad23a6d89'
    ),
}

export const functions = {
    CLOSEOUT_FEE_RATE: new Func<[], {}, bigint>(
        abi, '0x85db6dc9'
    ),
    CLOSEOUT_REWARD_RATE: new Func<[], {}, bigint>(
        abi, '0xbc0928e8'
    ),
    finalizeFsp: new Func<[productID: string], {productID: string}, bigint>(
        abi, '0x899827cc'
    ),
    getFsp: new Func<[productId: string], {productId: string}, ([fsp: bigint, finalized: boolean] & {fsp: bigint, finalized: boolean})>(
        abi, '0x8097cb5a'
    ),
    initiateFinalSettlement: new Func<[productID: string, accounts: Array<string>], {productID: string, accounts: Array<string>}, []>(
        abi, '0x75c2db48'
    ),
    openInterest: new Func<[productId: string], {productId: string}, bigint>(
        abi, '0x31d860bc'
    ),
}

export class Contract extends ContractBase {

    CLOSEOUT_FEE_RATE(): Promise<bigint> {
        return this.eth_call(functions.CLOSEOUT_FEE_RATE, [])
    }

    CLOSEOUT_REWARD_RATE(): Promise<bigint> {
        return this.eth_call(functions.CLOSEOUT_REWARD_RATE, [])
    }

    getFsp(productId: string): Promise<([fsp: bigint, finalized: boolean] & {fsp: bigint, finalized: boolean})> {
        return this.eth_call(functions.getFsp, [productId])
    }

    openInterest(productId: string): Promise<bigint> {
        return this.eth_call(functions.openInterest, [productId])
    }
}
