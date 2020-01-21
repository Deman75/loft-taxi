import React from "react";
import propTypes from "prop-types";
import "./Header.css";

import Logo from "../Logo/Logo.jsx";

function Header(props) {
  const pages = props.pages;

  const handleNavClick = e => {
    e.preventDefault();

    props.setPage(e.target.dataset.id);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Logo></Logo>
        <ul className="nav">
          {pages.map(item => (
            <li
              key={item.index}
              className={`nav__item ${
                item.href === props.activePage ? "nav__item_active" : null
              }`}
            >
              <a
                href="http://"
                onClick={handleNavClick}
                className="nav__button"
                data-id={item.href}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {
  pages: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      href: propTypes.string.isRequired,
      index: propTypes.number.isRequired
    })
  ),
  activePage: propTypes.string.isRequired,
  setPage: propTypes.func.isRequired
};

export default Header;
