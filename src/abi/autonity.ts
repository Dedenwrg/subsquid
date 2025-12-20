import * as ethers from 'ethers';
import { LogEvent, Func, ContractBase } from './abi.support';
import { ABI_JSON } from './autonity.abi';

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
  ActivatedValidator: new LogEvent<
    [treasury: string, addr: string, effectiveBlock: bigint] & {
      treasury: string;
      addr: string;
      effectiveBlock: bigint;
    }
  >(abi, '0x60fcbf2d07dc712a93e59fb28f1edb626d7c2497c57ba71a8c0b3999ecb9a3b5'),
  Approval: new LogEvent<
    [owner: string, spender: string, value: bigint] & {
      owner: string;
      spender: string;
      value: bigint;
    }
  >(abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'),
  BondingApproval: new LogEvent<
    [_owner: string, _caller: string, _value: bigint] & {
      _owner: string;
      _caller: string;
      _value: bigint;
    }
  >(abi, '0x78225b0c38a851deb4e94d5318d250e0add756beaec6e85252429c41ed55f8ea'),
  BondingRejected: new LogEvent<
    [validator: string, delegator: string, amount: bigint, state: number] & {
      validator: string;
      delegator: string;
      amount: bigint;
      state: number;
    }
  >(abi, '0x1ff2b052afa4bb37ce30d9aaccde416a700b97e632d089111749af937f878342'),
  BurnedStake: new LogEvent<[addr: string, amount: bigint] & { addr: string; amount: bigint }>(
    abi,
    '0x5024dbeedf0c06664c9bd7be836915730c955e936972c020683dadf11d5488a3',
  ),
  CallFailed: new LogEvent<
    [to: string, methodSignature: string, returnData: string] & {
      to: string;
      methodSignature: string;
      returnData: string;
    }
  >(abi, '0x1137d8c966ce69b9630fb2294be011f3d64cc56e91fad7d375f0662568e9d352'),
  CommissionRateChange: new LogEvent<
    [validator: string, rate: bigint] & { validator: string; rate: bigint }
  >(abi, '0x4fba51c92fa3d6ad8374d394f6cd5766857552e153d7384a8f23aa4ce9a8a7cf'),
  ConfigUpdateAddress: new LogEvent<
    [name: string, oldValue: string, newValue: string, appliesAtHeight: bigint] & {
      name: string;
      oldValue: string;
      newValue: string;
      appliesAtHeight: bigint;
    }
  >(abi, '0xe821ac8084a7329d09d00cf1380cba50edea5f54a7bd453d49a9c354f565d4a0'),
  ConfigUpdateBool: new LogEvent<
    [name: string, oldValue: boolean, newValue: boolean, appliesAtHeight: bigint] & {
      name: string;
      oldValue: boolean;
      newValue: boolean;
      appliesAtHeight: bigint;
    }
  >(abi, '0x5edb308c5eddc69bcd31b4e689c5eed2fbd3155ae57915d1cad05425f6c1a39b'),
  ConfigUpdateInt: new LogEvent<
    [name: string, oldValue: bigint, newValue: bigint, appliesAtHeight: bigint] & {
      name: string;
      oldValue: bigint;
      newValue: bigint;
      appliesAtHeight: bigint;
    }
  >(abi, '0xb5114472b89d1126433287defb6308bbabdb95b6ce5dd949ab2c151ed7b1ff4c'),
  ConfigUpdateUint: new LogEvent<
    [name: string, oldValue: bigint, newValue: bigint, appliesAtHeight: bigint] & {
      name: string;
      oldValue: bigint;
      newValue: bigint;
      appliesAtHeight: bigint;
    }
  >(abi, '0x207e45ce6f2191c3efffe5d0d91591cf81afd23cbf4bd746981d7a8a8dcfe1ba'),
  Eip1559ParamsUpdate: new LogEvent<
    [
      oldParams: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      },
      newParams: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      },
    ] & {
      oldParams: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      };
      newParams: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      };
    }
  >(abi, '0xa1a63f0900be3abc55a58106fb99ccb53c1cdeaee2488038528f520d142563cc'),
  EnodeUpdate: new LogEvent<
    [validator: string, oldEnode: string, newEnode: string] & {
      validator: string;
      oldEnode: string;
      newEnode: string;
    }
  >(abi, '0x0693af84e99c5d55723f139a6badcfffa980bb354cf9c32bd5da745e9edaa46b'),
  EpochPeriodUpdated: new LogEvent<
    [period: bigint, appliedAtBlock: bigint] & { period: bigint; appliedAtBlock: bigint }
  >(abi, '0x2eea6438d890c8603d4df81ad1bad2a4ea45c02b4837165f461ff3c81603abc7'),
  MintedStake: new LogEvent<[addr: string, amount: bigint] & { addr: string; amount: bigint }>(
    abi,
    '0x48490b4407bb949b708ec5f514b4167f08f4969baaf78d53b05028adf369bfcf',
  ),
  NewBondingRequest: new LogEvent<
    [
      validator: string,
      delegator: string,
      caller: string,
      selfBonded: boolean,
      amount: bigint,
      headBondingID: bigint,
    ] & {
      validator: string;
      delegator: string;
      caller: string;
      selfBonded: boolean;
      amount: bigint;
      headBondingID: bigint;
    }
  >(abi, '0xcedee1b81e707f05d3f5f6b965053c24ce7759214e4886d87c02e0261367d1f2'),
  NewEpoch: new LogEvent<
    [epoch: bigint, inflationReserve: bigint, stakeCirculating: bigint] & {
      epoch: bigint;
      inflationReserve: bigint;
      stakeCirculating: bigint;
    }
  >(abi, '0x3bb7b347508b7c148ec2094ac60d2e3d8b7595421025643f08b45cb78b326b58'),
  NewSchedule: new LogEvent<
    [scheduleVault: string, amount: bigint, start: bigint, totalDuration: bigint] & {
      scheduleVault: string;
      amount: bigint;
      start: bigint;
      totalDuration: bigint;
    }
  >(abi, '0xe8c9fd2e555ad3e633f249786eff2a2a523c05e21f497fbf8daadfb2e78a1edd'),
  NewUnbondingRequest: new LogEvent<
    [
      validator: string,
      delegator: string,
      caller: string,
      selfBonded: boolean,
      amount: bigint,
      headUnbondingID: bigint,
    ] & {
      validator: string;
      delegator: string;
      caller: string;
      selfBonded: boolean;
      amount: bigint;
      headUnbondingID: bigint;
    }
  >(abi, '0x58cac3f318ed4be30304429f66e0d6794a95041b92ebe8d35ec0d0abcf1b593c'),
  PausedValidator: new LogEvent<
    [treasury: string, addr: string, effectiveBlock: bigint] & {
      treasury: string;
      addr: string;
      effectiveBlock: bigint;
    }
  >(abi, '0x75bdcdbe540758778e669d108fbcb7ede734f27f46e4e5525eeb8ecf91849a9c'),
  RegisteredValidator: new LogEvent<
    [
      treasury: string,
      addr: string,
      oracleAddress: string,
      enode: string,
      liquidStateContract: string,
    ] & {
      treasury: string;
      addr: string;
      oracleAddress: string;
      enode: string;
      liquidStateContract: string;
    }
  >(abi, '0x8ad8bd2eb6950e5f332fd3a6dca48cb358ecfe3057848902b98cbdfe455c915c'),
  Rewarded: new LogEvent<
    [
      addr: string,
      atnSelfAmount: bigint,
      atnDelegatedAmount: bigint,
      ntnSelfAmount: bigint,
      ntnDelegatedAmount: bigint,
    ] & {
      addr: string;
      atnSelfAmount: bigint;
      atnDelegatedAmount: bigint;
      ntnSelfAmount: bigint;
      ntnDelegatedAmount: bigint;
    }
  >(abi, '0x5d4e9c803c111cc5e507b1cd7ffb638d0084c4d0696bb89a39434637ce31b4d5'),
  Transfer: new LogEvent<
    [from: string, to: string, value: bigint] & { from: string; to: string; value: bigint }
  >(abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'),
};

