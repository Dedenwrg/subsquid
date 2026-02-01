export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "autonity"
            },
            {
                "type": "tuple",
                "name": "recipientProfile",
                "components": [
                    {
                        "type": "address",
                        "name": "admin"
                    },
                    {
                        "type": "address",
                        "name": "beneficiary"
                    },
                    {
                        "type": "bool",
                        "name": "allowChangeBeneficiary"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "unlockingProfile",
                "components": [
                    {
                        "type": "uint256",
                        "name": "ntnBalance"
                    },
                    {
                        "type": "uint256",
                        "name": "start"
                    },
                    {
                        "type": "uint256",
                        "name": "cliffDuration"
                    },
                    {
                        "type": "uint256",
                        "name": "totalDuration"
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "stakingProfile",
                "components": [
                    {
                        "type": "uint256",
                        "name": "stakingStartTime"
                    },
                    {
                        "type": "bool",
                        "name": "canStake"
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AdminChanged",
        "inputs": [
            {
                "type": "address",
                "name": "newAdmin",
                "indexed": true
            },
            {
                "type": "address",
                "name": "oldAdmin",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BeneficiaryChanged",
        "inputs": [
            {
                "type": "address",
                "name": "newBeneficiary",
                "indexed": true
            },
            {
                "type": "address",
                "name": "oldBeneficiary",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FundsReleaseSummary",
        "inputs": [
            {
                "type": "address",
                "name": "beneficiary",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "availableValue",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "requestedAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "transferred",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "remaining",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "reason",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FundsReleased",
        "inputs": [
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "address",
                "name": "token",
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
        "name": "StakingRewardReleased",
        "inputs": [
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "address",
                "name": "token",
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
        "type": "fallback",
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "accruedFunds",
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
        "name": "addValidators",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "validators"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "bond",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "validator"
            },
            {
                "type": "uint256",
                "name": "amount"
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
        "name": "changeContractAdmin",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newAdmin"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "changeContractBeneficiary",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newBeneficiary"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimATNRewards",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "validator"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimAllATNRewards",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimAllRewards",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimAllStakingRewards",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimStakingRewards",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amount"
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
        "name": "contractTotalValue",
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
        "name": "getBeneficiary",
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
        "name": "getContract",
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
                        "name": "unlockingProfile",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "ntnBalance"
                            },
                            {
                                "type": "uint256",
                                "name": "start"
                            },
                            {
                                "type": "uint256",
                                "name": "cliffDuration"
                            },
                            {
                                "type": "uint256",
                                "name": "totalDuration"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "recipientProfile",
                        "components": [
                            {
                                "type": "address",
                                "name": "admin"
                            },
                            {
                                "type": "address",
                                "name": "beneficiary"
                            },
                            {
                                "type": "bool",
                                "name": "allowChangeBeneficiary"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "valuationProfile",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "totalShare"
                            },
                            {
                                "type": "uint256",
                                "name": "withdrawnShare"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "stakingProfile",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "stakingStartTime"
                            },
                            {
                                "type": "bool",
                                "name": "canStake"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "deployTimestamp"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getLockingFactoryAddress",
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
        "name": "getValidatorSet",
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
        "name": "lastBondingEpoch",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "validator"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "lastBondingID",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "validator"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "lastUnbondingID",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "validator"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "liquidBalance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "validator"
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
        "name": "lockChangeBeneficiary",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "lockedLiquidBalance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "validator"
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
        "name": "pendingBondingRequestAt",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "epochID"
                    },
                    {
                        "type": "address",
                        "name": "validator"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "uint256",
                        "name": "requestID"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "pendingBondingRequestCount",
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
        "name": "pendingUnbondingRequestAt",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "epochID"
                    },
                    {
                        "type": "address",
                        "name": "validator"
                    },
                    {
                        "type": "uint256",
                        "name": "amount"
                    },
                    {
                        "type": "uint256",
                        "name": "requestID"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "pendingUnbondingRequestCount",
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
        "name": "releaseAllLNTN",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "releaseAllNTN",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "releaseFunds",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "releaseLNTN",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "validator"
            },
            {
                "type": "uint256",
                "name": "amount"
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
        "name": "releaseNTN",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "remaining"
            }
        ]
    },
    {
        "type": "function",
        "name": "unbond",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "validator"
            },
            {
                "type": "uint256",
                "name": "amount"
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
        "name": "unclaimedATNRewards",
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
        "name": "unclaimedStakingRewards",
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
        "name": "unlockedFunds",
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
        "name": "unlockedLiquidBalance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "validator"
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
        "name": "updateFundsAndGetContract",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "tuple",
                        "name": "unlockingProfile",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "ntnBalance"
                            },
                            {
                                "type": "uint256",
                                "name": "start"
                            },
                            {
                                "type": "uint256",
                                "name": "cliffDuration"
                            },
                            {
                                "type": "uint256",
                                "name": "totalDuration"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "recipientProfile",
                        "components": [
                            {
                                "type": "address",
                                "name": "admin"
                            },
                            {
                                "type": "address",
                                "name": "beneficiary"
                            },
                            {
                                "type": "bool",
                                "name": "allowChangeBeneficiary"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "valuationProfile",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "totalShare"
                            },
                            {
                                "type": "uint256",
                                "name": "withdrawnShare"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "stakingProfile",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "stakingStartTime"
                            },
                            {
                                "type": "bool",
                                "name": "canStake"
                            }
                        ]
                    },
                    {
                        "type": "uint256",
                        "name": "deployTimestamp"
                    }
                ]
            }
        ]
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
