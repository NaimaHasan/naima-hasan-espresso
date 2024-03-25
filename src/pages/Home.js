import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <h3>Random Recipe</h3>
        <Link
          to={"/allRecipes"}
          style={{ color: "black" }}
        >
          <div
            style={{
              right: "0",
              position: "absolute",
              paddingRight: "250px",
              fontSize: "20px",
              textDecoration: "underline"
            }}
          >
            See all
          </div>
        </Link>
      </div>
      <HomeCarousel recipes={recipes} />
    </div>
  );
};
