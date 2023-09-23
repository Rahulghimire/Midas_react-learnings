import React from "react";
import { Link } from "react-router-dom";
import { AccountBookOutlined } from "@ant-design/icons";
import DashboardLayout from "../Layouts/DashboardLayout";
import { Empty } from "antd";

const DashContent = () => {
  return (
    <div className="m-5">
      <div>
        <div>
          <h2>You might be searching for</h2>
        </div>
        <div className="m-2">
          <Empty />
        </div>
      </div>
      <div>
        <div className="mt-8">
          <h5>Recently Used</h5>
          <div className="mt-4 flex justify-between flex-wrap gap-x-20 gap-y-8">
            <div className="flex items-center">
              <Link className="flex items-center" to="/accounts">
                <AccountBookOutlined style={{ fontSize: "40px" }} />
                <div className="ms-2">
                  <p>Account</p>
                  <span>2h Ago</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <Link className="flex items-center" to="/analytics">
                <AccountBookOutlined style={{ fontSize: "40px" }} />
                <div className="ms-2">
                  <p>Analytics</p>
                  <span>2h Ago</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <Link className="flex items-center" to="/appointment">
                <AccountBookOutlined style={{ fontSize: "40px" }} />
                <div className="ms-2">
                  <p>Appointment</p>
                  <span>2h Ago</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <Link className="flex items-center" to="/assets">
                <AccountBookOutlined style={{ fontSize: "40px" }} />
                <div className="ms-2">
                  <p>Assets</p>
                  <span>2h Ago</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <Link className="flex items-center" to="/patient-adminstration">
                <AccountBookOutlined style={{ fontSize: "40px" }} />
                <div className="ms-2">
                  <p>Patient Administration</p>
                  <span>2h Ago</span>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <Link className="flex items-center" to="/investigation">
                <AccountBookOutlined style={{ fontSize: "40px" }} />
                <div className="ms-2">
                  <p>Investigation</p>
                  <span>2h Ago</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashContent;
