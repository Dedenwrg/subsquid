export const ABI_JSON = [
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
        "name": "InvalidTradePrice",
        "inputs": [
            {
                "type": "int256",
                "name": "price"
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
        "name": "PRBMath_MulDiv18_Overflow",
        "inputs": [
            {
                "type": "uint256",
                "name": "x"
            },
            {
                "type": "uint256",
                "name": "y"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_MulDiv_Overflow",
        "inputs": [
            {
                "type": "uint256",
                "name": "x"
            },
            {
                "type": "uint256",
                "name": "y"
            },
            {
                "type": "uint256",
                "name": "denominator"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Div_InputTooSmall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Div_Overflow",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            },
            {
                "type": "int256",
                "name": "y"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Exp2_InputTooBig",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Exp_InputTooBig",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Mul_InputTooSmall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Mul_Overflow",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            },
            {
                "type": "int256",
                "name": "y"
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
        "name": "FeeCollected",
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collateralAsset",
                "indexed": true
            },
            {
                "type": "int256",
                "name": "capitalAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "id",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "FeeDispersed",
        "inputs": [
            {
                "type": "address",
                "name": "recipient",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collateralAsset",
                "indexed": true
            },
            {
                "type": "int256",
                "name": "capitalAmount",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "id",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PositionUpdated",
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountId",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "productId",
                "indexed": true
            },
            {
                "type": "int256",
                "name": "costBasis",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "price",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "quantity",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "id",
                "indexed": false
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
                "name": "productId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "protocolId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "id",
                "indexed": false
            },
            {
                "type": "int256",
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
                "type": "int256",
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
                "name": ""
            },
            {
                "type": "int256",
                "name": ""
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
                        "name": "productId"
                    },
                    {
                        "type": "address",
                        "name": "protocolId"
                    },
                    {
                        "type": "uint256",
                        "name": "tradeId"
                    },
                    {
                        "type": "int256",
                        "name": "price"
                    },
                    {
                        "type": "uint256",
                        "name": "timestamp"
                    },
                    {
                        "type": "uint256",
                        "name": "quantity"
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
                        "type": "int32[]",
                        "name": "feeRates"
                    },
                    {
                        "type": "tuple[]",
                        "name": "intents",
                        "components": [
                            {
                                "type": "address",
                                "name": "marginAccountId"
                            },
                            {
                                "type": "address",
                                "name": "intentAccountId"
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
                                        "name": "tradingProtocolId"
                                    },
                                    {
                                        "type": "bytes32",
                                        "name": "productId"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "limitPrice"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "quantity"
                                    },
                                    {
                                        "type": "uint32",
                                        "name": "maxTradingFeeRate"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "goodUntil"
                                    },
                                    {
                                        "type": "uint8",
                                        "name": "side"
                                    },
                                    {
                                        "type": "address",
                                        "name": "referral"
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
    }
]
