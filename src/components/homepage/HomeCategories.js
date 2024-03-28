import React, { useState } from "react";
import "./HomeCategories.css";
import { Cake2, CupHot, CupStraw, Cup } from "react-bootstrap-icons";

export const HomeCategories = ({ filter, setFilter }) => {
  const categories = {
    "Hot Coffee": CupHot,
    "Cold Coffee": CupStraw,
    "Dessert": Cake2,
    "All": Cup,
  };

  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="category-banner">
      {Object.entries(categories).map(([key, IconComponent]) => (
        <div
          key={key}
          onMouseEnter={() => setHoveredCategory(key)}
          onMouseLeave={() => setHoveredCategory(null)}
          onClick={() => setFilter(key)}
        >
          <IconComponent
            className="category-icon"
            style={{
              color: key === filter || hoveredCategory === key ? "#575040" : "#999",
            }}
          />
          <br />
          <div className="category-icon-text">{key}</div>
        </div>
      ))}
    </div>
  );
};
