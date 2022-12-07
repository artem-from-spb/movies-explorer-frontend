import React from "react";
import linkPic from "../../images/link-pic.svg";
import { staticLink, adaptiveLink, appLink } from "../../utils/constants";
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
        <div className="portfolio__item">
            <a href={staticLink} className="portfolio__link">Статичный сайт</a>
            <img src={linkPic} alt="Ссылка на сайт" className="portfolio__link-picture" />
        </div>
        <div className="portfolio__item">
            <a href={adaptiveLink} className="portfolio__link">Адаптивный сайт</a>
            <img src={linkPic} alt="Ссылка на сайт" className="portfolio__link-picture" />
        </div>
        <div className="portfolio__item">
            <a href={appLink} className="portfolio__link">Одностраничное приложение</a>
            <img src={linkPic} alt="Ссылка на сайт" className="portfolio__link-picture" />
        </div>
    </section>
  );
}

export default Portfolio;
