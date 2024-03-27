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
  return (
    <div className="category-banner">
      {Object.entries(categories).map(([key, IconComponent]) => (
        <div
          key={key}
          onClick={() => {
            setFilter(key);
          }}
        >
          <IconComponent size={40} className="category-icon" style={{color: key === filter ? "#575040" : "#999"}}/>
          <br />
          <div style={{ fontSize: "13px", textAlign: "center" }}>{key}</div>
        </div>
      ))}
    </div>
  );
};
