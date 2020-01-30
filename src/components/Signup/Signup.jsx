import React from "react";
import propTypes from "prop-types";
import "./Signup.css";

function Signup(props) {
  const handleClickSubmit = e => {
    e.preventDefault();
    props.setPage("map");
  };
  const handleClickSignup = e => {
    e.preventDefault();
    props.setActiveForm("login");
  };

  return (
    <div className="signup">
      <h3 className="signup__title">Регистрация</h3>
      <div className="signup__desc">
        <span>Уже зарегистрирован?</span>
        <a
          onClick={handleClickSignup}
          className="signup__signup"
          href="http://"
        >
          Войти
        </a>
      </div>
      <form className="signup__form" action="POST">
        <div className="form__input form__input_active">
          <div className="input__desc">Адрес электронной почты</div>
          <input className="input__input" type="email" name="email" />
        </div>

        <div className="form__input-wrap">
          <div className="form__input">
            <div className="input__desc">Имя</div>
            <input className="input__input" type="text" name="name" />
          </div>
          <div className="form__input">
            <div className="input__desc">Фамилия</div>
            <input className="input__input" type="text" name="surname" />
          </div>
        </div>

        <div className="form__input">
          <div className="input__desc">Пароль</div>
          <input className="input__input" type="password" name="password" />
        </div>
        <div className="form__button">
          <button
            onClick={handleClickSubmit}
            className="form__submit"
            type="submit"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
}

Signup.propTypes = {
  setActiveForm: propTypes.func.isRequired,
  setPage: propTypes.func.isRequired
};

export default Signup;
