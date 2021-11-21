import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import registerLogo from '../../images/logo.svg';
import { useFormWithValidation } from "../../utils/Validation";

function Register(props) {
    const { values, handleChange, resetForm, errors } =
        useFormWithValidation();

    React.useEffect(() => {
        resetForm({});
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.email || !values.password) {
            return;
        }
        const { password, email, name } = values;
        props.onRegister({ password, email, name });
    };

    return (
        <section className="register">
            <Link to="/" className='register__logo'>
                <img
                    src={registerLogo}
                    alt="logo"
                />
            </Link>
            <form className="auth__form" onSubmit={handleSubmit}>
                <h1 className="form__title">Добро пожаловать!</h1>
                <div>
                    <div className='form__block'>
                        <p className="form__input-label">Имя</p>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className='form__input'
                            placeholder="Имя"
                            autoComplete="off"
                            minLength={2}
                            maxLength={30}
                            required
                            value={values.name || ""}
                            onChange={handleChange}
                        />
                        <span className="register__input-error" id="name-error">
                            {errors.name}
                        </span>
                    </div>
                    <div className='form__block'>
                        <p className="form__input-label">E-mail</p>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className='form__input'
                            placeholder="pochta@yandex.ru"
                            autoComplete="off"
                            required
                            value={values.email || ""}
                            onChange={handleChange}
                        />
                        <span className="register__input-error" id="email-error">
                            {errors.email}
                        </span>
                    </div>
                    <div className='form__block'>
                        <p className="form__input-label">Пароль</p>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className='form__input'
                            placeholder="Минимум 8 символов"
                            autoComplete="off"
                            minLength={8}
                            maxLength={30}
                            required
                            value={values.password || ""}
                            onChange={handleChange}
                            disabled={props.isSending}
                        />
                        <span className="register__input-error" id="password-error">
                            {errors.password}
                        </span>
                    </div>
                </div>
                <button
                    type="submit"
                    className='form__submit'
                >
                    Зарегистрироваться
                </button>
                <div className='form__text-block'>
                    <p className='form__text'>Уже зарегистрированы?</p>
                    <Link to="/signin" className='form__link clickable'>
                        Войти
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default Register;