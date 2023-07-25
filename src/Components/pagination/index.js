import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";

function index() {
  return (
    <Container>
      <Row
        className="d-flex justify-content-around pt-2 pb-2 align-items-center"
        style={{
          border: "1px solid #D9D9D9",
          color: "#979797",
          borderRadius: 5,
          fontWeight: "600",
        }}
      >
        <Col
          md={2}
          xs={3}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={require("../../assets/chevron.png")}
            style={{ fontWeight: "bold", fontSize: "16px" }}
          />
          <span className="p-2">Previous</span>
        </Col>
        <Col
          xs={6}
          md={6}
          className="d-flex justify-content-between align-items-center"
        >
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>200</span>
        </Col>
        <Col
          xs={3}
          md={2}
          className="d-flex justify-content-center align-items-center"
        >
          <span className="p-2">Next</span>
          <img
            src={require("../../assets/chevron.png")}
            style={{ fontWeight: "bold", fontSize: "16px", rotate: "180deg" }}
          />{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default index;
