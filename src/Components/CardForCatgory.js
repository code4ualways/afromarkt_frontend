import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import product from "../assets/schoolbag.png";
import N from "../assets/Naira.png";
import NairaGrey from "../assets/NairaGrey.png";
import { COLORS } from "../consatants";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/Cart";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CardC({ title, ship, image, item }) {
  const [added, setAdded] = useState(false);

  const Dispatch = useDispatch();
  const AddToCart = () => {
    Dispatch(addToCart());
    toast("Item Added To Cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setAdded(true);
  };
  return (
    <Card style={{ border: "unset", margin: 20, padding: 10 }}>
      <div
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "100px",
          backgroundColor: COLORS.red,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          padding: "10px",
          fontWeight: "bold",
          position: "absolute",
          right: "10px",
          top: "20px",
        }}
      >
        -10%
      </div>
      <Link to={`/product/${item?._id}`} style={{ textDecoration: "unset" }}>
        <Card.Img
          style={{ height: "124px", width: "99px" }}
          variant="top"
          src={`https://code123.pythonanywhere.com` + item?.image}
          className="m-auto mt-3 mb-3"
        />
        <div className="d-flex justify-content-center">
          <p
            style={{
              backgroundColor: "#4D2E2B",
              width: 10,
              height: 10,
              borderRadius: 100,
              marginInline: 3,
            }}
          ></p>
          <p
            style={{
              backgroundColor: "black",
              width: 10,
              height: 10,
              borderRadius: 100,
              marginInline: 3,
            }}
          ></p>
          <p
            style={{
              backgroundColor: "#B05E2B",
              width: 10,
              height: 10,
              borderRadius: 100,
              marginInline: 3,
            }}
          ></p>
        </div>
      </Link>

      <Card.Body>
        <Card.Text style={{ fontSize: "12px" }} className="mb-2">
          {item?.name ? item?.name : "Mini Crossbody Tote Bag"}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Card.Text
              className="mb-0"
              style={{ fontSize: "12px", fontWeight: "bold" }}
            >
              <img src={N} />
              {item?.price && item?.price}
            </Card.Text>
            <del style={{ color: "grey" }}>
              <Card.Text
                style={{
                  fontSize: "12px",
                  color: COLORS.darkgrey,
                  lineHeight: 1,
                }}
              >
                <img src={NairaGrey} />
                24,750
              </Card.Text>
            </del>
          </div>
          <div>
            <Button
              size="sm"
              style={{
                border: "unset",
                fontSize: "14px",
                backgroundColor: COLORS.yellow,
                color: "black",
              }}
              onClick={AddToCart}
            >
              {/* {added ? "Added " : "Add To Cart"} */}
              Add To Cart
            </Button>
          </div>
        </div>
        <p
          style={{ fontSize: 10 }}
          className="text-success mt-2 mb-0 text-small"
        >
          {ship && ship}
        </p>
      </Card.Body>
    </Card>
  );
}

export default CardC;
