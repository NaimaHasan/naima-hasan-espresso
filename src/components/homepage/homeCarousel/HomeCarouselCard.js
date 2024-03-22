import React, { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heroImage from "../../../assets/homepage/hero.jpg";
import "./HomeCarouselCard.css";

export const HomeCarouselCard = () => {
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div>
      <Card className="carousel-card" style={{ backgroundColor: "#e0d9c7" }}>
      <Image src={heroImage} className="carousel-card-image" />
        <div className="carousel-card-heart">
          {isHeartFilled ? (
            <HeartFill
              className={isHeartFilled ? "icon-hover" : ""}
              style={{ color: "red" }}
              onClick={handleHeartClick}
            />
          ) : (
            <Heart
              className={isHoveredHeart ? "icon-hover" : ""}
              style={{ color: isHoveredHeart ? "red" : "white" }}
              onMouseEnter={() => setIsHoveredHeart(true)}
              onMouseLeave={() => setIsHoveredHeart(false)}
              onClick={handleHeartClick}
            />
          )}
        </div>
        <Card.Body>
          <Card.Title>Title</Card.Title>

          <Card.Text>
            <h6>Description</h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
