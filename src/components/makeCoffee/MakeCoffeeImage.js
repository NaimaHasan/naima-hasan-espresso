import backgroundImage from "../../assets/makeCoffee/background.png";
import foregroundImage from "../../assets/makeCoffee/foreground.png";
import ice from "../../assets/makeCoffee/ice.png";
import sugar from "../../assets/makeCoffee/sugar.png";
import smoke from "../../assets/makeCoffee/smoke.png";

import bottomCaramel from "../../assets/makeCoffee/bottom-caramel.png";
import bottomCream from "../../assets/makeCoffee/bottom-cream.png";
import bottomEspresso from "../../assets/makeCoffee/bottom-espresso.png";
import bottomMilk from "../../assets/makeCoffee/bottom-milk.png";

import mid1Caramel from "../../assets/makeCoffee/mid1-caramel.png";
import mid1Cream from "../../assets/makeCoffee/mid1-cream.png";
import mid1Espresso from "../../assets/makeCoffee/mid1-espresso.png";
import mid1Milk from "../../assets/makeCoffee/mid1-milk.png";

import mid2Caramel from "../../assets/makeCoffee/mid2-caramel.png";
import mid2Cream from "../../assets/makeCoffee/mid2-cream.png";
import mid2Espresso from "../../assets/makeCoffee/mid2-espresso.png";
import mid2Milk from "../../assets/makeCoffee/mid2-milk.png";

import topCaramel from "../../assets/makeCoffee/top-caramel.png";
import topCream from "../../assets/makeCoffee/top-cream.png";
import topEspresso from "../../assets/makeCoffee/top-espresso.png";
import topMilk from "../../assets/makeCoffee/top-milk.png";


import React from 'react';
import Image from "react-bootstrap/Image";
import "./MakeCoffeeImage.css"

export const MakeCoffeeImage = ({isTemperatureSelected, ingredients, sugarSelected}) => {
    const ingredientImages = [
        {
          Espresso: bottomEspresso,
          Milk: bottomMilk,
          Caramel: bottomCaramel,
          Cream: bottomCream,
        },
        {
          Espresso: mid1Espresso,
          Milk: mid1Milk,
          Caramel: mid1Caramel,
          Cream: mid1Cream,
        },
        {
          Espresso: mid2Espresso,
          Milk: mid2Milk,
          Caramel: mid2Caramel,
          Cream: mid2Cream,
        },
        {
          Espresso: topEspresso,
          Milk: topMilk,
          Caramel: topCaramel,
          Cream: topCream,
        },
      ];
    
  return (
    <div>
        <div>
            <Image src={backgroundImage} className="make-coffee-image" />
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient">
                <img
                  src={ingredientImages[index][ingredient]}
                  alt={ingredient}
                  className="make-coffee-image"
                />
              </div>
            ))}
            {isTemperatureSelected("Hot") && (
              <Image src={smoke} className="make-coffee-smoke" />
            )}
            {isTemperatureSelected("Cold") && (
              <Image src={ice} className="make-coffee-image" />
            )}
            {sugarSelected && (
              <Image src={sugar} className="make-coffee-image" />
            )}
            <Image src={foregroundImage} className="make-coffee-image" />
          </div>
    </div>
  )
}
