import React, { useEffect, useState } from "react";
import "./RecipePage.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RecipePage() {
  const { id } = useParams();
  const [newRecipe, setNewRecipe] = useState("");
  const [loading, setLoading] = useState(true);
  const [length, setLength] = useState(0);

  useEffect(() => {
    async function fetchRecipes() {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=b8060f52&app_key=c03b64fb40b662ada3d4352fef3d2cbb%09`
      );
      setNewRecipe(data.recipe);
      setLength(data.recipe.ingredientLines.length);
      setLoading(false);
    }
    fetchRecipes();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="recipePage">
          {loading ? (
            <div className="recipePage__skeleton"></div>
          ) : (
            <div className="recipePage__img--wrapper">
              <img
                className="recipePage__img"
                src={newRecipe && newRecipe.image}
                alt=""
              />
              <div className="recipePage__title">
                {newRecipe && newRecipe.label}
              </div>
              <div className="recipePage__link">
                <div>
                  See more at:{" "}
                  <Link to={newRecipe.url}>{newRecipe.source}</Link>
                </div>
                <Link to="/recipes">
                  <FontAwesomeIcon icon="arrow-left" /> Go Back
                </Link>
              </div>
              {length > 10 && (
                <div className="nutrients">
                  <div className="nutrients__title">Nutrition</div>
                  <div className="nutrients__info">
                    {Math.floor(newRecipe.calories / newRecipe.yield)}{" "}
                    Calories/Serving
                    <p>{newRecipe.yield} Servings</p>
                  </div>
                  <div className="nutrients__allergies">
                    {newRecipe.healthLabels
                      .slice(0, 14)
                      .map((healthLabels, index) => (
                        <div key={index}>{healthLabels}</div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {loading ? (
            <div className="recipePage__skeleton"></div>
          ) : (
            <>
              <div className="recipePage__ingredients">
                <div className="recipePage__ingredients--title">
                  Ingredients
                </div>
                <div className="ingredients">
                  {newRecipe.ingredientLines.map((ingredientLine, index) => (
                    <div key={index}>{ingredientLine}</div>
                  ))}
                </div>
              </div>
              {length <= 10 && (
                <div className="nutrients">
                  <div className="nutrients__title">Nutrition</div>
                  <div className="nutrients__info">
                    {Math.floor(newRecipe.calories / newRecipe.yield)}{" "}
                    Calories/Serving
                    <p>{newRecipe.yield} Servings</p>
                  </div>
                  <div className="nutrients__allergies">
                    {loading
                      ? "Loading..."
                      : newRecipe.healthLabels
                          .slice(0, 14)
                          .map((healthLabels, index) => (
                            <div key={index}>{healthLabels}</div>
                          ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
