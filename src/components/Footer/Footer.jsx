import React from "react";
import "./Footer.css";
import { Route, Switch } from 'react-router-dom';


export default function Footer() {
    return (
        <Switch>
            <Route exact path={['/movies', '/saved-movies', '/']}>
                <footer className="footer">
                    <div className='section__content'>
                        <h3 className="footer__title">
                            Учебный проект Яндекс.Практикум х BeatFilm.
                        </h3>

                        <div className="footer__content">
                            <p className="footer__copyright">&copy; 2021</p>
                            <nav className="footer-links">
                                <li className="footer-links__item">
                                    <a
                                        className="footer-links__link clickable"
                                        href="https://practicum.yandex.ru/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Яндекс.Практикум
                                    </a>
                                </li>
                                <li className="footer-links__item clickable">
                                    <a
                                        className="footer-links__link"
                                        href="https://github.com/myr-irina"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li className="footer-links__item">
                                    <a
                                        className="footer-links__link clickable"
                                        href="https://www.facebook.com/irina.alexxx"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook
                                    </a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </footer>
            </Route>
        </Switch>
    );
}