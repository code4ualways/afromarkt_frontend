import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import product from "../assets/bag.png";
import N from "../assets/Naira.png";
import NairaGrey from "../assets/NairaGrey.png";
import { COLORS } from "../consatants";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/Cart";
import { useState } from "react";

function CardC({ title, ship }) {
  const [added, setAdded] = useState(false);

  const Dispatch = useDispatch();
  const AddToCart = () => {
    Dispatch(addToCart());
    setAdded(true);
  };
  return (
    <Card style={{ border: "unset", marginBlock: 10 }}>
      <Card.Img
        style={{ height: "150px", width: "150px", maxWidth: "100%" }}
        variant="top"
        src={product}
        className="m-auto mt-3 mb-3"
      />
      <Card.Body>
        <Card.Text style={{ fontSize: "12px" }} className="mb-2">
          Mini Crossbody Tote Bag
        </Card.Text>
        <div className="d-flex flex-column justify-content-start align-items-start">
          <div>
            <Card.Text
              className="mb-0"
              style={{ fontSize: "12px", fontWeight: "bold" }}
            >
              <img src={N} />
              22,500
            </Card.Text>
          </div>
          <div>
            <Button
              size="sm"
              style={{
                border: "unset",
                fontSize: "14px",
                backgroundColor: added ? "green" : COLORS.yellow,
                color: added ? "white" : "black",
                margin: "5px 0px",
              }}
              onClick={AddToCart}
            >
              {added ? "Added " : "Add To Cart"}{" "}
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardC;
