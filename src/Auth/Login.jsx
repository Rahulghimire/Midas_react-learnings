import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { UserAddOutlined, KeyOutlined } from "@ant-design/icons";
{
  /* <UserAddOutlined /> 
  <KeyOutlined />
  */
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(login({ ...values, loggedIn: true, loginMessage: "Success" }));
    navigate("/");
  };
  22;

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="grid md:grid-cols-6">
      <div
        className="bg-blue hidden justify-between flex-col md:flex col-span-6 md:col-span-2 p-4"
        style={{ backgroundColor: "#262261", color: "#fff" }}
      >
        <div>Logo</div>
        <div>
          <div>
            <h1>Check the status</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              aliquam atque animi adipisci molestiae ad quos suscipit? Aliquam
              voluptatem eos voluptate consequuntur quam. Asperiores,
              praesentium iusto ab libero ullam sapiente?
            </p>
            <h1 className="mt-4">MIDAS DR. HOMS V5.1.2.5</h1>
          </div>
        </div>
      </div>

      <div className="col-span-6 md:col-span-4">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="text-center m-2">
            <div>
              <h1 className="m-2">Logo</h1>
              <h3 className="m-2">Welcome Back</h3>
              <p>Enter your username and password to signin</p>
            </div>
          </div>
          <Form
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
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                addonBefore={<UserAddOutlined />}
                // style={{ width: "450px" }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                addonBefore={<KeyOutlined />}
                style={{ width: "470px" }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="flex flex-row w-full justify-center"
                style={{ backgroundColor: "#262261" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
