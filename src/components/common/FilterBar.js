import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const FilterBar = ({filter, setFilter}) => {
  const filterOptions = [
    "Hot Coffee",
    "Cold Coffee",
    "Dessert",
    "All",
  ];

  return (
    <div
      style={{alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "170px"}}
    >
          {filterOptions.map((option, index) => (
            <div key={index} style={{ paddingRight: "25px", paddingBottom: "10px", flex: "0 0 auto" }}>
              <Button
                style={{
                  fontSize: "15px",
                  borderRadius: "25px",
                  backgroundColor: option === filter ? "#575040" : "#999",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                }}
                onClick={() => {
                  setFilter(option);
                }}
              >
                {option}
              </Button>
            </div>
          ))}
        </div>
      
  );
};
