import React from "react";
import Chart from "react-apexcharts";
import { Card } from "antd";

const Services = () => {
  const options = {
    labels: ["Series 1", "Series 2", "Series 3"],
    colors: ["#0000FF", "#800080", "#008000"],
    dataLabels: {
      enabled: false,
    },
  };

  const series = [4, 5, 6];

  return (
    <Card title="Services" bordered={false} style={{ height: "300px" }}>
      <div>
        <Chart options={options} series={series} type="pie" width="300" />
      </div>
    </Card>
  );
};

export default Services;
