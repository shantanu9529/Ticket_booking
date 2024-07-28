import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Slider() {
  return (
    <div
      className="mx-auto w-75 "
      style={{ display: "block", padding: 30 }}
    >
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block slider "
            src="./movie_images/offer_4.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block slider "
            src="./movie_images/offer_5.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
