import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { COLORS } from "../../consatants";

function index() {
  return (
    <>
      <Row className="d-flec justify-content-center mt-5 mb-5 align-items-center flex-column">
        <h6 className="text-center mb-2"> See personalized recommendations</h6>
        <div className="btn btn-signIn">Sign In</div>
        <p className="text-center mt-2 mb-2">
          New Customer? <span style={{ color: "#1D71B8" }}>Start here.</span>
        </p>
      </Row>
      <footer
        style={{
          backgroundColor: COLORS.main,
          paddingTop: 30,
          paddingBottom: 20,
        }}
      >
        <Row className="m-3">
          <Col sm={6} lg={3}>
            <h4 className="text-white m-2">Afromarkt</h4>
            <h6 className="text-white mt-3 m-2">About Us</h6>
            <h6 className="text-white mt-3 m-2">Contact Us</h6>
            <h6 className="text-white mt-3 m-2">Our Blog</h6>
            <h6 className="text-white mt-3 m-2">Pay for my order</h6>
            <h6 className="text-white mt-3 m-2">Afromakt Delivery</h6>
            <h6 className="text-white mt-3 m-2"> Payment Gateways</h6>
          </Col>
          <Col sm={6} lg={3}>
            <h4 className="text-white m-2">Become a Afromarkter</h4>
            <h6 className="text-white m-2"> Sell Products on Afromarkt</h6>
            <h6 className="text-white m-2"> Become an Affiliate</h6>
          </Col>
          <Col sm={6} lg={3}>
            <h4 className="text-white m-2">Support</h4>
            <h6 className="text-white m-2">Terms & Conditions</h6>
            <h6 className="text-white m-2">Privacy Policy</h6>
            <h6 className="text-white m-2"> Return Policy</h6>
            <h6 className="text-white m-2">FAQ </h6>
          </Col>
          <Col sm={6} lg={3}>
            <h4 className="text-white m-2">Stay Connected</h4>
            <Row className="justify-content-center align-items-center">
              <Col sm={3}>
                <img src={require("../../assets/Facebook.png")} />
              </Col>
              <Col sm={3}>
                <img src={require("../../assets/Instagram.png")} />
              </Col>
              <Col sm={3}>
                <img src={require("../../assets/Twitter.png")} />
              </Col>
              <Col sm={3}>
                <img src={require("../../assets/LinkedIn.png")} />
              </Col>
            </Row>
          </Col>
          <Col md={12} lg={8}>
            <Row className="justify-content-center align-items-center">
              <Col sm={3}>
                <img
                  style={{ maxWidth: "100%" }}
                  src={require("../../assets/master.png")}
                />
              </Col>
              <Col sm={3}>
                <img
                  style={{ maxWidth: "100%" }}
                  src={require("../../assets/pay.png")}
                />
              </Col>
              <Col sm={3}>
                <img
                  style={{ maxWidth: "100%" }}
                  src={require("../../assets/paypal.png")}
                />
              </Col>
              <Col sm={3}>
                <img
                  style={{ maxWidth: "100%" }}
                  src={require("../../assets/visa.png")}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default index;
