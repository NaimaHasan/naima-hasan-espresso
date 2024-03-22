import React from "react";
import { HomeBanner } from "../components/homepage/HomeBanner";
import { HomeCategories } from "../components/homepage/HomeCategories";
import { HomeCarousel } from "../components/homepage/homeCarousel/HomeCarousel";

export const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeCategories />
      <div style={{ color: "#575040", paddingTop: "60px" }}>
        <h3>Your Favorites</h3>
      </div>
      <HomeCarousel />

      <div style={{ color: "#575040"}}>
        <h3>Random Recipes</h3>
      </div>
      <HomeCarousel />
    </div>
  );
};
