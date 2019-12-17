import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link className="navigation__link" to="/">
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              Sign Up
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              Log In
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              Join table
            </a>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/contact">
              New Game
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
