export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_contractOwner"
            },
            {
                "type": "address",
                "name": "_diamondCutFacet"
            }
        ]
    },
    {
        "type": "error",
        "name": "InitializationFunctionReverted",
        "inputs": [
            {
                "type": "address",
                "name": "_initializationContractAddress"
            },
            {
                "type": "bytes",
                "name": "_calldata"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DiamondCut",
        "inputs": [
            {
                "type": "tuple[]",
                "name": "_diamondCut",
                "components": [
                    {
                        "type": "address",
                        "name": "facetAddress"
                    },
                    {
                        "type": "uint8",
                        "name": "action"
                    },
                    {
                        "type": "bytes4[]",
                        "name": "functionSelectors"
                    }
                ]
            },
            {
                "type": "address",
                "name": "_init",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "_calldata",
                "indexed": false
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
        "type": "fallback",
        "stateMutability": "payable"
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
