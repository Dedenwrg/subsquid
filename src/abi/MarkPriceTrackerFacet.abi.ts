export const ABI_JSON = [
    {
        "type": "error",
        "name": "EVWMA_NotInitialized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PRBMath_MulDiv18_Overflow",
        "inputs": [
            {
                "type": "uint256",
                "name": "x"
            },
            {
                "type": "uint256",
                "name": "y"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_MulDiv_Overflow",
        "inputs": [
            {
                "type": "uint256",
                "name": "x"
            },
            {
                "type": "uint256",
                "name": "y"
            },
            {
                "type": "uint256",
                "name": "denominator"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Div_InputTooSmall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Div_Overflow",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            },
            {
                "type": "int256",
                "name": "y"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Exp2_InputTooBig",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Exp_InputTooBig",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_IntoUint256_Underflow",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Log_InputTooSmall",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Mul_InputTooSmall",
        "inputs": []
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Mul_Overflow",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            },
            {
                "type": "int256",
                "name": "y"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Sqrt_NegativeInput",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            }
        ]
    },
    {
        "type": "error",
        "name": "PRBMath_SD59x18_Sqrt_Overflow",
        "inputs": [
            {
                "type": "int256",
                "name": "x"
            }
        ]
    },
    {
        "type": "error",
        "name": "QueueIsEmpty",
        "inputs": []
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
    },
    {
        "type": "function",
        "name": "volume",
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
