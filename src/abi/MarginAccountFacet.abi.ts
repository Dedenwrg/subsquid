export const ABI_JSON = [
    {
        "type": "error",
        "name": "EVWMA_NotInitialized",
        "inputs": []
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
        "name": "SafeCastOverflowedIntToUint",
        "inputs": [
            {
                "type": "int256",
                "name": "value"
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
        "type": "function",
        "name": "authorize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "intentAccount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "collateral",
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
        "name": "deposit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "estimateAdditionalMargin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountId"
            },
            {
                "type": "tuple",
                "name": "settlement",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "productId"
                    },
                    {
                        "type": "int256",
                        "name": "quantity"
                    },
                    {
                        "type": "int256",
                        "name": "price"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "additionalMargin"
            }
        ]
    },
    {
        "type": "function",
        "name": "isAuthorized",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountId"
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
        "name": "maeCheck",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountId"
            },
            {
                "type": "tuple",
                "name": "settlement",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "productId"
                    },
                    {
                        "type": "int256",
                        "name": "quantity"
                    },
                    {
                        "type": "int256",
                        "name": "price"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "checkPassed"
            }
        ]
    },
    {
        "type": "function",
        "name": "marginData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "int256",
                        "name": "capital"
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
                        "type": "int256",
                        "name": "pnl"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "position",
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
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "productId"
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
        "name": "products",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountId"
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
        "name": "revoke",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "intentAccount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "stateAfterSettlement",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountId"
            },
            {
                "type": "tuple",
                "name": "settlement",
                "components": [
                    {
                        "type": "bytes32",
                        "name": "productId"
                    },
                    {
                        "type": "int256",
                        "name": "quantity"
                    },
                    {
                        "type": "int256",
                        "name": "price"
                    }
                ]
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
        "name": "withdraw",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    }
]
