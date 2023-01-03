import React, { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";
import "./Register.css";

function Register({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, email, password });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <AuthForm
      title="Добро пожаловать!"
      btnText="Зарегистрироваться"
      handleSubmit={handleSubmit}
      authQuestion="Уже зарегистрированы?"
      authLink="/signin"
      authLinkText="Войти"
    >
      <label className="register__label" for="name-input">
        Имя
      </label>
      <input
        type="text"
        className="register__input"
        id="name-input"
        required
        minLength="{2}"
        maxLength="{40}"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
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
        value={email}
        onChange={handleEmailChange}
      />
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
        value={password}
        onChange={handlePasswordChange}
      />
    </AuthForm>
  );
}

export default Register;
