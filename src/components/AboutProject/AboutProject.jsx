import React from "react";

import "./AboutProject.css";

function AboutProject() {
  return (
    <section id='about-project-id' className="aboutProject">
      <div className="section__content">
        <p className="chapter">О проекте</p>
        <ul className="aboutProject__list">
          <li className="list__element">
            <h3 className="element__title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="element__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className="list__element">
            <h3 className="element__title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="element__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <ul className="aboutProject__blocks">
          <li className="projectBlock projectBlock__week projectBlock__week_color_green">1 неделя</li>
          <li className="projectBlock projectBlock__week projectBlock__week_color_gray">4 недели</li>
        </ul>

        <ul className="aboutProject__blocks">
          <li className="projectBlock projectBlock__type">Back-end</li>
          <li className="projectBlock__type projectBlock">Front-end</li>
        </ul>
        </div>
    </section>
  );
}

export default AboutProject;