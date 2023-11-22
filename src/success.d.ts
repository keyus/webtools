
interface Success {
    // "0x40d1ad33638d8755a87968ed857e213e3a5a7f768abaa3c1e3dfa9c22aae4760"
    blockHash: string;
    // 42556000n
    blockNumber: bigint;
    // 3436235n
    cumulativeGasUsed: bigint;
    // 2500000015n
    effectiveGasPrice: bigint;
    // "0x6a613091e75a40e4f9cf4fbf5ffb7fda612b0241"
    from: string;
    // 21000n
    gasUsed: bigint;
    logs: {
        // "0x0000000000000000000000000000000000001010"

        ddress: string;
        // 0x40d1ad33638d8755a87968ed857e213e3a5a7f768abaa3c1e3dfa9c22aae4760
        blockHash: string;
        // 42556000n
        blockNumber: bigint;
        // "0x00000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000000000000000000000000000066cbd74b4b5ea75900000000000000000000000000000000000000000000000002ca186f5fda800000000000000000000000000000000000000000000000000066c849cca698275900000000000000000000000000000000000000000000000002cda5ee04a10000"
        data: string;
        // 80n
        logIndex: bigint;
        removed: boolean;
        topics: string[];
        // 0x1533c6ca36fd11993cbd4bdc203ca2b686c8cf68dbc65536e620be4e1f49ea3d
        transactionHash: string;
        transactionIndex: bigint;
    }[];
    logsBloom: string;
    status: bigint;
    // "0x443f568d1a950e3366e4e79075c28310534a7"
    to: string;
    // "0x1533c6ca36fd11993cbd4bdc203ca2b686c8cf68dbc65536e620be4e1f49ea3d"
    transactionHash: string;
    // 27n
    transactionIndex: bigint;
    // 2n
    type: bigint;
}