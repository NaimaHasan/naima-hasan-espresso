import React, { useEffect, useState } from "react";
import { HomeBanner } from "../components/homepage/HomeBanner";
import { HomeCategories } from "../components/homepage/HomeCategories";
import { HomeCarousel } from "../components/homepage/homeCarousel/HomeCarousel";

export const Home = ({
  recipes,
  filter,
  setFilter,
}) => {
  return (
    <div>
      <HomeBanner />
      <HomeCategories filter={filter} setFilter={setFilter} />
      <HomeCarousel recipes={recipes} />
    </div>
  );
};
