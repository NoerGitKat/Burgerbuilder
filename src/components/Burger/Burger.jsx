import React from "react";
import "../../styles/Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients }) => {
  const ingredientsArr = Object.keys(ingredients)
    .map(ingredient => {
      return [...Array(ingredients[ingredient])].map((_, i) => {
        return <BurgerIngredient key={ingredient + i} type={ingredient} />;
      });
    })
    .reduce((arr, ing) => {
      return arr.concat(ing);
    }, []);

  console.log("ingredientsArr", ingredientsArr.length);
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {ingredientsArr.length !== 0 ? (
        ingredientsArr
      ) : (
        <p>
          <bold>Please start adding ingredients!</bold>
        </p>
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