export const functions = {
  STANDARD_DECIMALS: new Func<[], {}, bigint>(abi, '0xf3c70aad'),
  STANDARD_SCALE_FACTOR: new Func<[], {}, bigint>(abi, '0xd144f00a'),
  activateValidator: new Func<[_address: string], { _address: string }, []>(abi, '0xb46e5520'),
  allowance: new Func<[owner: string, spender: string], { owner: string; spender: string }, bigint>(
    abi,
    '0xdd62ed3e',
  ),
  approve: new Func<
    [spender: string, amount: bigint],
    { spender: string; amount: bigint },
    boolean
  >(abi, '0x095ea7b3'),
  approveBonding: new Func<
    [_caller: string, _amount: bigint],
    { _caller: string; _amount: bigint },
    boolean
  >(abi, '0x50492571'),
  autobond: new Func<
    [_validator: string, _selfBond: bigint, _delegated: bigint],
    { _validator: string; _selfBond: bigint; _delegated: bigint },
    []
  >(abi, '0xf7fcc510'),
  balanceOf: new Func<[_addr: string], { _addr: string }, bigint>(abi, '0x70a08231'),
  bond: new Func<
    [_validator: string, _amount: bigint],
    { _validator: string; _amount: bigint },
    bigint
  >(abi, '0xa515366a'),
  bondFrom: new Func<
    [_account: string, _validator: string, _amount: bigint],
    { _account: string; _validator: string; _amount: bigint },
    bigint
  >(abi, '0x41de7400'),
  bondingAllowance: new Func<
    [_owner: string, _caller: string],
    { _owner: string; _caller: string },
    bigint
  >(abi, '0xe0e01d54'),
  burn: new Func<[_addr: string, _amount: bigint], { _addr: string; _amount: bigint }, []>(
    abi,
    '0x9dc29fac',
  ),
  changeCommissionRate: new Func<
    [_validator: string, _rate: bigint],
    { _validator: string; _rate: bigint },
    []
  >(abi, '0x852c4849'),
  circulatingSupply: new Func<[], {}, bigint>(abi, '0x9358928b'),
  completeContractUpgrade: new Func<[], {}, []>(abi, '0x872cf059'),
  createSchedule: new Func<
    [_scheduleVault: string, _amount: bigint, _startTime: bigint, _totalDuration: bigint],
    { _scheduleVault: string; _amount: bigint; _startTime: bigint; _totalDuration: bigint },
    []
  >(abi, '0x354c40a7'),
  decimals: new Func<[], {}, number>(abi, '0x313ce567'),
  finalize: new Func<
    [],
    {},
    [
      contractUpgradeReady: boolean,
      epochEnded: boolean,
      epoch: [
        committee: Array<
          [addr: string, votingPower: bigint, consensusKey: string] & {
            addr: string;
            votingPower: bigint;
            consensusKey: string;
          }
        >,
        previousEpochBlock: bigint,
        epochBlock: bigint,
        nextEpochBlock: bigint,
        omissionDelta: bigint,
        eip1559: [
          minBaseFee: bigint,
          baseFeeChangeDenominator: bigint,
          elasticityMultiplier: bigint,
          gasLimitBoundDivisor: bigint,
        ] & {
          minBaseFee: bigint;
          baseFeeChangeDenominator: bigint;
          elasticityMultiplier: bigint;
          gasLimitBoundDivisor: bigint;
        },
      ] & {
        committee: Array<
          [addr: string, votingPower: bigint, consensusKey: string] & {
            addr: string;
            votingPower: bigint;
            consensusKey: string;
          }
        >;
        previousEpochBlock: bigint;
        epochBlock: bigint;
        nextEpochBlock: bigint;
        omissionDelta: bigint;
        eip1559: [
          minBaseFee: bigint,
          baseFeeChangeDenominator: bigint,
          elasticityMultiplier: bigint,
          gasLimitBoundDivisor: bigint,
        ] & {
          minBaseFee: bigint;
          baseFeeChangeDenominator: bigint;
          elasticityMultiplier: bigint;
          gasLimitBoundDivisor: bigint;
        };
      },
      config: [
        epochPeriod: bigint,
        blockPeriod: bigint,
        gasLimit: bigint,
        clusteringThreshold: bigint,
        accountability: [range: bigint, delta: bigint, gracePeriod: bigint] & {
          range: bigint;
          delta: bigint;
          gracePeriod: bigint;
        },
        eip1559: [
          minBaseFee: bigint,
          baseFeeChangeDenominator: bigint,
          elasticityMultiplier: bigint,
          gasLimitBoundDivisor: bigint,
        ] & {
          minBaseFee: bigint;
          baseFeeChangeDenominator: bigint;
          elasticityMultiplier: bigint;
          gasLimitBoundDivisor: bigint;
        },
      ] & {
        epochPeriod: bigint;
        blockPeriod: bigint;
        gasLimit: bigint;
        clusteringThreshold: bigint;
        accountability: [range: bigint, delta: bigint, gracePeriod: bigint] & {
          range: bigint;
          delta: bigint;
          gracePeriod: bigint;
        };
        eip1559: [
          minBaseFee: bigint,
          baseFeeChangeDenominator: bigint,
          elasticityMultiplier: bigint,
          gasLimitBoundDivisor: bigint,
        ] & {
          minBaseFee: bigint;
          baseFeeChangeDenominator: bigint;
          elasticityMultiplier: bigint;
          gasLimitBoundDivisor: bigint;
        };
      },
    ] & {
      contractUpgradeReady: boolean;
      epochEnded: boolean;
      epoch: [
        committee: Array<
          [addr: string, votingPower: bigint, consensusKey: string] & {
            addr: string;
            votingPower: bigint;
            consensusKey: string;
          }
        >,
        previousEpochBlock: bigint,
        epochBlock: bigint,
        nextEpochBlock: bigint,
        omissionDelta: bigint,
        eip1559: [
          minBaseFee: bigint,
          baseFeeChangeDenominator: bigint,
          elasticityMultiplier: bigint,
          gasLimitBoundDivisor: bigint,
        ] & {
          minBaseFee: bigint;
          baseFeeChangeDenominator: bigint;
          elasticityMultiplier: bigint;
          gasLimitBoundDivisor: bigint;
        },
      ] & {
        committee: Array<
          [addr: string, votingPower: bigint, consensusKey: string] & {
            addr: string;
            votingPower: bigint;
            consensusKey: string;
          }
        >;
        previousEpochBlock: bigint;
        epochBlock: bigint;
        nextEpochBlock: bigint;
        omissionDelta: bigint;
        eip1559: [
          minBaseFee: bigint,
          baseFeeChangeDenominator: bigint,
          elasticityMultiplier: bigint,
          gasLimitBoundDivisor: bigint,
        ] & {
          minBaseFee: bigint;
          baseFeeChangeDenominator: bigint;
          elasticityMultiplier: bigint;
          gasLimitBoundDivisor: bigint;
        };
      };
      config: [
        epochPeriod: bigint,
        blockPeriod: bigint,
        gasLimit: bigint,
        clusteringThreshold: bigint,
        accountability: [range: bigint, delta: bigint, gracePeriod: bigint] & {
          range: bigint;
          delta: bigint;
          gracePeriod: bigint;
        },
        eip1559: [
          minBaseFee: bigint,
          baseFeeChangeDenominator: bigint,
          elasticityMultiplier: bigint,
          gasLimitBoundDivisor: bigint,
        ] & {
          minBaseFee: bigint;
          baseFeeChangeDenominator: bigint;
          elasticityMultiplier: bigint;
          gasLimitBoundDivisor: bigint;
        },
      ] & {
        epochPeriod: bigint;
        blockPeriod: bigint;
        gasLimit: bigint;
        clusteringThreshold: bigint;
        accountability: [range: bigint, delta: bigint, gracePeriod: bigint] & {
          range: bigint;
          delta: bigint;
          gracePeriod: bigint;
        };
        eip1559: [
          minBaseFee: bigint,
          baseFeeChangeDenominator: bigint,
          elasticityMultiplier: bigint,
          gasLimitBoundDivisor: bigint,
        ] & {
          minBaseFee: bigint;
          baseFeeChangeDenominator: bigint;
          elasticityMultiplier: bigint;
          gasLimitBoundDivisor: bigint;
        };
      };
    }
  >(abi, '0x4bb278f3'),
  finalizeInitialization: new Func<[_omissionDelta: bigint], { _omissionDelta: bigint }, []>(
    abi,
    '0x4da3baec',
  ),
  getBlockPeriod: new Func<[], {}, bigint>(abi, '0x43645969'),
  getBondingRequestByID: new Func<
    [_id: bigint],
    { _id: bigint },
    [delegator: string, delegatee: string, amount: bigint, requestBlock: bigint] & {
      delegator: string;
      delegatee: string;
      amount: bigint;
      requestBlock: bigint;
    }
  >(abi, '0x8ebb48b7'),
  getClientConfig: new Func<
    [],
    {},
    [
      epochPeriod: bigint,
      blockPeriod: bigint,
      gasLimit: bigint,
      clusteringThreshold: bigint,
      accountability: [range: bigint, delta: bigint, gracePeriod: bigint] & {
        range: bigint;
        delta: bigint;
        gracePeriod: bigint;
      },
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      },
    ] & {
      epochPeriod: bigint;
      blockPeriod: bigint;
      gasLimit: bigint;
      clusteringThreshold: bigint;
      accountability: [range: bigint, delta: bigint, gracePeriod: bigint] & {
        range: bigint;
        delta: bigint;
        gracePeriod: bigint;
      };
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      };
    }
  >(abi, '0xf3f759c1'),
  getCommittee: new Func<
    [],
    {},
    Array<
      [addr: string, votingPower: bigint, consensusKey: string] & {
        addr: string;
        votingPower: bigint;
        consensusKey: string;
      }
    >
  >(abi, '0xab8f6ffe'),
  getCommitteeEnodes: new Func<[], {}, Array<string>>(abi, '0xa8b2216e'),
  getConfig: new Func<
    [],
    {},
    [
      policy: [
        treasuryFee: bigint,
        minBaseFee: bigint,
        delegationRate: bigint,
        unbondingPeriod: bigint,
        initialInflationReserve: bigint,
        withholdingThreshold: bigint,
        proposerRewardRate: bigint,
        oracleRewardRate: bigint,
        withheldRewardsPool: string,
        treasuryAccount: string,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
      ] & {
        treasuryFee: bigint;
        minBaseFee: bigint;
        delegationRate: bigint;
        unbondingPeriod: bigint;
        initialInflationReserve: bigint;
        withholdingThreshold: bigint;
        proposerRewardRate: bigint;
        oracleRewardRate: bigint;
        withheldRewardsPool: string;
        treasuryAccount: string;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
      },
      contracts: [
        accountabilityContract: string,
        oracleContract: string,
        acuContract: string,
        supplyControlContract: string,
        stabilizationContract: string,
        upgradeManagerContract: string,
        inflationControllerContract: string,
        omissionAccountabilityContract: string,
        auctioneerContract: string,
      ] & {
        accountabilityContract: string;
        oracleContract: string;
        acuContract: string;
        supplyControlContract: string;
        stabilizationContract: string;
        upgradeManagerContract: string;
        inflationControllerContract: string;
        omissionAccountabilityContract: string;
        auctioneerContract: string;
      },
      protocol: [
        operatorAccount: string,
        epochPeriod: bigint,
        blockPeriod: bigint,
        committeeSize: bigint,
        maxScheduleDuration: bigint,
        gasLimit: bigint,
        gasLimitBoundDivisor: bigint,
        clusteringThreshold: bigint,
      ] & {
        operatorAccount: string;
        epochPeriod: bigint;
        blockPeriod: bigint;
        committeeSize: bigint;
        maxScheduleDuration: bigint;
        gasLimit: bigint;
        gasLimitBoundDivisor: bigint;
        clusteringThreshold: bigint;
      },
      contractVersion: bigint,
    ] & {
      policy: [
        treasuryFee: bigint,
        minBaseFee: bigint,
        delegationRate: bigint,
        unbondingPeriod: bigint,
        initialInflationReserve: bigint,
        withholdingThreshold: bigint,
        proposerRewardRate: bigint,
        oracleRewardRate: bigint,
        withheldRewardsPool: string,
        treasuryAccount: string,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
      ] & {
        treasuryFee: bigint;
        minBaseFee: bigint;
        delegationRate: bigint;
        unbondingPeriod: bigint;
        initialInflationReserve: bigint;
        withholdingThreshold: bigint;
        proposerRewardRate: bigint;
        oracleRewardRate: bigint;
        withheldRewardsPool: string;
        treasuryAccount: string;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
      };
      contracts: [
        accountabilityContract: string,
        oracleContract: string,
        acuContract: string,
        supplyControlContract: string,
        stabilizationContract: string,
        upgradeManagerContract: string,
        inflationControllerContract: string,
        omissionAccountabilityContract: string,
        auctioneerContract: string,
      ] & {
        accountabilityContract: string;
        oracleContract: string;
        acuContract: string;
        supplyControlContract: string;
        stabilizationContract: string;
        upgradeManagerContract: string;
        inflationControllerContract: string;
        omissionAccountabilityContract: string;
        auctioneerContract: string;
      };
      protocol: [
        operatorAccount: string,
        epochPeriod: bigint,
        blockPeriod: bigint,
        committeeSize: bigint,
        maxScheduleDuration: bigint,
        gasLimit: bigint,
        gasLimitBoundDivisor: bigint,
        clusteringThreshold: bigint,
      ] & {
        operatorAccount: string;
        epochPeriod: bigint;
        blockPeriod: bigint;
        committeeSize: bigint;
        maxScheduleDuration: bigint;
        gasLimit: bigint;
        gasLimitBoundDivisor: bigint;
        clusteringThreshold: bigint;
      };
      contractVersion: bigint;
    }
  >(abi, '0xc3f909d4'),
  getCurrentCommitteeSize: new Func<[], {}, bigint>(abi, '0x2b56feac'),
  getCurrentEpochPeriod: new Func<[], {}, bigint>(abi, '0x0aac2da1'),
  getEpochByHeight: new Func<
    [_height: bigint],
    { _height: bigint },
    [
      committee: Array<
        [addr: string, votingPower: bigint, consensusKey: string] & {
          addr: string;
          votingPower: bigint;
          consensusKey: string;
        }
      >,
      previousEpochBlock: bigint,
      epochBlock: bigint,
      nextEpochBlock: bigint,
      omissionDelta: bigint,
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      },
    ] & {
      committee: Array<
        [addr: string, votingPower: bigint, consensusKey: string] & {
          addr: string;
          votingPower: bigint;
          consensusKey: string;
        }
      >;
      previousEpochBlock: bigint;
      epochBlock: bigint;
      nextEpochBlock: bigint;
      omissionDelta: bigint;
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      };
    }
  >(abi, '0xaffb1cf1'),
  getEpochFromBlock: new Func<[_block: bigint], { _block: bigint }, bigint>(abi, '0x96b477cb'),
  getEpochID: new Func<[], {}, bigint>(abi, '0x6fc53515'),
  getEpochInfo: new Func<
    [],
    {},
    [
      committee: Array<
        [addr: string, votingPower: bigint, consensusKey: string] & {
          addr: string;
          votingPower: bigint;
          consensusKey: string;
        }
      >,
      previousEpochBlock: bigint,
      epochBlock: bigint,
      nextEpochBlock: bigint,
      omissionDelta: bigint,
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      },
    ] & {
      committee: Array<
        [addr: string, votingPower: bigint, consensusKey: string] & {
          addr: string;
          votingPower: bigint;
          consensusKey: string;
        }
      >;
      previousEpochBlock: bigint;
      epochBlock: bigint;
      nextEpochBlock: bigint;
      omissionDelta: bigint;
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      };
    }
  >(abi, '0xa9fd1a8f'),
  getEpochPeriod: new Func<[], {}, bigint>(abi, '0xdfb1a4d2'),
  getEpochTotalBondedStake: new Func<[], {}, bigint>(abi, '0x4efcd15f'),
  getInflationReserve: new Func<[], {}, bigint>(abi, '0x4651e07b'),
  getLastEpochBlock: new Func<[], {}, bigint>(abi, '0x731b3a03'),
  getLastEpochTime: new Func<[], {}, bigint>(abi, '0xba522458'),
  getLiquidLogicContract: new Func<[], {}, string>(abi, '0x4c1f1c77'),
  getMaxCommitteeSize: new Func<[], {}, bigint>(abi, '0x819b6463'),
  getMaxScheduleDuration: new Func<[], {}, bigint>(abi, '0xfed76a56'),
  getMinimumBaseFee: new Func<[], {}, bigint>(abi, '0x11220633'),
  getNewContract: new Func<[], {}, [_: string, _: string]>(abi, '0xb66b3e79'),
  getNextEpochBlock: new Func<[], {}, bigint>(abi, '0x25ce1bb9'),
  getOperator: new Func<[], {}, string>(abi, '0xe7f43c68'),
  getOracle: new Func<[], {}, string>(abi, '0x833b1fce'),
  getSchedule: new Func<
    [_vault: string, _id: bigint],
    { _vault: string; _id: bigint },
    [
      totalAmount: bigint,
      unlockedAmount: bigint,
      start: bigint,
      totalDuration: bigint,
      lastUnlockTime: bigint,
    ] & {
      totalAmount: bigint;
      unlockedAmount: bigint;
      start: bigint;
      totalDuration: bigint;
      lastUnlockTime: bigint;
    }
  >(abi, '0x7264c4da'),
  getSlasher: new Func<[], {}, string>(abi, '0xd0c80f13'),
  getTotalSchedules: new Func<[_vault: string], { _vault: string }, bigint>(abi, '0x088566e9'),
  getTreasuryAccount: new Func<[], {}, string>(abi, '0xf7866ee3'),
  getTreasuryFee: new Func<[], {}, bigint>(abi, '0x29070c6d'),
  getUnbondingPeriod: new Func<[], {}, bigint>(abi, '0x6fd2c80b'),
  getUnbondingRequestByID: new Func<
    [_id: bigint],
    { _id: bigint },
    [
      delegator: string,
      delegatee: string,
      amount: bigint,
      unbondingShare: bigint,
      requestBlock: bigint,
      unlocked: boolean,
      released: boolean,
      selfDelegation: boolean,
    ] & {
      delegator: string;
      delegatee: string;
      amount: bigint;
      unbondingShare: bigint;
      requestBlock: bigint;
      unlocked: boolean;
      released: boolean;
      selfDelegation: boolean;
    }
  >(abi, '0x4bfe23f1'),
  getUnbondingShare: new Func<[_unbondingID: bigint], { _unbondingID: bigint }, bigint>(
    abi,
    '0x8d347287',
  ),
  getValidator: new Func<
    [_addr: string],
    { _addr: string },
    [
      treasury: string,
      nodeAddress: string,
      oracleAddress: string,
      enode: string,
      commissionRate: bigint,
      bondedStake: bigint,
      unbondingStake: bigint,
      unbondingShares: bigint,
      selfBondedStake: bigint,
      selfUnbondingStake: bigint,
      selfUnbondingShares: bigint,
      selfUnbondingStakeLocked: bigint,
      liquidStateContract: string,
      liquidSupply: bigint,
      registrationBlock: bigint,
      totalSlashed: bigint,
      jailReleaseBlock: bigint,
      consensusKey: string,
      state: number,
      conversionRatio: bigint,
    ] & {
      treasury: string;
      nodeAddress: string;
      oracleAddress: string;
      enode: string;
      commissionRate: bigint;
      bondedStake: bigint;
      unbondingStake: bigint;
      unbondingShares: bigint;
      selfBondedStake: bigint;
      selfUnbondingStake: bigint;
      selfUnbondingShares: bigint;
      selfUnbondingStakeLocked: bigint;
      liquidStateContract: string;
      liquidSupply: bigint;
      registrationBlock: bigint;
      totalSlashed: bigint;
      jailReleaseBlock: bigint;
      consensusKey: string;
      state: number;
      conversionRatio: bigint;
    }
  >(abi, '0x1904bb2e'),
  getValidatorState: new Func<[_addr: string], { _addr: string }, number>(abi, '0x5b7d6c36'),
  getValidators: new Func<[], {}, Array<string>>(abi, '0xb7ab4db5'),
  getVersion: new Func<[], {}, bigint>(abi, '0x0d8e6e2c'),
  isUnbondingReleased: new Func<[_unbondingID: bigint], { _unbondingID: bigint }, boolean>(
    abi,
    '0xe294df7c',
  ),
  jail: new Func<
    [_nodeAddress: string, _jailtime: bigint, _newJailedState: number],
    { _nodeAddress: string; _jailtime: bigint; _newJailedState: number },
    bigint
  >(abi, '0x154d76d7'),
  jailbound: new Func<
    [_nodeAddress: string, _newJailboundState: number],
    { _nodeAddress: string; _newJailboundState: number },
    []
  >(abi, '0x8ef8c2fd'),
  mint: new Func<[_addr: string, _amount: bigint], { _addr: string; _amount: bigint }, []>(
    abi,
    '0x40c10f19',
  ),
  name: new Func<[], {}, string>(abi, '0x06fdde03'),
  pauseValidator: new Func<[_address: string], { _address: string }, []>(abi, '0x0ae65e7a'),
  registerValidator: new Func<
    [_enode: string, _oracleAddress: string, _consensusKey: string, _signatures: string],
    { _enode: string; _oracleAddress: string; _consensusKey: string; _signatures: string },
    []
  >(abi, '0x84467fdb'),
  resetContractUpgrade: new Func<[], {}, []>(abi, '0xcf9c5719'),
  setAccountabilityContract: new Func<[_address: string], { _address: string }, []>(
    abi,
    '0x1250a28d',
  ),
  setAcuContract: new Func<[_address: string], { _address: string }, []>(abi, '0xd372c07e'),
  setAuctioneerContract: new Func<[_address: string], { _address: string }, []>(abi, '0x5a061362'),
  setClusteringThreshold: new Func<[_threshold: bigint], { _threshold: bigint }, []>(
    abi,
    '0x12e7b45d',
  ),
  setCommitteeSize: new Func<[_size: bigint], { _size: bigint }, []>(abi, '0x8bac7dad'),
  setEip1559Params: new Func<
    [
      _params: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      },
    ],
    {
      _params: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      };
    },
    []
  >(abi, '0x56176bc4'),
  setEpochPeriod: new Func<[_period: bigint], { _period: bigint }, []>(abi, '0x6b5f444c'),
  setGasLimit: new Func<[_gasLimit: bigint], { _gasLimit: bigint }, []>(abi, '0xee7d72b4'),
  setInflationControllerContract: new Func<[_address: string], { _address: string }, []>(
    abi,
    '0xf03b959d',
  ),
  setLiquidLogicContract: new Func<[_contract: string], { _contract: string }, []>(
    abi,
    '0x15ef30f8',
  ),
  setMaxScheduleDuration: new Func<[_newMaxDuration: bigint], { _newMaxDuration: bigint }, []>(
    abi,
    '0x8bb2e477',
  ),
  setOmissionAccountabilityContract: new Func<[_address: string], { _address: string }, []>(
    abi,
    '0xb47c3eaa',
  ),
  setOperatorAccount: new Func<[_account: string], { _account: string }, []>(abi, '0x520fdbbc'),
  setOracleContract: new Func<[_address: string], { _address: string }, []>(abi, '0x496ccd9b'),
  setOracleRewardRate: new Func<[_oracleRewardRate: bigint], { _oracleRewardRate: bigint }, []>(
    abi,
    '0xed5676e9',
  ),
  setProposerRewardRate: new Func<
    [_proposerRewardRate: bigint],
    { _proposerRewardRate: bigint },
    []
  >(abi, '0x416f86a2'),
  setSlasher: new Func<[_slasher: string], { _slasher: string }, []>(abi, '0xaabc2496'),
  setStabilizationContract: new Func<[_address: string], { _address: string }, []>(
    abi,
    '0xcfd19fb9',
  ),
  setSupplyControlContract: new Func<[_address: string], { _address: string }, []>(
    abi,
    '0xb3ecbadd',
  ),
  setTreasuryAccount: new Func<[_account: string], { _account: string }, []>(abi, '0xd886f8a2'),
  setTreasuryFee: new Func<[_treasuryFee: bigint], { _treasuryFee: bigint }, []>(abi, '0x77e741c7'),
  setUnbondingPeriod: new Func<[_period: bigint], { _period: bigint }, []>(abi, '0x114eaf55'),
  setUpgradeManagerContract: new Func<[_address: string], { _address: string }, []>(
    abi,
    '0xceaad455',
  ),
  setWithheldRewardsPool: new Func<[_pool: string], { _pool: string }, []>(abi, '0x39f9eb1f'),
  setWithholdingThreshold: new Func<
    [_withholdingThreshold: bigint],
    { _withholdingThreshold: bigint },
    []
  >(abi, '0x905d76e9'),
  slash: new Func<
    [_nodeAddress: string, _slashingRate: bigint],
    { _nodeAddress: string; _slashingRate: bigint },
    bigint
  >(abi, '0x02fb4d85'),
  slashAndJail: new Func<
    [
      _nodeAddress: string,
      _slashingRate: bigint,
      _jailtime: bigint,
      _newJailedState: number,
      _newJailboundState: number,
    ],
    {
      _nodeAddress: string;
      _slashingRate: bigint;
      _jailtime: bigint;
      _newJailedState: number;
      _newJailboundState: number;
    },
    [slashingAmount: bigint, jailReleaseBlock: bigint, isJailbound: boolean] & {
      slashingAmount: bigint;
      jailReleaseBlock: bigint;
      isJailbound: boolean;
    }
  >(abi, '0x122b4122'),
  symbol: new Func<[], {}, string>(abi, '0x95d89b41'),
  totalSupply: new Func<[], {}, bigint>(abi, '0x18160ddd'),
  transfer: new Func<
    [_recipient: string, _amount: bigint],
    { _recipient: string; _amount: bigint },
    boolean
  >(abi, '0xa9059cbb'),
  transferFrom: new Func<
    [_sender: string, _recipient: string, _amount: bigint],
    { _sender: string; _recipient: string; _amount: bigint },
    boolean
  >(abi, '0x23b872dd'),
  unbond: new Func<
    [_validator: string, _amount: bigint],
    { _validator: string; _amount: bigint },
    bigint
  >(abi, '0xa5d059ca'),
  unbondFrom: new Func<
    [_account: string, _validator: string, _amount: bigint],
    { _account: string; _validator: string; _amount: bigint },
    bigint
  >(abi, '0xa9a7d7c9'),
  updateEnode: new Func<
    [_nodeAddress: string, _enode: string],
    { _nodeAddress: string; _enode: string },
    []
  >(abi, '0x784304b5'),
  upgradeContract: new Func<
    [_bytecode: string, _abi: string],
    { _bytecode: string; _abi: string },
    []
  >(abi, '0xb2ea9adb'),
};

