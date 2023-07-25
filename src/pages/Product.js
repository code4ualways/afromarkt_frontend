import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navbar from "../Components/navbar";
import Card from "../Components/Card";
import Pagination from "../Components/pagination";
import ForthCard from "../Components/ForthCard";

import Footer from "../Components/footer";
import BreadCrumb from "../Components/BreadCrumb";
import { GetAllProducts } from "../Redux/Slices/Products";
import { useDispatch, useSelector } from "react-redux";
import Products from "../dummy/products.json";
import Productsmain from "../dummy/main.json";

import StarRateIcon from "@mui/icons-material/StarRate";
import { COLORS } from "../consatants";
import SecondCard from "../Components/SecondCard";
import Head from "../Components/Head";
import { Link, useParams } from "react-router-dom";
import { GetOneProducteverythingleatherHook } from "../api/OneProductQuery";
function Category() {
  const { id } = useParams();
  const [rating, setRatings] = useState([]);
  let ratingIterate = [];
  const { oneProduct } = useSelector((state) => state.oneProduct);
  const { data } = GetOneProducteverythingleatherHook({ id });
  useEffect(() => {
    console.log(oneProduct, "oneProduct ");

    if (parseInt(oneProduct?.rating?.split(".")[0]) > 0) {
      let parsedRate = parseInt(oneProduct?.rating?.split(".")[0]);

      for (var i = 0; i < parsedRate; i++) {
        ratingIterate.push(0);
      }
      setRatings(ratingIterate);
      console.log(ratingIterate, "ratingIterate");
    }
  }, [oneProduct]);
  return (
    <Container fluid="sm">
      <Row>
        <Navbar />
      </Row>
      <Row className="mb-3" style={{ width: "100%", margin: "auto" }}>
        <Col className="p-0 " style={{ overflow: "hidden" }} md={12}>
          <BreadCrumb
            links={["Everything Leather", "Leather Bag"]}
            back="Continue shopping"
            hideTite={true}
          />
          <Row className="p-4 mb-3 " style={{ backgroundColor: "#FAFAFA" }}>
            <Col className="mb-3" md={5}>
              <div className=" m-auto d-flex p-3 justify-content-center align-items-center">
                <img
                  style={{ border: "1px solid #D9D9D9", padding: 25 }}
                  // src={require("../assets/Bigschoolbag.png")}
                  src={`https://code123.pythonanywhere.com` + oneProduct?.image}
                />
              </div>
              <div className="w-50 m-auto d-flex mt-3 justify-content-start align-items-start">
                <img
                  style={{ width: 65 }}
                  src={require("../assets/schoolbag.png")}
                />
                <img
                  style={{ width: 65 }}
                  src={require("../assets/schoolbag.png")}
                />
              </div>
            </Col>
            <Col md={7} style={{ color: "#979797" }}>
              <p style={{ color: "black" }}>
                Brand Name:{" "}
                <span style={{ color: "#1D71B8" }}>{oneProduct?.brand}</span>
              </p>
              <h6 style={{ color: "black" }}>{oneProduct?.name}</h6>
              <div className="d-flex justify-content-start align-items-center">
                <span>Rating:</span>
                <div className="d-flex justify-content-start m-1 align-items-center">
                  {rating?.map((item) => {
                    return (
                      <StarRateIcon
                        style={{ color: "#FFB805", fontSize: 16 }}
                      />
                    );
                  })}
                  {/* {rating?.map((item, i) => {
                    if (rating.length < 5) {
                      return <StarRateIcon style={{ color: "#D9D9D9" }} />;
                    }
                  })} */}
                  {/* <StarRateIcon style={{ color: "#D9D9D9" }} />
                  <StarRateIcon style={{ color: "#D9D9D9" }} />
                  <StarRateIcon style={{ color: "#D9D9D9" }} />
                  <StarRateIcon style={{ color: "#D9D9D9" }} /> */}
                </div>
                <span
                  className="mb-0 ml-3"
                  style={{ color: "#3AAA35", marginLeft: 10 }}
                >
                  Ships to Nigeria
                </span>
              </div>
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
                <span
                  className="mb-0 ml-3"
                  style={{ color: "#3AAA35", marginTop: 10 }}
                >
                  Product Information
                </span>
              </div>
              <div
                style={{ color: "black" }}
                className="d-flex  mt-5 justify-content-start align-items-center"
              >
                <span>Price:</span>

                <span className="mb-0 ml-3" style={{ marginLeft: 5 }}>
                  {oneProduct?.price}
                </span>
              </div>
              <div
                style={{ color: "black" }}
                className="d-flex mt-2 justify-content-start align-items-center"
              >
                <span>List Price:</span>

                <span
                  className="mb-0 ml-3"
                  style={{ marginLeft: 5, color: "#979797" }}
                >
                  <del>NGN 24,000</del>
                </span>
                <span
                  className="mb-0 ml-3"
                  style={{
                    marginLeft: 10,
                    backgroundColor: "#DF2271",
                    color: "white",
                    padding: "0px 15px",
                  }}
                >
                  25% off{" "}
                </span>
              </div>
              <hr style={{ width: "600px" }} />
              <div>
                <Link to="/cart">
                  <Button size="sm" className="buy-btn">
                    Buy Now
                  </Button>
                </Link>

                <Button size="sm" className="sell-btn">
                  Add To Cart
                </Button>
              </div>
            </Col>
          </Row>
          <h5 className="padding-inline-md" style={{ color: "#1D71B8" }}>
            Products related to this item
          </h5>
          <Row
            style={{ backgroundColor: COLORS.light }}
            className="pb-4 padding-inline-md"
          >
            {Products?.map(
              (item, i) =>
                i < 5 && (
                  <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
                    <Card image={item?.url} />
                  </Col>
                )
            )}
          </Row>
          <h4
            className="pt-2 pb-2 padding-inline-md text-white mb-3 "
            style={{
              backgroundColor: COLORS.main,
              fontWeight: "600",
            }}
          >
            Browse Other Categories
          </h4>
          <Row
            style={{ backgroundColor: COLORS.light }}
            className="pb-4 padding-inline-md"
          >
            {Productsmain?.map(
              (item, i) =>
                i > 4 && (
                  <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
                    <SecondCard image={item?.url} />
                  </Col>
                )
            )}
          </Row>
          <h4
            className="pt-2 padding-inline-md pb-2 text-white mb-3 "
            style={{
              backgroundColor: COLORS.main,
              fontWeight: "600",
            }}
          >
            Our Services
          </h4>
          <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
            <Col sm={6} xs={6} md={4} lg={3}>
              <ForthCard />
            </Col>
            <Col sm={6} xs={6} md={4} lg={3}>
              <ForthCard />
            </Col>{" "}
            <Col sm={6} xs={6} md={4} lg={3}>
              <ForthCard />
            </Col>{" "}
            <Col sm={6} xs={6} md={4} lg={3}>
              <ForthCard />
            </Col>{" "}
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Category;
