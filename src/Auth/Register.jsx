import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/home");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="grid md:grid-cols-6">
      <div className="bg-blue flex justify-center items-center col-span-6 md:col-span-2">
        Hospital Management Information System
      </div>

      <div className="flex justify-center items-center col-span-6 md:col-span-4 h-screen">
        <Form
          name="basic"
          labelCol={{
            span: 24,
          }}
          style={{
            maxWidth: "100%",
            margin: "20px",
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ backgroundColor: "green" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
