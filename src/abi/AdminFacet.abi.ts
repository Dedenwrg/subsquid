export const ABI_JSON = [
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
        "type": "event",
        "anonymous": false,
        "name": "AddressUpdated",
        "inputs": [
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "address",
                "name": "oldAddress",
                "indexed": false
            },
            {
                "type": "address",
                "name": "newAddress",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ConfigUpdated",
        "inputs": [
            {
                "type": "tuple",
                "name": "oldConfig",
                "indexed": false,
                "components": [
                    {
                        "type": "tuple",
                        "name": "clearingConfig",
                        "components": [
                            {
                                "type": "uint32",
                                "name": "clearingFeeRate"
                            },
                            {
                                "type": "uint32",
                                "name": "maxTradingFeeRate"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "markPriceConfig",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "markPriceInterval"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "finalSettlementConfig",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "closeoutFeeRate"
                            },
                            {
                                "type": "uint256",
                                "name": "closeoutRewardRate"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "productConfig",
                        "components": [
                            {
                                "type": "uint32",
                                "name": "clearingPayoutRatio"
                            },
                            {
                                "type": "uint32",
                                "name": "maintenanceDepositInterval"
                            },
                            {
                                "type": "uint64",
                                "name": "minProductMaintenanceFee"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "tuple",
                "name": "newConfig",
                "indexed": false,
                "components": [
                    {
                        "type": "tuple",
                        "name": "clearingConfig",
                        "components": [
                            {
                                "type": "uint32",
                                "name": "clearingFeeRate"
                            },
                            {
                                "type": "uint32",
                                "name": "maxTradingFeeRate"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "markPriceConfig",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "markPriceInterval"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "finalSettlementConfig",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "closeoutFeeRate"
                            },
                            {
                                "type": "uint256",
                                "name": "closeoutRewardRate"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "productConfig",
                        "components": [
                            {
                                "type": "uint32",
                                "name": "clearingPayoutRatio"
                            },
                            {
                                "type": "uint32",
                                "name": "maintenanceDepositInterval"
                            },
                            {
                                "type": "uint64",
                                "name": "minProductMaintenanceFee"
                            }
                        ]
                    }
                ]
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
        "type": "function",
        "name": "clearingFeeRate",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "closeoutFeeRate",
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
        "name": "closeoutRewardRate",
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
                        "name": "clearingConfig",
                        "components": [
                            {
                                "type": "uint32",
                                "name": "clearingFeeRate"
                            },
                            {
                                "type": "uint32",
                                "name": "maxTradingFeeRate"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "markPriceConfig",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "markPriceInterval"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "finalSettlementConfig",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "closeoutFeeRate"
                            },
                            {
                                "type": "uint256",
                                "name": "closeoutRewardRate"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "productConfig",
                        "components": [
                            {
                                "type": "uint32",
                                "name": "clearingPayoutRatio"
                            },
                            {
                                "type": "uint32",
                                "name": "maintenanceDepositInterval"
                            },
                            {
                                "type": "uint64",
                                "name": "minProductMaintenanceFee"
                            }
                        ]
                    }
                ]
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
        "name": "getMarkPriceInterval",
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
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "treasury"
            },
            {
                "type": "address",
                "name": "productRegistry"
            },
            {
                "type": "address",
                "name": "marginAccountRegistry"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "maxTradingFeeRate",
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
        "name": "setConfig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "config_",
                "components": [
                    {
                        "type": "tuple",
                        "name": "clearingConfig",
                        "components": [
                            {
                                "type": "uint32",
                                "name": "clearingFeeRate"
                            },
                            {
                                "type": "uint32",
                                "name": "maxTradingFeeRate"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "markPriceConfig",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "markPriceInterval"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "finalSettlementConfig",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "closeoutFeeRate"
                            },
                            {
                                "type": "uint256",
                                "name": "closeoutRewardRate"
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "productConfig",
                        "components": [
                            {
                                "type": "uint32",
                                "name": "clearingPayoutRatio"
                            },
                            {
                                "type": "uint32",
                                "name": "maintenanceDepositInterval"
                            },
                            {
                                "type": "uint64",
                                "name": "minProductMaintenanceFee"
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
        "name": "setMarginAccountRegistry",
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
        "name": "setTreasury",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "treasury"
            }
        ],
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
    }
]
