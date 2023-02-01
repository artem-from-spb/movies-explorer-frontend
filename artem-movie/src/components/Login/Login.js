import React, { useState, useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm";
import "./Login.css";

import { regExpEmail } from "../../utils/constants";
import { inputErrorEmail, inputErrorPassword } from "../../utils/constants";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [inputIsValid, setInputIsValid] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
    setEmail("");
    setPassword("");
  }

  function handleEmailChange(e) {
    let inputValue = e.target.value;
    if (!regExpEmail.test(inputValue) && inputValue.length > 0) {
      setEmailError(inputErrorEmail);
    } else {
      setEmailError("");
    }
    setEmail(inputValue);
  }

  function handlePasswordChange(e) {
    let inputValue = e.target.value;
    if (
      (inputValue.length > 0) & (inputValue.length < 4) ||
      inputValue.length > 20
    ) {
      setPasswordError(inputErrorPassword);
    } else {
      setPasswordError("");
    }
    setPassword(inputValue);
  }

  function checkInputValidity() {
    if (
      !emailError &&
      !passwordError &&
      email &&
      password
    ) {
      setInputIsValid(true);
    } else {
      setInputIsValid(false);
    }
  }

  useEffect(() => {
    checkInputValidity();
  }, [email, password]);

  return (
    <AuthForm
      title="Рады видеть!"
      btnText="Войти"
      handleSubmit={handleSubmit}
      authQuestion="Ещё не зарегистрированы?"
      authLink="/signup"
      authLinkText="Регистрация"
      inputIsValid={inputIsValid}
    >
      <label className="register__label" for="email-input">
        E-mail
      </label>
      <input
        type="email"
        id="email-input"
        className="register__input"
        required
        minLength="5"
        maxLength="{200}"
        placeholder="Email"
        onChange={handleEmailChange}
      />
      <p className="register__error">{emailError}</p>
      <label className="register__label" for="password-input">
        Пароль
      </label>
      <input
        type="password"
        id="password-input"
        className="register__input"
        required
        minLength="{2}"
        maxLength="{200}"
        placeholder="Пароль"
        onChange={handlePasswordChange}
      />
      <p className="register__error">{passwordError}</p>
    </AuthForm>
  );
}

export default Login;
