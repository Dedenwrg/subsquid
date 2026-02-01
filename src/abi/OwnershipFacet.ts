import * as ethers from 'ethers';
import { LogEvent, Func, ContractBase } from './abi.support';
import { ABI_JSON } from './OwnershipFacet.abi';

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
  'OwnershipTransferred(address,address)': new LogEvent<
    [previousOwner: string, newOwner: string] & { previousOwner: string; newOwner: string }
  >(abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'),
};

export const functions = {
  owner: new Func<[], {}, string>(abi, '0x8da5cb5b'),
  transferOwnership: new Func<[_newOwner: string], { _newOwner: string }, []>(abi, '0xf2fde38b'),
};

export class Contract extends ContractBase {
  owner(): Promise<string> {
    return this.eth_call(functions.owner, []);
  }
}
