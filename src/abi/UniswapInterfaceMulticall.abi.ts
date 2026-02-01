export const ABI_JSON = [
    {
        "type": "function",
        "name": "getCurrentBlockTimestamp",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "timestamp"
            }
        ]
    },
    {
        "type": "function",
        "name": "getEthBalance",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "addr"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "balance"
            }
        ]
    },
    {
        "type": "function",
        "name": "multicall",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "calls",
                "components": [
                    {
                        "type": "address",
                        "name": "target"
                    },
                    {
                        "type": "uint256",
                        "name": "gasLimit"
                    },
                    {
                        "type": "bytes",
                        "name": "callData"
                    }
                ]
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "blockNumber"
            },
            {
                "type": "tuple[]",
                "name": "returnData",
                "components": [
                    {
                        "type": "bool",
                        "name": "success"
                    },
                    {
                        "type": "uint256",
                        "name": "gasUsed"
                    },
                    {
                        "type": "bytes",
                        "name": "returnData"
                    }
                ]
            }
        ]
    }
]
