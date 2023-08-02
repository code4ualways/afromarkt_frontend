import React from "react";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";
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
                    <Col md={1}></Col>

                    <Col md={10}>
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
                          Create Account
                        </div>
                        <img src={require("../assets/logo.png")} />
                      </div>
                      <div
                        style={{ fontWeight: "bold" }}
                        variant="outline-secondary font-bold mt-2"
                      >
                        Your name
                      </div>
                      <Form.Control
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                      />
                      <div
                        style={{ fontWeight: "bold", marginTop: 25 }}
                        variant="outline-secondary font-bold "
                      >
                        Mobile number or email
                      </div>
                      <Form.Control
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                      />
                      <div
                        style={{ fontWeight: "bold", marginTop: 15 }}
                        variant="outline-secondary font-bold  mt-3"
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
                          textAlign: "left",
                          marginTop: 10,
                        }}
                      >
                        <img
                          style={{ marginRight: 5 }}
                          src={require("../assets/Info.png")}
                        />
                        Password must be at least 6 characters
                      </div>
                      <div
                        style={{ fontWeight: "bold", marginTop: 15 }}
                        variant="outline-secondary font-bold  mt-3"
                      >
                        Re-enter password
                      </div>
                      <Form.Control
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                      />
                      <Button
                        size="sm"
                        style={{ backgroundColor: "#FFB805", borderRadius: 4 }}
                        className="sell-btn w-100 mt-3"
                      >
                        Continue{" "}
                      </Button>
                      <p className="text-center mb-2 mt-2">or</p>

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
                    <Col md={1}></Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col
              md={12}
              className=" mt-3  d-flex  justify-content-center align-items-center"
            >
              <p
                className="mb-0 text-center"
                style={{ marginInline: 5, color: "#979797" }}
              >
                You already have an account?{" "}
                <span style={{ color: "#1D71B8" }}>
                  <Link style={{ textDecoration: "unset" }} to="/login">
                    Sign in
                  </Link>
                </span>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
