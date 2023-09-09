import React from "react";
import Chart from "react-apexcharts";

import { Card } from "antd";

const IPDBilling = () => {
  const options = {
    labels: ["Discharged", "Admitted"],
    dataLables: {
      enabled: false,
    },
  };

  const series = [4, 5];
  return (
    <Card title="IPDBilling" bordered={false} style={{ height: "300px" }}>
      <div>
        <Chart options={options} series={series} type="pie" width="300" />
      </div>
    </Card>
  );
};

export default IPDBilling;
