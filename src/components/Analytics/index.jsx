import React from "react";
import Emergency from "./Emergency";
import Appointment from "./Appointment";
import Date from "./Date";
import OPD from "./OPD";
import OTBilling from "./OTBilling";
import Services from "./Services";
import IPDBilling from "./IPDBilling";
import { Card, Col, Row } from "antd";

const Analytics = () => {
  return (
    <div>
      <div className="flex justify-end m-5">
        <Date />
      </div>
      {/* <div className="grid gap-5 md:grid-cols-3">
        <div className="">
          <Emergency />
        </div>
        <div>
          <Appointment />
        </div>
        <div>
          <OPD />
        </div>
        <div>
          <IPDBilling />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <OTBilling />
        </div>
      </div> */}

      <div className="grid lg:grid-cols-3 gap-3">
        <div>
          <Emergency />
        </div>
        <div>
          <Appointment />
        </div>
        <div>
          <OPD />
        </div>
        <div>
          <IPDBilling />
        </div>
        <div>
          <Services />
        </div>
        <div>
          <OTBilling />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
