import React, { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/homepage/hero.jpg";
import "./RecipeBanner.css";

export const RecipeBanner = () => {
  const [isHoveredHeart, setIsHoveredHeart] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  return (
    <div>
      <Card className="recipe-card">
        <Image src={heroImage} className="recipe-image" />
        <div className="recipe-heart">
          {isHeartFilled ? (
            <HeartFill
              size="22px"
              className={isHeartFilled ? "icon-hover" : ""}
              style={{ color: "red" }}
              onClick={handleHeartClick}
            />
          ) : (
            <Heart
              size="22px"
              className={isHoveredHeart ? "icon-hover" : ""}
              style={{ color: isHoveredHeart ? "red" : "black" }}
              onMouseEnter={() => setIsHoveredHeart(true)}
              onMouseLeave={() => setIsHoveredHeart(false)}
              onClick={handleHeartClick}
            />
          )}
        </div>
        <Card.Body style={{ fontSize: "22px", textAlign: "right" }}>
          Category: Hot Coffee
        </Card.Body>
      </Card>
      <div className="recipe-name">Cappuccino</div>
      <div className="recipe-quote">
        <h4>
          "Cappuccino, a classic Italian coffee creation, <br />
          Combines espresso, steamed milk, and frothy foam in harmonious
          relation. <br />
          Its rich flavor and creamy texture delight the senses with each sip's
          invitation."
        </h4>
      </div>
    </div>
  );
};
