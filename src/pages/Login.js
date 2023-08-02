import React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CopyrightIcon from "@mui/icons-material/Copyright";
function Login() {
  return (
    <Container>
      <Row
        className="p-4 d-flex  justify-content-center align-items-center "
        style={{ height: "100%" }}
      >
        <Col md={6}>
          <Row>
            <Col md={12}>
              <Card style={{ borderRadius: "unset" }}>
                <Card.Body>
                  <Row>
                    <Col md={2}></Col>

                    <Col md={8}>
                      <div
                        className="  d-flex  justify-content-between align-items-center"
                        md={12}
                      >
                        <div
                          style={{
                            fontWeight: "bold",
                            fontSize: 20,
                          }}
                        >
                          Sign in
                        </div>
                        <img src={require("../assets/logo.png")} />
                      </div>
                      <div
                        style={{ fontWeight: "bold" }}
                        variant="outline-secondary font-bold mt-2"
                      >
                        Email or mobile number
                      </div>
                      <Form.Control
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                      />
                      <div
                        style={{ fontWeight: "bold", marginTop: 15 }}
                        variant="outline-secondary font-bold "
                      >
                        Password
                      </div>
                      <Form.Control
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                      />
                      <div
                        style={{
                          color: "#979797",
                          fontSize: 12,
                          textAlign: "right",
                          marginTop: 10,
                        }}
                      >
                        Forgot Password?
                      </div>
                      <Button
                        size="sm"
                        style={{ backgroundColor: "#FFB805", borderRadius: 4 }}
                        className="sell-btn w-100 mt-3"
                      >
                        Sign In{" "}
                      </Button>
                      <p className="text-center mb-2 mt-2">or</p>
                      <Row>
                        <Col xs={2}></Col>
                        <Col
                          xs={4}
                          className="  d-flex  justify-content-center align-items-center"
                        >
                          <img
                            className="m-2"
                            src={require("../assets/Google.png")}
                          />
                          <p className="mb-0 ">Google</p>
                        </Col>
                        <Col
                          xs={4}
                          className="  d-flex  justify-content-center align-items-center"
                        >
                          <img
                            className="m-2"
                            src={require("../assets/Facebook (1).png")}
                          />
                          <p className="mb-0 ">Facebook</p>
                        </Col>
                        <Col xs={2}></Col>
                      </Row>
                      <p className=" mb-2 mt-3">
                        By continuing, you agree to Afrimarkt’s <br />
                        <span style={{ color: "#1D71B8" }}>
                          Conditions of Use and Privacy Notice.
                        </span>
                      </p>
                      <p>
                        <span style={{ color: "#1D71B8" }}>Need Help?</span>
                      </p>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col
              md={12}
              className="  d-flex  justify-content-center align-items-center"
            >
              <hr style={{ width: "32%" }} />
              <p
                className="mb-0 text-center"
                style={{ marginInline: 5, width: "36%", color: "#979797" }}
              >
                New to Afromarkt?
              </p>
              <hr style={{ width: "32%" }} />
            </Col>

            <Col md={12}>
              <Card style={{ borderRadius: "unset", color: "#979797" }}>
                <Card.Body>
                  <p className="text-center mb-0">
                    Create your Afromarkt account
                  </p>
                </Card.Body>
              </Card>
              <div
                style={{ color: "#979797" }}
                className=" mt-2 d-flex  justify-content-center align-items-center"
              >
                <CopyrightIcon style={{ color: "#979797", fontSize: 16 }} />
                <span>2023 , </span>
                <span>Afromarkt.com</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
