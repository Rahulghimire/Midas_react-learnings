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
  const options = [];
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="p-2">
      <div
        className="border-1 p-4 rounded"
        style={{ boxShadow: "0px 4px 6px rgba(226, 229, 236, 1)" }}
      >
        <Form
          name="complex-form"
          onFinish={onFinish}
          // labelCol={{
          //   span: 24,
          // }}
          // wrapperCol={{
          //   span: 24,
          // }}
        >
          <Form.Item>
            <Radio checked>Hospital Information</Radio>
          </Form.Item>
          <Form.Item>
            <Radio.Group name="radiogroup" defaultValue={1}>
              <Radio value={1}>New</Radio>
              <Radio value={2}>Folllow Up</Radio>
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
              <Select.Option value="Bipanna">Bipanna</Select.Option>
              <Select.Option value="Old Patient">Old Patient</Select.Option>
              <Select.Option value="test scheme">Test Scheme</Select.Option>
            </Select>
          </Space>
          <Form.Item>
            <Radio checked>Personal Information</Radio>
          </Form.Item>
          <div className="grid grid-cols-12 md:grid-cols-4">
            <Input
              addonBefore="First Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />

            <Input
              addonBefore="Middle Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Last Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
          </div>
          <div className="grid grid-cols-4 mt-3">
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
          </div>

          {/* next item */}
          <Form.Item>
            <Radio checked>Permanent Address</Radio>
          </Form.Item>
          <div className="grid grid-cols-4">
            <Input
              addonBefore="First Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />

            <Input
              addonBefore="Middle Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Last Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
          </div>
          <div className="grid grid-cols-4 mt-3">
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
          </div>
          {/* next item */}
          <Form.Item>
            <Radio checked>Temporary Address</Radio>
          </Form.Item>
          <div className="grid grid-cols-4">
            <Input
              addonBefore="First Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />

            <Input
              addonBefore="Middle Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Last Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
          </div>
          <div className="grid grid-cols-4 mt-3">
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
          </div>

          {/* next item */}
          <Form.Item>
            <Radio checked>Doctor Visit</Radio>
          </Form.Item>
          <div className="grid grid-cols-4">
            <Input
              addonBefore="First Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />

            <Input
              addonBefore="Middle Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Last Name:"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
          </div>
          <div className="grid grid-cols-4 mt-3">
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
            <Input
              addonBefore="Name"
              defaultValue=""
              style={{ width: "250px" }}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BasicInformation;
