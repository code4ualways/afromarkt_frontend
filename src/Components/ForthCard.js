import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Car from "../assets/Car_repair.png";
import NairaGrey from "../assets/NairaGrey.png";
import { COLORS } from "../consatants";
function SecondCard() {
  return (
    <>
      <Card
        className="p-1 pb-0 mt-2 mb-3"
        style={{ border: "unset", background: "transparent" }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <Card.Img
            style={{ height: "215px", width: "295px", maxWidth: "100%" }}
            variant="top"
            src={Car}
            className="m-auto mt-3 mb-3"
          />
        </div>
      </Card>
    </>
  );
}

export default SecondCard;
