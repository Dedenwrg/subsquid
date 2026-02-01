export const ABI_JSON = [
    {
        "type": "error",
        "name": "AccountNotBankrupt",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
    },
    {
        "type": "error",
        "name": "EVWMA_NotInitialized",
        "inputs": []
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
        "name": "LAAQuantityMismatch",
        "inputs": [
            {
                "type": "int256",
                "name": "neededQuantity"
            },
            {
                "type": "int256",
                "name": "totalLAAQuantity"
            }
        ]
    },
    {
        "type": "error",
        "name": "LAASetIncomplete",
        "inputs": [
            {
                "type": "uint256",
                "name": "neededCount"
            },
            {
                "type": "uint256",
                "name": "totalLAASetCount"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_IntoUint256_Underflow",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            }
        ]
    },
    {
        "type": "error",
        "name": "QueueIsEmpty",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LossMutualized",
        "inputs": [
            {
                "type": "address",
                "name": "bankruptAccount",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collateralToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "caller",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "lossAmount",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "lastTradedTimestamp",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            },
            {
                "type": "address",
                "name": "trader"
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
        "name": "mutualizeLosses",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "bankruptAccountId"
            },
            {
                "type": "address",
                "name": "collateralToken"
            },
            {
                "type": "bytes32[]",
                "name": "productIds"
            },
            {
                "type": "address[][]",
                "name": "laas"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "uniqueTraderCount",
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
        "name": "validateLAAs",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            },
            {
                "type": "address",
                "name": "bankruptAccount"
            },
            {
                "type": "bytes32",
                "name": "productId"
            },
            {
                "type": "address[]",
                "name": "productOwners"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "positionId"
                    },
                    {
                        "type": "int256",
                        "name": "bankruptAccountUPnL"
                    },
                    {
                        "type": "int256",
                        "name": "bankruptAccountQuantity"
                    },
                    {
                        "type": "uint256",
                        "name": "markPrice"
                    },
                    {
                        "type": "uint256",
                        "name": "pointValue"
                    },
                    {
                        "type": "uint256",
                        "name": "tickSize"
                    },
                    {
                        "type": "tuple[]",
                        "name": "laaData",
                        "components": [
                            {
                                "type": "address",
                                "name": "owner"
                            },
                            {
                                "type": "int256",
                                "name": "quantity"
                            },
                            {
                                "type": "uint256",
                                "name": "lastTradedTimestamp"
                            },
                            {
                                "type": "uint256",
                                "name": "positionAge"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
