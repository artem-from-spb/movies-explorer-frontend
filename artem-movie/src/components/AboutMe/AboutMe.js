import React from "react";
import ArtemPic from "../../images/aboutme__me.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__biography-block">
        <div className="about-me__text-part">
          <h3 className="about-me__name">Артем</h3>
          <h4 className="about-me__job">Фронтенд-разработчик, 36 лет</h4>
          <p className="about-me__my-info">
            Для меня веб-разработка – это профессия, в которой можно расти
            бесконечно. Быть востребованным в любом возрасте. Это возможность не
            привязываться к месту жительства. А еще мне нравится
            “справедливость” этой деятельности: чем больше знаешь и умеешь, тем
            больше зарабатываешь. <br />
            Ответственный отец двоих детей. Люблю горы, бильярд и готовить.
            Летал на воздушном шаре.
          </p>
          <a
            href="https://github.com/artem-from-spb"
            className="about-me__github-link"
          >
            Github
          </a>
        </div>
        <img
          src={ArtemPic}
          className="about-me__my-foto"
          alt="Моя фотография"
        />
      </div>
    </section>
  );
}

export default AboutMe;
