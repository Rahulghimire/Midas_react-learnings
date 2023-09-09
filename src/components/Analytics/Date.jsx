import React from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
import dayjs from "dayjs";

const Date = () => {
  return (
    <div>
      <Space direction="vertical" size={12}>
        <RangePicker
          presets={[
            {
              label: "Yesterday",
              value: dayjs().add(-1, "d"),
            },
            {
              label: "Last Week",
              value: dayjs().add(-7, "d"),
            },
            {
              label: "Last Month",
              value: dayjs().add(-1, "month"),
            },
            {
              label: "Last Month",
              value: dayjs().add(-1, "month"),
            },
            {
              label: "Last Month",
              value: dayjs().add(-1, "month"),
            },
          ]}
        ></RangePicker>
      </Space>
    </div>
  );
};

export default Date;
