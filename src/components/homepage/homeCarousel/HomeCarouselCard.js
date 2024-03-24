import React, { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heroImage from "../../../assets/homepage/hero.jpg";
import "./HomeCarouselCard.css";
import { Link } from "react-router-dom";

export const HomeCarouselCard = ({ id, title, imageUrl }) => {
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div>
      <Card className="carousel-card" style={{ backgroundColor: "#e0d9c7" }}>
        <Link to={"/recipe"} style={{ textDecoration: "none", color: "black" }}>
          <div>
            <Image src={imageUrl} className="carousel-card-image" rounded />
            <div className="gradient-overlay"></div>
            <Card.Body>{title}</Card.Body>
          </div>
        </Link>
        <div className="carousel-card-heart">
          {isHeartFilled ? (
            <HeartFill
              size="18px"
              className={isHeartFilled ? "icon-hover" : ""}
              style={{ color: "red" }}
              onClick={handleHeartClick}
            />
          ) : (
            <Heart
              size="18px"
              className={isHoveredHeart ? "icon-hover" : ""}
              style={{ color: isHoveredHeart ? "red" : "white" }}
              onMouseEnter={() => setIsHoveredHeart(true)}
              onMouseLeave={() => setIsHoveredHeart(false)}
              onClick={handleHeartClick}
            />
          )}
        </div>
      </Card>
    </div>
  );
};
