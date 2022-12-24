import React from "react";
import "./Profile.css";

function Profile({ title, email }) {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {title}!</h2>
      <ul className="profile__user-data">
        <li className="profile__user-text">Имя</li>
        <li className="profile__user-text">{title}</li>
      </ul>
      <ul className="profile__user-data">
        <li className="profile__user-text">E-mail</li>
        <li className="profile__user-text">{email}</li>
      </ul>
      <button className="profile__button profile__button_margin-top_big">
        Редактировать
      </button>
      <button className="profile__button profile__button_color_red">
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
