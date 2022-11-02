import React, { useState } from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const BuyStep = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const onFormLayoutChange = ( disabled ) => {
    console.log('disabled', disabled)
    setComponentDisabled(disabled);
  };

  return (
    <>

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onValuesChange={onFormLayoutChange}
        onFieldsChange={onFormLayoutChange}
        preserve={true}
      >
        <Form.Item label="Car Type">
          <Select>
            <Select.Option value="city-car">City Car</Select.Option>
            <Select.Option value="standard">Standard</Select.Option>
            <Select.Option value="family-car">Family</Select.Option>
            <Select.Option value="suv">SUV</Select.Option>
            <Select.Option value="offroad">Off-road / Pickup</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Buy Date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Buy Price">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default () => <BuyStep />;