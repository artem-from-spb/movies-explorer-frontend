import React from "react";
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
      <img src={logo} alt="Логотип проекта" className="auth-page__logo" />
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
        <a href={authLink} className="auth-page__link">
          {authLinkText}
        </a>
      </p>
    </div>
  );
}

export default AuthForm;
