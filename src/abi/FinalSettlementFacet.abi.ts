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
        "name": "InvalidFSPAccount",
        "inputs": [
            {
                "type": "address",
                "name": "fspAccount"
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
        "name": "ProductNotInFinalSettlement",
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
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
                "type": "uint256",
                "name": "fsp",
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
        "type": "function",
        "name": "CLOSEOUT_FEE_RATE",
        "constant": true,
        "stateMutability": "pure",
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
        "name": "CLOSEOUT_REWARD_RATE",
        "constant": true,
        "stateMutability": "pure",
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
                "type": "uint256",
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
                "type": "uint256",
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
