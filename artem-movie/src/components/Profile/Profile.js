import React, { useState, useEffect } from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { regExpEmail, regExpName } from "../../utils/constants";
import {
  inputErrorName,
  inputErrorNameFormat,
  inputErrorEmail,
} from "../../utils/constants";

function Profile({
  handleLogOut,
  onUpdateUser,
  profileChangeOkMessage,
  isLoading,
}) {
  const [inputIsValid, setInputIsValid] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleNameChange(e) {
    let inputValue = e.target.value;
    if (
      (inputValue.length > 0) & (inputValue.length < 2) ||
      inputValue.length > 30
    ) {
      setNameError(inputErrorName);
    } else if (!regExpName.test(inputValue)) {
      setNameError(inputErrorNameFormat);
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

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      email: email,
    });
  }

  function checkInputValidity() {
    if (
      !nameError &&
      !emailError &&
      name &&
      email &&
      (name !== currentUser.name || email !== currentUser.email)
    ) {
      setInputIsValid(true);
    } else {
      setInputIsValid(false);
    }
  }

  useEffect(() => {
    checkInputValidity();
  }, [name, email]);

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {name}!</h2>
      <form onSubmit={handleSubmit} className="profile__form">
        <div className="profile__user-data">
          <p className="profile__user-text">Имя</p>
          <input
            type="text"
            className="profile__user-text profile__input"
            value={name}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="profile__user-data">
          <p className="profile__user-text">E-mail</p>
          <input
            type="text"
            className="profile__user-text profile__input"
            value={email}
            onChange={handleEmailChange}
          ></input>
        </div>
        <p className="register__error">{nameError}</p>
        <p className="register__error">{emailError}</p>
        <p className="register__error">{profileChangeOkMessage}</p>
        <button
          className={`profile__button profile__button_margin-top_big ${
            !inputIsValid ? "profile__button_disabled" : ""
          }`}
          disabled={!inputIsValid || isLoading}
        >
          Редактировать
        </button>
      </form>
      <button
        className="profile__button profile__button_color_red"
        onClick={handleLogOut}
      >
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
