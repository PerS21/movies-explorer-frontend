import React from "react";
import "./Portfolio.css";
import Arrow from "./../../images/arrow.svg";

export default function Portfolio() {
    return (
        <div className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <nav className="portfolio__list">
                <li className="portfolio__list-item">
                    <a
                        className="portfolio__list-item__link clickable"
                        href="/"
                        target="_blank"
                    >
                        <p className="portfolio__list-item-text">Статичный сайт</p>
                        <img
                            className="portfolio__list-item-arrow"
                            src={Arrow}
                            alt="изображение стрелки"
                        />
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a
                        className="portfolio__list-item__link clickable"
                        href="/"
                        target="_blank"
                    >
                        <p className="portfolio__list-item-text">Адаптивный сайт</p>
                        <img
                            className="portfolio__list-item-arrow"
                            src={Arrow}
                            alt="изображение стрелки"
                        />
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a
                        className="portfolio__list-item__link clickable"
                        href="/"
                        target="_blank"
                    >
                        <p className="portfolio__list-item-text">
                            Одностраничное приложение
                        </p>
                        <img
                            className="portfolio__list-item-arrow"
                            src={Arrow}
                            alt="изображение стрелки"
                        />
                    </a>
                </li>
            </nav>
        </div>
    );
}