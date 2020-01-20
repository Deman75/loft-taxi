import React from "react";

import "./Main.css";

import Logo from "../../components/Logo/Logo";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

function Main(props) {
  const [activeForm, setForm] = React.useState("login");

  return (
    <div className="wrapper wrapper__main">
      <div className="container container__main">
        <Logo />
        {activeForm === "login" ? (
          <Login setActiveForm={setForm} setPage={props.setPage} />
        ) : (
          <Signup setActiveForm={setForm} setPage={props.setPage} />
        )}
      </div>
    </div>
  );
}

export default Main;
