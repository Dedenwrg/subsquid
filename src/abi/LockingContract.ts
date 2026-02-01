import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './LockingContract.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AdminChanged: new LogEvent<([newAdmin: string, oldAdmin: string] & {newAdmin: string, oldAdmin: string})>(
        abi, '0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f'
    ),
    BeneficiaryChanged: new LogEvent<([newBeneficiary: string, oldBeneficiary: string] & {newBeneficiary: string, oldBeneficiary: string})>(
        abi, '0x768099735d1c322a05a5b9d7b76d99682a1833d3f7055e5ede25e0f2eeaa8c6d'
    ),
    FundsReleaseSummary: new LogEvent<([beneficiary: string, availableValue: bigint, requestedAmount: bigint, transferred: bigint, remaining: bigint, reason: number] & {beneficiary: string, availableValue: bigint, requestedAmount: bigint, transferred: bigint, remaining: bigint, reason: number})>(
        abi, '0xb19316214d9e28227641ca749a201b334fb33066fa8537dd222a365e5e073f9e'
    ),
    FundsReleased: new LogEvent<([to: string, token: string, amount: bigint] & {to: string, token: string, amount: bigint})>(
        abi, '0xeed10c470424824e4a4309075162f10b9989088b23fbed2349698cedd44493fb'
    ),
    StakingRewardReleased: new LogEvent<([to: string, token: string, amount: bigint] & {to: string, token: string, amount: bigint})>(
        abi, '0x11b4e595bfd0643aafcf9f7f5e43daa6e7a42a11602def3713bfa797e8308692'
    ),
}

