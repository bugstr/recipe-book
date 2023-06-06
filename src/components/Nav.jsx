import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <figure className="logo--wrapper">
            <img className="logo" src="/logo-black.png" alt="" />
          </figure>
        </Link>
        <div className="nav__links">
          <Link to="/" className="nav__link link__hover-effect">
            Home
          </Link>
          <Link to="/recipes" className="nav__link link__hover-effect">
            Find Your Recipe
          </Link>
          <button className="btn-contact">Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
