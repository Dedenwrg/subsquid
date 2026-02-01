import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './AdminFacet.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AddressUpdated: new LogEvent<([name: string, oldAddress: string, newAddress: string] & {name: string, oldAddress: string, newAddress: string})>(
        abi, '0x7878dffb4ada647885186a00ea129964d140835f125808ba48b1f3974b5f8189'
    ),
    ConfigUpdated: new LogEvent<([oldConfig: ([clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})] & {clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})}), newConfig: ([clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})] & {clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})})] & {oldConfig: ([clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})] & {clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})}), newConfig: ([clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})] & {clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})})})>(
        abi, '0xe4103380e6f19716fb4ecd3ed77d69d460cbb92f17a5206796562e9ab7e7ad28'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
}

export const functions = {
    clearingFeeRate: new Func<[], {}, number>(
        abi, '0x80e56008'
    ),
    closeoutFeeRate: new Func<[], {}, bigint>(
        abi, '0xd15d6f3d'
    ),
    closeoutRewardRate: new Func<[], {}, bigint>(
        abi, '0xacee2f9b'
    ),
    config: new Func<[], {}, ([clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})] & {clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})})>(
        abi, '0x79502c55'
    ),
    getMarginAccountRegistry: new Func<[], {}, string>(
        abi, '0x9cbe7886'
    ),
    getMarkPriceInterval: new Func<[], {}, bigint>(
        abi, '0xd8fb8f77'
    ),
    getProductRegistry: new Func<[], {}, string>(
        abi, '0xa7153c9a'
    ),
    getTreasury: new Func<[], {}, string>(
        abi, '0x3b19e84a'
    ),
    initialize: new Func<[treasury: string, productRegistry: string, marginAccountRegistry: string], {treasury: string, productRegistry: string, marginAccountRegistry: string}, []>(
        abi, '0xc0c53b8b'
    ),
    maxTradingFeeRate: new Func<[], {}, bigint>(
        abi, '0xbdc1c6c1'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    setConfig: new Func<[config_: ([clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})] & {clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})})], {config_: ([clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})] & {clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})})}, []>(
        abi, '0x32592f8b'
    ),
    setMarginAccountRegistry: new Func<[marginAccountRegistry: string], {marginAccountRegistry: string}, []>(
        abi, '0x57c60106'
    ),
    setTreasury: new Func<[treasury: string], {treasury: string}, []>(
        abi, '0xf0f44260'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
}

export class Contract extends ContractBase {

    clearingFeeRate(): Promise<number> {
        return this.eth_call(functions.clearingFeeRate, [])
    }

    closeoutFeeRate(): Promise<bigint> {
        return this.eth_call(functions.closeoutFeeRate, [])
    }

    closeoutRewardRate(): Promise<bigint> {
        return this.eth_call(functions.closeoutRewardRate, [])
    }

    config(): Promise<([clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})] & {clearingConfig: ([clearingFeeRate: number, maxTradingFeeRate: number] & {clearingFeeRate: number, maxTradingFeeRate: number}), markPriceConfig: ([markPriceInterval: bigint] & {markPriceInterval: bigint}), finalSettlementConfig: ([closeoutFeeRate: bigint, closeoutRewardRate: bigint] & {closeoutFeeRate: bigint, closeoutRewardRate: bigint}), productConfig: ([clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint] & {clearingPayoutRatio: number, maintenanceDepositInterval: number, minProductMaintenanceFee: bigint})})> {
        return this.eth_call(functions.config, [])
    }

    getMarginAccountRegistry(): Promise<string> {
        return this.eth_call(functions.getMarginAccountRegistry, [])
    }

    getMarkPriceInterval(): Promise<bigint> {
        return this.eth_call(functions.getMarkPriceInterval, [])
    }

    getProductRegistry(): Promise<string> {
        return this.eth_call(functions.getProductRegistry, [])
    }

    getTreasury(): Promise<string> {
        return this.eth_call(functions.getTreasury, [])
    }

    maxTradingFeeRate(): Promise<bigint> {
        return this.eth_call(functions.maxTradingFeeRate, [])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }
}