export const functions = {
    accruedFunds: new Func<[], {}, bigint>(
        abi, '0x1bc77a74'
    ),
    addValidators: new Func<[validators: Array<string>], {validators: Array<string>}, []>(
        abi, '0x70223952'
    ),
    bond: new Func<[validator: string, amount: bigint], {validator: string, amount: bigint}, bigint>(
        abi, '0xa515366a'
    ),
    changeContractAdmin: new Func<[newAdmin: string], {newAdmin: string}, []>(
        abi, '0x4e0327e4'
    ),
    changeContractBeneficiary: new Func<[newBeneficiary: string], {newBeneficiary: string}, []>(
        abi, '0xe2bb8234'
    ),
    claimATNRewards: new Func<[validator: string], {validator: string}, []>(
        abi, '0x868a14ee'
    ),
    claimAllATNRewards: new Func<[], {}, []>(
        abi, '0xe4d9b24c'
    ),
    claimAllRewards: new Func<[], {}, []>(
        abi, '0x0b83a727'
    ),
    claimAllStakingRewards: new Func<[], {}, []>(
        abi, '0x5b9b8b63'
    ),
    claimStakingRewards: new Func<[amount: bigint], {amount: bigint}, bigint>(
        abi, '0x8fad2627'
    ),
    contractTotalValue: new Func<[], {}, bigint>(
        abi, '0x3c4fc272'
    ),
    getBeneficiary: new Func<[], {}, string>(
        abi, '0x565a2e2c'
    ),
    getContract: new Func<[], {}, ([unlockingProfile: ([ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint] & {ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint}), recipientProfile: ([admin: string, beneficiary: string, allowChangeBeneficiary: boolean] & {admin: string, beneficiary: string, allowChangeBeneficiary: boolean}), valuationProfile: ([totalShare: bigint, withdrawnShare: bigint] & {totalShare: bigint, withdrawnShare: bigint}), stakingProfile: ([stakingStartTime: bigint, canStake: boolean] & {stakingStartTime: bigint, canStake: boolean}), deployTimestamp: bigint] & {unlockingProfile: ([ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint] & {ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint}), recipientProfile: ([admin: string, beneficiary: string, allowChangeBeneficiary: boolean] & {admin: string, beneficiary: string, allowChangeBeneficiary: boolean}), valuationProfile: ([totalShare: bigint, withdrawnShare: bigint] & {totalShare: bigint, withdrawnShare: bigint}), stakingProfile: ([stakingStartTime: bigint, canStake: boolean] & {stakingStartTime: bigint, canStake: boolean}), deployTimestamp: bigint})>(
        abi, '0x958f85bd'
    ),
    getLockingFactoryAddress: new Func<[], {}, string>(
        abi, '0x0eedf8c8'
    ),
    getValidatorSet: new Func<[], {}, Array<string>>(
        abi, '0xcf331250'
    ),
    lastBondingEpoch: new Func<[validator: string], {validator: string}, [_: boolean, _: bigint]>(
        abi, '0x0dca1778'
    ),
    lastBondingID: new Func<[validator: string], {validator: string}, [_: boolean, _: bigint]>(
        abi, '0x2469635d'
    ),
    lastUnbondingID: new Func<[validator: string], {validator: string}, [_: boolean, _: bigint]>(
        abi, '0x7a8dcc9f'
    ),
    liquidBalance: new Func<[validator: string], {validator: string}, bigint>(
        abi, '0xa72fb5c0'
    ),
    lockChangeBeneficiary: new Func<[], {}, []>(
        abi, '0xf4d84c96'
    ),
    lockedLiquidBalance: new Func<[validator: string], {validator: string}, bigint>(
        abi, '0xf87e497f'
    ),
    pendingBondingRequestAt: new Func<[index: bigint], {index: bigint}, ([epochID: bigint, validator: string, amount: bigint, requestID: bigint] & {epochID: bigint, validator: string, amount: bigint, requestID: bigint})>(
        abi, '0x90889e6b'
    ),
    pendingBondingRequestCount: new Func<[], {}, bigint>(
        abi, '0xe11a19d9'
    ),
    pendingUnbondingRequestAt: new Func<[index: bigint], {index: bigint}, ([epochID: bigint, validator: string, amount: bigint, requestID: bigint] & {epochID: bigint, validator: string, amount: bigint, requestID: bigint})>(
        abi, '0xd5749820'
    ),
    pendingUnbondingRequestCount: new Func<[], {}, bigint>(
        abi, '0xc7431e99'
    ),
    releaseAllLNTN: new Func<[], {}, []>(
        abi, '0x0b52f809'
    ),
    releaseAllNTN: new Func<[], {}, []>(
        abi, '0xb693fc09'
    ),
    releaseFunds: new Func<[], {}, []>(
        abi, '0x69d89575'
    ),
    releaseLNTN: new Func<[validator: string, amount: bigint], {validator: string, amount: bigint}, bigint>(
        abi, '0x3c6f2fa6'
    ),
    releaseNTN: new Func<[amount: bigint], {amount: bigint}, bigint>(
        abi, '0xfc028e36'
    ),
    unbond: new Func<[validator: string, amount: bigint], {validator: string, amount: bigint}, bigint>(
        abi, '0xa5d059ca'
    ),
    unclaimedATNRewards: new Func<[], {}, bigint>(
        abi, '0x8e15d598'
    ),
    unclaimedStakingRewards: new Func<[], {}, bigint>(
        abi, '0x3541de71'
    ),
    unlockedFunds: new Func<[], {}, bigint>(
        abi, '0x54c39e32'
    ),
    unlockedLiquidBalance: new Func<[validator: string], {validator: string}, bigint>(
        abi, '0x591a2adf'
    ),
    updateFundsAndGetContract: new Func<[], {}, ([unlockingProfile: ([ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint] & {ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint}), recipientProfile: ([admin: string, beneficiary: string, allowChangeBeneficiary: boolean] & {admin: string, beneficiary: string, allowChangeBeneficiary: boolean}), valuationProfile: ([totalShare: bigint, withdrawnShare: bigint] & {totalShare: bigint, withdrawnShare: bigint}), stakingProfile: ([stakingStartTime: bigint, canStake: boolean] & {stakingStartTime: bigint, canStake: boolean}), deployTimestamp: bigint] & {unlockingProfile: ([ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint] & {ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint}), recipientProfile: ([admin: string, beneficiary: string, allowChangeBeneficiary: boolean] & {admin: string, beneficiary: string, allowChangeBeneficiary: boolean}), valuationProfile: ([totalShare: bigint, withdrawnShare: bigint] & {totalShare: bigint, withdrawnShare: bigint}), stakingProfile: ([stakingStartTime: bigint, canStake: boolean] & {stakingStartTime: bigint, canStake: boolean}), deployTimestamp: bigint})>(
        abi, '0x46e1448d'
    ),
}

