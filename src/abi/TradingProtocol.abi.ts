export const ABI_JSON = [
    {
        "type": "error",
        "name": "AccessControlBadConfirmation",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AccessControlUnauthorizedAccount",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            },
            {
                "type": "bytes32",
                "name": "neededRole"
            }
        ]
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
        "name": "InvalidInitialization",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotInitializing",
        "inputs": []
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
        "name": "RoleAdminChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "previousAdminRole",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "newAdminRole",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleGranted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleRevoked",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SequenceExecuted",
        "inputs": [
            {
                "type": "bool[]",
                "name": "results"
            },
            {
                "type": "bytes[]",
                "name": "errors"
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
        "name": "DEFAULT_ADMIN_ROLE",
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
        "name": "TRADE_SUBMITTER_ROLE",
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
        "name": "addTradeSubmitter",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "submitter"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "changeOwner",
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
        "name": "deposit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountContract"
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
    },
    {
        "type": "function",
        "name": "executeSequence",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "trades",
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
    },
    {
        "type": "function",
        "name": "getRoleAdmin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
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
        "name": "getRoleMember",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "uint256",
                "name": "index"
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
        "name": "getRoleMemberCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
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
        "name": "getRoleMembers",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            }
        ],
        "outputs": [
            {
                "type": "address[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "grantRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
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
        "name": "initialize",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "clearingAddress"
            }
        ],
        "outputs": []
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
        "name": "removeTradeSubmitter",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "submitter"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "renounceRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "callerConfirmation"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revokeRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
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
        "name": "updateClearingAddress",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newClearingAddress"
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
    },
    {
        "type": "function",
        "name": "withdraw",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "marginAccountContract"
            },
            {
                "type": "uint256",
                "name": "amount"
            }
        ],
        "outputs": []
    }
]
