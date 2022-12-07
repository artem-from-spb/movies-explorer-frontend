import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import './Register.css'

function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Hello, world!")
  }

  return (
    <AuthForm
      title="Добро пожаловать!"
      btnText="Зарегистрироваться"
      onSubmit={handleSubmit}
      authQuestion="Уже зарегистрированы?"
      authLink="/"
      authLinkText="Войти"
    >
      <label className="register__label" for="name-input">Имя</label>
      <input
        type="text"
        className="register__input"
        id="name-input"
        required
        minLength="{2}"
        maxLength="{40}"
        name="name"
        //     onChange={handleNameChange}
        //      value={name || ""}
      />
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

export default Register;
