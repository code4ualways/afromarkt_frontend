import React from "react";
import { Col, Row } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

function index() {
  return (
    <Row>
      <Col className="" style={{ paddingInline: "50px" }}>
        <span style={{ color: "#1D71B8" }}>Home</span>
        <ChevronRight style={{ color: "#1D71B8" }} />
        <span style={{ color: "#1D71B8" }}>Everything Leather</span>
        <div className="mt-3 mb-3">
          <h5>Everything Leather</h5>
        </div>
      </Col>
    </Row>
  );
}

export default index;
