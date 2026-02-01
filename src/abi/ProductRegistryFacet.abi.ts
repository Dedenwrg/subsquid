export const ABI_JSON = [
    {
        "type": "error",
        "name": "DepositNotPossible",
        "inputs": [
            {
                "type": "uint8",
                "name": "state"
            }
        ]
    },
    {
        "type": "error",
        "name": "InsufficientBalance",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            },
            {
                "type": "uint256",
                "name": "balance"
            },
            {
                "type": "uint256",
                "name": "required"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidFSPSubmissionTime",
        "inputs": [
            {
                "type": "uint256",
                "name": "startTime"
            },
            {
                "type": "uint256",
                "name": "earliestFSPSubmissionTime"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidFieldAccess",
        "inputs": [
            {
                "type": "uint8",
                "name": "productType"
            },
            {
                "type": "string",
                "name": "field"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidParameter",
        "inputs": [
            {
                "type": "string",
                "name": "paramName"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidPriceRange",
        "inputs": [
            {
                "type": "int256",
                "name": "minPrice"
            },
            {
                "type": "int256",
                "name": "maxPrice"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidProductId",
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidStartTime",
        "inputs": [
            {
                "type": "uint256",
                "name": "startTime"
            },
            {
                "type": "uint256",
                "name": "blockTimestamp"
            }
        ]
    },
    {
        "type": "error",
        "name": "NotEnoughFee",
        "inputs": [
            {
                "type": "uint256",
                "name": "fee"
            },
            {
                "type": "uint256",
                "name": "requiredFee"
            }
        ]
    },
    {
        "type": "error",
        "name": "NotFound",
        "inputs": [
            {
                "type": "string",
                "name": "parameter"
            }
        ]
    },
    {
        "type": "error",
        "name": "NotImplemented",
        "inputs": [
            {
                "type": "string",
                "name": "feature"
            }
        ]
    },
    {
        "type": "error",
        "name": "ProductExists",
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ]
    },
    {
        "type": "error",
        "name": "SafeCastOverflowedUintToInt",
        "inputs": [
            {
                "type": "uint256",
                "name": "value"
            }
        ]
    },
    {
        "type": "error",
        "name": "Unauthorized",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BuilderRewardsClaimed",
        "inputs": [
            {
                "type": "address",
                "name": "builder",
                "indexed": true
            },
            {
                "type": "address",
                "name": "treasury",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "builderReward",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "treasuryReward",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "productId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BuilderStakeIncreased",
        "inputs": [
            {
                "type": "uint256",
                "name": "stake",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "productId",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "builderStakeData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "payoutRemaining"
                    },
                    {
                        "type": "uint256",
                        "name": "claimableRewards"
                    },
                    {
                        "type": "tuple",
                        "name": "pendingStakeData",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "payout"
                            },
                            {
                                "type": "uint256",
                                "name": "activeAt"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "claimBuilderRewards",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "claimableBuilderRewards",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "builderRewards"
            },
            {
                "type": "uint256",
                "name": "treasuryRewads"
            }
        ]
    },
    {
        "type": "function",
        "name": "expirySpecification",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "earliestFSPSubmissionTime"
                    },
                    {
                        "type": "uint256",
                        "name": "tradeoutInterval"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "futuresProductV1",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "tuple",
                        "name": "base",
                        "components": [
                            {
                                "type": "tuple",
                                "name": "metadata",
                                "components": [
                                    {
                                        "type": "address",
                                        "name": "builder"
                                    },
                                    {
                                        "type": "string",
                                        "name": "symbol"
                                    },
                                    {
                                        "type": "string",
                                        "name": "description"
                                    }
                                ]
                            },
                            {
                                "type": "tuple",
                                "name": "oracleSpec",
                                "components": [
                                    {
                                        "type": "address",
                                        "name": "oracleAddress"
                                    },
                                    {
                                        "type": "uint8",
                                        "name": "fsvDecimals"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "fspAlpha"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "fspBeta"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "fsvCalldata"
                                    }
                                ]
                            },
                            {
                                "type": "address",
                                "name": "collateralAsset"
                            },
                            {
                                "type": "uint256",
                                "name": "startTime"
                            },
                            {
                                "type": "uint256",
                                "name": "pointValue"
                            },
                            {
                                "type": "uint8",
                                "name": "priceDecimals"
                            },
                            {
                                "type": "string",
                                "name": "extendedMetadata"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "expirySpec",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "earliestFSPSubmissionTime"
                            },
                            {
                                "type": "uint256",
                                "name": "tradeoutInterval"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "marginSpec",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "imr"
                            },
                            {
                                "type": "uint256",
                                "name": "mmr"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "id",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "product",
                "components": [
                    {
                        "type": "tuple",
                        "name": "metadata",
                        "components": [
                            {
                                "type": "address",
                                "name": "builder"
                            },
                            {
                                "type": "string",
                                "name": "symbol"
                            },
                            {
                                "type": "string",
                                "name": "description"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "oracleSpec",
                        "components": [
                            {
                                "type": "address",
                                "name": "oracleAddress"
                            },
                            {
                                "type": "uint8",
                                "name": "fsvDecimals"
                            },
                            {
                                "type": "int256",
                                "name": "fspAlpha"
                            },
                            {
                                "type": "int256",
                                "name": "fspBeta"
                            },
                            {
                                "type": "bytes",
                                "name": "fsvCalldata"
                            }
                        ]
                    },
                    {
                        "type": "address",
                        "name": "collateralAsset"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "pointValue"
                    },
                    {
                        "type": "uint8",
                        "name": "priceDecimals"
                    },
                    {
                        "type": "string",
                        "name": "extendedMetadata"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "increaseBuilderStake",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            },
            {
                "type": "uint256",
                "name": "stakeAmount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isBuilderStakeValid",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "stakeAmount"
            },
            {
                "type": "address",
                "name": "collateral"
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
        "name": "minBuilderStake",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collateral"
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
        "name": "mmr",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
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
        "name": "nextInterval",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
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
        "name": "predictionProductV1",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "tuple",
                        "name": "base",
                        "components": [
                            {
                                "type": "tuple",
                                "name": "metadata",
                                "components": [
                                    {
                                        "type": "address",
                                        "name": "builder"
                                    },
                                    {
                                        "type": "string",
                                        "name": "symbol"
                                    },
                                    {
                                        "type": "string",
                                        "name": "description"
                                    }
                                ]
                            },
                            {
                                "type": "tuple",
                                "name": "oracleSpec",
                                "components": [
                                    {
                                        "type": "address",
                                        "name": "oracleAddress"
                                    },
                                    {
                                        "type": "uint8",
                                        "name": "fsvDecimals"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "fspAlpha"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "fspBeta"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "fsvCalldata"
                                    }
                                ]
                            },
                            {
                                "type": "address",
                                "name": "collateralAsset"
                            },
                            {
                                "type": "uint256",
                                "name": "startTime"
                            },
                            {
                                "type": "uint256",
                                "name": "pointValue"
                            },
                            {
                                "type": "uint8",
                                "name": "priceDecimals"
                            },
                            {
                                "type": "string",
                                "name": "extendedMetadata"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "expirySpec",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "earliestFSPSubmissionTime"
                            },
                            {
                                "type": "uint256",
                                "name": "tradeoutInterval"
                            }
                        ]
                    },
                    {
                        "type": "int256",
                        "name": "maxPrice"
                    },
                    {
                        "type": "int256",
                        "name": "minPrice"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "productTreasury",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
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
        "name": "products",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            },
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "tuple",
                        "name": "metadata",
                        "components": [
                            {
                                "type": "address",
                                "name": "builder"
                            },
                            {
                                "type": "string",
                                "name": "symbol"
                            },
                            {
                                "type": "string",
                                "name": "description"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "oracleSpec",
                        "components": [
                            {
                                "type": "address",
                                "name": "oracleAddress"
                            },
                            {
                                "type": "uint8",
                                "name": "fsvDecimals"
                            },
                            {
                                "type": "int256",
                                "name": "fspAlpha"
                            },
                            {
                                "type": "int256",
                                "name": "fspBeta"
                            },
                            {
                                "type": "bytes",
                                "name": "fsvCalldata"
                            }
                        ]
                    },
                    {
                        "type": "address",
                        "name": "collateralAsset"
                    },
                    {
                        "type": "uint256",
                        "name": "startTime"
                    },
                    {
                        "type": "uint256",
                        "name": "pointValue"
                    },
                    {
                        "type": "uint8",
                        "name": "priceDecimals"
                    },
                    {
                        "type": "string",
                        "name": "extendedMetadata"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "registerFutureProduct",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "tuple",
                        "name": "base",
                        "components": [
                            {
                                "type": "tuple",
                                "name": "metadata",
                                "components": [
                                    {
                                        "type": "address",
                                        "name": "builder"
                                    },
                                    {
                                        "type": "string",
                                        "name": "symbol"
                                    },
                                    {
                                        "type": "string",
                                        "name": "description"
                                    }
                                ]
                            },
                            {
                                "type": "tuple",
                                "name": "oracleSpec",
                                "components": [
                                    {
                                        "type": "address",
                                        "name": "oracleAddress"
                                    },
                                    {
                                        "type": "uint8",
                                        "name": "fsvDecimals"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "fspAlpha"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "fspBeta"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "fsvCalldata"
                                    }
                                ]
                            },
                            {
                                "type": "address",
                                "name": "collateralAsset"
                            },
                            {
                                "type": "uint256",
                                "name": "startTime"
                            },
                            {
                                "type": "uint256",
                                "name": "pointValue"
                            },
                            {
                                "type": "uint8",
                                "name": "priceDecimals"
                            },
                            {
                                "type": "string",
                                "name": "extendedMetadata"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "expirySpec",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "earliestFSPSubmissionTime"
                            },
                            {
                                "type": "uint256",
                                "name": "tradeoutInterval"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "marginSpec",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "imr"
                            },
                            {
                                "type": "uint256",
                                "name": "mmr"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "registerPredictionProduct",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "product",
                "components": [
                    {
                        "type": "tuple",
                        "name": "base",
                        "components": [
                            {
                                "type": "tuple",
                                "name": "metadata",
                                "components": [
                                    {
                                        "type": "address",
                                        "name": "builder"
                                    },
                                    {
                                        "type": "string",
                                        "name": "symbol"
                                    },
                                    {
                                        "type": "string",
                                        "name": "description"
                                    }
                                ]
                            },
                            {
                                "type": "tuple",
                                "name": "oracleSpec",
                                "components": [
                                    {
                                        "type": "address",
                                        "name": "oracleAddress"
                                    },
                                    {
                                        "type": "uint8",
                                        "name": "fsvDecimals"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "fspAlpha"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "fspBeta"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "fsvCalldata"
                                    }
                                ]
                            },
                            {
                                "type": "address",
                                "name": "collateralAsset"
                            },
                            {
                                "type": "uint256",
                                "name": "startTime"
                            },
                            {
                                "type": "uint256",
                                "name": "pointValue"
                            },
                            {
                                "type": "uint8",
                                "name": "priceDecimals"
                            },
                            {
                                "type": "string",
                                "name": "extendedMetadata"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "expirySpec",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "earliestFSPSubmissionTime"
                            },
                            {
                                "type": "uint256",
                                "name": "tradeoutInterval"
                            }
                        ]
                    },
                    {
                        "type": "int256",
                        "name": "maxPrice"
                    },
                    {
                        "type": "int256",
                        "name": "minPrice"
                    }
                ]
            },
            {
                "type": "uint256",
                "name": "initialBuilderStake"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "state",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
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
        "name": "typeOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    }
]
