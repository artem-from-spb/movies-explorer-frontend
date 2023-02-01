import React, { useState } from "react";
import "./Profile.css";

function Profile({ name, email, handleLogOut }) {
  // const [inputIsValid, setInputIsValid] = useState(false);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  // const [emailError, setEmailError] = useState("");
  // const [nameError, setNameError] = useState("");

  // function handleNameChange(e) {
  //   let inputValue = e.target.value;
  //   if (
  //     (inputValue.length > 0) & (inputValue.length < 2) ||
  //     inputValue.length > 30
  //   ) {
  //     setNameError(inputErrorName);
  //   } else {
  //     setNameError("");
  //   }
  //   setName(inputValue);
  // }

  // function handleEmailChange(e) {
  //   let inputValue = e.target.value;
  //   if (!regExpEmail.test(inputValue) && inputValue.length > 0) {
  //     setEmailError(inputErrorEmail);
  //   } else {
  //     setEmailError("");
  //   }
  //   setEmail(inputValue);
  // }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {name}!</h2>
      <form onSubmit={handleSubmit} className="profile__form">
        <div className="profile__user-data">
          <p className="profile__user-text">Имя</p>
          <input type="text" className="profile__user-text profile__input" value={name}>
          </input>
        </div>
        <div className="profile__user-data">
          <p className="profile__user-text">E-mail</p>
          <input type="text" className="profile__user-text profile__input" value={email}>
          </input>
        </div>
        <button className="profile__button profile__button_margin-top_big">
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
