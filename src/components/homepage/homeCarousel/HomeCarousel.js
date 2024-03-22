import React from "react";
import { HomeCarouselCard } from "./HomeCarouselCard";

export const HomeCarousel = () => {
    const filler = [1,2,3,4];
  return (
    <div className="row" style={{margin: "50px 200px"}}>
      {filler.map((note, index) => (
        <div key={index} className="col mb-4 d-flex justify-content-center">
          <HomeCarouselCard/>
        </div>
      ))}

      <div className={`col-${12 - (filler.length % 4) * 3} mb-4`} />
    </div>
  );
};
