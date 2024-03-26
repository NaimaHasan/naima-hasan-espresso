import React, { useState, useEffect } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { isFavorite, toggleFavorite } from "../../services/CallApi";

export const FavoriteHeart = ({ id, size, defaultColor }) => {
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  useEffect(() => {
    isFavorite(id)
      .then((data) => {
        setIsHeartFilled(data);
      })
      .catch((error) => {
        console.error("Failed to fetch recipes information:", error);
      });
  }, null);

  const handleHeartClick = () => {
    toggleFavorite(id);
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div
      style={{ padding: "15px", borderRadius: "50%" }}
      onClick={handleHeartClick}
      onMouseEnter={() => setIsHoveredHeart(true)}
      onMouseLeave={() => setIsHoveredHeart(false)}
    >
      {isHeartFilled ? (
        <HeartFill
          size={size}
          className={isHeartFilled ? "icon-hover" : ""}
          style={{ color: "red" }}
        />
      ) : (
        <Heart
          size={size}
          className={isHoveredHeart ? "icon-hover" : ""}
          style={{
            color: isHoveredHeart
              ? "red"
              : defaultColor === "white"
              ? "white"
              : "black",
          }}
        />
      )}
    </div>
  );
};
