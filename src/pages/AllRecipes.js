import React from "react";
import { TopBar } from "../components/common/TopBar";
import { ItemCard } from "../components/common/ItemCard";
import { FilterBar } from "../components/common/FilterBar";

export const AllRecipes = ({
  searchQuery,
  setSearchQuery,
  recipes,
  filter,
  setFilter,
}) => {
  return (
    <div style={{ backgroundColor: " #e0d9c7", minHeight: "200vh" }}>
      <TopBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <div>
        {recipes.length === 0 ? (
          <div
            style={{
              fontSize: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <p>There is no recipe to display!</p>
          </div>
        ) : (
          <div
            className="row"
            style={{ padding: "10px 200px", marginTop: "40px" }}
          >
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="col mb-4 d-flex justify-content-center"
              >
                <ItemCard
                  title={recipe["name"]}
                  id={recipe["id"]}
                  imageUrl={recipe["image-url"]}
                />
              </div>
            ))}

            <div
              className={`col-${12 - (recipes.length % 4) * 3} mb-4`}
            />
          </div>
        )}
      </div>
    </div>
  );
};
