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
                            exact to="/"
                            className="navigation__link clickable"
                            activeClassName="menu__link_active"
                        >
                            Главная
                        </NavLink>
                    </li>
                    <li className='navigation__li'>
                        <NavLink
                            to="/movies"
                            className="navigation__link clickable"
                            activeClassName="menu__link_active"
                        >
                            Фильмы
                        </NavLink>
                    </li>
                    <li className='navigation__li'>
                        <NavLink
                            to="/saved-movies"
                            className="navigation__link clickable"
                            activeClassName="menu__link_active"
                        >
                            Сохраненные фильмы
                        </NavLink>
                    </li>
                </div>
                <NavLink
                    to="/profile"
                    className="navigation__button">
                    Аккаунт
                </NavLink>
            </nav>
        </>
    );
}