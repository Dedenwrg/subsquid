export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_factoryV2"
            },
            {
                "type": "address",
                "name": "factoryV3"
            },
            {
                "type": "address",
                "name": "_positionManager"
            },
            {
                "type": "address",
                "name": "_WETH9"
            }
        ]
    },
    {
        "type": "function",
        "name": "WETH9",
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
        "name": "approveMax",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "approveMaxMinusOne",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "approveZeroThenMax",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "approveZeroThenMaxMinusOne",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "callPositionManager",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "checkOracleSlippage",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes[]",
                "name": "paths"
            },
            {
                "type": "uint128[]",
                "name": "amounts"
            },
            {
                "type": "uint24",
                "name": "maximumTickDivergence"
            },
            {
                "type": "uint32",
                "name": "secondsAgo"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "checkOracleSlippage",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "path"
            },
            {
                "type": "uint24",
                "name": "maximumTickDivergence"
            },
            {
                "type": "uint32",
                "name": "secondsAgo"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "exactInput",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "bytes",
                        "name": "path"
                    },
                    {
                        "type": "address",
                        "name": "recipient"
                    },
                    {
                        "type": "uint256",
                        "name": "amountIn"
                    },
                    {
                        "type": "uint256",
                        "name": "amountOutMinimum"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountOut"
            }
        ]
    },
    {
        "type": "function",
        "name": "exactInputSingle",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "address",
                        "name": "tokenIn"
                    },
                    {
                        "type": "address",
                        "name": "tokenOut"
                    },
                    {
                        "type": "uint24",
                        "name": "fee"
                    },
                    {
                        "type": "address",
                        "name": "recipient"
                    },
                    {
                        "type": "uint256",
                        "name": "amountIn"
                    },
                    {
                        "type": "uint256",
                        "name": "amountOutMinimum"
                    },
                    {
                        "type": "uint160",
                        "name": "sqrtPriceLimitX96"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountOut"
            }
        ]
    },
    {
        "type": "function",
        "name": "exactOutput",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "bytes",
                        "name": "path"
                    },
                    {
                        "type": "address",
                        "name": "recipient"
                    },
                    {
                        "type": "uint256",
                        "name": "amountOut"
                    },
                    {
                        "type": "uint256",
                        "name": "amountInMaximum"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountIn"
            }
        ]
    },
    {
        "type": "function",
        "name": "exactOutputSingle",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "address",
                        "name": "tokenIn"
                    },
                    {
                        "type": "address",
                        "name": "tokenOut"
                    },
                    {
                        "type": "uint24",
                        "name": "fee"
                    },
                    {
                        "type": "address",
                        "name": "recipient"
                    },
                    {
                        "type": "uint256",
                        "name": "amountOut"
                    },
                    {
                        "type": "uint256",
                        "name": "amountInMaximum"
                    },
                    {
                        "type": "uint160",
                        "name": "sqrtPriceLimitX96"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountIn"
            }
        ]
    },
    {
        "type": "function",
        "name": "factory",
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
        "name": "factoryV2",
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
        "name": "getApprovalType",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "amount"
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
        "name": "increaseLiquidity",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "address",
                        "name": "token0"
                    },
                    {
                        "type": "address",
                        "name": "token1"
                    },
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint256",
                        "name": "amount0Min"
                    },
                    {
                        "type": "uint256",
                        "name": "amount1Min"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "mint",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "address",
                        "name": "token0"
                    },
                    {
                        "type": "address",
                        "name": "token1"
                    },
                    {
                        "type": "uint24",
                        "name": "fee"
                    },
                    {
                        "type": "int24",
                        "name": "tickLower"
                    },
                    {
                        "type": "int24",
                        "name": "tickUpper"
                    },
                    {
                        "type": "uint256",
                        "name": "amount0Min"
                    },
                    {
                        "type": "uint256",
                        "name": "amount1Min"
                    },
                    {
                        "type": "address",
                        "name": "recipient"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": "result"
            }
        ]
    },
    {
        "type": "function",
        "name": "multicall",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bytes32",
                "name": "previousBlockhash"
            },
            {
                "type": "bytes[]",
                "name": "data"
            }
        ],
        "outputs": [
            {
                "type": "bytes[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "multicall",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "deadline"
            },
            {
                "type": "bytes[]",
                "name": "data"
            }
        ],
        "outputs": [
            {
                "type": "bytes[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "multicall",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bytes[]",
                "name": "data"
            }
        ],
        "outputs": [
            {
                "type": "bytes[]",
                "name": "results"
            }
        ]
    },
    {
        "type": "function",
        "name": "positionManager",
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
        "name": "pull",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "value"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "refundETH",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "selfPermit",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "value"
            },
            {
                "type": "uint256",
                "name": "deadline"
            },
            {
                "type": "uint8",
                "name": "v"
            },
            {
                "type": "bytes32",
                "name": "r"
            },
            {
                "type": "bytes32",
                "name": "s"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "selfPermitAllowed",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "nonce"
            },
            {
                "type": "uint256",
                "name": "expiry"
            },
            {
                "type": "uint8",
                "name": "v"
            },
            {
                "type": "bytes32",
                "name": "r"
            },
            {
                "type": "bytes32",
                "name": "s"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "selfPermitAllowedIfNecessary",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "nonce"
            },
            {
                "type": "uint256",
                "name": "expiry"
            },
            {
                "type": "uint8",
                "name": "v"
            },
            {
                "type": "bytes32",
                "name": "r"
            },
            {
                "type": "bytes32",
                "name": "s"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "selfPermitIfNecessary",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "value"
            },
            {
                "type": "uint256",
                "name": "deadline"
            },
            {
                "type": "uint8",
                "name": "v"
            },
            {
                "type": "bytes32",
                "name": "r"
            },
            {
                "type": "bytes32",
                "name": "s"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "swapExactTokensForTokens",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "amountIn"
            },
            {
                "type": "uint256",
                "name": "amountOutMin"
            },
            {
                "type": "address[]",
                "name": "path"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountOut"
            }
        ]
    },
    {
        "type": "function",
        "name": "swapTokensForExactTokens",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "amountOut"
            },
            {
                "type": "uint256",
                "name": "amountInMax"
            },
            {
                "type": "address[]",
                "name": "path"
            },
            {
                "type": "address",
                "name": "to"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "amountIn"
            }
        ]
    },
    {
        "type": "function",
        "name": "sweepToken",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "amountMinimum"
            },
            {
                "type": "address",
                "name": "recipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "sweepToken",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "amountMinimum"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "sweepTokenWithFee",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "amountMinimum"
            },
            {
                "type": "uint256",
                "name": "feeBips"
            },
            {
                "type": "address",
                "name": "feeRecipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "sweepTokenWithFee",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "token"
            },
            {
                "type": "uint256",
                "name": "amountMinimum"
            },
            {
                "type": "address",
                "name": "recipient"
            },
            {
                "type": "uint256",
                "name": "feeBips"
            },
            {
                "type": "address",
                "name": "feeRecipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "uniswapV3SwapCallback",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "int256",
                "name": "amount0Delta"
            },
            {
                "type": "int256",
                "name": "amount1Delta"
            },
            {
                "type": "bytes",
                "name": "_data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unwrapWETH9",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "amountMinimum"
            },
            {
                "type": "address",
                "name": "recipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unwrapWETH9",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "amountMinimum"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unwrapWETH9WithFee",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "amountMinimum"
            },
            {
                "type": "address",
                "name": "recipient"
            },
            {
                "type": "uint256",
                "name": "feeBips"
            },
            {
                "type": "address",
                "name": "feeRecipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "unwrapWETH9WithFee",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "amountMinimum"
            },
            {
                "type": "uint256",
                "name": "feeBips"
            },
            {
                "type": "address",
                "name": "feeRecipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "wrapETH",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "value"
            }
        ],
        "outputs": []
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
