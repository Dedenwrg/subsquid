import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './DiamondLoupeFacet.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const functions = {
    facetAddress: new Func<[_functionSelector: string], {_functionSelector: string}, string>(
        abi, '0xcdffacc6'
    ),
    facetAddresses: new Func<[], {}, Array<string>>(
        abi, '0x52ef6b2c'
    ),
    facetFunctionSelectors: new Func<[_facet: string], {_facet: string}, Array<string>>(
        abi, '0xadfca15e'
    ),
    facets: new Func<[], {}, Array<([facetAddress: string, functionSelectors: Array<string>] & {facetAddress: string, functionSelectors: Array<string>})>>(
        abi, '0x7a0ed627'
    ),
    supportsInterface: new Func<[_interfaceId: string], {_interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
}

export class Contract extends ContractBase {

    facetAddress(_functionSelector: string): Promise<string> {
        return this.eth_call(functions.facetAddress, [_functionSelector])
    }

    facetAddresses(): Promise<Array<string>> {
        return this.eth_call(functions.facetAddresses, [])
    }

    facetFunctionSelectors(_facet: string): Promise<Array<string>> {
        return this.eth_call(functions.facetFunctionSelectors, [_facet])
    }

    facets(): Promise<Array<([facetAddress: string, functionSelectors: Array<string>] & {facetAddress: string, functionSelectors: Array<string>})>> {
        return this.eth_call(functions.facets, [])
    }

    supportsInterface(_interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [_interfaceId])
    }
}
