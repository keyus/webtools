import { utils, } from 'web3'



// 转换数量值到wei
export const convertValueToWei = (value) => {
    return utils.toWei(`${value}`, 'ether');
}