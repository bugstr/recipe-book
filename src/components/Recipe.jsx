import "./Recipe.css";
import { Link } from "react-router-dom";

function Recipe({ recipe }) {
  const url = recipe._links.self.href;
  const startIndex = url.indexOf("v2/") + 3;
  const endIndex = url.indexOf("type=") - 1;

  const recipeId = url.substring(startIndex, endIndex);


  return (
    <div className="recipe">
      <Link to={`/recipes/${encodeURIComponent(recipeId)}`}>
        <figure className="recipe__img--wrapper">
          <img className="recipe__img" src={recipe.recipe.image} alt="" />
        </figure>
      </Link>
      <div className="recipe__title">{recipe.recipe.label}</div>
    </div>
  );
}

export default Recipe;
