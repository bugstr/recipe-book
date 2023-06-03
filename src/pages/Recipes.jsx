import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import "./Recipes.css";
import axios from "axios";
import Skeleton from "../components/Skeleton";
import Recipe from "../components/Recipe";

function Recipes({ setInput, input }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState();

  async function fetchRecipes() {
    setLoading(true); //shows skeleton state when fetchRecipes() is called
    const {
      data: { hits },
    } = await axios.get(
      `https://api.edamam.com/api/recipes/v2?q=${input}&app_key=c03b64fb40b662ada3d4352fef3d2cbb%09&_cont=CHcVQBtNNQphDmgVQntAEX4BYl1tBQEEQ2FJAmQQa1R7BwYPUXlSBmcQNwNyDQsAQTQVB2ITMFJ1AAVUQWNAAmQQYgR0UgIVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=b8060f52`
    );
    setRecipes(hits);
    setLoading(false);
    console.log(recipes);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="header__content">
            <h1 className="header__content--title">Browse our recipes </h1>
            <SearchBar onSearch={setInput} input={input} />
          </div>
          <div className="results__header">
            <h2 className="results__header--title">Results:</h2>
            {/* <select id="filter">
              <option value="" disabled selected>
                Sort
              </option>
              <option value="A-Z">A-Z</option>
              <option value="YEAR">Release Year</option>
            </select> */}
          </div>
          <div className="results__wrapper">
           

            {loading
              ? new Array(6).fill(0).map((_, index) => <Skeleton />)
              : recipes
                  .slice(0, 6)
                  .map((recipe, index) => (
                    <Recipe recipe={recipe} key={index} />
                  ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Recipes;
