import React from "react";
import { TopBar } from "../components/common/TopBar";
import { MakeCoffeeBody } from "../components/makeCoffee/MakeCoffeeBody";


export const MakeCoffee = () => {
  return (
    <div>
      <TopBar home={false} />
      <MakeCoffeeBody/>
    </div>
  );
};
