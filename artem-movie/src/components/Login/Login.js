import React, { useState } from "react";
import AuthForm from "../AuthForm/AuthForm";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
    setEmail("");
    setPassword("");
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <AuthForm
      title="Рады видеть!"
      btnText="Войти"
      handleSubmit={handleSubmit}
      authQuestion="Ещё не зарегистрированы?"
      authLink="/signup"
      authLinkText="Регистрация"
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
    </AuthForm>
  );
}

export default Login;
