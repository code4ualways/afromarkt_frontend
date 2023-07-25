import React from "react";
import { Col, Row } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

function index({ hideTite, links, back }) {
  return (
    <Row>
      <Col xs={7} sm={10} className="mb-4" style={{ paddingInline: "50px" }}>
        <span style={{ color: "#1D71B8" }}>Home</span>

        {links?.map((item) => (
          <>
            <ChevronRight style={{ color: "#1D71B8" }} />
            <span style={{ color: "#1D71B8" }}>{item} </span>
          </>
        ))}
        {!hideTite && (
          <div className="mt-3 mb-3">
            <h5>Everything Leather</h5>
          </div>
        )}
      </Col>
      {back && (
        <Col sm={2} xs={5}>
          <>
            <ChevronLeft style={{ color: "#1D71B8", marginInline: 15 }} />
            <span style={{ color: "#1D71B8" }}>{back} </span>
          </>
        </Col>
      )}
    </Row>
  );
}

export default index;
