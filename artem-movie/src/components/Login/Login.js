import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import './Login.css';

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Hello, world!")
  }

  return (
    <AuthForm
      title="Рады видеть!"
      btnText="Войти"
      onSubmit={handleSubmit}
      authQuestion="Ещё не зарегистрированы?"
      authLink="/"
      authLinkText="Регистрация"
    >
      <label className="register__label" for="email-input">E-mail</label>
      <input
        type="email"
        id="email-input"
        className="register__input"
        required
        minLength="5"
        maxLength="{200}"
        placeholder="Email"
        //      onChange={handleEmailChange}
        //     value={email || ""}
      />
      <label className="register__label" for="password-input">Пароль</label>
      <input
        type="password"
        id="password-input"
        className="register__input"
        required
        minLength="{2}"
        maxLength="{200}"
        placeholder="Пароль"
        //       onChange={handlePasswordChange}
        //      value={password || ""}
      />
    </AuthForm>
  );
}

export default Login;
