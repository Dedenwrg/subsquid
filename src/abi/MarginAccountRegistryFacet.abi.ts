export const ABI_JSON = [
    {
        "type": "error",
        "name": "AlreadyExists",
        "inputs": [
            {
                "type": "string",
                "name": "parameter"
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
        "name": "Unauthorized",
        "inputs": [
            {
                "type": "address",
                "name": "account"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMarginAccount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collateralToken"
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
        "name": "isInitialized",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
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
        "name": "registerMarginAccount",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "collateralToken"
            },
            {
                "type": "address",
                "name": "marginAccount"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    }
]
