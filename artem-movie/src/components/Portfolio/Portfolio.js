import React from "react";
import linkPic from "../../images/link-pic.svg";
import { staticLink, adaptiveLink, appLink } from "../../utils/constants";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <a
            href={staticLink}
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <img
              src={linkPic}
              alt="Ссылка на сайт"
              className="portfolio__link-picture"
            />
          </a>
        </li>

        <li className="portfolio__item">
          <a
            href={adaptiveLink}
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <img
              src={linkPic}
              alt="Ссылка на сайт"
              className="portfolio__link-picture"
            />
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href={appLink}
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <img
              src={linkPic}
              alt="Ссылка на сайт"
              className="portfolio__link-picture"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
