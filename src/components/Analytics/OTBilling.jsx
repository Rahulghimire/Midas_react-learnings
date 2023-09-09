import React from "react";
import Chart from "react-apexcharts";
import { Card } from "antd";

const OTBilling = () => {
  const series = [
    {
      name: "OT Manjor",
      data: [43, 53, 55],
    },
    {
      name: "OT Minor",
      data: [33, 43, 86],
    },
    {
      name: "OT Intermediate",
      data: [33, 43, 86],
    },
  ];
  const options = {
    chart: {
      id: "simple-bar",
    },
    xaxis: {
      categories: ["00:00 - 03:25", "00:00 - 03:25", "00:00 - 03:25"],
    },
    colors: ["#0000FF", "#800080", "#FFFF00"],
    dataLabels: {
      enabled: false,
    },
  };
  return (
    <Card title="OT Billing" bordered={false} style={{ height: "300px" }}>
      <div>
        <Chart options={options} type="bar" series={series} width="100%" />
      </div>
    </Card>
  );
};

export default OTBilling;
