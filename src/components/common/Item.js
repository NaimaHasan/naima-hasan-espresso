import React from "react";
import { ItemCard } from "./ItemCard";

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
        <div
          className="row"
          style={{ padding: "10px 200px", marginTop: "40px" }}
        >
          {recipes.map((recipe, index) => (
            <div key={index} className="col mb-4 d-flex justify-content-center">
              <ItemCard recipe={recipe} />
            </div>
          ))}

          <div className={`col-${12 - (recipes.length % 4) * 3} mb-4`} />
        </div>
      )}
    </div>
  );
};
