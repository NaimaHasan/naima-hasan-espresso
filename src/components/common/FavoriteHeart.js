import React, { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";

export const FavoriteHeart = ({size, defaultColor}) => {
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div>
      {isHeartFilled ? (
        <HeartFill
          size={size}
          className={isHeartFilled ? "icon-hover" : ""}
          style={{ color: "red" }}
          onClick={handleHeartClick}
        />
      ) : (
        <Heart
          size={size}
          className={isHoveredHeart ? "icon-hover" : ""}
          style={{ color: isHoveredHeart ? "red" : defaultColor === "white"? "white" : "black" }}
          onMouseEnter={() => setIsHoveredHeart(true)}
          onMouseLeave={() => setIsHoveredHeart(false)}
          onClick={handleHeartClick}
        />
      )}
    </div>
  );
};
