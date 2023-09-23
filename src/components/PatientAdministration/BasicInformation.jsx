import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography,
  Radio,
  Cascader,
} from "antd";
const { Option } = Select;

const BasicInformation = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateMessages = {
    required: "${label} is required!",
  };

  return (
    <div className="p-2">
      <div
        className="p-4"
        style={{ border: "3px solid rgb(211, 211, 211)", borderRadius: "10px" }}
      >
        <Form
          name="complex-form"
          validateMessages={validateMessages}
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Radio checked>Hospital Information</Radio>
          <Form.Item name="radio-group" className="m-4">
            <Radio.Group name="radiogroup" defaultValue="new">
              <Radio value="new" checked>
                New
              </Radio>
              <Radio value="follow-up">Folllow Up</Radio>
            </Radio.Group>
          </Form.Item>
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Select
              defaultValue="Select Scheme Type:"
              style={{
                width: 200,
              }}
            >
              <Option value="Bipanna">Bipanna</Option>
              <Option value="Old Patient">Old Patient</Option>
              <Option value="test scheme">Test Scheme</Option>
            </Select>
          </Space>
          <Form.Item>
            <Radio checked>Personal Information</Radio>
          </Form.Item>
          <Form.Item>
            <div className="grid grid-cols-12 md:grid-cols-4 m-0">
              <Form.Item name="first-name">
                <Input addonBefore="First Name:" style={{ width: "250px" }} />
              </Form.Item>
              <Form.Item name="middle-name">
                <Input addonBefore="Middle Name:" style={{ width: "250px" }} />
              </Form.Item>

              <Form.Item name="last-name">
                <Input addonBefore="Last Name:" style={{ width: "250px" }} />
              </Form.Item>
              <Form.Item>
                <Input addonBefore="Name" style={{ width: "250px" }} />
              </Form.Item>
            </div>
            <Form.Item>
              <div className="grid grid-cols-4">
                <Form.Item>
                  <Input addonBefore="Name" style={{ width: "250px" }} />
                </Form.Item>
                <Form.Item>
                  <Input addonBefore="Name" style={{ width: "250px" }} />
                </Form.Item>

                <Form.Item>
                  <Input addonBefore="Name" style={{ width: "250px" }} />
                </Form.Item>
                <Form.Item>
                  <Input addonBefore="Name" style={{ width: "250px" }} />
                </Form.Item>
              </div>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="bg-[#262261]" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BasicInformation;
