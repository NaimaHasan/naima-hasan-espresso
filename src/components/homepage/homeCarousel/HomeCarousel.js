import React, { useEffect, useState } from "react";
import { HomeCarouselCard } from "./HomeCarouselCard";
import { Link } from "react-router-dom";
import "./HomeCarousel.css";
import {
  ChevronLeft,
  ChevronRight
} from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const HomeCarousel = ({ recipes }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1724 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1724, min: 1324 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    minitablet: {
      breakpoint: { max: 1324, min: 864 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 864, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <div>
        <ChevronLeft
          className="custom-arrow left-arrow"
          onClick={previous}
        />
        <ChevronRight
          className="custom-arrow right-arrow"
          onClick={next}
        />
      </div>
    );
  };

  return (
    <div>
      <div className="carousel-heading">
        <div className="carousel-heading-text">Available Recipes</div>
        <Link to={"/allRecipes"} style={{ color: "black" }}>
          <div className="carousel-see-all">See all</div>
        </Link>
      </div>
      <div className="carousel-container">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          itemClass="carousel-item-padding-40-px"
          arrows={false}
          renderButtonGroupOutside
          customButtonGroup={<CustomButtonGroup />}
        >
          {recipes.map((recipe, index) => (
            <div key={index} className="col mb-4 d-flex justify-content-center">
              <HomeCarouselCard recipe={recipe} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
