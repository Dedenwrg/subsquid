export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "_validators",
                "components": [
                    {
                        "type": "address",
                        "name": "treasury"
                    },
                    {
                        "type": "address",
                        "name": "nodeAddress"
                    },
                    {
                        "type": "address",
                        "name": "oracleAddress"
                    },
                    {
                        "type": "string",
                        "name": "enode"
                    },
                    {
                        "type": "uint256",
                        "name": "commissionRate"
                    },
                    {
                        "type": "uint256",
                        "name": "bondedStake"
                    },
                    {
                        "type": "uint256",
                        "name": "unbondingStake"
                    },
                    {
                        "type": "uint256",
                        "name": "unbondingShares"
                    },
                    {
                        "type": "uint256",
                        "name": "selfBondedStake"
                    },
                    {
                        "type": "uint256",
                        "name": "selfUnbondingStake"
                    },
                    {
                        "type": "uint256",
                        "name": "selfUnbondingShares"
                    },
                    {
                        "type": "uint256",
                        "name": "selfUnbondingStakeLocked"
                    },
                    {
                        "type": "address",
                        "name": "liquidStateContract"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidSupply"
                    },
                    {
                        "type": "uint256",
                        "name": "registrationBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "totalSlashed"
                    },
                    {
                        "type": "uint256",
                        "name": "jailReleaseBlock"
                    },
                    {
                        "type": "bytes",
                        "name": "consensusKey"
                    },
                    {
                        "type": "uint8",
                        "name": "state"
                    },
                    {
                        "type": "uint256",
                        "name": "conversionRatio"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "_config",
                "components": [
                    {
                        "type": "tuple",
                        "name": "policy",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "treasuryFee"
                            },
                            {
                                "type": "uint256",
                                "name": "minBaseFee"
                            },
                            {
                                "type": "uint256",
                                "name": "delegationRate"
                            },
                            {
                                "type": "uint256",
                                "name": "unbondingPeriod"
                            },
                            {
                                "type": "uint256",
                                "name": "initialInflationReserve"
                            },
                            {
                                "type": "uint256",
                                "name": "withholdingThreshold"
                            },
                            {
                                "type": "uint256",
                                "name": "proposerRewardRate"
                            },
                            {
                                "type": "uint256",
                                "name": "oracleRewardRate"
                            },
                            {
                                "type": "address",
                                "name": "withheldRewardsPool"
                            },
                            {
                                "type": "address",
                                "name": "treasuryAccount"
                            },
                            {
                                "type": "uint256",
                                "name": "baseFeeChangeDenominator"
                            },
                            {
                                "type": "uint256",
                                "name": "elasticityMultiplier"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "contracts",
                        "components": [
                            {
                                "type": "address",
                                "name": "accountabilityContract"
                            },
                            {
                                "type": "address",
                                "name": "oracleContract"
                            },
                            {
                                "type": "address",
                                "name": "acuContract"
                            },
                            {
                                "type": "address",
                                "name": "supplyControlContract"
                            },
                            {
                                "type": "address",
                                "name": "stabilizationContract"
                            },
                            {
                                "type": "address",
                                "name": "upgradeManagerContract"
                            },
                            {
                                "type": "address",
                                "name": "inflationControllerContract"
                            },
                            {
                                "type": "address",
                                "name": "omissionAccountabilityContract"
                            },
                            {
                                "type": "address",
                                "name": "auctioneerContract"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "protocol",
                        "components": [
                            {
                                "type": "address",
                                "name": "operatorAccount"
                            },
                            {
                                "type": "uint256",
                                "name": "epochPeriod"
                            },
                            {
                                "type": "uint256",
                                "name": "blockPeriod"
                            },
                            {
                                "type": "uint256",
                                "name": "committeeSize"
                            },
                            {
                                "type": "uint256",
                                "name": "maxScheduleDuration"
                            },
                            {
                                "type": "uint256",
                                "name": "gasLimit"
                            },
                            {
                                "type": "uint256",
                                "name": "gasLimitBoundDivisor"
                            },
                            {
                                "type": "uint256",
                                "name": "clusteringThreshold"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "contractVersion"
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ActivatedValidator",
        "inputs": [
            {
                "type": "address",
                "name": "treasury",
                "indexed": true
            },
            {
                "type": "address",
                "name": "addr",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "effectiveBlock",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "spender",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BondingApproval",
        "inputs": [
            {
                "type": "address",
                "name": "_owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "_caller",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "_value",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BondingRejected",
        "inputs": [
            {
                "type": "address",
                "name": "validator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "delegator",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "state",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BurnedStake",
        "inputs": [
            {
                "type": "address",
                "name": "addr",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CallFailed",
        "inputs": [
            {
                "type": "address",
                "name": "to",
                "indexed": false
            },
            {
                "type": "string",
                "name": "methodSignature",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "returnData",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CommissionRateChange",
        "inputs": [
            {
                "type": "address",
                "name": "validator",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "rate",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ConfigUpdateAddress",
        "inputs": [
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "address",
                "name": "oldValue",
                "indexed": false
            },
            {
                "type": "address",
                "name": "newValue",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "appliesAtHeight",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ConfigUpdateBool",
        "inputs": [
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "oldValue",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "newValue",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "appliesAtHeight",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ConfigUpdateInt",
        "inputs": [
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "oldValue",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "newValue",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "appliesAtHeight",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ConfigUpdateUint",
        "inputs": [
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "oldValue",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "newValue",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "appliesAtHeight",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Eip1559ParamsUpdate",
        "inputs": [
            {
                "type": "tuple",
                "name": "oldParams",
                "indexed": false,
                "components": [
                    {
                        "type": "uint256",
                        "name": "minBaseFee"
                    },
                    {
                        "type": "uint256",
                        "name": "baseFeeChangeDenominator"
                    },
                    {
                        "type": "uint256",
                        "name": "elasticityMultiplier"
                    },
                    {
                        "type": "uint256",
                        "name": "gasLimitBoundDivisor"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "newParams",
                "indexed": false,
                "components": [
                    {
                        "type": "uint256",
                        "name": "minBaseFee"
                    },
                    {
                        "type": "uint256",
                        "name": "baseFeeChangeDenominator"
                    },
                    {
                        "type": "uint256",
                        "name": "elasticityMultiplier"
                    },
                    {
                        "type": "uint256",
                        "name": "gasLimitBoundDivisor"
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EnodeUpdate",
        "inputs": [
            {
                "type": "address",
                "name": "validator",
                "indexed": false
            },
            {
                "type": "string",
                "name": "oldEnode",
                "indexed": false
            },
            {
                "type": "string",
                "name": "newEnode",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EpochPeriodUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "period",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "appliedAtBlock",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "MintedStake",
        "inputs": [
            {
                "type": "address",
                "name": "addr",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewBondingRequest",
        "inputs": [
            {
                "type": "address",
                "name": "validator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "delegator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "selfBonded",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "headBondingID",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewEpoch",
        "inputs": [
            {
                "type": "uint256",
                "name": "epoch",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "inflationReserve",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "stakeCirculating",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewSchedule",
        "inputs": [
            {
                "type": "address",
                "name": "scheduleVault",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "start",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "totalDuration",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewUnbondingRequest",
        "inputs": [
            {
                "type": "address",
                "name": "validator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "delegator",
                "indexed": true
            },
            {
                "type": "address",
                "name": "caller",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "selfBonded",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "headUnbondingID",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PausedValidator",
        "inputs": [
            {
                "type": "address",
                "name": "treasury",
                "indexed": true
            },
            {
                "type": "address",
                "name": "addr",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "effectiveBlock",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RegisteredValidator",
        "inputs": [
            {
                "type": "address",
                "name": "treasury",
                "indexed": false
            },
            {
                "type": "address",
                "name": "addr",
                "indexed": false
            },
            {
                "type": "address",
                "name": "oracleAddress",
                "indexed": false
            },
            {
                "type": "string",
                "name": "enode",
                "indexed": false
            },
            {
                "type": "address",
                "name": "liquidStateContract",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Rewarded",
        "inputs": [
            {
                "type": "address",
                "name": "addr",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "atnSelfAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "atnDelegatedAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "ntnSelfAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "ntnDelegatedAmount",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            }
        ]
    },
    {
        "type": "fallback",
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "STANDARD_DECIMALS",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "STANDARD_SCALE_FACTOR",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "activateValidator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "allowance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "spender"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "spender"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "approveBonding",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_caller"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "autobond",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_validator"
            },
            {
                "type": "uint256",
                "name": "_selfBond"
            },
            {
                "type": "uint256",
                "name": "_delegated"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_addr"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "bond",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_validator"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "bondFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_account"
            },
            {
                "type": "address",
                "name": "_validator"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "bondingAllowance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
            },
            {
                "type": "address",
                "name": "_caller"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "burn",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_addr"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "changeCommissionRate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_validator"
            },
            {
                "type": "uint256",
                "name": "_rate"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "circulatingSupply",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "completeContractUpgrade",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "createSchedule",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_scheduleVault"
            },
            {
                "type": "uint256",
                "name": "_amount"
            },
            {
                "type": "uint256",
                "name": "_startTime"
            },
            {
                "type": "uint256",
                "name": "_totalDuration"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "decimals",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "finalize",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "bool",
                        "name": "contractUpgradeReady"
                    },
                    {
                        "type": "bool",
                        "name": "epochEnded"
                    },
                    {
                        "type": "tuple",
                        "name": "epoch",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "committee",
                                "components": [
                                    {
                                        "type": "address",
                                        "name": "addr"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "votingPower"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "consensusKey"
                                    }
                                ]
                            },
                            {
                                "type": "uint256",
                                "name": "previousEpochBlock"
                            },
                            {
                                "type": "uint256",
                                "name": "epochBlock"
                            },
                            {
                                "type": "uint256",
                                "name": "nextEpochBlock"
                            },
                            {
                                "type": "uint256",
                                "name": "omissionDelta"
                            },
                            {
                                "type": "tuple",
                                "name": "eip1559",
                                "components": [
                                    {
                                        "type": "uint256",
                                        "name": "minBaseFee"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "baseFeeChangeDenominator"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "elasticityMultiplier"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "gasLimitBoundDivisor"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "config",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "epochPeriod"
                            },
                            {
                                "type": "uint256",
                                "name": "blockPeriod"
                            },
                            {
                                "type": "uint256",
                                "name": "gasLimit"
                            },
                            {
                                "type": "uint256",
                                "name": "clusteringThreshold"
                            },
                            {
                                "type": "tuple",
                                "name": "accountability",
                                "components": [
                                    {
                                        "type": "uint256",
                                        "name": "range"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "delta"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "gracePeriod"
                                    }
                                ]
                            },
                            {
                                "type": "tuple",
                                "name": "eip1559",
                                "components": [
                                    {
                                        "type": "uint256",
                                        "name": "minBaseFee"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "baseFeeChangeDenominator"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "elasticityMultiplier"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "gasLimitBoundDivisor"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "finalizeInitialization",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_omissionDelta"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getBlockPeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getBondingRequestByID",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "address",
                        "name": "delegator"
                    },
                    {
                        "type": "address",
                        "name": "delegatee"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "uint256",
                        "name": "requestBlock"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getClientConfig",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "epochPeriod"
                    },
                    {
                        "type": "uint256",
                        "name": "blockPeriod"
                    },
                    {
                        "type": "uint256",
                        "name": "gasLimit"
                    },
                    {
                        "type": "uint256",
                        "name": "clusteringThreshold"
                    },
                    {
                        "type": "tuple",
                        "name": "accountability",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "range"
                            },
                            {
                                "type": "uint256",
                                "name": "delta"
                            },
                            {
                                "type": "uint256",
                                "name": "gracePeriod"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "eip1559",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "minBaseFee"
                            },
                            {
                                "type": "uint256",
                                "name": "baseFeeChangeDenominator"
                            },
                            {
                                "type": "uint256",
                                "name": "elasticityMultiplier"
                            },
                            {
                                "type": "uint256",
                                "name": "gasLimitBoundDivisor"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getCommittee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "components": [
                    {
                        "type": "address",
                        "name": "addr"
                    },
                    {
                        "type": "uint256",
                        "name": "votingPower"
                    },
                    {
                        "type": "bytes",
                        "name": "consensusKey"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getCommitteeEnodes",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getConfig",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "tuple",
                        "name": "policy",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "treasuryFee"
                            },
                            {
                                "type": "uint256",
                                "name": "minBaseFee"
                            },
                            {
                                "type": "uint256",
                                "name": "delegationRate"
                            },
                            {
                                "type": "uint256",
                                "name": "unbondingPeriod"
                            },
                            {
                                "type": "uint256",
                                "name": "initialInflationReserve"
                            },
                            {
                                "type": "uint256",
                                "name": "withholdingThreshold"
                            },
                            {
                                "type": "uint256",
                                "name": "proposerRewardRate"
                            },
                            {
                                "type": "uint256",
                                "name": "oracleRewardRate"
                            },
                            {
                                "type": "address",
                                "name": "withheldRewardsPool"
                            },
                            {
                                "type": "address",
                                "name": "treasuryAccount"
                            },
                            {
                                "type": "uint256",
                                "name": "baseFeeChangeDenominator"
                            },
                            {
                                "type": "uint256",
                                "name": "elasticityMultiplier"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "contracts",
                        "components": [
                            {
                                "type": "address",
                                "name": "accountabilityContract"
                            },
                            {
                                "type": "address",
                                "name": "oracleContract"
                            },
                            {
                                "type": "address",
                                "name": "acuContract"
                            },
                            {
                                "type": "address",
                                "name": "supplyControlContract"
                            },
                            {
                                "type": "address",
                                "name": "stabilizationContract"
                            },
                            {
                                "type": "address",
                                "name": "upgradeManagerContract"
                            },
                            {
                                "type": "address",
                                "name": "inflationControllerContract"
                            },
                            {
                                "type": "address",
                                "name": "omissionAccountabilityContract"
                            },
                            {
                                "type": "address",
                                "name": "auctioneerContract"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "protocol",
                        "components": [
                            {
                                "type": "address",
                                "name": "operatorAccount"
                            },
                            {
                                "type": "uint256",
                                "name": "epochPeriod"
                            },
                            {
                                "type": "uint256",
                                "name": "blockPeriod"
                            },
                            {
                                "type": "uint256",
                                "name": "committeeSize"
                            },
                            {
                                "type": "uint256",
                                "name": "maxScheduleDuration"
                            },
                            {
                                "type": "uint256",
                                "name": "gasLimit"
                            },
                            {
                                "type": "uint256",
                                "name": "gasLimitBoundDivisor"
                            },
                            {
                                "type": "uint256",
                                "name": "clusteringThreshold"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "contractVersion"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getCurrentCommitteeSize",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getCurrentEpochPeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getEpochByHeight",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_height"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "tuple[]",
                        "name": "committee",
                        "components": [
                            {
                                "type": "address",
                                "name": "addr"
                            },
                            {
                                "type": "uint256",
                                "name": "votingPower"
                            },
                            {
                                "type": "bytes",
                                "name": "consensusKey"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "previousEpochBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "epochBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "nextEpochBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "omissionDelta"
                    },
                    {
                        "type": "tuple",
                        "name": "eip1559",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "minBaseFee"
                            },
                            {
                                "type": "uint256",
                                "name": "baseFeeChangeDenominator"
                            },
                            {
                                "type": "uint256",
                                "name": "elasticityMultiplier"
                            },
                            {
                                "type": "uint256",
                                "name": "gasLimitBoundDivisor"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getEpochFromBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_block"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getEpochID",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getEpochInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "tuple[]",
                        "name": "committee",
                        "components": [
                            {
                                "type": "address",
                                "name": "addr"
                            },
                            {
                                "type": "uint256",
                                "name": "votingPower"
                            },
                            {
                                "type": "bytes",
                                "name": "consensusKey"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "previousEpochBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "epochBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "nextEpochBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "omissionDelta"
                    },
                    {
                        "type": "tuple",
                        "name": "eip1559",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "minBaseFee"
                            },
                            {
                                "type": "uint256",
                                "name": "baseFeeChangeDenominator"
                            },
                            {
                                "type": "uint256",
                                "name": "elasticityMultiplier"
                            },
                            {
                                "type": "uint256",
                                "name": "gasLimitBoundDivisor"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getEpochPeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getEpochTotalBondedStake",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getInflationReserve",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getLastEpochBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getLastEpochTime",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getLiquidLogicContract",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getMaxCommitteeSize",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getMaxScheduleDuration",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getMinimumBaseFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getNewContract",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            },
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getNextEpochBlock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getOperator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getOracle",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getSchedule",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_vault"
            },
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "totalAmount"
                    },
                    {
                        "type": "uint256",
                        "name": "unlockedAmount"
                    },
                    {
                        "type": "uint256",
                        "name": "start"
                    },
                    {
                        "type": "uint256",
                        "name": "totalDuration"
                    },
                    {
                        "type": "uint256",
                        "name": "lastUnlockTime"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getSlasher",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getTotalSchedules",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_vault"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getTreasuryAccount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getTreasuryFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getUnbondingPeriod",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getUnbondingRequestByID",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_id"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "address",
                        "name": "delegator"
                    },
                    {
                        "type": "address",
                        "name": "delegatee"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "uint256",
                        "name": "unbondingShare"
                    },
                    {
                        "type": "uint256",
                        "name": "requestBlock"
                    },
                    {
                        "type": "bool",
                        "name": "unlocked"
                    },
                    {
                        "type": "bool",
                        "name": "released"
                    },
                    {
                        "type": "bool",
                        "name": "selfDelegation"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getUnbondingShare",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_unbondingID"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getValidator",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_addr"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "address",
                        "name": "treasury"
                    },
                    {
                        "type": "address",
                        "name": "nodeAddress"
                    },
                    {
                        "type": "address",
                        "name": "oracleAddress"
                    },
                    {
                        "type": "string",
                        "name": "enode"
                    },
                    {
                        "type": "uint256",
                        "name": "commissionRate"
                    },
                    {
                        "type": "uint256",
                        "name": "bondedStake"
                    },
                    {
                        "type": "uint256",
                        "name": "unbondingStake"
                    },
                    {
                        "type": "uint256",
                        "name": "unbondingShares"
                    },
                    {
                        "type": "uint256",
                        "name": "selfBondedStake"
                    },
                    {
                        "type": "uint256",
                        "name": "selfUnbondingStake"
                    },
                    {
                        "type": "uint256",
                        "name": "selfUnbondingShares"
                    },
                    {
                        "type": "uint256",
                        "name": "selfUnbondingStakeLocked"
                    },
                    {
                        "type": "address",
                        "name": "liquidStateContract"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidSupply"
                    },
                    {
                        "type": "uint256",
                        "name": "registrationBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "totalSlashed"
                    },
                    {
                        "type": "uint256",
                        "name": "jailReleaseBlock"
                    },
                    {
                        "type": "bytes",
                        "name": "consensusKey"
                    },
                    {
                        "type": "uint8",
                        "name": "state"
                    },
                    {
                        "type": "uint256",
                        "name": "conversionRatio"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getValidatorState",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_addr"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getValidators",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getVersion",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isUnbondingReleased",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_unbondingID"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "jail",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_nodeAddress"
            },
            {
                "type": "uint256",
                "name": "_jailtime"
            },
            {
                "type": "uint8",
                "name": "_newJailedState"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "jailbound",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_nodeAddress"
            },
            {
                "type": "uint8",
                "name": "_newJailboundState"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mint",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_addr"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "name",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "pauseValidator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "registerValidator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_enode"
            },
            {
                "type": "address",
                "name": "_oracleAddress"
            },
            {
                "type": "bytes",
                "name": "_consensusKey"
            },
            {
                "type": "bytes",
                "name": "_signatures"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "resetContractUpgrade",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setAccountabilityContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setAcuContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setAuctioneerContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setClusteringThreshold",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_threshold"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setCommitteeSize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_size"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setEip1559Params",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "_params",
                "components": [
                    {
                        "type": "uint256",
                        "name": "minBaseFee"
                    },
                    {
                        "type": "uint256",
                        "name": "baseFeeChangeDenominator"
                    },
                    {
                        "type": "uint256",
                        "name": "elasticityMultiplier"
                    },
                    {
                        "type": "uint256",
                        "name": "gasLimitBoundDivisor"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setEpochPeriod",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_period"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setGasLimit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_gasLimit"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setInflationControllerContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setLiquidLogicContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_contract"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMaxScheduleDuration",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_newMaxDuration"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOmissionAccountabilityContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOperatorAccount",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOracleContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOracleRewardRate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_oracleRewardRate"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setProposerRewardRate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_proposerRewardRate"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setSlasher",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_slasher"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setStabilizationContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setSupplyControlContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTreasuryAccount",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTreasuryFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_treasuryFee"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setUnbondingPeriod",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_period"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setUpgradeManagerContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_address"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setWithheldRewardsPool",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_pool"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setWithholdingThreshold",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_withholdingThreshold"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "slash",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_nodeAddress"
            },
            {
                "type": "uint256",
                "name": "_slashingRate"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "slashingAmount"
            }
        ]
    },
    {
        "type": "function",
        "name": "slashAndJail",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_nodeAddress"
            },
            {
                "type": "uint256",
                "name": "_slashingRate"
            },
            {
                "type": "uint256",
                "name": "_jailtime"
            },
            {
                "type": "uint8",
                "name": "_newJailedState"
            },
            {
                "type": "uint8",
                "name": "_newJailboundState"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "slashingAmount"
            },
            {
                "type": "uint256",
                "name": "jailReleaseBlock"
            },
            {
                "type": "bool",
                "name": "isJailbound"
            }
        ]
    },
    {
        "type": "function",
        "name": "symbol",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "totalSupply",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transfer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_recipient"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_sender"
            },
            {
                "type": "address",
                "name": "_recipient"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "unbond",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_validator"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "unbondFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_account"
            },
            {
                "type": "address",
                "name": "_validator"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "updateEnode",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_nodeAddress"
            },
            {
                "type": "string",
                "name": "_enode"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "upgradeContract",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "_bytecode"
            },
            {
                "type": "string",
                "name": "_abi"
            }
        ],
        "outputs": []
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
