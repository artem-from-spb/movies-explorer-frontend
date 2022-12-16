import React from "react";
import { Link } from "react-router-dom";

import './AuthForm.css';
import logo from "../../images/logoAuth.svg";


function AuthForm({
  title,
  btnText,
  children,
  onSubmit,
  authQuestion,
  authLink,
  authLinkText,
}) {
  return (
    <div className="auth-page">
<Link to="/" className="auth-page__logo-link">
<img src={logo} alt="Логотип проекта" className="auth-page__logo" />
</Link>

      <h2 className="auth-page__title">{title}</h2>
      <form
        className="auth-page__form"
        noValidate
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
        {authQuestion}
        <Link to={authLink} className="auth-page__link">
          {authLinkText}
        </Link>
      </p>
    </div>
  );
}

export default AuthForm;
