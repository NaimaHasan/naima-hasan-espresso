import React from "react";
import { ItemCard } from "./ItemCard";
import "./Item.css";

export const Item = ({ recipes }) => {
  return (
    <div>
      {recipes.length === 0 ? (
        <div
          style={{
            fontSize: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <p>There is no recipe to display!</p>
        </div>
      ) : (
        <div className="item-container row no-margin">
          {recipes &&
            recipes.map((recipe, index) => (
              <div
                key={index}
                className="no-padding col mb-4 d-flex justify-content-center align-item-center"
              >
                <ItemCard recipe={recipe} />
              </div>
            ))}

          <div className={`col-${12 - (recipes.length % 4) * 3} mb-4`} />
        </div>
      )}
    </div>
  );
};