export class Contract extends ContractBase {
  STANDARD_DECIMALS(): Promise<bigint> {
    return this.eth_call(functions.STANDARD_DECIMALS, []);
  }

  STANDARD_SCALE_FACTOR(): Promise<bigint> {
    return this.eth_call(functions.STANDARD_SCALE_FACTOR, []);
  }

  allowance(owner: string, spender: string): Promise<bigint> {
    return this.eth_call(functions.allowance, [owner, spender]);
  }

  balanceOf(_addr: string): Promise<bigint> {
    return this.eth_call(functions.balanceOf, [_addr]);
  }

  bondingAllowance(_owner: string, _caller: string): Promise<bigint> {
    return this.eth_call(functions.bondingAllowance, [_owner, _caller]);
  }

  circulatingSupply(): Promise<bigint> {
    return this.eth_call(functions.circulatingSupply, []);
  }

  decimals(): Promise<number> {
    return this.eth_call(functions.decimals, []);
  }

  getBlockPeriod(): Promise<bigint> {
    return this.eth_call(functions.getBlockPeriod, []);
  }

  getBondingRequestByID(
    _id: bigint,
  ): Promise<
    [delegator: string, delegatee: string, amount: bigint, requestBlock: bigint] & {
      delegator: string;
      delegatee: string;
      amount: bigint;
      requestBlock: bigint;
    }
  > {
    return this.eth_call(functions.getBondingRequestByID, [_id]);
  }

