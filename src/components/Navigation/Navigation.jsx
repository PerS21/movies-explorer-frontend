import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

export default function Navigation() {
    return (
        <>
            <nav className="navigation">
                <div className="navigation__links">
                    <li className='navigation__li mobile'>
                        <NavLink
                            to="/"
                            className="navigation__link clickable"
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li className='navigation__li'>
                        <NavLink
                            to="/movies"
                            className="navigation__link clickable"
                        >
                            Фильмы
                        </NavLink>
                    </li>
                    <li className='navigation__li'>
                        <NavLink
                            to="/saved-movies"
                            className="navigation__link clickable"
                        >
                            Сохраненные фильмы
                        </NavLink>
                    </li>
                </div>
                <NavLink to="/profile" className="navigation__button">
                    Аккаунт
                </NavLink>
            </nav>
        </>
    );
}