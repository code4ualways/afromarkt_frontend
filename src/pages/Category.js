import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../Components/navbar";
import Card from "../Components/CardForCatgory";
import Form from "react-bootstrap/Form";
import Pagination from "../Components/pagination";
import InputGroup from "react-bootstrap/InputGroup";
import { Search } from "react-bootstrap-icons";
import Footer from "../Components/footer";
import BreadCrumb from "../Components/BreadCrumb";
import { GetAllProducts } from "../Redux/Slices/Products";
import { useDispatch } from "react-redux";
import Products from "../dummy/products.json";
function Category() {
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
        <Col className=" d-none d-sm-block" md={3}>
          <BreadCrumb />

          <div
            style={{
              backgroundColor: "#F3F3F3",
              paddingLeft: 35,
              paddingBlock: 19,
            }}
          >
            <Form>
              {[
                "Bags and Handbags",
                "Wallets and Cardholders",
                "Belts",
                "Shoes and Boots",
                "Jackets and Coats",
                "Accessories",
                "Travel and Luggage",
                "Home Decor",
                "Tech Accessories",
              ].map((title, i) => (
                <div key={`reverse-radio`} className="mb-3">
                  <h6>{title}</h6>
                  <Form.Check id={`check-api-${i}`} type={"radio"}>
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>Tote bags</Form.Check.Label>
                  </Form.Check>
                  <Form.Check id={`check-api-${i}`} type="radio">
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>Tote bags</Form.Check.Label>
                  </Form.Check>
                  <Form.Check id={`check-api-${i}`} type="radio">
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>Tote bags</Form.Check.Label>
                  </Form.Check>
                  <Form.Check id={`check-api-${i}`} type="radio">
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>Tote bags</Form.Check.Label>
                  </Form.Check>
                  <Form.Check id={`check-api-${i}`} type="radio">
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>Tote bags</Form.Check.Label>
                  </Form.Check>
                </div>
              ))}
              <div>
                <h6 style={{ fontWeight: "bold" }}>Deals and Discount</h6>
                <p>All Discount</p>
                <p>Today’s Deal</p>
              </div>
              <div>
                <h6
                  className="d-flex justify-content-start align-items-center"
                  style={{ fontWeight: "bold" }}
                >
                  Price In{" "}
                  <img
                    style={{ marginInline: 5 }}
                    src={require("../assets/NIcon.png")}
                  />
                </h6>
                <div className="d-flex justify-content-start align-items-center">
                  <input style={{ width: 50, height: 35 }} type="text" />
                  <span style={{ fontWeight: "bold", marginInline: 20 }}>
                    To
                  </span>
                  <input style={{ width: 50, height: 35 }} type="text" />
                </div>
              </div>
              <div>
                <h6
                  className="d-flex mt-3 justify-content-start align-items-center"
                  style={{ fontWeight: "bold" }}
                >
                  Brand
                </h6>
                <div className="d-flex justify-content-start w-80 align-items-center">
                  <InputGroup>
                    {/* <InputGroup.Text>
                      <Search />
                    </InputGroup.Text> */}
                    <Form.Control
                      style={{ color: "grey" }}
                      type="text"
                      placeholder="Search "
                    />
                  </InputGroup>{" "}
                </div>
                <div key={`reverse-radio`} className="mb-3 mt-3">
                  <Form.Check id={`check-api-`} type="radio">
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>Tote bags</Form.Check.Label>
                  </Form.Check>
                  <Form.Check id={`check-api-`} type="radio">
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>Tote bags</Form.Check.Label>
                  </Form.Check>
                  <Form.Check id={`check-api-`} type="radio">
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>Tote bags</Form.Check.Label>
                  </Form.Check>
                </div>
              </div>
              <div>
                <h6
                  className="d-flex mt-3 justify-content-start align-items-center"
                  style={{ fontWeight: "bold" }}
                >
                  Size
                </h6>
                <div
                  style={{ width: "80%" }}
                  className="d-flex justify-content-start w-80 align-items-center"
                >
                  <InputGroup>
                    {/* <InputGroup.Text>
                      <Search />
                    </InputGroup.Text> */}
                    <Form.Control
                      style={{ color: "grey" }}
                      type="text"
                      placeholder="Search "
                    />
                  </InputGroup>{" "}
                </div>
                <h6
                  className="d-flex mt-3 justify-content-start align-items-center"
                  style={{ fontWeight: "bold" }}
                >
                  Shipped From
                </h6>
                <div key={`reverse-radio`} className="mb-3 mt-3">
                  <Form.Check id={`check-api-`} type="radio">
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>Tote bags</Form.Check.Label>
                  </Form.Check>
                  <Form.Check id={`check-api-`} type="radio">
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>Tote bags</Form.Check.Label>
                  </Form.Check>
                  <Form.Check id={`check-api-`} type="radio">
                    <Form.Check.Input type="radio" />
                    <Form.Check.Label>Tote bags</Form.Check.Label>
                  </Form.Check>
                </div>
              </div>
              <div>
                <h6 style={{ fontWeight: "bold", color: "#1D71B8" }}>
                  Help & Settings
                </h6>
                <p>Your Account</p>
                <p>Customer Services</p>
                <p>Sign in</p>
              </div>
            </Form>
          </div>
        </Col>
        <Col className="p-0 " style={{ overflow: "hidden" }} md={9}>
          <div
            className="d-flex justify-content-between align-items-center p-3 mb-3"
            style={{ border: "1px solid #D9D9D9", color: "#979797" }}
          >
            <p className="mb-0">
              1-12 of over 28,000 results for{" "}
              <span className="text-success">“Leather Products”</span>{" "}
            </p>
            <p className="mb-0">Sorted By : Featured</p>
          </div>
          <img
            style={{ width: "100%" }}
            src={require("../assets/categoryBanner.png")}
          />
          <Row className="p-4 mb-3 " style={{ backgroundColor: "#FAFAFA" }}>
            {Products?.map(
              (item, i) =>
                i < 3 && (
                  <Col md={4} xs={6} sm={6}>
                    {" "}
                    <Card
                      image={item?.url}
                      ship="Ships to Nigeria"
                      title="Brown Leather Bag for School, Laptop Backpack for Men and Women"
                    />
                  </Col>
                )
            )}
          </Row>
          <Row className="p-4 mb-3" style={{ backgroundColor: "#FAFAFA" }}>
            {Products?.map((item, i) =>
              i > 2 && i < 6 ? (
                <Col md={4} xs={6} sm={6}>
                  {" "}
                  <Card
                    image={item?.url}
                    ship="Ships to Nigeria"
                    title="Brown Leather Bag for School, Laptop Backpack for Men and Women"
                  />
                </Col>
              ) : null
            )}
          </Row>
          <Row className="p-4 mb-3" style={{ backgroundColor: "#FAFAFA" }}>
            {Products?.map(
              (item, i) =>
                i < 9 &&
                i > 5 && (
                  <Col md={4} xs={6} sm={6}>
                    {" "}
                    <Card
                      image={item?.url}
                      ship="Ships to Nigeria"
                      title="Brown Leather Bag for School, Laptop Backpack for Men and Women"
                    />
                  </Col>
                )
            )}
          </Row>
          <Row className="p-4 mb-3" style={{ backgroundColor: "#FAFAFA" }}>
            {Products?.map(
              (item, i) =>
                i < 9 &&
                i > 5 && (
                  <Col md={4} xs={6} sm={6}>
                    {" "}
                    <Card
                      image={item?.url}
                      ship="Ships to Nigeria"
                      title="Brown Leather Bag for School, Laptop Backpack for Men and Women"
                    />
                  </Col>
                )
            )}
          </Row>{" "}
          <Row className="p-4 mb-3" style={{ backgroundColor: "#FAFAFA" }}>
            {Products?.map(
              (item, i) =>
                i < 9 &&
                i > 5 && (
                  <Col md={4} xs={6} sm={6}>
                    {" "}
                    <Card
                      image={item?.url}
                      ship="Ships to Nigeria"
                      title="Brown Leather Bag for School, Laptop Backpack for Men and Women"
                    />
                  </Col>
                )
            )}
          </Row>{" "}
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Pagination />
            </Col>
            <Col md={1}></Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Category;
