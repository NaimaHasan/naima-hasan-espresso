import React from "react";
import { TopBar } from "../components/common/TopBar";
import { FilterBar } from "../components/common/FilterBar";
import { Item } from "../components/common/Item";

export const AllRecipes = ({
  recipes,
  filter,
  setFilter,
}) => {
  return (
    <div style={{ backgroundColor: " #e0d9c7", height: "auto", minHeight: "100vh" }}>
      <TopBar routeName={"All Recipes"} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <Item recipes={recipes}/>
    </div>
  );
};

