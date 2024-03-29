import React from "react";
import "./MakeCoffeeIngredients.css";

export const MakeCoffeeIngredients = ({
  isIngredientSelected,
  toggleIngredient,
  setSugarSelected,
  sugarSelected,
}) => {
  const ingredientsList = ["Espresso", "Milk", "Caramel", "Cream"];
  return (
    <div>
      <div className="pick-ingredient-heading">Pick your ingredients</div>
      <div className="ingredient-container">
        {ingredientsList.map((ingredient, index) => (
          <div
            key={index}
            className={
              isIngredientSelected(ingredient)
                ? "ingredient-button ingredient-button-selected"
                : "ingredient-button"
            }
            onClick={() => toggleIngredient(ingredient)}
          >
            {ingredient}
          </div>
        ))}

        <div
          className={
            sugarSelected
              ? "ingredient-button ingredient-button-selected"
              : "ingredient-button"
          }
          onClick={() => setSugarSelected(!sugarSelected)}
        >
          Sugar
        </div>
      </div>
    </div>
  );
};
