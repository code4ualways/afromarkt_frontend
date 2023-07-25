import React, { useEffect } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import Navbar from "../Components/navbar";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Footer from "../Components/footer";
import { GetAllProducts } from "../Redux/Slices/Products";
import { useDispatch } from "react-redux";
import Products from "../dummy/products.json";

import BreadCrumb from "../Components/BreadCrumb";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Checkout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllProducts());
    console.log(Products, "Products");
  }, []);
  return (
    <Container fluid="sm">
      <Row>
        <Navbar />
      </Row>
      <Row className="mb-3" style={{ width: "100%", margin: "auto" }}>
        <Col className="p-0 " style={{ overflow: "hidden" }} md={12}>
          <BreadCrumb
            links={["Checkout "]}
            back="Continue shopping"
            hideTite={true}
          />
          <Row className="p-4 m-auto d-flex  justify-content-center align-items-center">
            <Col
              style={{ backgroundColor: "#FAFAFA", padding: 20 }}
              xs={12}
              md={5}
            >
              <Card
                style={{ border: "unset", borderRadius: "unset" }}
                className="p-md-30"
              >
                <Card.Header
                  className=" pt-2 d-flex  justify-content-between align-items-center"
                  style={{ backgroundColor: "white" }}
                >
                  <p className="text-center">
                    Choose a delivery address and payment method to calculate
                    the delivery, handling and tax.{" "}
                  </p>
                </Card.Header>
                <Card.Header
                  className=" pt-4 "
                  style={{ backgroundColor: "white" }}
                >
                  <h5>Order Summary</h5>
                  <div className="  d-flex  justify-content-between align-items-center">
                    <span>ITEMS</span>
                    <span> 1</span>
                  </div>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={12}>
                      <div
                        style={{ color: "#189B62" }}
                        className="  d-flex  justify-content-between align-items-center"
                      >
                        <h5>Order Total:</h5>
                        <h5> NGN 12,000</h5>
                      </div>
                      <p className="mb-0 mt-3" style={{ color: "#1D71B8" }}>
                        Order totals includes VAT.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col
              style={{ backgroundColor: "#FAFAFA", padding: 20, marginTop: 60 }}
              xs={12}
              md={12}
            >
              <Card
                style={{ border: "unset", borderRadius: "unset" }}
                className="p-md-30"
              >
                <Card.Body>
                  <Row>
                    <Col className="mt-5" md={6}>
                      <InputGroup className="mb-3 d-flex flex-column justify-content-start align-items-start">
                        <h6 className="mb-1">Full name</h6>
                        <Form.Control
                          style={{ borderRadius: 5 }}
                          placeholder="Enter Name"
                          aria-describedby="basic-addon1"
                          className="w-80"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3 d-flex flex-column justify-content-start align-items-start">
                        <h6 className="mb-1">Email</h6>
                        <Form.Control
                          style={{ borderRadius: 5 }}
                          placeholder="Enter Email"
                          aria-describedby="basic-addon1"
                          className="w-80"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3 d-flex flex-column justify-content-start align-items-start">
                        <h6 className="mb-1">Address</h6>
                        <Form.Control
                          style={{ borderRadius: 5 }}
                          placeholder="Enter Address"
                          aria-describedby="basic-addon1"
                          className="w-80"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3 d-flex flex-column justify-content-start align-items-start">
                        <h6 className="mb-1">City</h6>
                        <Form.Control
                          style={{ borderRadius: 5 }}
                          placeholder="Enter City"
                          aria-describedby="basic-addon1"
                          className="w-80"
                        />
                      </InputGroup>
                      <div className="d-flex w-80 justify-content-between align-items-between">
                        <InputGroup className="mb-3 d-flex flex-column justify-content-start align-items-start">
                          <h6 className="mb-1">State</h6>
                          <Form.Control
                            style={{ width: "95%", borderRadius: 5 }}
                            placeholder="Enter State"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                        <InputGroup className="mb-3 d-flex flex-column justify-content-start align-items-start">
                          <h6 className="mb-1">Zipcode</h6>
                          <Form.Control
                            style={{ width: "95%", borderRadius: 5 }}
                            placeholder=" Zip code"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </div>
                    </Col>
                    <Col md={6}>
                      <h4 style={{ color: "#1D71B8" }}>PAYMENT</h4>
                      <h5 className="mb-3">Accepted Card</h5>
                      <Row>
                        <Col
                          className="d-flex  justify-content-center align-items-center"
                          xs={3}
                        >
                          <img
                            style={{ maxWidth: "100%" }}
                            src={require("../assets/masterGrey.png")}
                          />
                        </Col>
                        <Col xs={3}>
                          <img
                            style={{ maxWidth: "100%" }}
                            src={require("../assets/payStack.png")}
                          />
                        </Col>
                      </Row>
                      <InputGroup className="mb-3 d-flex flex-column justify-content-start align-items-start">
                        <h6 className="mb-1">Credit Card Number</h6>
                        <Form.Control
                          style={{ borderRadius: 5 }}
                          placeholder="Enter Card Number"
                          aria-describedby="basic-addon1"
                          className="w-80"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3 d-flex flex-column justify-content-start align-items-start">
                        <h6 className="mb-1">Exp Month</h6>
                        <Form.Control
                          style={{ borderRadius: 5 }}
                          placeholder="Enter Month"
                          aria-describedby="basic-addon1"
                          className="w-80"
                        />
                      </InputGroup>

                      <div className="d-flex w-80 justify-content-between align-items-between">
                        <InputGroup className="mb-3 d-flex flex-column justify-content-start align-items-start">
                          <h6 className="mb-1">Exp Year</h6>
                          <Form.Control
                            style={{ width: "95%", borderRadius: 5 }}
                            placeholder="Enter  Year"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                        <InputGroup className="mb-3 d-flex flex-column justify-content-start align-items-start">
                          <h6 className="mb-1">CVV</h6>
                          <Form.Control
                            style={{ width: "95%", borderRadius: 5 }}
                            placeholder=" CVV"
                            aria-describedby="basic-addon1"
                          />
                        </InputGroup>
                      </div>
                      <Button size="sm" className="checkout-btn w-80">
                        CHECKOUT{" "}
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Checkout;
