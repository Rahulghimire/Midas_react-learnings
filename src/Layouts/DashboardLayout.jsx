import React, { useState } from "react";
import Logo from "../assets/logo.png";
import DashLogo from "../assets/dash-logo.png";
import { Outlet } from "react-router-dom";
import {
  SearchOutlined,
  EllipsisOutlined,
  DownOutlined,
  NotificationOutlined,
  AccountBookOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Space,
  Input,
  Dropdown,
  Button,
  Badge,
  theme,
  Menu,
  Modal,
} from "antd";
import { Link } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
import Doctor from "../assets/doctor.png";

const moduleNames = [
  {
    icon: <DashboardOutlined />,
    name: "Account",
  },
  {
    icon: <DashboardOutlined />,
    name: "Analytics",
  },
  {
    icon: <DashboardOutlined />,
    name: "Appointment",
  },
  {
    icon: <DashboardOutlined />,
    name: "Claim Management",
  },
  {
    icon: <DashboardOutlined />,
    name: "CathLab",
  },
];

const items = [
  {
    label: (
      <a target="#" rel="noopener noreferrer" href="#">
        superadmin
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <Button type="primary" className="bg-blue-800 w-full">
        Logout
      </Button>
    ),
    key: "1",
  },
];

const headerStyle = {
  // textAlign: "center",
  // color: "#fff",
  // height: 64,
  // paddingInline: 50,
  // lineHeight: "64px",
  // backgroundColor: "#7dbcea",
  backgroundColor: "white",
  height: "auto",
};

const contentStyle = {
  // textAlign: "center",
  // minHeight: 120,
  // lineHeight: "120px",
  // color: "#fff",
  // backgroundColor: "#108ee9",
  padding: "3.4rem",
  backgroundColor: "white",
};

const siderStyle = {
  // textAlign: "center",
  // lineHeight: "120px",
  // color: "#fff",
  // backgroundColor: "#3ba0e9",
  padding: "2rem",
  backgroundColor: "white",
};
const footerStyle = {
  // textAlign: "center",
  // color: "#fff",
  // backgroundColor: "#7dbcea",
};

const DashboardLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // console.log(children);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const itemsNav = [
    {
      key: "0",
      icon: <DashboardOutlined />,
      label: (
        <Link to="">
          <span>Dashboard</span>
        </Link>
      ),
    },

    {
      key: "1",
      icon: <UserOutlined />,
      label: "Nav 1",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "Nav 2",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "Nav 3",
    },
  ];

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      // size={[0, 48]}
    >
      <Layout>
        <Header style={headerStyle}>
          <div className="grid md:grid-cols-3">
            <div className="flex items-center flex-wrap gap-3">
              <Button onClick={showModal}>
                <img src={DashLogo} alt="logo" />
              </Button>
              <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div>
                  <Input
                    size="small"
                    placeholder="Search for modules, sub-modules, settings, etc"
                    prefix={<SearchOutlined />}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-wrap">
                  {moduleNames &&
                    moduleNames.map((item, index) => {
                      return (
                        <Link key={index} className="flex items-center p-5">
                          {item.icon}
                          <span className="ml-2">{item.name}</span>
                        </Link>
                      );
                    })}
                </div>
                <div></div>
              </Modal>
            </div>
            <div>
              <Input
                size="small"
                placeholder="Search for modules, sub-modules, settings, etc"
                prefix={<SearchOutlined />}
                className="rounded-full"
              />
            </div>
            <div className=" ms-5 flex items-center justify-end">
              <EllipsisOutlined className="transform rotate-90" />
              <Dropdown
                className="ms-4"
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="relative flex items-center">
                    <img src={Doctor} alt="" />
                    <span className="font-bold ms-2">Doctor's Panel</span>
                    <DownOutlined
                      style={{ fontSize: "13px" }}
                      className="p-0"
                    />
                  </Space>
                </a>
              </Dropdown>
              <Badge count={1} offset={[5, 5]}>
                <NotificationOutlined className="bg-slate-50 ms-3 rounded-full p-2 border-gray-300 border-2" />
              </Badge>
              <Badge count={1} offset={[5, 5]} className="md:ms-2">
                <NotificationOutlined className="bg-slate-50 ms-3 rounded-full p-2 border-gray-300 border-2" />
              </Badge>
            </div>
          </div>
        </Header>
        <Layout hasSider className="bg-white h-screen">
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={itemsNav}
            />
          </Sider>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>

          <Content style={contentStyle}>
            {/* <div>
              <div>
                <div>
                  <h2>You might be searching for</h2>
                </div>
                <div>No data</div>
              </div>
              <div>
                <div className="mt-8">
                  <h5>Recently Used</h5>
                  <div className="mt-4 flex justify-between flex-wrap">
                    <div className="flex items-center">
                      <Link className="flex items-center" to="/accounts">
                        <AccountBookOutlined style={{ fontSize: "30px" }} />
                        <div className="ms-2">
                          <p>Account</p>
                          <span>2h Ago</span>
                        </div>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Link className="flex items-center" to="/analytics">
                        <AccountBookOutlined style={{ fontSize: "30px" }} />
                        <div className="ms-2">
                          <p>Analytics</p>
                          <span>2h Ago</span>
                        </div>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Link className="flex items-center" to="/appointment">
                        <AccountBookOutlined style={{ fontSize: "30px" }} />
                        <div className="ms-2">
                          <p>Appointment</p>
                          <span>2h Ago</span>
                        </div>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <Link className="flex items-center" to="/assets">
                        <AccountBookOutlined style={{ fontSize: "30px" }} />
                        <div className="ms-2">
                          <p>Assets</p>
                          <span>2h Ago</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <Outlet /> */}
            <Outlet />
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
};

export default DashboardLayout;
