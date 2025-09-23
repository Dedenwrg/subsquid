export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "_voters"
            },
            {
                "type": "address[]",
                "name": "_nodeAddresses"
            },
            {
                "type": "address[]",
                "name": "_treasuries"
            },
            {
                "type": "string[]",
                "name": "_symbols"
            },
            {
                "type": "tuple",
                "name": "_config",
                "components": [
                    {
                        "type": "address",
                        "name": "autonity"
                    },
                    {
                        "type": "address",
                        "name": "operator"
                    },
                    {
                        "type": "uint256",
                        "name": "votePeriod"
                    },
                    {
                        "type": "int256",
                        "name": "outlierDetectionThreshold"
                    },
                    {
                        "type": "int256",
                        "name": "outlierSlashingThreshold"
                    },
                    {
                        "type": "uint256",
                        "name": "baseSlashingRate"
                    },
                    {
                        "type": "uint256",
                        "name": "nonRevealThreshold"
                    },
                    {
                        "type": "uint256",
                        "name": "revealResetInterval"
                    },
                    {
                        "type": "uint256",
                        "name": "slashingRateCap"
                    }
                ]
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
        "name": "CommitRevealMissed",
        "inputs": [
            {
                "type": "address",
                "name": "_voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "_round",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "_nonRevealCount",
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
        "name": "InvalidVote",
        "inputs": [
            {
                "type": "string",
                "name": "cause",
                "indexed": false
            },
            {
                "type": "address",
                "name": "reporter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "expValue",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "actualValue",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "extra",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewRound",
        "inputs": [
            {
                "type": "uint256",
                "name": "_round",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "_timestamp",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "_votePeriod",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewSymbols",
        "inputs": [
            {
                "type": "string[]",
                "name": "_symbols"
            },
            {
                "type": "uint256",
                "name": "_round",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewVoter",
        "inputs": [
            {
                "type": "address",
                "name": "reporter",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "extra",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NoRevealPenalty",
        "inputs": [
            {
                "type": "address",
                "name": "_voter",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "_round",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "_missedReveal",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Penalized",
        "inputs": [
            {
                "type": "address",
                "name": "_participant",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "_slashingAmount",
                "indexed": false
            },
            {
                "type": "string",
                "name": "_symbol",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "_median",
                "indexed": false
            },
            {
                "type": "uint120",
                "name": "_reported",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PriceUpdated",
        "inputs": [
            {
                "type": "uint256",
                "name": "price",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "round",
                "indexed": false
            },
            {
                "type": "string",
                "name": "symbol",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "status",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timestamp",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SuccessfulVote",
        "inputs": [
            {
                "type": "address",
                "name": "reporter",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "extra",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TotalOracleRewards",
        "inputs": [
            {
                "type": "uint256",
                "name": "ntnReward",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "atnReward",
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
        "name": "distributeRewards",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "_ntn"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finalize",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
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
                        "type": "address",
                        "name": "autonity"
                    },
                    {
                        "type": "address",
                        "name": "operator"
                    },
                    {
                        "type": "uint256",
                        "name": "votePeriod"
                    },
                    {
                        "type": "int256",
                        "name": "outlierDetectionThreshold"
                    },
                    {
                        "type": "int256",
                        "name": "outlierSlashingThreshold"
                    },
                    {
                        "type": "uint256",
                        "name": "baseSlashingRate"
                    },
                    {
                        "type": "uint256",
                        "name": "nonRevealThreshold"
                    },
                    {
                        "type": "uint256",
                        "name": "revealResetInterval"
                    },
                    {
                        "type": "uint256",
                        "name": "slashingRateCap"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getDecimals",
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
        "name": "getLastRoundBlock",
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
        "name": "getNewVotePeriod",
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
        "name": "getNewVoters",
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
        "name": "getNonRevealThreshold",
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
        "name": "getReports",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_symbol"
            },
            {
                "type": "address",
                "name": "_voter"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint120",
                        "name": "price"
                    },
                    {
                        "type": "uint8",
                        "name": "confidence"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getRewardPeriodPerformance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_voter"
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
        "name": "getRound",
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
        "name": "getRoundData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_round"
            },
            {
                "type": "string",
                "name": "_symbol"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "data",
                "components": [
                    {
                        "type": "uint256",
                        "name": "round"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "timestamp"
                    },
                    {
                        "type": "bool",
                        "name": "success"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getSymbolUpdatedRound",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getSymbols",
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
        "name": "getVotePeriod",
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
        "name": "getVoterInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_voter"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "round"
                    },
                    {
                        "type": "uint256",
                        "name": "commit"
                    },
                    {
                        "type": "uint256",
                        "name": "performance"
                    },
                    {
                        "type": "uint256",
                        "name": "nonRevealCount"
                    },
                    {
                        "type": "bool",
                        "name": "isVoter"
                    },
                    {
                        "type": "bool",
                        "name": "reportAvailable"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getVoterTreasuries",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_oracleAddress"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getVoterValidators",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_oracleAddress"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getVoters",
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
        "name": "latestRoundData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "_symbol"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "data",
                "components": [
                    {
                        "type": "uint256",
                        "name": "round"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "timestamp"
                    },
                    {
                        "type": "bool",
                        "name": "success"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "setCommitRevealConfig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_threshold"
            },
            {
                "type": "uint256",
                "name": "_resetInterval"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOperator",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_operator"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setSlashingConfig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "_outlierSlashingThreshold"
            },
            {
                "type": "int256",
                "name": "_outlierDetectionThreshold"
            },
            {
                "type": "uint256",
                "name": "_baseSlashingRate"
            },
            {
                "type": "uint256",
                "name": "_slashingRateCap"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setSymbols",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string[]",
                "name": "_symbols"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setVotePeriod",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_votePeriod"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setVoters",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "_newVoters"
            },
            {
                "type": "address[]",
                "name": "_treasury"
            },
            {
                "type": "address[]",
                "name": "_validator"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "updateVotersAndSymbol",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "vote",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_commit"
            },
            {
                "type": "tuple[]",
                "name": "_reports",
                "components": [
                    {
                        "type": "uint120",
                        "name": "price"
                    },
                    {
                        "type": "uint8",
                        "name": "confidence"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "_salt"
            },
            {
                "type": "uint8",
                "name": "_extra"
            }
        ],
        "outputs": []
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
