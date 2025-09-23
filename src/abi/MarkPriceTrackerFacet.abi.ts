export const ABI_JSON = [
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
        "type": "function",
        "name": "valuation",
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
        "name": "valuationAfterTrade",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "productId"
            },
            {
                "type": "uint256",
                "name": "price"
            },
            {
                "type": "uint256",
                "name": "quantity"
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
