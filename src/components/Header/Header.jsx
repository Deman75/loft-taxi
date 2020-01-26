import React from "react";
import propTypes from "prop-types";
import "./Header.css";

import { ContextLogin } from "../../store/context/Context";

import { Card } from "@material-ui/core";
import { Logo } from "loft-taxi-mui-theme";

function Header(props) {
  const pages = props.pages;
  const { setUser } = React.useContext(ContextLogin);

  const handleNavClick = e => {
    e.preventDefault();

    if (e.target.dataset.id === "logout") {
      props.setPage(e.target.dataset.id);
      setUser({ login: null, isLoggedIn: false });
    }

    props.setPage(e.target.dataset.id);
  };

  return (
    <Card className="header">
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
    </Card>
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
