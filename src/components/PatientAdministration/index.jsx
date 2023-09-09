import React from "react";
import { Tabs, theme } from "antd";
import StickyBox from "react-sticky-box";
import BasicInformation from "./BasicInformation";
import OtherInformation from "./OtherInformation";

// const items = [
//   { label: "Basic Information", key: 1, children: "Content of Tab Pane 1" },
//   { label: "Other Information", key: 1, children: "Content of Tab Pane 2" },
// ];

const label = ["Basic Information", "Other Information"];
const children = [<BasicInformation />, <OtherInformation />];

const items = new Array(2).fill(null).map((_, i) => {
  console.log(i);
  const id = String(i + 1);
  return {
    label: label[i],
    key: id,
    children: children[i],
    style:
      i === 0
        ? {
            height: 200,
          }
        : undefined,
  };
});

console.log("these are the items", items);

const index = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const renderTabBar = (props, DefaultTabBar) => (
    <StickyBox
      offsetTop={0}
      offsetBottom={20}
      style={{
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DefaultTabBar
        {...props}
        style={{
          background: colorBgContainer,
        }}
      />
    </StickyBox>
  );
  return (
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar} items={items} />
  );
};

export default index;
