import React from "react";
import { COLORS } from "../../consatants";
import { Col, Container, Row } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Search } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

function Index() {
  const { Items } = useSelector((state) => state.Cart);

  return (
    <div>
      <Row className=" justify-content-start align-items-center">
        <Col
          className="d-flex flex-row justify-content-center align-items-center  d-none d-md-flex"
          md={3}
        >
          <img src={require("../../assets/logo.png")} />
          <img style={{ height: 55 }} src={require("../../assets/map.png")} />
        </Col>
        <Col sm={12} md={6} className="mb-2 mt-2">
          <InputGroup>
            <Form.Control
              style={{ color: "grey" }}
              type="text"
              placeholder="Search Afromarkt "
            />
            <InputGroup.Text>
              <Search />
            </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col
          className="d-flex flex-row justify-content-between align-items-center d-none d-md-flex"
          md={3}
        >
          <Button
            style={{
              borderRadius: 50,
              padding: "5px 20px",
              backgroundColor: "#3AAA35",
            }}
            variant="success"
          >
            Sign in
          </Button>{" "}
          <img src={require("../../assets/man.png")} />
          <div style={{ position: "relative" }}>
            <span
              style={{
                fontWeight: "900",
                color: " #808080b5",
                position: "absolute",
                top: " -12px",
                right: " -3px",
                fontSize: "13px",
              }}
            >
              {Items}
            </span>
            <img src={require("../../assets/cart.png")} />
          </div>
        </Col>
      </Row>
      <h4
        className="pt-2 pb-2 text-white mb-3 pl-3 d-none d-md-block"
        style={{ backgroundColor: COLORS.main, fontWeight: "600" }}
      >
        <Row className=" ">
          <Col md={6}>
            <Row style={{ marginLeft: 25 }}>
              <Col md={4}>
                <h6>Customer Service </h6>
              </Col>
              <Col md={3}>
                <h6>Gift Card </h6>
              </Col>{" "}
              <Col md={3}>
                <h6>Sell</h6>
              </Col>
            </Row>
          </Col>
          <Col md={4}></Col>
          <Col md={2}>
            <h6>Afromarkt Deals </h6>
          </Col>
        </Row>
      </h4>
    </div>
  );
}

export default Index;