  getClientConfig(): Promise<
    [
      epochPeriod: bigint,
      blockPeriod: bigint,
      gasLimit: bigint,
      clusteringThreshold: bigint,
      accountability: [range: bigint, delta: bigint, gracePeriod: bigint] & {
        range: bigint;
        delta: bigint;
        gracePeriod: bigint;
      },
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      },
    ] & {
      epochPeriod: bigint;
      blockPeriod: bigint;
      gasLimit: bigint;
      clusteringThreshold: bigint;
      accountability: [range: bigint, delta: bigint, gracePeriod: bigint] & {
        range: bigint;
        delta: bigint;
        gracePeriod: bigint;
      };
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      };
    }
  > {
    return this.eth_call(functions.getClientConfig, []);
  }

  getCommittee(): Promise<
    Array<
      [addr: string, votingPower: bigint, consensusKey: string] & {
        addr: string;
        votingPower: bigint;
        consensusKey: string;
      }
    >
  > {
    return this.eth_call(functions.getCommittee, []);
  }

  getCommitteeEnodes(): Promise<Array<string>> {
    return this.eth_call(functions.getCommitteeEnodes, []);
  }

  getConfig(): Promise<
    [
      policy: [
        treasuryFee: bigint,
        minBaseFee: bigint,
        delegationRate: bigint,
        unbondingPeriod: bigint,
        initialInflationReserve: bigint,
        withholdingThreshold: bigint,
        proposerRewardRate: bigint,
        oracleRewardRate: bigint,
        withheldRewardsPool: string,
        treasuryAccount: string,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
      ] & {
        treasuryFee: bigint;
        minBaseFee: bigint;
        delegationRate: bigint;
        unbondingPeriod: bigint;
        initialInflationReserve: bigint;
        withholdingThreshold: bigint;
        proposerRewardRate: bigint;
        oracleRewardRate: bigint;
        withheldRewardsPool: string;
        treasuryAccount: string;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
      },
      contracts: [
        accountabilityContract: string,
        oracleContract: string,
        acuContract: string,
        supplyControlContract: string,
        stabilizationContract: string,
        upgradeManagerContract: string,
        inflationControllerContract: string,
        omissionAccountabilityContract: string,
        auctioneerContract: string,
      ] & {
        accountabilityContract: string;
        oracleContract: string;
        acuContract: string;
        supplyControlContract: string;
        stabilizationContract: string;
        upgradeManagerContract: string;
        inflationControllerContract: string;
        omissionAccountabilityContract: string;
        auctioneerContract: string;
      },
      protocol: [
        operatorAccount: string,
        epochPeriod: bigint,
        blockPeriod: bigint,
        committeeSize: bigint,
        maxScheduleDuration: bigint,
        gasLimit: bigint,
        gasLimitBoundDivisor: bigint,
        clusteringThreshold: bigint,
      ] & {
        operatorAccount: string;
        epochPeriod: bigint;
        blockPeriod: bigint;
        committeeSize: bigint;
        maxScheduleDuration: bigint;
        gasLimit: bigint;
        gasLimitBoundDivisor: bigint;
        clusteringThreshold: bigint;
      },
      contractVersion: bigint,
    ] & {
      policy: [
        treasuryFee: bigint,
        minBaseFee: bigint,
        delegationRate: bigint,
        unbondingPeriod: bigint,
        initialInflationReserve: bigint,
        withholdingThreshold: bigint,
        proposerRewardRate: bigint,
        oracleRewardRate: bigint,
        withheldRewardsPool: string,
        treasuryAccount: string,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
      ] & {
        treasuryFee: bigint;
        minBaseFee: bigint;
        delegationRate: bigint;
        unbondingPeriod: bigint;
        initialInflationReserve: bigint;
        withholdingThreshold: bigint;
        proposerRewardRate: bigint;
        oracleRewardRate: bigint;
        withheldRewardsPool: string;
        treasuryAccount: string;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
      };
      contracts: [
        accountabilityContract: string,
        oracleContract: string,
        acuContract: string,
        supplyControlContract: string,
        stabilizationContract: string,
        upgradeManagerContract: string,
        inflationControllerContract: string,
        omissionAccountabilityContract: string,
        auctioneerContract: string,
      ] & {
        accountabilityContract: string;
        oracleContract: string;
        acuContract: string;
        supplyControlContract: string;
        stabilizationContract: string;
        upgradeManagerContract: string;
        inflationControllerContract: string;
        omissionAccountabilityContract: string;
        auctioneerContract: string;
      };
      protocol: [
        operatorAccount: string,
        epochPeriod: bigint,
        blockPeriod: bigint,
        committeeSize: bigint,
        maxScheduleDuration: bigint,
        gasLimit: bigint,
        gasLimitBoundDivisor: bigint,
        clusteringThreshold: bigint,
      ] & {
        operatorAccount: string;
        epochPeriod: bigint;
        blockPeriod: bigint;
        committeeSize: bigint;
        maxScheduleDuration: bigint;
        gasLimit: bigint;
        gasLimitBoundDivisor: bigint;
        clusteringThreshold: bigint;
      };
      contractVersion: bigint;
    }
  > {
    return this.eth_call(functions.getConfig, []);
  }

  getCurrentCommitteeSize(): Promise<bigint> {
    return this.eth_call(functions.getCurrentCommitteeSize, []);
  }

  getCurrentEpochPeriod(): Promise<bigint> {
    return this.eth_call(functions.getCurrentEpochPeriod, []);
  }

  getEpochByHeight(
    _height: bigint,
  ): Promise<
    [
      committee: Array<
        [addr: string, votingPower: bigint, consensusKey: string] & {
          addr: string;
          votingPower: bigint;
          consensusKey: string;
        }
      >,
      previousEpochBlock: bigint,
      epochBlock: bigint,
      nextEpochBlock: bigint,
      omissionDelta: bigint,
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      },
    ] & {
      committee: Array<
        [addr: string, votingPower: bigint, consensusKey: string] & {
          addr: string;
          votingPower: bigint;
          consensusKey: string;
        }
      >;
      previousEpochBlock: bigint;
      epochBlock: bigint;
      nextEpochBlock: bigint;
      omissionDelta: bigint;
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      };
    }
  > {
    return this.eth_call(functions.getEpochByHeight, [_height]);
  }

  getEpochFromBlock(_block: bigint): Promise<bigint> {
    return this.eth_call(functions.getEpochFromBlock, [_block]);
  }

  getEpochID(): Promise<bigint> {
    return this.eth_call(functions.getEpochID, []);
  }

  getEpochInfo(): Promise<
    [
      committee: Array<
        [addr: string, votingPower: bigint, consensusKey: string] & {
          addr: string;
          votingPower: bigint;
          consensusKey: string;
        }
      >,
      previousEpochBlock: bigint,
      epochBlock: bigint,
      nextEpochBlock: bigint,
      omissionDelta: bigint,
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      },
    ] & {
      committee: Array<
        [addr: string, votingPower: bigint, consensusKey: string] & {
          addr: string;
          votingPower: bigint;
          consensusKey: string;
        }
      >;
      previousEpochBlock: bigint;
      epochBlock: bigint;
      nextEpochBlock: bigint;
      omissionDelta: bigint;
      eip1559: [
        minBaseFee: bigint,
        baseFeeChangeDenominator: bigint,
        elasticityMultiplier: bigint,
        gasLimitBoundDivisor: bigint,
      ] & {
        minBaseFee: bigint;
        baseFeeChangeDenominator: bigint;
        elasticityMultiplier: bigint;
        gasLimitBoundDivisor: bigint;
      };
    }
  > {
    return this.eth_call(functions.getEpochInfo, []);
  }

  getEpochPeriod(): Promise<bigint> {
    return this.eth_call(functions.getEpochPeriod, []);
  }

  getEpochTotalBondedStake(): Promise<bigint> {
    return this.eth_call(functions.getEpochTotalBondedStake, []);
  }

  getInflationReserve(): Promise<bigint> {
    return this.eth_call(functions.getInflationReserve, []);
  }

  getLastEpochBlock(): Promise<bigint> {
    return this.eth_call(functions.getLastEpochBlock, []);
  }

  getLastEpochTime(): Promise<bigint> {
    return this.eth_call(functions.getLastEpochTime, []);
  }

  getLiquidLogicContract(): Promise<string> {
    return this.eth_call(functions.getLiquidLogicContract, []);
  }

  getMaxCommitteeSize(): Promise<bigint> {
    return this.eth_call(functions.getMaxCommitteeSize, []);
  }

  getMaxScheduleDuration(): Promise<bigint> {
    return this.eth_call(functions.getMaxScheduleDuration, []);
  }

  getMinimumBaseFee(): Promise<bigint> {
    return this.eth_call(functions.getMinimumBaseFee, []);
  }

  getNewContract(): Promise<[_: string, _: string]> {
    return this.eth_call(functions.getNewContract, []);
  }

  getNextEpochBlock(): Promise<bigint> {
    return this.eth_call(functions.getNextEpochBlock, []);
  }

  getOperator(): Promise<string> {
    return this.eth_call(functions.getOperator, []);
  }

  getOracle(): Promise<string> {
    return this.eth_call(functions.getOracle, []);
  }

  getSchedule(
    _vault: string,
    _id: bigint,
  ): Promise<
    [
      totalAmount: bigint,
      unlockedAmount: bigint,
      start: bigint,
      totalDuration: bigint,
      lastUnlockTime: bigint,
    ] & {
      totalAmount: bigint;
      unlockedAmount: bigint;
      start: bigint;
      totalDuration: bigint;
      lastUnlockTime: bigint;
    }
  > {
    return this.eth_call(functions.getSchedule, [_vault, _id]);
  }

  getSlasher(): Promise<string> {
    return this.eth_call(functions.getSlasher, []);
  }

  getTotalSchedules(_vault: string): Promise<bigint> {
    return this.eth_call(functions.getTotalSchedules, [_vault]);
  }

  getTreasuryAccount(): Promise<string> {
    return this.eth_call(functions.getTreasuryAccount, []);
  }

  getTreasuryFee(): Promise<bigint> {
    return this.eth_call(functions.getTreasuryFee, []);
  }

  getUnbondingPeriod(): Promise<bigint> {
    return this.eth_call(functions.getUnbondingPeriod, []);
  }

  getUnbondingRequestByID(
    _id: bigint,
  ): Promise<
    [
      delegator: string,
      delegatee: string,
      amount: bigint,
      unbondingShare: bigint,
      requestBlock: bigint,
      unlocked: boolean,
      released: boolean,
      selfDelegation: boolean,
    ] & {
      delegator: string;
      delegatee: string;
      amount: bigint;
      unbondingShare: bigint;
      requestBlock: bigint;
      unlocked: boolean;
      released: boolean;
      selfDelegation: boolean;
    }
  > {
    return this.eth_call(functions.getUnbondingRequestByID, [_id]);
  }

  getUnbondingShare(_unbondingID: bigint): Promise<bigint> {
    return this.eth_call(functions.getUnbondingShare, [_unbondingID]);
  }

  getValidator(
    _addr: string,
  ): Promise<
    [
      treasury: string,
      nodeAddress: string,
      oracleAddress: string,
      enode: string,
      commissionRate: bigint,
      bondedStake: bigint,
      unbondingStake: bigint,
      unbondingShares: bigint,
      selfBondedStake: bigint,
      selfUnbondingStake: bigint,
      selfUnbondingShares: bigint,
      selfUnbondingStakeLocked: bigint,
      liquidStateContract: string,
      liquidSupply: bigint,
      registrationBlock: bigint,
      totalSlashed: bigint,
      jailReleaseBlock: bigint,
      consensusKey: string,
      state: number,
      conversionRatio: bigint,
    ] & {
      treasury: string;
      nodeAddress: string;
      oracleAddress: string;
      enode: string;
      commissionRate: bigint;
      bondedStake: bigint;
      unbondingStake: bigint;
      unbondingShares: bigint;
      selfBondedStake: bigint;
      selfUnbondingStake: bigint;
      selfUnbondingShares: bigint;
      selfUnbondingStakeLocked: bigint;
      liquidStateContract: string;
      liquidSupply: bigint;
      registrationBlock: bigint;
      totalSlashed: bigint;
      jailReleaseBlock: bigint;
      consensusKey: string;
      state: number;
      conversionRatio: bigint;
    }
  > {
    return this.eth_call(functions.getValidator, [_addr]);
  }

  getValidatorState(_addr: string): Promise<number> {
    return this.eth_call(functions.getValidatorState, [_addr]);
  }

  getValidators(): Promise<Array<string>> {
    return this.eth_call(functions.getValidators, []);
  }

  getVersion(): Promise<bigint> {
    return this.eth_call(functions.getVersion, []);
  }

  isUnbondingReleased(_unbondingID: bigint): Promise<boolean> {
    return this.eth_call(functions.isUnbondingReleased, [_unbondingID]);
  }

  name(): Promise<string> {
    return this.eth_call(functions.name, []);
  }

  symbol(): Promise<string> {
    return this.eth_call(functions.symbol, []);
  }

  totalSupply(): Promise<bigint> {
    return this.eth_call(functions.totalSupply, []);
  }
}
