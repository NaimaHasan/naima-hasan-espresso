import React from "react";
import { TopBar } from "../components/common/TopBar";
import { ItemCard } from "../components/common/ItemCard";
import { FilterBar } from "../components/common/FilterBar";
import { Item } from "../components/common/Item";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRecipeByName } from "../services/CallApi";

export const SearchResults = () => {
  const { searchQuery } = useParams();
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    getRecipeByName(searchQuery)
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Failed to fetch recipes information:", error);
      });
  }, null);
  
  return (
    <div style={{ backgroundColor: " #e0d9c7", minHeight: "200vh" }}>
      <TopBar home={false} />
      <div style={{paddingTop: "160px", textAlign: "center", fontSize: "30px"}}>Search Results</div>
      {recipes && <Item recipes={recipes}/>}
    </div>
  );
};
