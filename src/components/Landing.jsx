import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div class="container">
      <div class="row">
        <div class="header__content">
          <h1 class="header__content--title">
            Canada's #1 recipe searching platform
          </h1>
          <p class="header__content--subtitle">
            Search for any recipe with a simple click of a button.
          </p>

          <div class="input-wrapper">
            <input
              id="searchInput"
              type="text"
              placeholder="Search by recipe name or keyword"
            />
            <button id="searchButton" class="search-button">
              Search
            </button>
          </div>
        </div>

        <figure class="recipe-img--wrapper">
          <img class="recipe-img" src="/undraw_cooking.svg" alt="" />
        </figure>
      </div>
    </div>
  );
}

export default Landing;
