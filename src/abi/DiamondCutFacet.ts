import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './DiamondCutFacet.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    DiamondCut: new LogEvent<([_diamondCut: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, _init: string, _calldata: string] & {_diamondCut: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, _init: string, _calldata: string})>(
        abi, '0x8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673'
    ),
}

export const functions = {
    diamondCut: new Func<[_diamondCut: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, _init: string, _calldata: string], {_diamondCut: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, _init: string, _calldata: string}, []>(
        abi, '0x1f931c1c'
    ),
}

export class Contract extends ContractBase {
}
