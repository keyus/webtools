
import { Badge, Form, Tag, Select, Input, Button, ConfigProvider, Space, Modal } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { Web3, HttpProvider } from 'web3'
import { useBoolean, useMemoizedFn, useRequest, useUpdateEffect } from 'ahooks'
import { rpc } from '@/config'
import { useStore } from '@/store'


const connect = async (rpc) => {
    const provider = new HttpProvider(rpc);
    return new Web3(provider);
}

const fetchGas = async () => {
    return web3.eth.estimateGas({
        to: '',
        data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003',
    })
}
export default function Head() {
    const setWeb3 = useStore(state => state.setWeb3);
    const gas = useStore(state => state.gas);
    const [openConfig, { toggle }] = useBoolean();
    const [form] = Form.useForm();
    const rpcUrl = Form.useWatch('rpcUrl', form);

    const fetchGas = useMemoizedFn(async () => {
        return web3.eth.estimateGas({
            to: '',
            data: '0xc6888fa10000000000000000000000000000000000000000000000000000000000000003',
        })
    })

    const { run: runConnect, loading: loadingConnect } = useRequest(connect, {

    })

    const onFinish = useMemoizedFn(async (values) => {
        const { rpcUrl, rpcUrlCustom, privateKey } = values;
        const web3 = new Web3(new HttpProvider(rpcUrl || rpcUrlCustom));
        const account = web3.eth.accounts.wallet.add(privateKey).get(0);

        const gasPrice = await web3.eth.getGasPrice();
        console.log('gasPrice',gasPrice)
        setWeb3({
            web3,
            account,
            gas: gasPrice
        });
    })

    return (

        <div className='header'>
            <div className='right'>

                {
                    gas ?
                        <div className='gas'>当前网络gas: {gas} <Badge status="success" text="已连接" /></div> :
                        <Badge status="error" text="未连接" />
                }

                <Button onClick={toggle}>
                    配置钱包私钥
                </Button>
            </div>

            <Modal
                destroyOnClose
                title='配置钱包私钥'
                onOk={form.submit}
                open={openConfig}
                onCancel={toggle}
            >
                <Form
                    name='wallet'
                    layout='vertical'
                    form={form}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name='rpcUrl'
                        label='请选择rpc节点'
                        rules={[
                            {
                                required: true,
                                message: '请选择rpc节点'
                            }
                        ]}
                    >
                        <Select
                            options={rpc}
                            placeholder='请选择rpc节点'
                        />
                    </Form.Item>
                    {
                        rpcUrl === 0 &&
                        <>
                            <Form.Item
                                name='rpcUrlCustom'
                                label='自定义rpc节点'
                                rules={[
                                    {
                                        required: true,
                                        message: '输入自定义rpc节点'
                                    }
                                ]}
                            >
                                <Input
                                    placeholder='请输入自定义rpc节点'
                                />
                            </Form.Item>
                        </>
                    }
                    <Form.Item
                        name='privateKey'
                        label='钱包私钥'
                        rules={[
                            {
                                required: true,
                                message: '请输入钱包私钥'
                            }
                        ]}
                    >
                        <Input placeholder='请输入钱包私钥' />
                    </Form.Item>
                </Form>
            </Modal>
        </div>

    )
}