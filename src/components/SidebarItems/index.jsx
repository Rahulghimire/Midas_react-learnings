import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

export const moduleNames = [
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

export const itemsNav = [
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
];

export const navAccountItems = [
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
    label: "Accounts 1",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "Accounts 2",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "Accounts 3",
  },
];

export const navAnalyticsItems = [
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
    label: "Analytics 1",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "Analytics 2",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "Accounts 3",
  },
];

export const navPatientAdmimItems = [
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
    label: "Analytics 1",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "Analytics 2",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "Accounts 3",
  },
];

export const navAssetsItems = [
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
    label: "Assets 1",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "Assets 2",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "Assets 3",
  },
];

export const navAppointmentItems = [
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
    label: "Appointment",
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "Appointment",
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: "Appointment",
  },
];
