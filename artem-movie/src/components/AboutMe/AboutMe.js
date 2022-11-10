import React from "react";
import ArtemPic from '../../images/Artem.jpg'

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__biography-block">
        <div className="about-me__text-part">
          <h3 className="about-me__name">Виталий</h3>
          <h4 className="about-me__job">Фронтенд-разработчик, 36 лет</h4>
          <p className="about-me__my-info">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href="/" className="about-me__github-link">Github</a>
        </div>
        <img src={ArtemPic} className="about-me__my-foto" alt="Моя фотография" />
      </div>
    </section>
  );
}

export default AboutMe;
