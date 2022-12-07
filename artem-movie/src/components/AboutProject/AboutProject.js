import React from "react";
import './AboutProject.css';

function AboutProject() {
  return (
    <div className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__text-block">
        <div className="about-project__text-block-item">
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__description">Составление плана, работу
             над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__text-block-item">
            <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__description">У каждого этапа был мягкий и 
            жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
        <div className="about-project__text-block-item"></div>
      </div>
      <div className="about-project__shedule">
        <p className="about-project__weeks about-project__weeks_align-handle">1 неделя</p>
        <p className="about-project__weeks about-project__weeks_color_grey about-project__weeks_align-handle">4 неделя</p>
        <p className="about-project__week-task about-project__weeks_align-handle">Back-end</p>
        <p className="about-project__week-task about-project__weeks_align-handle">Front-end</p>
      </div>
    </div>
  );
}

export default AboutProject;