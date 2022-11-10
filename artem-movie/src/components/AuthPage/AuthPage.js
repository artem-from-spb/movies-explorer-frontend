import React from "react";
import logo from "../../images/logoAuth.svg";
import { homePage } from "../../utils/constants";

function AuthForm({
  title,
  formName,
  btnText,
  children,
  onSubmit,
  authManage,
}) {
  return (
    <div className="auth-page">
      <img src={logo} alt="Логотип проекта" className="auth-page__logo" />
      <h2 className="auth-page__title">{title}</h2>
      <form
        className="auth-page__form"
        noValidate
        name={formName}
        onSubmit={onSubmit}
      >
        {children}

        <button
          className="auth-page__submit-button"
          type="submit"
          aria-label={btnText}
        >
          {btnText}
        </button>
      </form>
      <p className="auth-page__login-text">
        Уже зарегистрированы?{" "}
        <a href={homePage} className="auth-page__link">
          {authManage}
        </a>
      </p>
    </div>
  );
}

export default AuthForm;
