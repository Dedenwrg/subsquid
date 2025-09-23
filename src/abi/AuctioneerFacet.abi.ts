export const ABI_JSON = [
    {
        "type": "error",
        "name": "AuctionBidFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AuctionBountyFeeTooHigh",
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
        "name": "Liquidating",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LiquidationRequestFailed",
        "inputs": []
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
        "name": "MaeOverMmuRateExceeded",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoTradeData",
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
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
        "name": "Auctioned",
        "inputs": [
            {
                "type": "address",
                "name": "liquidatingMarginAccountID",
                "indexed": true
            },
            {
                "type": "address",
                "name": "liquidatorMarginAccountID",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "productId",
                "indexed": false
            },
            {
                "type": "int256",
                "name": "quantity",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "price",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LiquidationStarted",
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collateralToken",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LiquidationTerminated",
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID",
                "indexed": true
            },
            {
                "type": "address",
                "name": "collateralToken",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "auctionConfig",
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
                        "type": "uint64",
                        "name": "restorationBuffer"
                    },
                    {
                        "type": "uint256",
                        "name": "liquidationDuration"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "auctionData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID"
            },
            {
                "type": "address",
                "name": "collateral"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "startBlock"
                    },
                    {
                        "type": "uint256",
                        "name": "maeAtInitiation"
                    },
                    {
                        "type": "uint256",
                        "name": "mmuAtInitiation"
                    },
                    {
                        "type": "int256",
                        "name": "maeNow"
                    },
                    {
                        "type": "uint256",
                        "name": "mmuNow"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "bidAuction",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID"
            },
            {
                "type": "address",
                "name": "collateralToken"
            },
            {
                "type": "tuple[]",
                "name": "bids",
                "components": [
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
                        "type": "uint8",
                        "name": "side"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "canTerminateAuctions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID"
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
        "name": "isLiquidatable",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID"
            },
            {
                "type": "address",
                "name": "collateralToken"
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
        "name": "isLiquidating",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID"
            },
            {
                "type": "address",
                "name": "collateralToken"
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
        "name": "maeCheckOnBid",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "liquidatorMarginAccountID"
            },
            {
                "type": "address",
                "name": "liquidatingMarginAccountID"
            },
            {
                "type": "address",
                "name": "collateral"
            },
            {
                "type": "tuple[]",
                "name": "bids",
                "components": [
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
                        "type": "uint8",
                        "name": "side"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "maeCheckFailed"
            },
            {
                "type": "bool",
                "name": "maeOverMmuRateExceeded"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxMaeOffered",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID"
            },
            {
                "type": "address",
                "name": "collateral"
            },
            {
                "type": "uint256",
                "name": "mmuDecreased"
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
        "name": "requestLiquidation",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID"
            },
            {
                "type": "address",
                "name": "collateralToken"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "terminateAuctions",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID"
            },
            {
                "type": "address",
                "name": "collateral"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "validateAuctions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountID"
            },
            {
                "type": "address",
                "name": "collateralToken"
            },
            {
                "type": "tuple[]",
                "name": "bids",
                "components": [
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
                        "type": "uint8",
                        "name": "side"
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
    }
]
