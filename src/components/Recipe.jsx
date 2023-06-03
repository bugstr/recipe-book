import React from "react";
import "./Recipe.css";

function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <figure className="recipe__img--wrapper">
        <img className="recipe__img" src={recipe.recipe.image} alt="" />
      </figure>
      <div className="recipe__title">{recipe.recipe.label}</div>
    </div>
  );
}

export default Recipe;
