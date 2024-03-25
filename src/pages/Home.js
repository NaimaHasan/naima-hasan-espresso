import React, { useEffect, useState } from "react";
import { getRecipes } from "../services/CallApi";
import { HomeBanner } from "../components/homepage/HomeBanner";
import { HomeCategories } from "../components/homepage/HomeCategories";
import { HomeCarousel } from "../components/homepage/homeCarousel/HomeCarousel";

export const Home = ({
  recipes,
  filter,
  setFilter,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div>
      <HomeBanner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <HomeCategories filter={filter} setFilter={setFilter} />
      <div
        style={{
          color: "#575040",
          paddingTop: "60px",
          paddingBottom: "20px",
          textAlign: "center",
        }}
      >
        <h3>Random Recipe</h3>
      </div>
      <HomeCarousel recipes={recipes} />
    </div>
  );
};
