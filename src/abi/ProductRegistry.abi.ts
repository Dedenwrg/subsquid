export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": []
    },
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
        "name": "AlreadyExists",
        "inputs": [
            {
                "type": "string",
                "name": "parameter"
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
        "name": "InvalidInitialization",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidMarginRequirement",
        "inputs": [
            {
                "type": "uint16",
                "name": "imr"
            },
            {
                "type": "uint16",
                "name": "mmr"
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
        "name": "ProductRegistered",
        "inputs": [
            {
                "type": "address",
                "name": "builder",
                "indexed": true
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
        "name": "auctionBounty",
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
        "name": "collateralAsset",
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
        "name": "earliestFSPSubmissionTime",
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
        "name": "imr",
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
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
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
        "name": "offerPriceBuffer",
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
        "name": "oracleSpecification",
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
        "name": "pointValue",
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
        "name": "register",
        "constant": false,
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
        ],
        "outputs": []
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
        "name": "setClearing",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "clearing_"
            }
        ],
        "outputs": []
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
        "name": "tickSize",
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
    }
]
