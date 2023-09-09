import React, { useState, useEffect } from "react";
import DashLogo from "../assets/dash-logo.png";
import { Outlet, redirect, useLocation } from "react-router-dom";
import {
  SearchOutlined,
  EllipsisOutlined,
  DownOutlined,
  NotificationOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
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
const { Header, Sider, Content } = Layout;
import Doctor from "../assets/doctor.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

import {
  moduleNames,
  itemsNav,
  navAccountItems,
  navAnalyticsItems,
  navPatientAdmimItems,
  navAssetsItems,
  navAppointmentItems,
} from "../components/SidebarItems";

const headerStyle = {
  backgroundColor: "white",
  height: "auto",
};

const contentStyle = {
  padding: "3.4rem",
  backgroundColor: "white",
};

const siderStyle = {
  padding: "0.5rem",
  backgroundColor: "white",
};

const DashboardLayout = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      return;
    }
  }, []);

  const items = [
    {
      label: (
        <a target="#" rel="noopener noreferrer" href="#">
          {user?.username}
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <Button
          type="primary"
          className="bg-blue-800 w-full"
          onClick={handleLogout}
        >
          Logout
        </Button>
      ),
      key: "1",
    },
  ];

  const [menuItems, setMenuItems] = useState(itemsNav);
  const location = useLocation();

  const updateMenuItems = () => {
    const currentPath = location.pathname;
    let updatedItemsNav = [];
    if (currentPath === "/") {
      updatedItemsNav = itemsNav;
    } else if (currentPath === "/accounts") {
      updatedItemsNav = navAccountItems;
      console.log(updatedItemsNav);
    } else if (currentPath == "/analytics") {
      updatedItemsNav = navAnalyticsItems;
    } else if (currentPath == "/assets") {
      updatedItemsNav = navAssetsItems;
    } else if (currentPath == "/patient-adminstration") {
      updatedItemsNav = navPatientAdmimItems;
    } else if (currentPath == "/appointment") {
      updatedItemsNav = navAppointmentItems;
    }
    setMenuItems(updatedItemsNav);
  };

  useEffect(() => {
    updateMenuItems();
  }, [location.pathname]);

  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setFilter(false);
  };

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
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      setFilter(true);
                    }}
                  />
                </div>
                <div className="flex flex-wrap">
                  {!filter && moduleNames
                    ? moduleNames.map((item, index) => {
                        return (
                          <Link key={index} className="flex items-center p-5">
                            {item.icon}
                            <span className="ml-2">{item.name}</span>
                          </Link>
                        );
                      })
                    : moduleNames
                        .filter((item) =>
                          item.name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                        )
                        .map((filteredItem, index) => (
                          <Link key={index} className="flex items-center p-5">
                            {filteredItem.icon}
                            <span className="ml-2">{filteredItem.name}</span>
                          </Link>
                        ))}
                </div>
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
        <Layout className="bg-white h-screen">
          <Sider collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={menuItems}
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
          <Content style={{ padding: "0" }}>
            <Outlet />
          </Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Space>
  );
};

export default DashboardLayout;
