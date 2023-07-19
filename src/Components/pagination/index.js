import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { Col, Container, Row } from "react-bootstrap";

function index() {
  return (
    <Container>
      <Row
        className="d-flex justify-content-around pt-3 pb-3 align-items-center"
        style={{
          border: "1px solid #D9D9D9",
          color: "#979797",
          borderRadius: 5,
        }}
      >
        <Col
          md={2}
          xs={3}
          className="d-flex justify-content-center align-items-center"
        >
          <ChevronLeft style={{ fontWeight: "bold", fontSize: "16px" }} />
          <span className="p-2">Previous</span>
        </Col>
        <Col
          xs={6}
          md={8}
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
          <ChevronRight style={{ fontWeight: "bold", fontSize: "16px" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default index;
