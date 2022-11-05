import React, { useState, useEffect } from "react";

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

  const [buyData, setBuyData] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("buyData");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [form] = Form.useForm();
  console.log("buyData",buyData)
  useEffect(() => {
    // storing input name
    localStorage.setItem("buyData", JSON.stringify(buyData));
  }, [buyData]);
  return (
    <>
      <Form
        form={form}
        initialValues={buyData}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onValuesChange={() => {

          setBuyData(form.getFieldsValue())
        }}
        onFinish={(asd) => {
          console.log("finish",asd)
        }}
        preserve
      >
        <Form.Item preserve name={["app"]}>
          <Input />
        </Form.Item>
        <Form.Item preserve name={["car_type"]} label="Car Type">
          <Select>
            <Select.Option value="city-car">City Car</Select.Option>
            <Select.Option value="standard">Standard</Select.Option>
            <Select.Option value="family-car">Family</Select.Option>
            <Select.Option value="suv">SUV</Select.Option>
            <Select.Option value="offroad">Off-road / Pickup</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item preserve name={["buy_date"]} label="Buy Date">
          <DatePicker />
        </Form.Item>
        <Form.Item preserve name={["buy_price"]} label="Buy Price">
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
