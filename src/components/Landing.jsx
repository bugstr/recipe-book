import React, { useEffect, useState } from "react";
import "./Landing.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";

function Landing({ input, setInput, recipes, setRecipes }) {
  const navigate = useNavigate();

  const onSearch = () => {
    setInput(input);
    navigate("/recipes");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && input.length !== 0) {
      setInput(input);
      navigate("/recipes");
    }
  };

  useEffect(() => {
    setInput("")
  }, [])

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="header__content">
            <h1 className="header__content--title">
              Canada's #1 recipe searching platform
            </h1>
            <p className="header__content--subtitle">
              Search for any recipe with a simple click of a button.
            </p>

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
          <figure className="recipe-img--wrapper">
            <img className="recipe-img" src="/undraw_cooking.svg" alt="" />
          </figure>
        </div>
      </div>
    </header>
  );
}

export default Landing;
