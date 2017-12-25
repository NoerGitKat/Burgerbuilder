import React from "react";
import "../../styles/Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = () => {
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;