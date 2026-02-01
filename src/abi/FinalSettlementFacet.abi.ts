export const ABI_JSON = [
    {
        "type": "error",
        "name": "FSPAlreadyFinalized",
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ]
    },
    {
        "type": "error",
        "name": "FSPNotFound",
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            }
        ]
    },
    {
        "type": "error",
        "name": "FSPTimeNotReached",
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            },
            {
                "type": "uint256",
                "name": "currentTime"
            },
            {
                "type": "uint256",
                "name": "earliestFSPSubmissionTime"
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
        "name": "InvalidOracleAddress",
        "inputs": [
            {
                "type": "address",
                "name": "oracleAddress"
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
        "name": "MismatchedFSPAccountQuantities",
        "inputs": [
            {
                "type": "int256",
                "name": "checksum"
            },
            {
                "type": "int256",
                "name": "expectedChecksum"
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
        "name": "ProductNotInFinalSettlement",
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
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
        "type": "event",
        "anonymous": false,
        "name": "FSPFinalized",
        "inputs": [
            {
                "type": "bytes32",
                "name": "productID",
                "indexed": true
            },
            {
                "type": "int256",
                "name": "fsp",
                "indexed": false
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
        "name": "FinalSettlementCloseout",
        "inputs": [
            {
                "type": "bytes32",
                "name": "productID",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "accountLength",
                "indexed": false
            },
            {
                "type": "address",
                "name": "closedBy",
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
        "name": "FINAL_SETTLEMENT_ID",
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
        "name": "finalizeFsp",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productID"
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
        "name": "getFsp",
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
                "type": "int256",
                "name": "fsp"
            },
            {
                "type": "bool",
                "name": "finalized"
            }
        ]
    },
    {
        "type": "function",
        "name": "getFspFinalizationTime",
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
        "name": "initiateFinalSettlement",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productID"
            },
            {
                "type": "address[]",
                "name": "accounts"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "openInterest",
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
    }
]
