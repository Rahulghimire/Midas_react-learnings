import React from "react";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const navAccountItems = [
  {
    key: "0",
    icon: <DashboardOutlined />,
    label: "Dashboard",
    href: "/",
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

const Accounts = () => {
  return <div>Accounts</div>;
};

export default Accounts;
