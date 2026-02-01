export const ABI_JSON = [
    {
        "type": "function",
        "name": "multicall",
        "constant": true,
        "stateMutability": "view",
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
                        "type": "bool",
                        "name": "allowFailure"
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
                "type": "tuple[]",
                "name": "results",
                "components": [
                    {
                        "type": "bool",
                        "name": "success"
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
