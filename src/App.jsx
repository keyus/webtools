import { useState } from 'react'
import { useRequest } from 'ahooks'
import { Button, Table, Form, Input, InputNumber, Alert, notification } from 'antd'
import Head from '@/components/Head'
import { useStore } from '@/store'


//发送转账
const send = async (transaction,web3) => {
}

function App() {
  const [form] = Form.useForm();
  const gas = useStore(state => state.gas);
  const web3 = useStore(state => state.web3);
  const account = useStore(state => state.account);
  const [result, setResult] = useState([]);

  const { run: runSend, error, loading: loadingSend } = useRequest(send, {
    manual: true,
    onSuccess(receipt) {
      console.log(receipt)
      notification.success({
        message: `交易确认成功`,
        description: `transactionHash: ${receipt.transactionHash}`,
        placement: 'topRight',
      });
      setResult([receipt, ...result]);
    }
  })

  return (
    <>
      <div className='root'>
        <Head />
        <div>
          {error && <Alert message={error.message} showIcon type="error" closable />}
        </div>
        <div className='main'>

          <Form
            form={form}
            className='web3-form'
            layout='inline'
            onFinish={(values) => {
              runSend({
                from: account?.address,
                to: values.to,
                value: convertValueToWei(values.money),
                gas: gas,
                data: 2,
              })
            }}
            initialValues={{
              money: 0.001,
              count: 1,
            }}
          >

            <Form.Item
              name='money'
              label='金额'
              rules={[{ required: true, message: '请输入发送金额' }]}
            >
              <InputNumber placeholder='发送金额' style={{ width: 100 }} />
            </Form.Item>
            <Form.Item
              name='count'
              label='执行次数'
            >
              <InputNumber placeholder='执行次数' style={{ width: 100 }} />
            </Form.Item>
            <Form.Item
              name='to'
              label='发送到'
              rules={[{ required: true, message: '请输入地址' }]}
            >
              <Input placeholder='地址' style={{ width: 300 }} />
            </Form.Item>
            <Form.Item
              name='data'
              label='二进制数据'
            >
              <Input placeholder='铭文或转账二进制数据' style={{ width: 300 }} />
            </Form.Item>
            <Button
              onClick={form.submit}
              loading={loadingSend}
              type='primary'
            >
              发送
            </Button>
          </Form>

          <div className='web3-table'>

            <Table
              dataSource={result}
              rowKey='transactionHash'
              columns={[
                {
                  title: 'from',
                  dataIndex: 'from',
                  width: 200,
                },
                {
                  title: 'to',
                  dataIndex: 'to',
                  width: 200,
                },
                {
                  title: 'transactionHash',
                  dataIndex: 'transactionHash',
                  width: 200,
                },
                {
                  title: 'status',
                  dataIndex: 'status',
                  width: 200,
                  render(val) {
                    return val.toString();
                  }
                },
              ]}
            />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
