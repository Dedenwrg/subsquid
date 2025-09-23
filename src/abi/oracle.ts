import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './oracle.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    CallFailed: new LogEvent<([to: string, methodSignature: string, returnData: string] & {to: string, methodSignature: string, returnData: string})>(
        abi, '0x1137d8c966ce69b9630fb2294be011f3d64cc56e91fad7d375f0662568e9d352'
    ),
    CommitRevealMissed: new LogEvent<([_voter: string, _round: bigint, _nonRevealCount: bigint] & {_voter: string, _round: bigint, _nonRevealCount: bigint})>(
        abi, '0x176956a4e941f6737f81a3c9a09d8571dd0438d86e25a432beb2013aced43092'
    ),
    ConfigUpdateAddress: new LogEvent<([name: string, oldValue: string, newValue: string, appliesAtHeight: bigint] & {name: string, oldValue: string, newValue: string, appliesAtHeight: bigint})>(
        abi, '0xe821ac8084a7329d09d00cf1380cba50edea5f54a7bd453d49a9c354f565d4a0'
    ),
    ConfigUpdateBool: new LogEvent<([name: string, oldValue: boolean, newValue: boolean, appliesAtHeight: bigint] & {name: string, oldValue: boolean, newValue: boolean, appliesAtHeight: bigint})>(
        abi, '0x5edb308c5eddc69bcd31b4e689c5eed2fbd3155ae57915d1cad05425f6c1a39b'
    ),
    ConfigUpdateInt: new LogEvent<([name: string, oldValue: bigint, newValue: bigint, appliesAtHeight: bigint] & {name: string, oldValue: bigint, newValue: bigint, appliesAtHeight: bigint})>(
        abi, '0xb5114472b89d1126433287defb6308bbabdb95b6ce5dd949ab2c151ed7b1ff4c'
    ),
    ConfigUpdateUint: new LogEvent<([name: string, oldValue: bigint, newValue: bigint, appliesAtHeight: bigint] & {name: string, oldValue: bigint, newValue: bigint, appliesAtHeight: bigint})>(
        abi, '0x207e45ce6f2191c3efffe5d0d91591cf81afd23cbf4bd746981d7a8a8dcfe1ba'
    ),
    InvalidVote: new LogEvent<([cause: string, reporter: string, expValue: bigint, actualValue: bigint, extra: number] & {cause: string, reporter: string, expValue: bigint, actualValue: bigint, extra: number})>(
        abi, '0x04ca4e0efda95f8b780c116574d1521309010b38d8f7b75705495703a0f570b1'
    ),
    NewRound: new LogEvent<([_round: bigint, _timestamp: bigint, _votePeriod: bigint] & {_round: bigint, _timestamp: bigint, _votePeriod: bigint})>(
        abi, '0x5aec57d81928b24d30b1a2aec0d23d693412c37d7ec106b5d8259413716bb1f4'
    ),
    NewSymbols: new LogEvent<([_symbols: Array<string>, _round: bigint] & {_symbols: Array<string>, _round: bigint})>(
        abi, '0xaa278e424da680ce5dad66510415760e78e0bd87d45c786c6e88bdde82f9342d'
    ),
    NewVoter: new LogEvent<([reporter: string, extra: number] & {reporter: string, extra: number})>(
        abi, '0xd2ec8e890a03083998d3e16f98044fd3dd13fe3e61b7bc2e58ee6da43b50af73'
    ),
    NoRevealPenalty: new LogEvent<([_voter: string, _round: bigint, _missedReveal: bigint] & {_voter: string, _round: bigint, _missedReveal: bigint})>(
        abi, '0x9e6b40f10c60d1ad09594f3b6ed7043d0e978f584d354ace6e1f6025660c42b1'
    ),
    Penalized: new LogEvent<([_participant: string, _slashingAmount: bigint, _symbol: string, _median: bigint, _reported: bigint] & {_participant: string, _slashingAmount: bigint, _symbol: string, _median: bigint, _reported: bigint})>(
        abi, '0x372858b237c8bd0714183e8351a461d6c3cb1ef83806181b36bf5943711f4f57'
    ),
    PriceUpdated: new LogEvent<([price: bigint, round: bigint, symbol: string, status: boolean, timestamp: bigint] & {price: bigint, round: bigint, symbol: string, status: boolean, timestamp: bigint})>(
        abi, '0x5f2aa51aa7889ad71d9318fa7fd83c8ff3277434249bd06073f15986e197911c'
    ),
    SuccessfulVote: new LogEvent<([reporter: string, extra: number] & {reporter: string, extra: number})>(
        abi, '0x8bdddd7f2f2c74679ffa6beb8f86aa18bfa5baf1bfaf534d0b66596babc53f08'
    ),
    TotalOracleRewards: new LogEvent<([ntnReward: bigint, atnReward: bigint] & {ntnReward: bigint, atnReward: bigint})>(
        abi, '0x3e5aaff9e8fd4293ae18127809c2d4069d87fe10c7de92aa39557a1edbd48fec'
    ),
}

