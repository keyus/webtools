import { create } from 'zustand'
import { Web3, HttpProvider } from 'web3'
import { message } from 'antd'
import { defaultToAddress } from '@/config'

export const useStore = create((set, get) => {

    return {
        web3: null,
        provider: null,
        account: null,
        gas: null,
        setWeb3: (ins) => {
            set({   
                ins,
            })
        },
        fetchGas: async () => {
            const web3 = get().web3;
            if (!web3) return message.error('rpc节点未连接');
            try {
                const gas = await web3.eth.estimateGas({
                    to: defaultToAddress,
                    data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003',
                });
                set({
                    gas: gas.toString(),
                })
            } catch (error) {
                console.error(error)
            }
        },
        connect: (rpc) => {
            const provider = new HttpProvider(rpc);
            const web3 = new Web3(provider);
            set({
                web3,
                provider,
            })
            get().fetchGas();
        },
        close() {
            set({
                web3: null,
            })
        }
    }
})
