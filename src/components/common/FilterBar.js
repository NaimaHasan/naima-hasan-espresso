import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./FilterBar.css";

export const FilterBar = ({ filter, setFilter }) => {
  const filterOptions = ["Hot Coffee", "Cold Coffee", "Dessert", "All"];
  const [isHoveredButton, setHoveredButton] = useState(null);
  return (
    <div className="filter-container">
      {filterOptions.map((option, index) => (
        <div key={index} className="filter-options">
          <Button
            style={{
              backgroundColor:
                option === filter || isHoveredButton === option
                  ? "#575040"
                  : "#999",
            }}
            className="filter-button"
            onClick={() => setFilter(option)}
            onMouseEnter={() => setHoveredButton(option)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            {option}
          </Button>
        </div>
      ))}
    </div>
  );
};
