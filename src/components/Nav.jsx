import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <figure class="logo--wrapper">
            <img class="logo" src="/logo-black.png" alt="" />
          </figure>
        </Link>
        <div class="nav__links">
          <Link to="/" className="nav__link link__hover-effect">
            Home
          </Link>
          <Link to="/" className="nav__link link__hover-effect">
            Find Your Recipe
          </Link>

          <button class="btn-contact">Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
