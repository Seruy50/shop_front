import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header__links">
        <div className="header__links__one">
          <p>
            <Link to="/" className="header__link">
              Shop
            </Link>
          </p>
        </div>
        <span className="header__links__span"></span>
        <div className="header__links__one">
          <p>
            <Link to="/shopingCart" className="header__link">
              Shopping Cart
            </Link>
          </p>
        </div>
      </div>
    </header>
  ); 
}
