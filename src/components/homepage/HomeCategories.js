import React from "react";
import "./HomeCategories.css";
import { Cake2, CupHot, CupStraw } from "react-bootstrap-icons";
export const HomeCategories = () => {
  const categories = {
    "Hot Coffee": CupHot,
    "Cold Coffee": CupStraw,
    "Desserts": Cake2,
  };
  return (
    <div className="category-banner">
      {Object.entries(categories).map(([key, IconComponent]) => (
        <div key={key}>
          <IconComponent size={40} className="category-icon" />
          <br />
          <div style={{fontSize: "13px", textAlign: "center"}}>{key}</div>
        </div>
      ))}
    </div>
  );
};
