export const ABI_JSON = [
    {
        "type": "error",
        "name": "FeeInvariantViolated",
        "inputs": [
            {
                "type": "uint256",
                "name": "dispersed"
            },
            {
                "type": "int256",
                "name": "collected"
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
        "name": "InvalidInitialization",
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
        "name": "NotInitializing",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PositionNotFound",
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            },
            {
                "type": "bytes32",
                "name": "productId"
            }
        ]
    },
    {
        "type": "error",
        "name": "SafeERC20FailedOperation",
        "inputs": [
            {
                "type": "address",
                "name": "token"
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
        "name": "FeeCollected",
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID",
                "indexed": true
            },
            {
                "type": "int256",
                "name": "capitalAmount",
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
                "type": "uint256",
                "name": "capitalAmount",
                "indexed": false
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
        "name": "PositionUpdated",
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "positionId",
                "indexed": true
            },
            {
                "type": "int256",
                "name": "totalQuantity",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "costBasis",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "authorize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "intentAccount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "authorized",
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
                "name": "intentAccount"
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
        "name": "batchMaeCheck",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
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
            },
            {
                "type": "uint256[]",
                "name": "markPriceIfSettled"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "checkPassed"
            },
            {
                "type": "int256",
                "name": "maeAfter"
            },
            {
                "type": "uint256",
                "name": "mmuAfter"
            }
        ]
    },
    {
        "type": "function",
        "name": "batchSettle",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID"
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
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "capital",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            }
        ],
        "outputs": [
            {
                "type": "int256",
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
        "name": "collateralToken",
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
        "name": "collectFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            },
            {
                "type": "int256",
                "name": "capitalAmount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deposit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "disperseFees",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "recipients"
            },
            {
                "type": "uint256[]",
                "name": "capitalAmounts"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "estimateLiquidationPrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountId"
            },
            {
                "type": "bytes32",
                "name": "productId"
            },
            {
                "type": "uint256",
                "name": "price"
            },
            {
                "type": "int256",
                "name": "quantity"
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
        "name": "estimateLiquidationPriceForPosition",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountId"
            },
            {
                "type": "bytes32",
                "name": "positionId"
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
        "inputs": [
            {
                "type": "address",
                "name": "_collateralToken"
            },
            {
                "type": "address",
                "name": "_valuation"
            },
            {
                "type": "address",
                "name": "_productRegistry"
            },
            {
                "type": "address",
                "name": "_clearing"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mae",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            }
        ],
        "outputs": [
            {
                "type": "int256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "maeAndMmuAfterBatchTrade",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
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
            },
            {
                "type": "uint256[]",
                "name": "markPriceIfSettled"
            }
        ],
        "outputs": [
            {
                "type": "int256",
                "name": "maeAfter"
            },
            {
                "type": "uint256",
                "name": "mmuAfter"
            }
        ]
    },
    {
        "type": "function",
        "name": "maeCheck",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            },
            {
                "type": "tuple",
                "name": "settlement",
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
            },
            {
                "type": "uint256",
                "name": "markPriceIfSettled"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "checkPassed"
            },
            {
                "type": "int256",
                "name": "maeAfter"
            },
            {
                "type": "uint256",
                "name": "mmuAfter"
            }
        ]
    },
    {
        "type": "function",
        "name": "mma",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
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
        "name": "mmu",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
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
        "name": "pnl",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            }
        ],
        "outputs": [
            {
                "type": "int256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "positionAge",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountId"
            },
            {
                "type": "bytes32",
                "name": "positionId"
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
        "name": "positionCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
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
        "name": "positionData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            },
            {
                "type": "bytes32",
                "name": "positionId"
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
        "name": "positionPnL",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            },
            {
                "type": "bytes32",
                "name": "positionId"
            }
        ],
        "outputs": [
            {
                "type": "int256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "positionQuantity",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            },
            {
                "type": "bytes32",
                "name": "positionId"
            }
        ],
        "outputs": [
            {
                "type": "int256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "positions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            }
        ],
        "outputs": [
            {
                "type": "bytes32[]",
                "name": ""
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
        "name": "revokeAuthorization",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "intentAccount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "settle",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            },
            {
                "type": "address",
                "name": "intentAccount"
            },
            {
                "type": "tuple",
                "name": "settlement",
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
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "valuation",
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
        "name": "withdraw",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawable",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccount"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    }
]
