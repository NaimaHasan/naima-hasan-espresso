import React from "react";
import { MakeCoffeeRecipeCard } from "./MakeCoffeeRecipeCard";
import "./MakeCoffeeRecipe.css";

export const MakeCoffeeRecipe = ({ recipes }) => {
  return (
    <div>
      <div className="make-coffee-recipe-container row" style={{margin: "0px"}}>
        {recipes &&
          recipes.map((recipe, index) => (
            <div key={index} className="col mb-4 d-flex justify-content-center">
              <MakeCoffeeRecipeCard recipe={recipe} />
            </div>
          ))}

        <div className={`col-${12 - (recipes.length % 4) * 3} mb-4`} />
      </div>
    </div>
  );
};
