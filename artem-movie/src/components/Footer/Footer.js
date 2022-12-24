import React from "react";
import { useLocation } from "react-router-dom";

import { yandexLink, githubLink } from "../../utils/constants";
import "./Footer.css";

function Footer() {
  const { pathname } = useLocation();

  if (
    pathname !== "/" &&
    pathname !== "/movies" &&
    pathname !== "/saved-movies"
  ) {
    return <></>;
  }

  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__link" id="one">
          © 2022
        </p>
        <ul className="footer__links">
          <li className="footer__item">
            <a
              href={yandexLink}
              className="footer__link footer__link_margin_middle"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a
              href={githubLink}
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