export const functions = {
    distributeRewards: new Func<[_ntn: bigint], {_ntn: bigint}, []>(
        abi, '0x59974e38'
    ),
    finalize: new Func<[], {}, boolean>(
        abi, '0x4bb278f3'
    ),
    getConfig: new Func<[], {}, ([autonity: string, operator: string, votePeriod: bigint, outlierDetectionThreshold: bigint, outlierSlashingThreshold: bigint, baseSlashingRate: bigint, nonRevealThreshold: bigint, revealResetInterval: bigint, slashingRateCap: bigint] & {autonity: string, operator: string, votePeriod: bigint, outlierDetectionThreshold: bigint, outlierSlashingThreshold: bigint, baseSlashingRate: bigint, nonRevealThreshold: bigint, revealResetInterval: bigint, slashingRateCap: bigint})>(
        abi, '0xc3f909d4'
    ),
    getDecimals: new Func<[], {}, number>(
        abi, '0xf0141d84'
    ),
    getLastRoundBlock: new Func<[], {}, bigint>(
        abi, '0x5a4d3a27'
    ),
    getNewVotePeriod: new Func<[], {}, bigint>(
        abi, '0x57eba759'
    ),
    getNewVoters: new Func<[], {}, Array<string>>(
        abi, '0x077945d3'
    ),
    getNonRevealThreshold: new Func<[], {}, bigint>(
        abi, '0xed78349d'
    ),
    getReports: new Func<[_symbol: string, _voter: string], {_symbol: string, _voter: string}, ([price: bigint, confidence: number] & {price: bigint, confidence: number})>(
        abi, '0xfb09917e'
    ),
    getRewardPeriodPerformance: new Func<[_voter: string], {_voter: string}, bigint>(
        abi, '0x33d16293'
    ),
    getRound: new Func<[], {}, bigint>(
        abi, '0x9f8743f7'
    ),
    getRoundData: new Func<[_round: bigint, _symbol: string], {_round: bigint, _symbol: string}, ([round: bigint, price: bigint, timestamp: bigint, success: boolean] & {round: bigint, price: bigint, timestamp: bigint, success: boolean})>(
        abi, '0x3c8510fd'
    ),
    getSymbolUpdatedRound: new Func<[], {}, bigint>(
        abi, '0x99b0014b'
    ),
    getSymbols: new Func<[], {}, Array<string>>(
        abi, '0xdf7f710e'
    ),
    getVotePeriod: new Func<[], {}, bigint>(
        abi, '0xb78dec52'
    ),
    getVoterInfo: new Func<[_voter: string], {_voter: string}, ([round: bigint, commit: bigint, performance: bigint, nonRevealCount: bigint, isVoter: boolean, reportAvailable: boolean] & {round: bigint, commit: bigint, performance: bigint, nonRevealCount: bigint, isVoter: boolean, reportAvailable: boolean})>(
        abi, '0x9ed1f255'
    ),
    getVoterTreasuries: new Func<[_oracleAddress: string], {_oracleAddress: string}, string>(
        abi, '0xef5cc4d1'
    ),
    getVoterValidators: new Func<[_oracleAddress: string], {_oracleAddress: string}, string>(
        abi, '0x2d35d158'
    ),
    getVoters: new Func<[], {}, Array<string>>(
        abi, '0xcdd72253'
    ),
    latestRoundData: new Func<[_symbol: string], {_symbol: string}, ([round: bigint, price: bigint, timestamp: bigint, success: boolean] & {round: bigint, price: bigint, timestamp: bigint, success: boolean})>(
        abi, '0x33f98c77'
    ),
    setCommitRevealConfig: new Func<[_threshold: bigint, _resetInterval: bigint], {_threshold: bigint, _resetInterval: bigint}, []>(
        abi, '0x3f422ef3'
    ),
    setOperator: new Func<[_operator: string], {_operator: string}, []>(
        abi, '0xb3ab15fb'
    ),
    setSlashingConfig: new Func<[_outlierSlashingThreshold: bigint, _outlierDetectionThreshold: bigint, _baseSlashingRate: bigint, _slashingRateCap: bigint], {_outlierSlashingThreshold: bigint, _outlierDetectionThreshold: bigint, _baseSlashingRate: bigint, _slashingRateCap: bigint}, []>(
        abi, '0xda39fbfe'
    ),
    setSymbols: new Func<[_symbols: Array<string>], {_symbols: Array<string>}, []>(
        abi, '0x8d4f75d2'
    ),
    setVotePeriod: new Func<[_votePeriod: bigint], {_votePeriod: bigint}, []>(
        abi, '0x67b11630'
    ),
    setVoters: new Func<[_newVoters: Array<string>, _treasury: Array<string>, _validator: Array<string>], {_newVoters: Array<string>, _treasury: Array<string>, _validator: Array<string>}, []>(
        abi, '0xda78110e'
    ),
    updateVotersAndSymbol: new Func<[], {}, []>(
        abi, '0x0f65875c'
    ),
    vote: new Func<[_commit: bigint, _reports: Array<([price: bigint, confidence: number] & {price: bigint, confidence: number})>, _salt: bigint, _extra: number], {_commit: bigint, _reports: Array<([price: bigint, confidence: number] & {price: bigint, confidence: number})>, _salt: bigint, _extra: number}, []>(
        abi, '0x56833ebe'
    ),
}

