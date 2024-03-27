import React, { useState, useEffect } from "react";
import { TopBar } from "../components/common/TopBar";
import { ItemCard } from "../components/common/ItemCard";
import { FilterBar } from "../components/common/FilterBar";
import { Item } from "../components/common/Item";
import { getRecipeByFavorite } from "../services/CallApi";

export const Favorite = ({ filter, setFilter }) => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    getRecipeByFavorite()
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Failed to fetch recipes information:", error);
      });
  }, null);

  return (
    <div style={{ backgroundColor: " #e0d9c7", minHeight: "200vh" }}>
      <TopBar routeName={"Favorites"} />
      <FilterBar filter={filter} setFilter={setFilter} />
      {recipes && <Item recipes={recipes} />}
    </div>
  );
};