export class Contract extends ContractBase {

    accruedFunds(): Promise<bigint> {
        return this.eth_call(functions.accruedFunds, [])
    }

    contractTotalValue(): Promise<bigint> {
        return this.eth_call(functions.contractTotalValue, [])
    }

    getBeneficiary(): Promise<string> {
        return this.eth_call(functions.getBeneficiary, [])
    }

    getContract(): Promise<([unlockingProfile: ([ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint] & {ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint}), recipientProfile: ([admin: string, beneficiary: string, allowChangeBeneficiary: boolean] & {admin: string, beneficiary: string, allowChangeBeneficiary: boolean}), valuationProfile: ([totalShare: bigint, withdrawnShare: bigint] & {totalShare: bigint, withdrawnShare: bigint}), stakingProfile: ([stakingStartTime: bigint, canStake: boolean] & {stakingStartTime: bigint, canStake: boolean}), deployTimestamp: bigint] & {unlockingProfile: ([ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint] & {ntnBalance: bigint, start: bigint, cliffDuration: bigint, totalDuration: bigint}), recipientProfile: ([admin: string, beneficiary: string, allowChangeBeneficiary: boolean] & {admin: string, beneficiary: string, allowChangeBeneficiary: boolean}), valuationProfile: ([totalShare: bigint, withdrawnShare: bigint] & {totalShare: bigint, withdrawnShare: bigint}), stakingProfile: ([stakingStartTime: bigint, canStake: boolean] & {stakingStartTime: bigint, canStake: boolean}), deployTimestamp: bigint})> {
        return this.eth_call(functions.getContract, [])
    }

    getLockingFactoryAddress(): Promise<string> {
        return this.eth_call(functions.getLockingFactoryAddress, [])
    }

    getValidatorSet(): Promise<Array<string>> {
        return this.eth_call(functions.getValidatorSet, [])
    }

    lastBondingEpoch(validator: string): Promise<[_: boolean, _: bigint]> {
        return this.eth_call(functions.lastBondingEpoch, [validator])
    }

    lastBondingID(validator: string): Promise<[_: boolean, _: bigint]> {
        return this.eth_call(functions.lastBondingID, [validator])
    }

    lastUnbondingID(validator: string): Promise<[_: boolean, _: bigint]> {
        return this.eth_call(functions.lastUnbondingID, [validator])
    }

    liquidBalance(validator: string): Promise<bigint> {
        return this.eth_call(functions.liquidBalance, [validator])
    }

    lockedLiquidBalance(validator: string): Promise<bigint> {
        return this.eth_call(functions.lockedLiquidBalance, [validator])
    }

    pendingBondingRequestAt(index: bigint): Promise<([epochID: bigint, validator: string, amount: bigint, requestID: bigint] & {epochID: bigint, validator: string, amount: bigint, requestID: bigint})> {
        return this.eth_call(functions.pendingBondingRequestAt, [index])
    }

    pendingBondingRequestCount(): Promise<bigint> {
        return this.eth_call(functions.pendingBondingRequestCount, [])
    }

    pendingUnbondingRequestAt(index: bigint): Promise<([epochID: bigint, validator: string, amount: bigint, requestID: bigint] & {epochID: bigint, validator: string, amount: bigint, requestID: bigint})> {
        return this.eth_call(functions.pendingUnbondingRequestAt, [index])
    }

    pendingUnbondingRequestCount(): Promise<bigint> {
        return this.eth_call(functions.pendingUnbondingRequestCount, [])
    }

    unclaimedATNRewards(): Promise<bigint> {
        return this.eth_call(functions.unclaimedATNRewards, [])
    }

    unclaimedStakingRewards(): Promise<bigint> {
        return this.eth_call(functions.unclaimedStakingRewards, [])
    }

    unlockedFunds(): Promise<bigint> {
        return this.eth_call(functions.unlockedFunds, [])
    }

    unlockedLiquidBalance(validator: string): Promise<bigint> {
        return this.eth_call(functions.unlockedLiquidBalance, [validator])
    }
}
