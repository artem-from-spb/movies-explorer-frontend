import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./AuthForm.css";
import logo from "../../images/logoAuth.svg";

function AuthForm({
  title,
  btnText,
  children,
  handleSubmit,
  authQuestion,
  authLink,
  authLinkText,
  inputIsValid,
  authErrorCommon
}) {
  const { pathname } = useLocation();

  return (
    <div className="auth-page">
      <Link to="/" className="auth-page__logo-link">
        <img src={logo} alt="Логотип проекта" className="auth-page__logo" />
      </Link>

      <h2 className="auth-page__title">{title}</h2>
      <form className="auth-page__form" noValidate onSubmit={handleSubmit}>
        {children}

        <button
          className={`auth-page__submit-button ${
            pathname === "/signin" ? "auth-page__submit-button_margin_big" : ""
          } ${!inputIsValid ? 'auth-page__submit-button_disabled' : ''}`}
          type="submit"
          aria-label={btnText}
          disabled={!inputIsValid}
        >
          {btnText}
        </button>
      </form>
      <p className="auth-page__login-text">
        {authQuestion}
        <Link to={authLink} className="auth-page__link">
          {authLinkText}
        </Link>
      </p>
      <div className="register__error">{authErrorCommon}</div>
    </div>
  );
}

export default AuthForm;
