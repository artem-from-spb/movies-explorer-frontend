import React from "react";
import { yandexLink, githubLink } from "../../utils/constants"

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__link">© 2022</p>
        <a href={yandexLink} className="footer__link">Яндекс.Практикум</a>
        <a href={githubLink} className="footer__link">Github</a>
      </div>
    </footer>
  );
}

export default Footer;
