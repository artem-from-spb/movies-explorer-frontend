import React, { useState, useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { regExpEmail } from "../../utils/constants";
import "./Register.css";

import {
  inputErrorName,
  inputErrorEmail,
  inputErrorPassword,
} from "../../utils/constants";

function Register({ onSubmit }) {
  const [inputIsValid, setInputIsValid] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, email, password });
  }

  function handleNameChange(e) {
    let inputValue = e.target.value;
    if (
      (inputValue.length > 0) & (inputValue.length < 2) ||
      inputValue.length > 30
    ) {
      setNameError(inputErrorName);
    } else {
      setNameError("");
    }
    setName(inputValue);
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
      !nameError &&
      !emailError &&
      !passwordError &&
      name &&
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
  }, [name, email, password]);

  return (
    <AuthForm
      title="Добро пожаловать!"
      btnText="Зарегистрироваться"
      handleSubmit={handleSubmit}
      authQuestion="Уже зарегистрированы?"
      authLink="/signin"
      authLinkText="Войти"
      inputIsValid={inputIsValid}
    >
      <label className="register__label" for="name-input">
        Имя
      </label>
      <input
        type="text"
        className={`register__input ${
          nameError ? "register__input_error_true" : ""
        }`}
        id="name-input"
        required
        minLength="{2}"
        maxLength="{40}"
        name="name"
        value={name}
        onChange={handleNameChange}
        autocomplete="off"
      />
      <p className="register__error">{nameError}</p>
      <label className="register__label" for="email-input">
        E-mail
      </label>
      <input
        type="email"
        id="email-input"
        className={`register__input ${
          emailError ? "register__input_error_true" : ""
        }`}
        required
        minLength="5"
        maxLength="{200}"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        autocomplete="off"
      />
      <p className="register__error">{emailError}</p>
      <label className="register__label" for="password-input">
        Пароль
      </label>
      <input
        type="password"
        id="password-input"
        className={`register__input ${
          passwordError ? "register__input_error_true" : ""
        }`}
        required
        minLength="{2}"
        maxLength="{200}"
        placeholder="Пароль"
        value={password}
        onChange={handlePasswordChange}
        autocomplete="off"
      />
      <p className="register__error">{passwordError}</p>
    </AuthForm>
  );
}

export default Register;
