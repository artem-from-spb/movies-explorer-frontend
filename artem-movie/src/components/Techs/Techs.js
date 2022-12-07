import React from "react";
import './Techs.css';

function Techs() {
  return (
    <div className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__stack-title">7 технологий</h3>
      <p className="techs__stack-about">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__stack-list">
        <div className="techs__stack-element">
            HTML
        </div>
        <div className="techs__stack-element">
            CSS
        </div>
        <div className="techs__stack-element">
            JS
        </div>
        <div className="techs__stack-element">
            React
        </div>
        <div className="techs__stack-element">
            Git
        </div>
        <div className="techs__stack-element">
            Express.js
        </div>
        <div className="techs__stack-element">
            monhoDB
        </div>
      </div>
    </div>
  );
}

export default Techs;
