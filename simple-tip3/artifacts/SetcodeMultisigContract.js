const SetcodeMultisigContract = {
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
                "inputs": [
                    {
                        "name": "owners",
                        "type": "uint256[]"
                    },
                    {
                        "name": "reqConfirms",
                        "type": "uint8"
                    },
                    {
                        "name": "lifetime",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "sendTransaction",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "flags",
                        "type": "uint8"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "submitTransaction",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "allBalance",
                        "type": "bool"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    },
                    {
                        "name": "stateInit",
                        "type": "optional(cell)"
                    }
                ],
                "outputs": [
                    {
                        "name": "transId",
                        "type": "uint64"
                    }
                ]
            },
            {
                "name": "confirmTransaction",
                "inputs": [
                    {
                        "name": "transactionId",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "isConfirmed",
                "inputs": [
                    {
                        "name": "mask",
                        "type": "uint32"
                    },
                    {
                        "name": "index",
                        "type": "uint8"
                    }
                ],
                "outputs": [
                    {
                        "name": "confirmed",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "getParameters",
                "inputs": [],
                "outputs": [
                    {
                        "name": "maxQueuedTransactions",
                        "type": "uint8"
                    },
                    {
                        "name": "maxCustodianCount",
                        "type": "uint8"
                    },
                    {
                        "name": "expirationTime",
                        "type": "uint64"
                    },
                    {
                        "name": "minValue",
                        "type": "uint128"
                    },
                    {
                        "name": "requiredTxnConfirms",
                        "type": "uint8"
                    },
                    {
                        "name": "requiredUpdConfirms",
                        "type": "uint8"
                    }
                ]
            },
            {
                "name": "getTransaction",
                "inputs": [
                    {
                        "name": "transactionId",
                        "type": "uint64"
                    }
                ],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "id",
                                "type": "uint64"
                            },
                            {
                                "name": "confirmationsMask",
                                "type": "uint32"
                            },
                            {
                                "name": "signsRequired",
                                "type": "uint8"
                            },
                            {
                                "name": "signsReceived",
                                "type": "uint8"
                            },
                            {
                                "name": "creator",
                                "type": "uint256"
                            },
                            {
                                "name": "index",
                                "type": "uint8"
                            },
                            {
                                "name": "dest",
                                "type": "address"
                            },
                            {
                                "name": "value",
                                "type": "uint128"
                            },
                            {
                                "name": "sendFlags",
                                "type": "uint16"
                            },
                            {
                                "name": "payload",
                                "type": "cell"
                            },
                            {
                                "name": "bounce",
                                "type": "bool"
                            },
                            {
                                "name": "stateInit",
                                "type": "optional(cell)"
                            }
                        ],
                        "name": "trans",
                        "type": "tuple"
                    }
                ]
            },
            {
                "name": "getTransactions",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "id",
                                "type": "uint64"
                            },
                            {
                                "name": "confirmationsMask",
                                "type": "uint32"
                            },
                            {
                                "name": "signsRequired",
                                "type": "uint8"
                            },
                            {
                                "name": "signsReceived",
                                "type": "uint8"
                            },
                            {
                                "name": "creator",
                                "type": "uint256"
                            },
                            {
                                "name": "index",
                                "type": "uint8"
                            },
                            {
                                "name": "dest",
                                "type": "address"
                            },
                            {
                                "name": "value",
                                "type": "uint128"
                            },
                            {
                                "name": "sendFlags",
                                "type": "uint16"
                            },
                            {
                                "name": "payload",
                                "type": "cell"
                            },
                            {
                                "name": "bounce",
                                "type": "bool"
                            },
                            {
                                "name": "stateInit",
                                "type": "optional(cell)"
                            }
                        ],
                        "name": "transactions",
                        "type": "tuple[]"
                    }
                ]
            },
            {
                "name": "getCustodians",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "index",
                                "type": "uint8"
                            },
                            {
                                "name": "pubkey",
                                "type": "uint256"
                            }
                        ],
                        "name": "custodians",
                        "type": "tuple[]"
                    }
                ]
            },
            {
                "name": "submitUpdate",
                "inputs": [
                    {
                        "name": "codeHash",
                        "type": "optional(uint256)"
                    },
                    {
                        "name": "owners",
                        "type": "optional(uint256[])"
                    },
                    {
                        "name": "reqConfirms",
                        "type": "optional(uint8)"
                    },
                    {
                        "name": "lifetime",
                        "type": "optional(uint32)"
                    }
                ],
                "outputs": [
                    {
                        "name": "updateId",
                        "type": "uint64"
                    }
                ]
            },
            {
                "name": "confirmUpdate",
                "inputs": [
                    {
                        "name": "updateId",
                        "type": "uint64"
                    }
                ],
                "outputs": []
            },
            {
                "name": "executeUpdate",
                "inputs": [
                    {
                        "name": "updateId",
                        "type": "uint64"
                    },
                    {
                        "name": "code",
                        "type": "optional(cell)"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getUpdateRequests",
                "inputs": [],
                "outputs": [
                    {
                        "components": [
                            {
                                "name": "id",
                                "type": "uint64"
                            },
                            {
                                "name": "index",
                                "type": "uint8"
                            },
                            {
                                "name": "signs",
                                "type": "uint8"
                            },
                            {
                                "name": "confirmationsMask",
                                "type": "uint32"
                            },
                            {
                                "name": "creator",
                                "type": "uint256"
                            },
                            {
                                "name": "codeHash",
                                "type": "optional(uint256)"
                            },
                            {
                                "name": "custodians",
                                "type": "optional(uint256[])"
                            },
                            {
                                "name": "reqConfirms",
                                "type": "optional(uint8)"
                            },
                            {
                                "name": "lifetime",
                                "type": "optional(uint32)"
                            }
                        ],
                        "name": "updates",
                        "type": "tuple[]"
                    }
                ]
            }
        ],
        "data": [],
        "events": [],
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
                "name": "m_ownerKey",
                "type": "uint256"
            },
            {
                "name": "m_requestsMask",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "confirmationsMask",
                        "type": "uint32"
                    },
                    {
                        "name": "signsRequired",
                        "type": "uint8"
                    },
                    {
                        "name": "signsReceived",
                        "type": "uint8"
                    },
                    {
                        "name": "creator",
                        "type": "uint256"
                    },
                    {
                        "name": "index",
                        "type": "uint8"
                    },
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "sendFlags",
                        "type": "uint16"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "stateInit",
                        "type": "optional(cell)"
                    }
                ],
                "name": "m_transactions",
                "type": "map(uint64,tuple)"
            },
            {
                "name": "m_custodians",
                "type": "map(uint256,uint8)"
            },
            {
                "name": "m_custodianCount",
                "type": "uint8"
            },
            {
                "components": [
                    {
                        "name": "id",
                        "type": "uint64"
                    },
                    {
                        "name": "index",
                        "type": "uint8"
                    },
                    {
                        "name": "signs",
                        "type": "uint8"
                    },
                    {
                        "name": "confirmationsMask",
                        "type": "uint32"
                    },
                    {
                        "name": "creator",
                        "type": "uint256"
                    },
                    {
                        "name": "codeHash",
                        "type": "optional(uint256)"
                    },
                    {
                        "name": "custodians",
                        "type": "optional(uint256[])"
                    },
                    {
                        "name": "reqConfirms",
                        "type": "optional(uint8)"
                    },
                    {
                        "name": "lifetime",
                        "type": "optional(uint32)"
                    }
                ],
                "name": "m_updateRequests",
                "type": "map(uint64,tuple)"
            },
            {
                "name": "m_updateRequestsMask",
                "type": "uint32"
            },
            {
                "name": "m_requiredVotes",
                "type": "uint8"
            },
            {
                "name": "m_defaultRequiredConfirmations",
                "type": "uint8"
            },
            {
                "name": "m_lifetime",
                "type": "uint32"
            }
        ]
    },
    tvc: "te6ccgECVgEAEC0AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gtQCAUEAAABAAYC/O1E0NdJwwH4Zo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABjiKDCNcYIPgoyM7OyfkAAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfASsHARj4I7zyudMfAds88jwJA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPE9PCQRQIIIQH+BQ47vjAiCCEFFqCvK74wIgghBvPscqu+MCIIIQdMqmfbrjAiwbDwoDdDD4RvLgTPhCbuMA0ds8IY4iI9DTAfpAMDHIz4cgzoIQ9Mqmfc8LgQFvIgLLH/QAyXD7AJEw4uMA8gBOCy4CSnBtbwL4I/hTobU/qh+1P/hPIIBA9IaTbV8g4w2TIm6zjoDoXwUODAIoUxS8joDeUyOAQPR8k21fIOMNbDMNDgEkU1DbPAFvIiGkVSCAIPRDbwI2MwByIFjTP9MH0wfTH9P/0gABb6OS0//e0gABb6GX0x/0BFlvAt4B0gABb6OS0wfe0gABb6OS0x/e0W8JBFAgghBVHY11uuMCIIIQWwDYWbrjAiCCEGa4cQy64wIgghBvPscquuMCGBQSEAPQMPhG8uBM+EJu4wAhk9TR0N7TP9HbPCGOSCPQ0wH6QDAxyM+HIM5xzwthAcjPk7z7HKoBbyxesMs/yx/LB8sHy//LB85VQMjLf8sPzMoAURBukzDPgZQBz4PM4s3NyXD7AJEw4uMA8gBOES4BJvhMgED0D2+h4wAgbvLQZiBu8n88A4Qw+Eby4Ez4Qm7jANHbPCaOKSjQ0wH6QDAxyM+HIM6AYs9AXkHPk5rhxDLLB8sHyz/Lf8sHywfJcPsAkl8G4uMA8gBOEy4AFHWAIPhTcPhS+FEDdDD4RvLgTPhCbuMA0ds8IY4iI9DTAfpAMDHIz4cgzoIQ2wDYWc8LgQFvIgLLH/QAyXD7AJEw4uMA8gBOFS4BPnBtbwL4TSCDB/SGlSBY1wsHk21fIOKTIm6zjoDoXwQWAVBUdAFvAts8AW8iIaRVIIAg9ENvAjVTI4MH9HyVIFjXCweTbV8g4mwzFwAQbyIByMsHy/8DvjD4RvLgTPhCbuMAIY4U1NHQ+kDTf9IA0gDU0gABb6OR1N6OEfpA03/SANIA1NIAAW+jkdTe4tHbPCGOHCPQ0wH6QDAxyM+HIM6CENUdjXXPC4HLP8lw+wCRMOLbPPIAThlVBP74RSBukjBw3iD4TYMH9A5voZPXCwfeIG7y0GQgbvJ/2zz4S3giqK2EB7C1B8EF8uBx+ABVBVUEcnGxAZdygwaxMXAy3gH4S3F4JaisoPhr+COqH7U/+CWEH7CxIHD4UnBVByhVDFUXAVUbAVUMbwxYIW8TpLUHIm8Svo6AjoDiPTk3GgAG+GxbBFAgghArsO+PuuMCIIIQSG/fpbrjAiCCEEzuZGy64wIgghBRagryuuMCKCQiHAN0MPhG8uBM+EJu4wDR2zwhjiIj0NMB+kAwMcjPhyDOghDRagryzwuBAW8iAssf9ADJcPsAkTDi4wDyAE4dLgJKcG1vAvgj+FOhtT+qH7U/+EwggED0h5NtXyDjDZMibrOOgOhfBSEeAihTFLyOgN5TI4BA9HyTbV8g4w1sMyAfAQ4gWNdM0Ns8QgEmU1DbPMkBbyIhpFUggCD0F28CNjgBCiBY0Ns8QgNCMPhG8uBM+EJu4wAhk9TR0N76QNN/0gDTB9TR2zzjAPIATiMuAGb4TsAB8uBs+EUgbpIwcN74Srry4GT4AFUCVRLIz4WAygDPhEDOAfoCcc8LaszJAXKx+wAD2DD4RvLgTPhCbuMAIY4t1NHQ0gABb6OS0//e0gABb6GX0x/0BFlvAt4B0gABb6OS0wfe0gABb6OS0x/ejirSAAFvo5LT/97SAAFvoZfTH/QEWW8C3gHSAAFvo5LTB97SAAFvo5LTH97i0ds8IU4mJQFKjhwj0NMB+kAwMcjPhyDOghDIb9+lzwuByz/JcPsAkTDi2zzyAFUC/HD4RSBukjBw3iD4TYMH9A5voZPXCwfeIG7y0GQgbvJ/Jm6VJW7y0HzfJW6OEVNVbvJ/bxAgwgABwSGw8uB1346A2PhQcSKstR+w8tBx+AAmbp5TZm7yf/gq+QC6km033t9xIay1H/hQsfhw+COqH7U/+CWEH7CxM1MgcCBVBEonBHhVNm8JIvhPWNs8WYBA9EP4b1IQIfhPgED0DuMPIG8SpLUHb1IgbxNxVQKstR+xb1P4TwHbPFmAQPRD+G8zSTQzAuAw+EJu4wD4RvJzIZ3TH/QEWW8CAdMH1NHQmtMf9ARZbwIB0wfi0x/RIm8QwgAjbxDBIbDy4HX4SfpCbxPXC/+OGyJvEMAB8uB+cCNvEYAg9A7ystcL//hCuvLgf574RSBukjBw3vhCuvLgZOL4ACJuKykB6I5bcFMzbvJ/cCFvEYAg9A7ystcL//hqIG8QbfhtcJdTAbkkwSCwjjBTAm8RgCD0DvKy1wv/IPhNgwf0Dm+hMY4UU0SktQc2IfhNWMjLB1mDB/RD+G3fMKToXwP4bt8hbpv4TlMibvJ/tgj4ct/4TsEDkvhOKgF2nPhOpwK1B6S1B3OpBOL4cSBujiBfIG7yfyCOEPhOpwq1HwH4I4QfsLYItgmUMIEOEOL4c99fA9s88gBVAXjtRNDXScIBjjFw7UTQ9AVwIG0gcG1wXzD4c/hy+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhj4w1OBFAgghAWvzzouuMCIIIQGqdA7brjAiCCEBuSAYi64wIgghAf4FDjuuMCQzUwLQJmMPhG8uBM0x/TB9HbPCGOHCPQ0wH6QDAxyM+HIM6CEJ/gUOPPC4HKAMlw+wCRMOLjAPIALy4AKO1E0NP/0z8x+ENYyMv/yz/Oye1UABIBcVistR+wwwADNDD4RvLgTPhCbuMAIZPU0dDe0z/R2zzbPPIATjFVA5b4RSBukjBw3vhNgwf0Dm+hk9cLB94gbvLQZCBu8n+OgNgh+E+AQPQOb6HjACBu8tBzIG7yf28TUhBxWKy1H7Dy0HT4ACH4T4BA9A5KSTIDROMPIG8SpLUHb1IgbxNxVQKstR+xb1P4TwHbPFmAQPRD+G9JNDMAmm8pXnDIyz/LB8sHyx/L/1EQbpMwz4GVAc+Dy//iURBukzDPgZsBz4MBbyICyx/0AOJREG6TMM+BlQHPg8sH4lEQbpMwz4GVAc+Dyx/iABBwX0BtXzBvCQM0MPhG8uBM+EJu4wAhk9TR0N7TP9HbPNs88gBONlUErPhFIG6SMHDe+E2DB/QOb6GT1wsH3iBu8tBkIG7yf9s8AfhMgED0D2+h4wAgbvLQZiBu8n8gbxFSIHFYrLUfsPLQZ/gAZm8TpLUHIm8Svo6AjoDi+GxbPTw5NwFOIW8RcSKstR+xUiBvUTJTEW8TpLUHb1MyIfhMI28QAts8yVmAQPQXOABUbyxeoMjLP8sfywfLB8v/ywfOVUDIy3/LD8zKAFEQbpMwz4GUAc+DzOLNAZIhbxtujhohbxcibxYjbxrIz4WAygDPhEDOAfoCcc8Lao6A4iJvGc8UySJvGPsAIW8V+EtxeFUCqKyhtf/4a/hMIm8QAYBA9FswOgFQIW8XIm8WI28ayM+FgMoAz4RAzgH6AnPPC2oibxsgbvJ/INs8zxTPgzsANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DAQbQ2zxCAlT4I/hTobU/qh+1P/hMbpEw4PhMgED0h2+h4wAgbvJ/byJTErsgjoDeXwRBPgIg+ABwlFzBKLCOgOgw2zz4Dz9VAXSkIm8V+EtxeFUCqKyhtf/4ayP4TIBA9Fsw+Gwj+EyAQPR8b6HjACBukXCcXyBu8n9vIjA1U0W74jMwQAEQAddM0Ns8bwJCAQwB0Ns8bwJCAEbTP9Mf0wfTB9P/0wf6QNTR0NN/0w/U0gDSAAFvo5HU3tFvDANaMPhG8uBM+EJu4wAhndTR0NM/0gABb6OR1N6a0z/SAAFvo5HU3uLR2zzbPPIATkRVBPz4RSBukjBw3vhNgwf0Dm+hMfLgZI6A2CH4T4BA9A5voeMAIG7y0HMgbvJ/IG8VbpUhbvLgfY4XIW7y0HdTEW7yf/kAIW8VIG7yf7ry4HfiIG8S+FG+8uB4+ABYIW8RcQGstR+EH6L4ULD4cPhPgED0WzD4byBvFW6OgI6A4ltKSUdFAnbbPPgPIG8XbpL4UpcgbxcgbvJ/4lMibvJ/IPsE0CCLOK2zWMcFk9dN0N7XTNDtHu1TIW8WIG7yfwHbPFVGAATwAgH+IG8WIW8XIm8YIm6OW3BTM27yf3AhbxGAIPQO8rLXC//4aiBvEG34bXCXUwG5JMEgsI4wUwJvEYAg9A7ystcL/yD4TYMH9A5voTGOFFNEpLUHNiH4TVjIywdZgwf0Q/ht3zCk6F8D+G7fIW6b+E5TIm7yf7YI+HLf+E7BA5L4TkgAbpz4TqcCtQektQdzqQTi+HEgbo4gXyBu8n8gjhD4TqcKtR8B+COEH7C2CLYJlDCBDhDi+HPfXwMAbtM/0wfTB9Mf0//SAAFvo5LT/97SAAFvoZfTH/QEWW8C3gHSAAFvo5LTB97SAAFvo5LTH97RbwkCVPgj+FOhtT+qH7U/+E9ukTDg+E+AQPSGb6HjACBu8n9vIlMSuyCOgN5fBE1LAhb4AJEgjoDo2zz4D0xVAXJfIm8RcQGstR+EH6L4ULD4cPhPgED0WzD4byL4T4BA9HxvoeMAIG6RcJxfIG7yf28iNDRTNLvibCFNAHQB0z/TB9MH0x/T/9IAAW+jktP/3tIAAW+hl9Mf9ARZbwLeAdIAAW+jktMH3tIAAW+jktMf3tFvCW8CAG7tRNDT/9M/0wAx0//T//QE9ATTB/QE0x/TB9MH0x/R+HP4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KFSUQAUc29sIDAuNjQuMAFQoAAAAAJw+Gpw+Gtt+Gxt+G1w+G5t+G9w+HBw+HFw+HJw+HOBDhAiblMB6I5bcFMzbvJ/cCFvEYAg9A7ystcL//hqIG8QbfhtcJdTAbkkwSCwjjBTAm8RgCD0DvKy1wv/IPhNgwf0Dm+hMY4UU0SktQc2IfhNWMjLB1mDB/RD+G3fMKToXwP4bt8hbpv4TlMibvJ/tgj4ct/4TsEDkvhOVAF6nPhOpwK1B6S1B3OpBOL4cSBujiBfIG7yfyCOEPhOpwq1HwH4I4QfsLYItgmUMIEOEOL4c99fA9s8+A/yAFUAbPhT+FL4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PL/8v/9AD0AMsH9ADLH8sHywfLH8ntVA==",
    code: "te6ccgECUwEAEAAABCSK7VMg4wMgwP/jAiDA/uMC8gtNBQIBAAABAAMC/O1E0NdJwwH4Zo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPhpIds80wABjiKDCNcYIPgoyM7OyfkAAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfASgEARj4I7zyudMfAds88jwGA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPExMBgRQIIIQH+BQ47vjAiCCEFFqCvK74wIgghBvPscqu+MCIIIQdMqmfbrjAikYDAcDdDD4RvLgTPhCbuMA0ds8IY4iI9DTAfpAMDHIz4cgzoIQ9Mqmfc8LgQFvIgLLH/QAyXD7AJEw4uMA8gBLCCsCSnBtbwL4I/hTobU/qh+1P/hPIIBA9IaTbV8g4w2TIm6zjoDoXwULCQIoUxS8joDeUyOAQPR8k21fIOMNbDMKCwEkU1DbPAFvIiGkVSCAIPRDbwI2MAByIFjTP9MH0wfTH9P/0gABb6OS0//e0gABb6GX0x/0BFlvAt4B0gABb6OS0wfe0gABb6OS0x/e0W8JBFAgghBVHY11uuMCIIIQWwDYWbrjAiCCEGa4cQy64wIgghBvPscquuMCFREPDQPQMPhG8uBM+EJu4wAhk9TR0N7TP9HbPCGOSCPQ0wH6QDAxyM+HIM5xzwthAcjPk7z7HKoBbyxesMs/yx/LB8sHy//LB85VQMjLf8sPzMoAURBukzDPgZQBz4PM4s3NyXD7AJEw4uMA8gBLDisBJvhMgED0D2+h4wAgbvLQZiBu8n85A4Qw+Eby4Ez4Qm7jANHbPCaOKSjQ0wH6QDAxyM+HIM6AYs9AXkHPk5rhxDLLB8sHyz/Lf8sHywfJcPsAkl8G4uMA8gBLECsAFHWAIPhTcPhS+FEDdDD4RvLgTPhCbuMA0ds8IY4iI9DTAfpAMDHIz4cgzoIQ2wDYWc8LgQFvIgLLH/QAyXD7AJEw4uMA8gBLEisBPnBtbwL4TSCDB/SGlSBY1wsHk21fIOKTIm6zjoDoXwQTAVBUdAFvAts8AW8iIaRVIIAg9ENvAjVTI4MH9HyVIFjXCweTbV8g4mwzFAAQbyIByMsHy/8DvjD4RvLgTPhCbuMAIY4U1NHQ+kDTf9IA0gDU0gABb6OR1N6OEfpA03/SANIA1NIAAW+jkdTe4tHbPCGOHCPQ0wH6QDAxyM+HIM6CENUdjXXPC4HLP8lw+wCRMOLbPPIASxZSBP74RSBukjBw3iD4TYMH9A5voZPXCwfeIG7y0GQgbvJ/2zz4S3giqK2EB7C1B8EF8uBx+ABVBVUEcnGxAZdygwaxMXAy3gH4S3F4JaisoPhr+COqH7U/+CWEH7CxIHD4UnBVByhVDFUXAVUbAVUMbwxYIW8TpLUHIm8Svo6AjoDiOjY0FwAG+GxbBFAgghArsO+PuuMCIIIQSG/fpbrjAiCCEEzuZGy64wIgghBRagryuuMCJSEfGQN0MPhG8uBM+EJu4wDR2zwhjiIj0NMB+kAwMcjPhyDOghDRagryzwuBAW8iAssf9ADJcPsAkTDi4wDyAEsaKwJKcG1vAvgj+FOhtT+qH7U/+EwggED0h5NtXyDjDZMibrOOgOhfBR4bAihTFLyOgN5TI4BA9HyTbV8g4w1sMx0cAQ4gWNdM0Ns8PwEmU1DbPMkBbyIhpFUggCD0F28CNjUBCiBY0Ns8PwNCMPhG8uBM+EJu4wAhk9TR0N76QNN/0gDTB9TR2zzjAPIASyArAGb4TsAB8uBs+EUgbpIwcN74Srry4GT4AFUCVRLIz4WAygDPhEDOAfoCcc8LaszJAXKx+wAD2DD4RvLgTPhCbuMAIY4t1NHQ0gABb6OS0//e0gABb6GX0x/0BFlvAt4B0gABb6OS0wfe0gABb6OS0x/ejirSAAFvo5LT/97SAAFvoZfTH/QEWW8C3gHSAAFvo5LTB97SAAFvo5LTH97i0ds8IUsjIgFKjhwj0NMB+kAwMcjPhyDOghDIb9+lzwuByz/JcPsAkTDi2zzyAFIC/HD4RSBukjBw3iD4TYMH9A5voZPXCwfeIG7y0GQgbvJ/Jm6VJW7y0HzfJW6OEVNVbvJ/bxAgwgABwSGw8uB1346A2PhQcSKstR+w8tBx+AAmbp5TZm7yf/gq+QC6km033t9xIay1H/hQsfhw+COqH7U/+CWEH7CxM1MgcCBVBEckBHhVNm8JIvhPWNs8WYBA9EP4b1IQIfhPgED0DuMPIG8SpLUHb1IgbxNxVQKstR+xb1P4TwHbPFmAQPRD+G8wRjEwAuAw+EJu4wD4RvJzIZ3TH/QEWW8CAdMH1NHQmtMf9ARZbwIB0wfi0x/RIm8QwgAjbxDBIbDy4HX4SfpCbxPXC/+OGyJvEMAB8uB+cCNvEYAg9A7ystcL//hCuvLgf574RSBukjBw3vhCuvLgZOL4ACJuKCYB6I5bcFMzbvJ/cCFvEYAg9A7ystcL//hqIG8QbfhtcJdTAbkkwSCwjjBTAm8RgCD0DvKy1wv/IPhNgwf0Dm+hMY4UU0SktQc2IfhNWMjLB1mDB/RD+G3fMKToXwP4bt8hbpv4TlMibvJ/tgj4ct/4TsEDkvhOJwF2nPhOpwK1B6S1B3OpBOL4cSBujiBfIG7yfyCOEPhOpwq1HwH4I4QfsLYItgmUMIEOEOL4c99fA9s88gBSAXjtRNDXScIBjjFw7UTQ9AVwIG0gcG1wXzD4c/hy+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhj4w1LBFAgghAWvzzouuMCIIIQGqdA7brjAiCCEBuSAYi64wIgghAf4FDjuuMCQDItKgJmMPhG8uBM0x/TB9HbPCGOHCPQ0wH6QDAxyM+HIM6CEJ/gUOPPC4HKAMlw+wCRMOLjAPIALCsAKO1E0NP/0z8x+ENYyMv/yz/Oye1UABIBcVistR+wwwADNDD4RvLgTPhCbuMAIZPU0dDe0z/R2zzbPPIASy5SA5b4RSBukjBw3vhNgwf0Dm+hk9cLB94gbvLQZCBu8n+OgNgh+E+AQPQOb6HjACBu8tBzIG7yf28TUhBxWKy1H7Dy0HT4ACH4T4BA9A5HRi8DROMPIG8SpLUHb1IgbxNxVQKstR+xb1P4TwHbPFmAQPRD+G9GMTAAmm8pXnDIyz/LB8sHyx/L/1EQbpMwz4GVAc+Dy//iURBukzDPgZsBz4MBbyICyx/0AOJREG6TMM+BlQHPg8sH4lEQbpMwz4GVAc+Dyx/iABBwX0BtXzBvCQM0MPhG8uBM+EJu4wAhk9TR0N7TP9HbPNs88gBLM1IErPhFIG6SMHDe+E2DB/QOb6GT1wsH3iBu8tBkIG7yf9s8AfhMgED0D2+h4wAgbvLQZiBu8n8gbxFSIHFYrLUfsPLQZ/gAZm8TpLUHIm8Svo6AjoDi+GxbOjk2NAFOIW8RcSKstR+xUiBvUTJTEW8TpLUHb1MyIfhMI28QAts8yVmAQPQXNQBUbyxeoMjLP8sfywfLB8v/ywfOVUDIy3/LD8zKAFEQbpMwz4GUAc+DzOLNAZIhbxtujhohbxcibxYjbxrIz4WAygDPhEDOAfoCcc8Lao6A4iJvGc8UySJvGPsAIW8V+EtxeFUCqKyhtf/4a/hMIm8QAYBA9FswNwFQIW8XIm8WI28ayM+FgMoAz4RAzgH6AnPPC2oibxsgbvJ/INs8zxTPgzgANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DAQbQ2zw/AlT4I/hTobU/qh+1P/hMbpEw4PhMgED0h2+h4wAgbvJ/byJTErsgjoDeXwQ+OwIg+ABwlFzBKLCOgOgw2zz4DzxSAXSkIm8V+EtxeFUCqKyhtf/4ayP4TIBA9Fsw+Gwj+EyAQPR8b6HjACBukXCcXyBu8n9vIjA1U0W74jMwPQEQAddM0Ns8bwI/AQwB0Ns8bwI/AEbTP9Mf0wfTB9P/0wf6QNTR0NN/0w/U0gDSAAFvo5HU3tFvDANaMPhG8uBM+EJu4wAhndTR0NM/0gABb6OR1N6a0z/SAAFvo5HU3uLR2zzbPPIAS0FSBPz4RSBukjBw3vhNgwf0Dm+hMfLgZI6A2CH4T4BA9A5voeMAIG7y0HMgbvJ/IG8VbpUhbvLgfY4XIW7y0HdTEW7yf/kAIW8VIG7yf7ry4HfiIG8S+FG+8uB4+ABYIW8RcQGstR+EH6L4ULD4cPhPgED0WzD4byBvFW6OgI6A4ltHRkRCAnbbPPgPIG8XbpL4UpcgbxcgbvJ/4lMibvJ/IPsE0CCLOK2zWMcFk9dN0N7XTNDtHu1TIW8WIG7yfwHbPFJDAATwAgH+IG8WIW8XIm8YIm6OW3BTM27yf3AhbxGAIPQO8rLXC//4aiBvEG34bXCXUwG5JMEgsI4wUwJvEYAg9A7ystcL/yD4TYMH9A5voTGOFFNEpLUHNiH4TVjIywdZgwf0Q/ht3zCk6F8D+G7fIW6b+E5TIm7yf7YI+HLf+E7BA5L4TkUAbpz4TqcCtQektQdzqQTi+HEgbo4gXyBu8n8gjhD4TqcKtR8B+COEH7C2CLYJlDCBDhDi+HPfXwMAbtM/0wfTB9Mf0//SAAFvo5LT/97SAAFvoZfTH/QEWW8C3gHSAAFvo5LTB97SAAFvo5LTH97RbwkCVPgj+FOhtT+qH7U/+E9ukTDg+E+AQPSGb6HjACBu8n9vIlMSuyCOgN5fBEpIAhb4AJEgjoDo2zz4D0lSAXJfIm8RcQGstR+EH6L4ULD4cPhPgED0WzD4byL4T4BA9HxvoeMAIG6RcJxfIG7yf28iNDRTNLvibCFKAHQB0z/TB9MH0x/T/9IAAW+jktP/3tIAAW+hl9Mf9ARZbwLeAdIAAW+jktMH3tIAAW+jktMf3tFvCW8CAG7tRNDT/9M/0wAx0//T//QE9ATTB/QE0x/TB9MH0x/R+HP4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KFPTgAUc29sIDAuNjQuMAFQoAAAAAJw+Gpw+Gtt+Gxt+G1w+G5t+G9w+HBw+HFw+HJw+HOBDhAiblAB6I5bcFMzbvJ/cCFvEYAg9A7ystcL//hqIG8QbfhtcJdTAbkkwSCwjjBTAm8RgCD0DvKy1wv/IPhNgwf0Dm+hMY4UU0SktQc2IfhNWMjLB1mDB/RD+G3fMKToXwP4bt8hbpv4TlMibvJ/tgj4ct/4TsEDkvhOUQF6nPhOpwK1B6S1B3OpBOL4cSBujiBfIG7yfyCOEPhOpwq1HwH4I4QfsLYItgmUMIEOEOL4c99fA9s8+A/yAFIAbPhT+FL4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PL/8v/9AD0AMsH9ADLH8sHywfLH8ntVA==",
    codeHash: "1c75ca12b493ff32a3c7eb5056db5f4b7e1438b1d503f4a9ffb64d89ac6705cf",
};
module.exports = { SetcodeMultisigContract };