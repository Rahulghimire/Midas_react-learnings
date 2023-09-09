import React from "react";
import Chart from "react-apexcharts";
import { Card } from "antd";

const OPD = () => {
  const options = {
    labels: ["Appointment", "Followup", "New"],
    dataLabels: {
      enabled: false,
    },
    colors: ["#0000FF", "#800080", "#008000"],
  };
  const series = [4, 5, 6];
  return (
    <Card title="OPD" bordered={false} style={{ height: "300px" }}>
      <div>
        <Chart options={options} series={series} type="pie" width="300" />
      </div>
    </Card>
  );
};

export default OPD;
