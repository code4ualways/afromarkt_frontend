import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplayspeed: 200,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          style={{ width: "100%" }}
          src={require("../../assets/slider01.png")}
        />
      </div>
      <div>
        <img
          style={{ width: "100%" }}
          src={require("../../assets/slider02.png")}
        />
      </div>
    </Slider>
  );
}
