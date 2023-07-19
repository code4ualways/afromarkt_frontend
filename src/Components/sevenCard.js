import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Booster from "../assets/booster.png";
import NairaGrey from "../assets/NairaGrey.png";
import { COLORS } from "../consatants";
function SecondCard() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Card.Img
          style={{ height: "350", width: "300px", maxWidth: "100%" }}
          variant="top"
          src={Booster}
          className="m-auto mt-3 mb-3"
        />
      </div>
    </>
  );
}

export default SecondCard;
