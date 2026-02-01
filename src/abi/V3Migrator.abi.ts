export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_factory"
            },
            {
                "type": "address",
                "name": "_WETH9"
            },
            {
                "type": "address",
                "name": "_nonfungiblePositionManager"
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
        "name": "createAndInitializePoolIfNecessary",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
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
                "type": "uint160",
                "name": "sqrtPriceX96"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "pool"
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
        "name": "migrate",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "address",
                        "name": "pair"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidityToMigrate"
                    },
                    {
                        "type": "uint8",
                        "name": "percentageToMigrate"
                    },
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
                    },
                    {
                        "type": "uint256",
                        "name": "deadline"
                    },
                    {
                        "type": "bool",
                        "name": "refundAsETH"
                    }
                ]
            }
        ],
        "outputs": []
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
        "name": "nonfungiblePositionManager",
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
        "type": "receive",
        "stateMutability": "payable"
    }
]
