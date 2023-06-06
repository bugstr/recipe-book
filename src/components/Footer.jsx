import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__links">
        <Link to="/" className="footer__link link__hover-effect">
          Home
        </Link>

        <a
          target="_blank"
          className="footer__link link__hover-effect"
          href="https://github.com/bugstr/recipe-book"
        >
          Github
        </a>

        <Link to="/recipes" className="footer__link link__hover-effect">
          Recipes
        </Link>
      </div>
      <div className="footer__copyright">Copyright &copy; 2023 RecipeBook</div>
    </footer>
  );
}

export default Footer;
