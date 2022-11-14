const TokenDiceContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "onWalletDeployed",
                "inputs": [
                    {
                        "name": "tokenWallet",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "onAcceptTokensTransfer",
                "inputs": [
                    {
                        "name": "tokenRoot",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "name": "senderWallet",
                        "type": "address"
                    },
                    {
                        "name": "remainingGasTo",
                        "type": "address"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "withdraw",
                "inputs": [
                    {
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "maxBet",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "tokenWallet_",
                "inputs": [],
                "outputs": [
                    {
                        "name": "tokenWallet_",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "balance_",
                "inputs": [],
                "outputs": [
                    {
                        "name": "balance_",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "tokenRoot_",
                "type": "address"
            },
            {
                "key": 2,
                "name": "owner_",
                "type": "address"
            }
        ],
        "events": [
            {
                "name": "Game",
                "inputs": [
                    {
                        "name": "player",
                        "type": "address"
                    },
                    {
                        "name": "bet",
                        "type": "uint8"
                    },
                    {
                        "name": "result",
                        "type": "uint8"
                    },
                    {
                        "name": "prize",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            }
        ],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "tokenRoot_",
                "type": "address"
            },
            {
                "name": "owner_",
                "type": "address"
            },
            {
                "name": "tokenWallet_",
                "type": "address"
            },
            {
                "name": "balance_",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECIAEABW8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsdBQQfA8jtRNDXScMB+GaJ+Gkh2zzTAAGOH4MI1xgg+CjIzs7J+QAB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8Dw4GA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPBwcBgIoIIIQQ6lJULvjAiCCEHDYn8m74wIRBwM8IIIQYyRC+brjAiCCEGi1Xz+64wIgghBw2J/JuuMCEA0IA1gw+Eby4Ez4Qm7jACGT1NHQ3vpA03/U0dD6QNTR0PpA1NHQ+kDU0ds82zzyABsJGQKy+Ez6Qm8T1wv/wwD4SfhMxwWw8uPsghA7msoAcPsC+E0loLV/+G3QiCHXScIHjowh0wcz+E0npwa1f76OGSL6Qm8T1wv/nyLIz4UIzoBvz0DJgwb7AN7iXwcfCgL8jvz4JfgVdvgRXLqOcSenBrV/VHEnjQRwAAAAAAAAAAAAAAAAGt8z2KDIzs7LB8sHy3/JcPsAJ6cGtX/4TaK1f/htInAmghAF9eEAU6unBrV/+Ex/yM+FgMoAz4RAznHPC25VUMjPkc+IhQ7Lf87Lf1UgyM7KAMzNzcmDBvsADAsAiI5A+E0nobV/+G0hcCWCEAX14QBTmvhMf8jPhYDKAM+EQM5xzwtuVVDIz5HPiIUOy3/Oy39VIMjOygDMzc3Jgwb7AOIwAISOPnBUcSeNBHAAAAAAAAAAAAAAAAAa3zPYoMjOzssHywfLf8lw+wAk+kJvE9cL/58kyM+FCM6Ab89AyYMG+wDe4jACxjD4Qm7jAPhG8nPR+En4S8cF8uPo+ELy0+n4J28QghBZaC8AvvLj6oIQO5rKAHD7AoIQCPDRgPgo+EpwyM+FgMoAz4RAznHPC25Zi4Me3Ux0OpSVCMjOzst/zcmDBvsA2zzyAA4ZBHrtRNDXScIBj7Jw7UTQ9AVxIYBA9A6OgYnfciKAQPQOjoGJ34lw+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNDw8PGwBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAFQMNHbPPhNIY4cjQRwAAAAAAAAAAAAAAAAOMkQvmDIzst/yXD7AN7yABsEUCCCEAhz0X264wIgghAMcGv7uuMCIIIQJ514GbrjAiCCEEOpSVC64wIYFxQSAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABsTGQAW+En4SscF8uPr+GwDaDD4RvLgTPhCbuMA0ds8IY4cI9DTAfpAMDHIz4cgzoIQp514Gc8Lgct/yXD7AJEw4uMA8gAbFhUAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAAr4TXapBAFOMNHbPPhMIY4bjQRwAAAAAAAAAAAAAAAAIxwa/uDIzs7JcPsA3vIAGwM4MPhG8uBM+EJu4wAhk9TR0N76QNN/0ds82zzyABsaGQBE+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjOWcjOy3/NzcntVAG2+En4S8cF8uPoghA7msoAcPsCIPhNvJFwlvhNIaG1f+L4bYhw+EmCEAX14QBVE/hMf8jPhYDKAM+EQM5xzwtuVVDIz5HPiIUOy3/Oy39VIMjOygDMzc3Jgwb7AB8ASu1E0NP/0z/TADH6QNTR0PpA1NHQ+kDTf9H4bfhs+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLATh8eABRzb2wgMC42Ni4wAAA=",
    code: "te6ccgECHQEABUIABCSK7VMg4wMgwP/jAiDA/uMC8gsaAgEcA8jtRNDXScMB+GaJ+Gkh2zzTAAGOH4MI1xgg+CjIzs7J+QAB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8DAsDA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPBkZAwIoIIIQQ6lJULvjAiCCEHDYn8m74wIOBAM8IIIQYyRC+brjAiCCEGi1Xz+64wIgghBw2J/JuuMCDQoFA1gw+Eby4Ez4Qm7jACGT1NHQ3vpA03/U0dD6QNTR0PpA1NHQ+kDU0ds82zzyABgGFgKy+Ez6Qm8T1wv/wwD4SfhMxwWw8uPsghA7msoAcPsC+E0loLV/+G3QiCHXScIHjowh0wcz+E0npwa1f76OGSL6Qm8T1wv/nyLIz4UIzoBvz0DJgwb7AN7iXwccBwL8jvz4JfgVdvgRXLqOcSenBrV/VHEnjQRwAAAAAAAAAAAAAAAAGt8z2KDIzs7LB8sHy3/JcPsAJ6cGtX/4TaK1f/htInAmghAF9eEAU6unBrV/+Ex/yM+FgMoAz4RAznHPC25VUMjPkc+IhQ7Lf87Lf1UgyM7KAMzNzcmDBvsACQgAiI5A+E0nobV/+G0hcCWCEAX14QBTmvhMf8jPhYDKAM+EQM5xzwtuVVDIz5HPiIUOy3/Oy39VIMjOygDMzc3Jgwb7AOIwAISOPnBUcSeNBHAAAAAAAAAAAAAAAAAa3zPYoMjOzssHywfLf8lw+wAk+kJvE9cL/58kyM+FCM6Ab89AyYMG+wDe4jACxjD4Qm7jAPhG8nPR+En4S8cF8uPo+ELy0+n4J28QghBZaC8AvvLj6oIQO5rKAHD7AoIQCPDRgPgo+EpwyM+FgMoAz4RAznHPC25Zi4Me3Ux0OpSVCMjOzst/zcmDBvsA2zzyAAsWBHrtRNDXScIBj7Jw7UTQ9AVxIYBA9A6OgYnfciKAQPQOjoGJ34lw+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNDAwMGABDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAFQMNHbPPhNIY4cjQRwAAAAAAAAAAAAAAAAOMkQvmDIzst/yXD7AN7yABgEUCCCEAhz0X264wIgghAMcGv7uuMCIIIQJ514GbrjAiCCEEOpSVC64wIVFBEPAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds82zzyABgQFgAW+En4SscF8uPr+GwDaDD4RvLgTPhCbuMA0ds8IY4cI9DTAfpAMDHIz4cgzoIQp514Gc8Lgct/yXD7AJEw4uMA8gAYExIAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAAr4TXapBAFOMNHbPPhMIY4bjQRwAAAAAAAAAAAAAAAAIxwa/uDIzs7JcPsA3vIAGAM4MPhG8uBM+EJu4wAhk9TR0N76QNN/0ds82zzyABgXFgBE+E34TPhL+Er4Q/hCyMv/yz/Pg85VIMjOWcjOy3/NzcntVAG2+En4S8cF8uPoghA7msoAcPsCIPhNvJFwlvhNIaG1f+L4bYhw+EmCEAX14QBVE/hMf8jPhYDKAM+EQM5xzwtuVVDIz5HPiIUOy3/Oy39VIMjOygDMzc3Jgwb7ABwASu1E0NP/0z/TADH6QNTR0PpA1NHQ+kDTf9H4bfhs+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLAThwbABRzb2wgMC42Ni4wAAA=",
    codeHash: "261c33f18998d21a8b6e260ac22ab028985775e15d607865584c413a307de2af",
};
module.exports = { TokenDiceContract };