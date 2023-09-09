import React from "react";
import Chart from "react-apexcharts";
import { Card } from "antd";

const Emergency = () => {
  const series = [
    {
      name: "Admission",
      data: [43, 53],
    },
    {
      name: "Discharge",
      data: [33, 43],
    },
  ];
  const options = {
    chart: {
      id: "simple-bar",
    },
    xaxis: {
      categories: ["00:00 - 03:25", "00:00 - 03:25"],
    },
    colors: ["#0000FF", "#800080"],
    dataLabels: {
      enabled: false,
    },
  };
  return (
    <Card title="Emergency" bordered={false} style={{ height: "300px" }}>
      <Chart options={options} type="bar" series={series} />
    </Card>
  );
};

export default Emergency;
