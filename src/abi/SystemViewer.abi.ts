export const ABI_JSON = [
    {
        "type": "error",
        "name": "AddressEmptyCode",
        "inputs": [
            {
                "type": "address",
                "name": "target"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC1967InvalidImplementation",
        "inputs": [
            {
                "type": "address",
                "name": "implementation"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC1967NonPayable",
        "inputs": []
    },
    {
        "type": "error",
        "name": "FailedCall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidInitialization",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidParameters",
        "inputs": [
            {
                "type": "string",
                "name": "reason"
            }
        ]
    },
    {
        "type": "error",
        "name": "NotInitializing",
        "inputs": []
    },
    {
        "type": "error",
        "name": "OwnableInvalidOwner",
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ]
    },
    {
        "type": "error",
        "name": "OwnableUnauthorizedAccount",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
    },
    {
        "type": "error",
        "name": "UUPSUnauthorizedCallContext",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UUPSUnsupportedProxiableUUID",
        "inputs": [
            {
                "type": "bytes32",
                "name": "slot"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Initialized",
        "inputs": [
            {
                "type": "uint64",
                "name": "version",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Upgraded",
        "inputs": [
            {
                "type": "address",
                "name": "implementation",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "UPGRADE_INTERFACE_VERSION",
        "constant": true,
        "stateMutability": "view",
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
        "name": "clearing",
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
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_clearing"
            },
            {
                "type": "address",
                "name": "_productRegistry"
            },
            {
                "type": "address",
                "name": "_marginAccountRegistry"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "maeByCollateralAsset",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collateralAsset"
            },
            {
                "type": "address[]",
                "name": "accounts"
            }
        ],
        "outputs": [
            {
                "type": "int256[]",
                "name": "results"
            }
        ]
    },
    {
        "type": "function",
        "name": "maeByCollateralAssets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "collateralAssets"
            },
            {
                "type": "address[]",
                "name": "accounts"
            }
        ],
        "outputs": [
            {
                "type": "int256[]",
                "name": "results"
            }
        ]
    },
    {
        "type": "function",
        "name": "maeChecksByCollateralAsset",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collateralAsset"
            },
            {
                "type": "address[]",
                "name": "accounts"
            },
            {
                "type": "tuple[]",
                "name": "settlements",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "positionId"
                    },
                    {
                        "type": "int256",
                        "name": "quantity"
                    },
                    {
                        "type": "uint256",
                        "name": "price"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bool[]",
                "name": "results"
            },
            {
                "type": "int256[]",
                "name": "maeAfter"
            },
            {
                "type": "uint256[]",
                "name": "mmuAfter"
            }
        ]
    },
    {
        "type": "function",
        "name": "marginAccountRegistry",
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
        "name": "owner",
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
        "name": "positionsByCollateralAsset",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collateralAsset"
            },
            {
                "type": "address[]",
                "name": "accounts"
            }
        ],
        "outputs": [
            {
                "type": "tuple[][]",
                "name": "results",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "positionId"
                    },
                    {
                        "type": "int256",
                        "name": "quantity"
                    },
                    {
                        "type": "int256",
                        "name": "costBasis"
                    },
                    {
                        "type": "uint256",
                        "name": "maintenanceMargin"
                    },
                    {
                        "type": "int256",
                        "name": "pnl"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "positionsByCollateralAssets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "collateralAssets"
            },
            {
                "type": "address[]",
                "name": "accounts"
            }
        ],
        "outputs": [
            {
                "type": "tuple[][]",
                "name": "results",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "positionId"
                    },
                    {
                        "type": "int256",
                        "name": "quantity"
                    },
                    {
                        "type": "int256",
                        "name": "costBasis"
                    },
                    {
                        "type": "uint256",
                        "name": "maintenanceMargin"
                    },
                    {
                        "type": "int256",
                        "name": "pnl"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "productDetails",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "productIds"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "details",
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
                        "type": "string",
                        "name": "priceQuotation"
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
                        "name": "earliestFSPSubmissionTime"
                    },
                    {
                        "type": "uint256",
                        "name": "unitValue"
                    },
                    {
                        "type": "uint16",
                        "name": "initialMarginRequirement"
                    },
                    {
                        "type": "uint16",
                        "name": "maintenanceMarginRequirement"
                    },
                    {
                        "type": "uint64",
                        "name": "offerPriceBuffer"
                    },
                    {
                        "type": "uint64",
                        "name": "auctionBounty"
                    },
                    {
                        "type": "uint32",
                        "name": "tradeoutInterval"
                    },
                    {
                        "type": "uint8",
                        "name": "tickSize"
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
        "name": "productRegistry",
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
        "name": "productStates",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "productIds"
            }
        ],
        "outputs": [
            {
                "type": "uint8[]",
                "name": "states"
            }
        ]
    },
    {
        "type": "function",
        "name": "proxiableUUID",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "upgradeToAndCall",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "newImplementation"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "userMarginDataByCollateralAsset",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collateralAsset"
            },
            {
                "type": "address[]",
                "name": "accounts"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "data",
                "components": [
                    {
                        "type": "address",
                        "name": "collateralAsset"
                    },
                    {
                        "type": "address",
                        "name": "marginAccountId"
                    },
                    {
                        "type": "int256",
                        "name": "mae"
                    },
                    {
                        "type": "uint256",
                        "name": "mmu"
                    },
                    {
                        "type": "tuple[]",
                        "name": "positions",
                        "components": [
                            {
                                "type": "bytes32",
                                "name": "positionId"
                            },
                            {
                                "type": "int256",
                                "name": "quantity"
                            },
                            {
                                "type": "int256",
                                "name": "costBasis"
                            },
                            {
                                "type": "uint256",
                                "name": "maintenanceMargin"
                            },
                            {
                                "type": "int256",
                                "name": "pnl"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "userMarginDataByCollateralAssets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "collateralAssets"
            },
            {
                "type": "address[]",
                "name": "accounts"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "data",
                "components": [
                    {
                        "type": "address",
                        "name": "collateralAsset"
                    },
                    {
                        "type": "address",
                        "name": "marginAccountId"
                    },
                    {
                        "type": "int256",
                        "name": "mae"
                    },
                    {
                        "type": "uint256",
                        "name": "mmu"
                    },
                    {
                        "type": "tuple[]",
                        "name": "positions",
                        "components": [
                            {
                                "type": "bytes32",
                                "name": "positionId"
                            },
                            {
                                "type": "int256",
                                "name": "quantity"
                            },
                            {
                                "type": "int256",
                                "name": "costBasis"
                            },
                            {
                                "type": "uint256",
                                "name": "maintenanceMargin"
                            },
                            {
                                "type": "int256",
                                "name": "pnl"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "valuations",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "productIds"
            }
        ],
        "outputs": [
            {
                "type": "uint256[]",
                "name": "prices"
            }
        ]
    }
]
