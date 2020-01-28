import React from "react";
import propTypes from "prop-types";

import "./Main.css";

import { Logo } from "loft-taxi-mui-theme";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

function Main(props) {
  const [activeForm, setForm] = React.useState("login");

  return (
    <div className="wrapper wrapper__main">
      <div className="container container__main">
        <Logo white />
        {activeForm === "login" ? (
          <Login setActiveForm={setForm} setPage={props.setPage} />
        ) : (
          <Signup setActiveForm={setForm} setPage={props.setPage} />
        )}
      </div>
    </div>
  );
}

Main.propTypes = {
  setPage: propTypes.func.isRequired
};

export default Main;
