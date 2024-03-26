import React from "react";
import "./MakeCoffeeIngredients.css";

export const MakeCoffeeIngredients = () => {
  return (
    <div style={{ margin: "150px 0px 0px 150px"}}>
      <div style={{fontSize: "22px"}}>What kind of coffee do you want?</div>
      <div style={{ display: "flex" }}>
        <div className="ingredient-button">Hot</div>
        <div className="ingredient-button">Cold</div>
      </div>
      <div style={{fontSize: "22px", padding: "30px 20px 0px 0px"}}>Pick your ingredients</div>
      <div style={{ display: "flex" }}>
        <div className="ingredient-button">Espresso</div>
        <div className="ingredient-button">Milk</div>
        <div className="ingredient-button">Cream</div>
        <div className="ingredient-button">Caramel</div>
        <div className="ingredient-button">Sugar</div>
      </div>
    </div>
  );
};
