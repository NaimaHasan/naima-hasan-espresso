import React from "react";
import { HomeCarouselCard } from "./HomeCarouselCard";
import "./HomeCarousel.css";
import {  ArrowLeftCircleFill, ArrowRightCircleFill } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const HomeCarousel = () => {
  const filler = [1, 2, 3, 4, 4, 4, 4, 4];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div style={{ margin: "10px 200px" }}>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        renderButtonGroupOutside={true}
        customLeftArrow={<ArrowLeftCircleFill size="40px" className="custom-arrow left-arrow"/>}
        customRightArrow={<ArrowRightCircleFill size="40px" className="custom-arrow right-arrow" />}
        itemClass="carousel-item-padding-40-px"
      >
        {filler.map((note, index) => (
          <div key={index} className="col mb-4 d-flex justify-content-center">
            <HomeCarouselCard />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
