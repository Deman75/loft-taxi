import React from "react";
import propTypes from "prop-types";

import "./Login.css";

import { ContextLogin } from "../../store/context/Context";

function Login(props) {
  const { setUser } = React.useContext(ContextLogin);

  const inputLogin = React.useRef(null);
  const inputPass = React.useRef(null);

  const login = (user, password) => {
    if (user && password) {
      return { name: user, loggedIn: true };
    }
    return { name: null, loggedIn: false };
  };

  const handleClickSubmit = e => {
    e.preventDefault();
    const user = {
      login: inputLogin.current.value,
      pass: inputPass.current.value
    };

    const loggedIn = login(user.login, user.pass);

    if (loggedIn.loggedIn) {
      setUser({ login: loggedIn.name, isLoggedIn: true });
      props.setPage("map");
    }
  };

  const handleClickSignup = e => {
    e.preventDefault();
    props.setActiveForm("signup");
  };

  return (
    <div className="login">
      <h3 className="login__title">Войти</h3>
      <div className="login__desc">
        <span>Новый пользователь?</span>
        <a onClick={handleClickSignup} className="login__reg" href="http://">
          Зарегистрируйтесь
        </a>
      </div>
      <form className="login__form" action="POST">
        <div className="form__input form__input_active">
          <div className="input__desc">Имя пользователя*</div>
          <input
            ref={inputLogin}
            className="input__input"
            type="email"
            name="login"
          />
        </div>
        <div className="form__input">
          <div className="input__desc">Пароль*</div>
          <input
            ref={inputPass}
            className="input__input"
            type="password"
            name="password"
          />
        </div>
        <div className="form__button">
          <button
            onClick={handleClickSubmit}
            className="form__submit"
            type="submit"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setActiveForm: propTypes.func.isRequired,
  setPage: propTypes.func.isRequired
};

export default Login;
