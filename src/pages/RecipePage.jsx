import React, { useEffect, useState } from "react";
import "./RecipePage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function RecipePage() {
  const { id } = useParams();
  const [newRecipe, setNewRecipe] = useState();

  console.log(id);

  async function fetchRecipes() {
    const { data } = await axios.get(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=b8060f52&app_key=c03b64fb40b662ada3d4352fef3d2cbb%09`
    );
    setNewRecipe(data.recipe);
    console.log(newRecipe);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="recipePage">
      <div className="container">
        <div className="row">
          <div className="recipePage__left">
            <figure className="recipePage__img--wrapper">
              <img
                className="recipePage__img"
                src={newRecipe && newRecipe.image}
                alt=""
              />
            </figure>
            <div className="recipePage__title">
              {newRecipe && newRecipe.label}
            </div>
          </div>

          <div className="recipePage__right">
            <div className="recipePage__ingredients">
              <div className="recipePage__ingredients--title">Ingredients</div>
              <div className="ingredients">
               
                {newRecipe
                  ? newRecipe.ingredientLines.map((ingredientLine, index) => (
                      <div key={index}>{ingredientLine}</div>
                    ))
                  : "Loading..."}
              </div>
            </div>
          </div>

          {/* {newRecipe
        ? newRecipe.map((recipe) => <div>{recipe.label}</div>)
        : "Loading"} */}
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
