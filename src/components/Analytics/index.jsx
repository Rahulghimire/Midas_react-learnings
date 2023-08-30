import React from "react";

const Analytics = () => {
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

  return <div>Analytics</div>;
};

export default Analytics;