export class Contract extends ContractBase {

    getConfig(): Promise<([autonity: string, operator: string, votePeriod: bigint, outlierDetectionThreshold: bigint, outlierSlashingThreshold: bigint, baseSlashingRate: bigint, nonRevealThreshold: bigint, revealResetInterval: bigint, slashingRateCap: bigint] & {autonity: string, operator: string, votePeriod: bigint, outlierDetectionThreshold: bigint, outlierSlashingThreshold: bigint, baseSlashingRate: bigint, nonRevealThreshold: bigint, revealResetInterval: bigint, slashingRateCap: bigint})> {
        return this.eth_call(functions.getConfig, [])
    }

    getDecimals(): Promise<number> {
        return this.eth_call(functions.getDecimals, [])
    }

    getLastRoundBlock(): Promise<bigint> {
        return this.eth_call(functions.getLastRoundBlock, [])
    }

    getNewVotePeriod(): Promise<bigint> {
        return this.eth_call(functions.getNewVotePeriod, [])
    }

    getNewVoters(): Promise<Array<string>> {
        return this.eth_call(functions.getNewVoters, [])
    }

    getNonRevealThreshold(): Promise<bigint> {
        return this.eth_call(functions.getNonRevealThreshold, [])
    }

    getReports(_symbol: string, _voter: string): Promise<([price: bigint, confidence: number] & {price: bigint, confidence: number})> {
        return this.eth_call(functions.getReports, [_symbol, _voter])
    }

    getRewardPeriodPerformance(_voter: string): Promise<bigint> {
        return this.eth_call(functions.getRewardPeriodPerformance, [_voter])
    }

    getRound(): Promise<bigint> {
        return this.eth_call(functions.getRound, [])
    }

    getRoundData(_round: bigint, _symbol: string): Promise<([round: bigint, price: bigint, timestamp: bigint, success: boolean] & {round: bigint, price: bigint, timestamp: bigint, success: boolean})> {
        return this.eth_call(functions.getRoundData, [_round, _symbol])
    }

    getSymbolUpdatedRound(): Promise<bigint> {
        return this.eth_call(functions.getSymbolUpdatedRound, [])
    }

    getSymbols(): Promise<Array<string>> {
        return this.eth_call(functions.getSymbols, [])
    }

    getVotePeriod(): Promise<bigint> {
        return this.eth_call(functions.getVotePeriod, [])
    }

    getVoterInfo(_voter: string): Promise<([round: bigint, commit: bigint, performance: bigint, nonRevealCount: bigint, isVoter: boolean, reportAvailable: boolean] & {round: bigint, commit: bigint, performance: bigint, nonRevealCount: bigint, isVoter: boolean, reportAvailable: boolean})> {
        return this.eth_call(functions.getVoterInfo, [_voter])
    }

    getVoterTreasuries(_oracleAddress: string): Promise<string> {
        return this.eth_call(functions.getVoterTreasuries, [_oracleAddress])
    }

    getVoterValidators(_oracleAddress: string): Promise<string> {
        return this.eth_call(functions.getVoterValidators, [_oracleAddress])
    }

    getVoters(): Promise<Array<string>> {
        return this.eth_call(functions.getVoters, [])
    }

    latestRoundData(_symbol: string): Promise<([round: bigint, price: bigint, timestamp: bigint, success: boolean] & {round: bigint, price: bigint, timestamp: bigint, success: boolean})> {
        return this.eth_call(functions.latestRoundData, [_symbol])
    }
}
