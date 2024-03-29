import React from "react";
import { TopBar } from "../components/common/TopBar";
import { MakeCoffeeBody } from "../components/makeCoffee/MakeCoffeeBody";


export const MakeCoffee = () => {
  return (
    <div style={{backgroundColor: "#624f45"}}>
      <TopBar routeName={"Make Coffee"} />
      <MakeCoffeeBody/>
    </div>
  );
};
