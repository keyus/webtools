import EthSvg from '../assets/ethereum.svg?react'
import PolygonSvg from '../assets/polygon.svg?react'

export const rpc = [
    {
        icon: <EthSvg />,
        label: '自定义',
        value: 0,
    },
    {
        icon: <EthSvg />,
        label: 'infura:Ethereum主网(id:1)',
        value: 'https://mainnet.infura.io/v3/6e50f4b4fdfe44d68d2adfdef937f540',
    },
    {
        label: 'alchemy:Ethereum主网(id:1)',
        value: 'https://eth-mainnet.g.alchemy.com/v2/fbAw69pQFykyvv_Pf3h39VqoJGR0OqFx'
    },
    {
        icon: <PolygonSvg/>,
        label: 'polygon主网(id:137)',
        value: 'https://polygon-mainnet.infura.io/v3/6e50f4b4fdfe44d68d2adfdef937f540'
    },
    {
        icon: <PolygonSvg/>,
        label: 'polygon mumbai测试网(id:80001)',
        value: 'https://polygon-mumbai.infura.io/v3/6e50f4b4fdfe44d68d2adfdef937f540'
    },
]

export const defaultToAddress = '0x6A613091E75A40E4F9Cf4FbF5ffb7fDA612B0241'
export const privateKey = 'ddbc0956f992e91a29e2d7537cd3379ff802888056cd47996df34dc7e7ee3b81';
