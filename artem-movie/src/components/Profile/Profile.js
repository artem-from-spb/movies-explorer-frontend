import React from "react";
import "./Profile.css";

function Profile({ title, email }) {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, {title}!</h2>
      <div className="profile__user-data">
        <p className="profile__user-text">Имя</p>
        <p className="profile__user-text">{title}</p>
      </div>
      <div className="profile__user-data">
        <p className="profile__user-text">E-mail</p>
        <p className="profile__user-text">{email}</p>
      </div>
      <button className="profile__button profile__button_margin-top_big">Редактировать</button>
      <button className="profile__button profile__button_color_red">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
