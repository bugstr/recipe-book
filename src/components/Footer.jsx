import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure>
              <img src="/logo-black.png" className="footer__logo" alt="" />
            </figure>
          </Link>
          <div className="footer__links">
            <Link to="/" className="footer__link link__hover-effect">
              Home
            </Link>
            <Link to="/" className="footer__link link__hover-effect">
              About
            </Link>
            <Link to="/" className="footer__link link__hover-effect">
              Recipes
            </Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2023 RecipeBook
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
