import React from "react";
import "./Landing.css";
import SearchBar from "./SearchBar";

function Landing() {
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

            <SearchBar />
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
