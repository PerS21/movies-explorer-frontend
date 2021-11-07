import React from "react";
import "./Techs.css";

export default function Techs() {
    return (
        <section className="techs">
            <div className="section__content">
                <p className="chapter">Технологии</p>
                <h2 className="techs__title">
                    7 технологий
                </h2>
                <h3 className="techs__text">
                    На курсе веб-разработки мы освоили технологии, которые применили в
                    дипломном проекте.
                </h3>

                <ul className="techs__list">
                    <li className="techs__list-element">
                        <p className="techs__list-element-text">HTML</p>
                    </li>
                    <li className="techs__list-element">
                        <p className="techs__list-element-text">CSS</p>
                    </li>
                    <li className="techs__list-element">
                        <p className="techs__list-element-text">JS</p>
                    </li>
                    <li className="techs__list-element">
                        <p className="techs__list-element-text">React</p>
                    </li>
                    <li className="techs__list-element">
                        <p className="techs__list-element-text">Git</p>
                    </li>
                    <li className="techs__list-element">
                        <p className="techs__list-element-text">Express.js</p>
                    </li>
                    <li className="techs__list-element">
                        <p className="techs__list-element-text">mongoDB</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}