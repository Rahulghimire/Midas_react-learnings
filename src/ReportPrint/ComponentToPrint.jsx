import React from "react";
import { Table } from "antd";

const ComponentToPrint = React.forwardRef((props, ref) => {
  console.log(props, ref.current);

  const sharedOnCell = (_, index) => {
    if (index === 1) {
      return {
        colSpan: 0,
      };
    }
    return {};
  };
  const columns = [
    {
      title: "RowHead",
      dataIndex: "key",
      rowScope: "row",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
      onCell: (_, index) => ({
        colSpan: index === 1 ? 5 : 1,
      }),
    },
    {
      title: "Age",
      dataIndex: "age",
      onCell: sharedOnCell,
    },
    {
      title: "Home phone",
      colSpan: 2,
      dataIndex: "tel",
      onCell: (_, index) => {
        if (index === 3) {
          return {
            rowSpan: 2,
          };
        }
        // These two are merged into above cell
        if (index === 4) {
          return {
            rowSpan: 0,
          };
        }
        if (index === 1) {
          return {
            colSpan: 0,
          };
        }
        return {};
      },
    },
    {
      title: "Phone",
      colSpan: 0,
      dataIndex: "phone",
      onCell: sharedOnCell,
    },
    {
      title: "Address",
      dataIndex: "address",
      onCell: sharedOnCell,
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      tel: "0571-22098909",
      phone: 18889898989,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      tel: "0571-22098333",
      phone: 18889898888,
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "London No. 2 Lake Park",
    },
    {
      key: "5",
      name: "Jake White",
      age: 18,
      tel: "0575-22098909",
      phone: 18900010002,
      address: "Dublin No. 2 Lake Park",
    },
  ];

  return (
    <div ref={ref} className="m-6">
      <div>
        <p className="text-center mb-3">Patient Test List</p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <div className="mb-2">
            <span>
              Patient Id <span>:79037866</span>
            </span>
          </div>
          <div className="mb-2">
            <span>
              Patient Name <span className="uppercase">:Hari Kumar YADAV</span>
            </span>
          </div>
          <div className="mb-4">
            <span>
              Bill No<span>CS80-81/-003398</span>
            </span>
          </div>
          <div className="mb-2">
            <span>
              Scheme:<span></span>
            </span>
          </div>
          <div className="mb-2">
            <span>
              Remarks:<span></span>
            </span>
          </div>
        </div>
        <div className="col-span-6 flex flex-col items-end">
          <div className="mb-2">
            <span>
              Age / Gender:<span>79037866</span>
            </span>
          </div>
          <div className="mb-2">
            <span>
              Contact Info<span>:7903786699</span>
            </span>
          </div>
          <div className="mb-2">
            <span>
              Sample No / LabNo:<span>2080-N31990 / 051231990</span>
            </span>
          </div>
          <div className="mb-2">
            <span>
              Sample Datetime : <span>2080/05/12 18:51:19</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-center font-bold mb-5">
            Department: Haematology
          </h1>
        </div>
        <div>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            pagination={false}
          />
        </div>
      </div>
    </div>
  );
});

export default ComponentToPrint;
