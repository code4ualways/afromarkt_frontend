import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import Navbar from "../Components/navbar";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Footer from "../Components/footer";
import { GetAllProducts } from "../Redux/Slices/Products";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/Cart";

import Products from "../dummy/products.json";
import StarRateIcon from "@mui/icons-material/StarRate";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
function Category() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const QtyFunAdd = () => {
    setCount(count + 1);
  };
  const QtyFundecrease = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    dispatch(GetAllProducts());
    console.log(Products, "Products");
  }, []);
  return (
    <Container fluid="sm">
      <Row>
        <Navbar />
      </Row>
      <Row
        className="mb-3"
        style={{ width: "100%", margin: "auto", backgroundColor: "#FAFAFA" }}
      >
        <Col className="p-0 " style={{ overflow: "hidden" }} md={8}>
          <Row className="p-4  " style={{ height: "100%" }}>
            <Card style={{ border: "unset", borderRadius: "unset" }}>
              <Card.Header
                className=" pt-4 d-flex  justify-content-between align-items-center"
                style={{ backgroundColor: "white", fontWeight: "bold" }}
              >
                <h5>Shopping Cart</h5>
                <h5 style={{ marginRight: 40 }}>1 items </h5>
              </Card.Header>

              <Card.Body>
                <Row>
                  <Col className="mb-3" md={2}>
                    <div className=" m-auto d-flex p-3 justify-content-center align-items-center">
                      <img src={require("../assets/schoolbag.png")} />
                    </div>
                  </Col>
                  <Col md={5}>
                    <p style={{ color: "black" }}>
                      Brand Name:{" "}
                      <span style={{ color: "#1D71B8" }}>Mila Essentials</span>
                    </p>
                    <p style={{ color: "black" }}>
                      Brown Leather Bag for School, Laptop Backpack for Men and
                      Women
                    </p>

                    <div className="d-flex justify-content-start align-items-center">
                      <span>Stock Status:</span>

                      <span
                        className="mb-0 ml-3"
                        style={{ color: "#3AAA35", marginLeft: 10 }}
                      >
                        In Stock
                      </span>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                      <span>Color:</span>

                      <span
                        className="mb-0 ml-3"
                        style={{ marginLeft: 10, color: "black" }}
                      >
                        Dark Brown
                      </span>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                      <span>Rating:</span>
                      <div className="d-flex justify-content-start m-1 align-items-center">
                        <StarRateIcon style={{ color: "#FFB805" }} />
                        <StarRateIcon style={{ color: "#FFB805" }} />
                        <StarRateIcon style={{ color: "#FFB805" }} />
                        <StarRateIcon style={{ color: "#FFB805" }} />
                        <StarRateIcon style={{ color: "#D9D9D9" }} />
                      </div>
                      <span
                        className="mb-0 ml-3"
                        style={{ color: "#3AAA35", marginLeft: 10 }}
                      >
                        Ships to Nigeria
                      </span>
                    </div>
                  </Col>
                  <Col md={5}>
                    <Row>
                      <Col xs={6}>
                        <div className=" flex-column d-flex  justify-content-center align-items-center">
                          <p style={{ fontWeight: 500 }}>QUANTITY</p>
                          <div className=" f d-flex  justify-content-center align-items-center">
                            <button
                              className="btn btn-primary"
                              style={{
                                padding: "2px 10px",
                                borderRadius: 0,
                                background: "rgb(29, 113, 184)",
                              }}
                              onClick={count > 1 ? QtyFundecrease : null}
                            >
                              -
                            </button>
                            <input
                              value={count}
                              style={{
                                width: 40,
                                border: "unset",
                                textAlign: "center",
                              }}
                            />
                            <button
                              className="btn btn-primary"
                              style={{
                                padding: "2px 10px",
                                borderRadius: 0,
                                background: "rgb(29, 113, 184)",
                              }}
                              onClick={QtyFunAdd}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className=" flex-column d-flex  justify-content-center align-items-center">
                          <p style={{ fontWeight: 500 }}>Price</p>
                          <div className=" f d-flex  justify-content-center align-items-center">
                            NGN 12,000
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div
                  style={{ color: "grey" }}
                  className="  d-flex  justify-content-start align-items-center"
                >
                  <DeleteOutlinedIcon />
                  <span style={{ color: "#000" }} className="mb-0">
                    Remove
                  </span>
                </div>
                <hr />
                <div
                  className=" f d-flex  justify-content-start align-items-center"
                  style={{ color: "rgb(58, 170, 53)" }}
                >
                  <ChevronLeft style={{ color: "#1D71B8", marginInline: 5 }} />

                  <span>Continue shopping</span>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col className="p-0 " style={{ overflow: "hidden" }} md={4}>
          <Row className="p-4  " style={{}}>
            <Card style={{ border: "unset", borderRadius: "unset" }}>
              <Card.Header
                className=" pt-4 d-flex  justify-content-between align-items-center"
                style={{ backgroundColor: "white", fontWeight: "bold" }}
              >
                <h5>Order Summary </h5>
              </Card.Header>

              <Card.Body>
                <Row>
                  <Col md={12}>
                    <div className="  d-flex  justify-content-between align-items-center">
                      <h6>ITEM 1</h6>
                      <span>NGN 12,000</span>
                    </div>
                    <div>
                      <h6 className="m-0 mt-3 mb-1">SHIPPING</h6>
                      <p style={{ color: "#BABABA" }}>
                        Delivery fees not included
                      </p>
                    </div>
                    <div className="  d-flex  flex-column justify-content-between align-items-start">
                      <h6 className="mb-3">PROMO CODE</h6>
                      <input
                        placeholder="Enter your code"
                        className="mb-2 w-50 pt-1 pb-1"
                        style={{
                          color: "#CECECE",
                          border: "1px solid #CECECE",
                        }}
                      />
                      <Button
                        size="sm"
                        className="apply-btn"
                        style={{ backgroundColor: "#189B62" }}
                      >
                        APPLY{" "}
                      </Button>
                    </div>
                  </Col>
                </Row>
                <hr />
                <div className="  d-flex  justify-content-between align-items-center">
                  <h6>TOTAL COST </h6>
                  <h6>NGN 12,000</h6>
                </div>
                <Button size="sm" className="checkout-btn">
                  CHECKOUT{" "}
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Category;
