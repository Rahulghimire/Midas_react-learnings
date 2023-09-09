import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { PrinterOutlined } from "@ant-design/icons";

import ComponentToPrint from "./ComponentToPrint";

const index = () => {
  const departmentName = ["A", "B", "C"];

  const componentRef = useRef();
  console.log(componentRef);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <div className="flex justify-end mt-5 mr-5">
        <button onClick={handlePrint}>
          <PrinterOutlined className="text-[22px] text-[green]" />
        </button>
      </div>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};

export default index;
