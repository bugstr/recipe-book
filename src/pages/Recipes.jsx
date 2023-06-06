import { useEffect, useState } from "react";
import "./Recipes.css";
import axios from "axios";
import Skeleton from "../components/Skeleton";
import Recipe from "../components/Recipe";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Recipes({ input, setInput, recipes, setRecipes }) {
  const [loading, setLoading] = useState();
  const [index, setIndex] = useState(0);

  async function fetchRecipes() {
    setLoading(true); //shows skeleton state when fetchRecipes() is called
    const {
      data: { hits },
    } = await axios.get(
      `https://api.edamam.com/api/recipes/v2?q=${input}&app_key=c03b64fb40b662ada3d4352fef3d2cbb%09&_cont=CHcVQBtNNQphDmgVQntAEX4BYl1tBQEEQ2FJAmQQa1R7BwYPUXlSBmcQNwNyDQsAQTQVB2ITMFJ1AAVUQWNAAmQQYgR0UgIVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=b8060f52`
    );
    setRecipes(hits);
    setLoading(false);
  }

  useEffect(() => {
    fetchRecipes();
  }, []);
  
  // search button function
  const onSearch = () => {
    if (input.length !== 0) {
      setInput(input);
      setIndex(0);
      setRecipes([]);
      fetchRecipes();
    }
    setRecipes([]);
    fetchRecipes();
  };

  // enter key press search function
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && input.length !== 0) {
      setInput(input);
      setIndex(0);
      setRecipes([]);
      fetchRecipes();
    }
  };

  //next page function
  const nextPage = () => {
    const newIndex = index + 6;
    if (newIndex < recipes.length) {
      setIndex(newIndex);
    }
  };

  //previous page function
  const previousPage = () => {
    const newIndex = index - 6;
    if (newIndex >= 0) {
      setIndex(newIndex);
    }
  };


  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="header__content">
            <h1 className="header__content--title">Browse our recipes </h1>
            <div className="input-wrapper">
              <input
                id="searchInput"
                type="text"
                placeholder="Search by recipe name or keyword"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(event) => handleKeyPress(event)}
              />
              <Link to="/recipes" className="search-button" onClick={onSearch}>
                <FontAwesomeIcon icon="magnifying-glass" />
              </Link>
            </div>
          </div>

          <div className="results__header">
            <h2 className="results__header--title">Results:</h2>
            <div className="page__buttons">

            <button className="page__button" onClick={previousPage}>Previous</button>
            <button className="page__button" onClick={nextPage}>Next</button>
            </div>
          </div>

          <div className="results__wrapper">
            {loading ? (
              new Array(6).fill(0).map((_, index) => <Skeleton key={index} />)
            ) : recipes.length === 0 ? (
              <figure className="results__img--wrapper">
                <img
                  className="results__img"
                  src="./undraw_breakfast.svg"
                  alt=""
                />
                <div className="results__text">No Results Found!</div>
              </figure>
            ) : (
              recipes
                .slice(index, index + 6)
                .map((recipe) => <Recipe recipe={recipe} key={recipe.uri} />)
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Recipes;
