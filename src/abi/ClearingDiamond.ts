import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './ClearingDiamond.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    DiamondCut: new LogEvent<([_diamondCut: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, _init: string, _calldata: string] & {_diamondCut: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, _init: string, _calldata: string})>(
        abi, '0x8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
}

export class Contract extends ContractBase {
}
