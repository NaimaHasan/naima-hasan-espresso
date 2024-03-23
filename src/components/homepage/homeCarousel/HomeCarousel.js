import React from "react";
import { HomeCarouselCard } from "./HomeCarouselCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const HomeCarousel = () => {
  const filler = [1, 2, 3, 4,4,4,4,4];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div style={{ margin: "10px 200px", display: "flex", paddingTop: "40px"}}>
      {/* {filler.map((note, index) => (
        <div key={index} className="col mb-4 d-flex justify-content-center">
          <HomeCarouselCard />
        </div>
        
      ))}

      <div className={`col-${12 - (filler.length % 4) * 3} mb-4`} /> */}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //deviceType={props.deviceType}
        //dotListClass="custom-dot-list-style"
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
