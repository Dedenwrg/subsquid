export const ABI_JSON = [
    {
        "type": "error",
        "name": "AdminControlledNotAuthorized",
        "inputs": [
            {
                "type": "bytes4",
                "name": "selector"
            },
            {
                "type": "address",
                "name": "sender"
            }
        ]
    },
    {
        "type": "error",
        "name": "AlreadyInitialized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "DuplicateMarginAccount",
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            }
        ]
    },
    {
        "type": "error",
        "name": "ECDSAInvalidSignature",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ECDSAInvalidSignatureLength",
        "inputs": [
            {
                "type": "uint256",
                "name": "length"
            }
        ]
    },
    {
        "type": "error",
        "name": "ECDSAInvalidSignatureS",
        "inputs": [
            {
                "type": "bytes32",
                "name": "s"
            }
        ]
    },
    {
        "type": "error",
        "name": "IntentFullySpent",
        "inputs": [
            {
                "type": "address",
                "name": "intentAccount"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidFeeSum",
        "inputs": [
            {
                "type": "int256",
                "name": "feeSum"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidIntent",
        "inputs": [
            {
                "type": "string",
                "name": "parameter"
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
        "name": "InvalidProductState",
        "inputs": [
            {
                "type": "uint8",
                "name": "state"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidSignature",
        "inputs": [
            {
                "type": "address",
                "name": "signer"
            },
            {
                "type": "address",
                "name": "expectedSigner"
            }
        ]
    },
    {
        "type": "error",
        "name": "InvalidTradeIntents",
        "inputs": [
            {
                "type": "uint256",
                "name": "length"
            }
        ]
    },
    {
        "type": "error",
        "name": "MAECheckFailed",
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            }
        ]
    },
    {
        "type": "error",
        "name": "MaxFeeRateExceeded",
        "inputs": [
            {
                "type": "int256",
                "name": "feeRate"
            },
            {
                "type": "uint256",
                "name": "maxFeeRate"
            }
        ]
    },
    {
        "type": "error",
        "name": "MismatchedTrade",
        "inputs": [
            {
                "type": "uint256",
                "name": "buySide"
            },
            {
                "type": "uint256",
                "name": "sellSide"
            }
        ]
    },
    {
        "type": "error",
        "name": "QueueIsEmpty",
        "inputs": []
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
        "type": "error",
        "name": "UnauthorizedTradeSubmitter",
        "inputs": [
            {
                "type": "address",
                "name": "needed"
            },
            {
                "type": "address",
                "name": "got"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TradeExecuted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "productID",
                "indexed": true
            },
            {
                "type": "address",
                "name": "protocolID",
                "indexed": true
            },
            {
                "type": "address",
                "name": "marginAccount",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "price",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "quantity",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "MAX_TRADING_FEE_RATE",
        "constant": true,
        "stateMutability": "pure",
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
        "name": "clearingFeeRate",
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
        "name": "config",
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
                        "name": "auctionConfig",
                        "components": [
                            {
                                "type": "uint64",
                                "name": "restorationBuffer"
                            },
                            {
                                "type": "uint256",
                                "name": "liquidationDuration"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "clearingConfig",
                        "components": [
                            {
                                "type": "uint32",
                                "name": "clearingFeeRate"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "estimateFees",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productID"
            },
            {
                "type": "uint256",
                "name": "price"
            },
            {
                "type": "uint256",
                "name": "quantity"
            },
            {
                "type": "int256",
                "name": "tradingFeeRate"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "clearingFee"
            },
            {
                "type": "int256",
                "name": "tradingFee"
            }
        ]
    },
    {
        "type": "function",
        "name": "execute",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "trade",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "productID"
                    },
                    {
                        "type": "address",
                        "name": "protocolID"
                    },
                    {
                        "type": "uint256",
                        "name": "tradeID"
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
                        "type": "address[]",
                        "name": "accounts"
                    },
                    {
                        "type": "uint256[]",
                        "name": "quantities"
                    },
                    {
                        "type": "int256[]",
                        "name": "feeRates"
                    },
                    {
                        "type": "tuple[]",
                        "name": "intents",
                        "components": [
                            {
                                "type": "address",
                                "name": "marginAccountID"
                            },
                            {
                                "type": "address",
                                "name": "intentAccountID"
                            },
                            {
                                "type": "bytes32",
                                "name": "hash"
                            },
                            {
                                "type": "tuple",
                                "name": "data",
                                "components": [
                                    {
                                        "type": "uint256",
                                        "name": "nonce"
                                    },
                                    {
                                        "type": "address",
                                        "name": "tradingProtocolID"
                                    },
                                    {
                                        "type": "bytes32",
                                        "name": "productID"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "limitPrice"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "quantity"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "maxTradingFeeRate"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "goodUntil"
                                    },
                                    {
                                        "type": "uint8",
                                        "name": "side"
                                    }
                                ]
                            },
                            {
                                "type": "bytes",
                                "name": "signature"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "bool",
                "name": "fallbackOnFailure"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "finalizeInitialization",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountRegistry"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getAdmin",
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
        "name": "getMarginAccountRegistry",
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
        "name": "getProductRegistry",
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
        "name": "getTreasury",
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
        "name": "hashIntent",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "intent",
                "components": [
                    {
                        "type": "address",
                        "name": "marginAccountID"
                    },
                    {
                        "type": "address",
                        "name": "intentAccountID"
                    },
                    {
                        "type": "bytes32",
                        "name": "hash"
                    },
                    {
                        "type": "tuple",
                        "name": "data",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "nonce"
                            },
                            {
                                "type": "address",
                                "name": "tradingProtocolID"
                            },
                            {
                                "type": "bytes32",
                                "name": "productID"
                            },
                            {
                                "type": "uint256",
                                "name": "limitPrice"
                            },
                            {
                                "type": "uint256",
                                "name": "quantity"
                            },
                            {
                                "type": "uint256",
                                "name": "maxTradingFeeRate"
                            },
                            {
                                "type": "uint256",
                                "name": "goodUntil"
                            },
                            {
                                "type": "uint8",
                                "name": "side"
                            }
                        ]
                    },
                    {
                        "type": "bytes",
                        "name": "signature"
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
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_productRegistry"
            },
            {
                "type": "address",
                "name": "_treasury"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isAdminActive",
        "constant": true,
        "stateMutability": "view",
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
        "name": "setActive",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "active"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setAdmin",
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
        "name": "setConfig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "_config",
                "components": [
                    {
                        "type": "tuple",
                        "name": "auctionConfig",
                        "components": [
                            {
                                "type": "uint64",
                                "name": "restorationBuffer"
                            },
                            {
                                "type": "uint256",
                                "name": "liquidationDuration"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "clearingConfig",
                        "components": [
                            {
                                "type": "uint32",
                                "name": "clearingFeeRate"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTreasury",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newTreasury"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "version",
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
    }
]
