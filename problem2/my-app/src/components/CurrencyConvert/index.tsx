import {
    Button,
    Form,
    Input,
    Radio,
  } from 'antd/lib';
import { useState } from 'react';
import { regex } from '../../const/regex';
import axios from 'axios';
import { handleErrorMessage } from '../../helper';
import { Typography } from 'antd';

type SizeType = Parameters<typeof Form>[0]['size'];
  
function CurrencyConvertForm() {
  const [form] = Form.useForm();
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [outputCurrency, setOutputCurrency] = useState<any>(0);
  const [outputUnit, setOutputUnit] = useState<any>('');

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const { Title } = Typography;

  const handleSubmitForm = async (evt: any) => {
    setIsLoading(true);
    const from = evt?.from.toUpperCase();
    const to = evt?.to.toUpperCase();
    const amount = evt?.amount;

    try {
      setIsLoading(true);
      const result = await axios.get(
        // `https://api.api-ninjas.com/v1/convertcurrency?have=${from}&want=${to}&amount=${amount}`
        `https://api.fastforex.io/convert/?from=${from}&to=${to}&amount=${amount}`
      , {
        params: {
          api_key: 'aa91c1e29e-d8e6df931a-sbu0hz',
        },
      });
      if (result.data) {
        setIsLoading(false);
        const rs = result.data.result[`${to}`];
        const roundedData = Math.floor(rs);
        setOutputCurrency(roundedData.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
      }
    } catch (error:any) {
      handleErrorMessage(null, error?.response?.data?.error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
      <div className="ml-[200px]">
        <div className='!rounded'>
            <h1 className="my-10 text-3xl font-bold text-blue font-sans text-left">
                Currency Conversion Form
            </h1>
        </div>
        <div>
          <Form
            form={form}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={{ size: componentSize }}
            onValuesChange={onFormLayoutChange}
            size={componentSize as SizeType}
            style={{ maxWidth: 600 }}
            onFinish={handleSubmitForm}
            name="CurrencyConvertForm"
          >
            <Form.Item label="Form Size" name="size">
              <Radio.Group>
                <Radio.Button value="small">Small</Radio.Button>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item
            label="From"
            name={`from`}
              rules={[
                {
                  required: true,
                  message: 'Please enter a value',
                },
              ]}
            >
              <Input placeholder='Enter character refer to currency that will convert from (like USD,..)' className='w-[500px]'/>
            </Form.Item>
            <Form.Item
            label="To"
            name={`to`}
              rules={[
                {
                  required: true,
                  message: 'Please enter a value',
                },
              ]}
            >
              <Input placeholder='Enter character refer to currency that will convert to (like VND,...)' onChange={(e:any)=> setOutputUnit(e.target.value)} className='w-[500px]'/>
            </Form.Item>
            <Form.Item
            label="Amount"
            name={`amount`}
              rules={[
                {
                  required: true,
                  message: 'Please enter a value',
                },
                {
                  pattern: regex.regexNumberInteger,
                  message: 'Please enter a number',
                },
              ]}
            >
              <Input placeholder='Enter Amount that you want to convert' className='w-[500px]'/>
            </Form.Item>
            <Button loading={isLoading} htmlType='submit' type="primary">Convert</Button>
          </Form>
        </div>
        <div className='flex flex-row mt-5'>
          <div><Title>Result: </Title></div>
          <div className='pl-5'><Title>{outputCurrency}{` ${outputUnit.toUpperCase()}`}</Title></div>
        </div>
    </div>
  )
}

export default CurrencyConvertForm; 