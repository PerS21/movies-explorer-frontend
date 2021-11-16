import React from "react";
import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";
import ddd from "../../images/Animator-Spanch-Bob.jpg";

export default function AboutMe() {
    return (
        <section className="student">
            <div className='section__content'>
                <p className="chapter">Студент</p>
                <div className='student__profile'>
                    <div>
                        <h2 className="student__title">Стас</h2>
                        <h3 className="student__subtitle">
                            Фронтенд-разработчик, 27 годиков.
                        </h3>
                        <p className="student__text">
                            Тут типо о себе написал много много
                        </p>

                        <nav className="student__links">
                            <li className="student__link">
                                <a
                                    className="student__link-text clickable"
                                    href="/"
                                    target=""
                                >
                                    Facebook
                                </a>
                            </li>
                            <li className="student__link">
                                <a
                                    className="student__link-text clickable"
                                    href="/"
                                    target=""
                                >
                                    GitHub
                                </a>
                            </li>
                        </nav>
                    </div>
                    <img className="student__photo" src={ddd} alt="" />
                </div>
                <Portfolio />
            </div>
        </section>
    );
}