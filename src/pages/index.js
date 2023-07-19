import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../Components/Card";
import SecondCard from "../Components/SecondCard";
import ThirdCard from "../Components/ThirdCard";
import ForthCard from "../Components/ForthCard";
import FifthCard from "../Components/FifthCard";
import SixCard from "../Components/SixCard";
import SevenCard from "../Components/sevenCard";
import Head from "../Components/Head";
import { COLORS } from "../consatants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../Components/Slider";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer/index";
import { Link } from "react-router-dom";
import Products from "../dummy/main.json";

function App() {
  return (
    <Container fluid="sm">
      <Row>
        <Navbar />
      </Row>
      <Row className="mb-3">
        <Col className=" d-none d-md-block" md={3}>
          <div
            className="d-flex flex-column justify-content-between"
            style={{
              backgroundColor: "#F3F3F3",
              paddingLeft: 35,
              paddingBlock: 19,
              height: "100%",
            }}
          >
            <Link
              to={"/category"}
              style={{ color: "black", textDecoration: "unset" }}
            >
              <h6
                style={{ color: "black", textDecoration: "unset" }}
                className="  ml-2"
              >
                Everything Leather
              </h6>
            </Link>
            <h6 className="  "> Household Items</h6>
            <h6 className=" "> Fashion & Accessories</h6>
            <h6 className=" "> Grocery Store</h6>
            <h6 className=" "> Food is Ready</h6>
            <h6 className=" "> Office and Home Furnitures</h6>
            <h6 className=" "> African Literature</h6>
            <h6 className=" "> Health & Beauty</h6>
            <h6 className=" "> Musical instruments</h6>
            <h6 className=" "> Art and Crafts</h6>
            <h6 className=" "> Other Categories</h6>
          </div>
        </Col>
        <Col md={9}>
          <SimpleSlider />
        </Col>
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Afromarkt Deals" />
        {Products?.map(
          (item, i) =>
            i < 5 && (
              <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
                <Card image={item?.url} />
              </Col>
            )
        )}
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Browse Other Categories" />
        {Products?.map(
          (item, i) =>
            i > 4 && (
              <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
                <SecondCard image={item?.url} />
              </Col>
            )
        )}
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="African Literature" />
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <ThirdCard />
        </Col>
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <ThirdCard />
        </Col>{" "}
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <ThirdCard />
        </Col>{" "}
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <ThirdCard />
        </Col>{" "}
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <ThirdCard />
        </Col>
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Our Services" />
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
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Men’s Top" />
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <FifthCard />
        </Col>
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <FifthCard />
        </Col>{" "}
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <FifthCard />
        </Col>{" "}
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <FifthCard />
        </Col>{" "}
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <FifthCard />
        </Col>
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Ankara Bags for Women" />
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <SixCard />
        </Col>
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <SixCard />
        </Col>{" "}
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <SixCard />
        </Col>{" "}
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <SixCard />
        </Col>{" "}
        <Col sm={6} xs={6} md={4} lg={3} className="col-xlg-5">
          <SixCard />
        </Col>
      </Row>
      <Row style={{ backgroundColor: COLORS.light }} className="pb-4">
        <Head title="Popular on Afromagic" />
        <Col md={12}>
          <img className="w-100" src={require("../assets/banner.png")} />
        </Col>
        <Col sm={6} xs={6} md={6} lg={3}>
          <SevenCard />
        </Col>
        <Col sm={6} xs={6} md={6} lg={3}>
          <SevenCard />
        </Col>{" "}
        <Col sm={6} xs={6} md={6} lg={3}>
          <SevenCard />
        </Col>{" "}
        <Col sm={6} xs={6} md={6} lg={3}>
          <SevenCard />
        </Col>{" "}
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
