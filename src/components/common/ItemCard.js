import React, { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import heroImage from "../../assets/homepage/hero.jpg";
import "./ItemCard.css"

export const ItemCard = () => {
    const [isHoveredHeart, setIsHoveredHeart] = useState(false);
    const [isHeartFilled, setIsHeartFilled] = useState(false);
  
    const handleHeartClick = () => {
      setIsHeartFilled(!isHeartFilled);
    };
  
  return (
    <div>
        <Card className="item-card">
            <Image src={heroImage} className="item-image" />
            <div className="item-heart">
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
            <Card.Body className="item-name">
              Cappucino
            </Card.Body>
          </Card>
    </div>
  )
}