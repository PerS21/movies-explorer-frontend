import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

export default function Profile(props) {
    return (
        <section className="profile">
            <h2 className="profile__title">Привет</h2>
            <form className="profile__form">
                <div className="profile__input-block">
                    <span className="profile__input-text">Имя</span>
                    <input
                        className="profile__input"
                        name="name"
                        value='1'
                        onChange=''
                        type="text"
                        autoComplete="off"
                        minLength="2"
                        maxLength="40"
                        required
                    ></input>
                </div>
                <div className="profile__input-block">
                    <span className="profile__input-text">E-mail</span>
                    <input
                        className="profile__input"
                        name="email"
                        type="email"
                        required
                        value='2'
                        onChange=''
                        autoComplete="off"
                    ></input>
                </div>

                <Link
                    type="submit"
                    className='profile__submit'
                >
                    Редактировать
                </Link>
                <Link to="/" className='profile__logout'>
                    Выйти из аккаунта
                </Link>
            </form>
        </section>
    );
}
