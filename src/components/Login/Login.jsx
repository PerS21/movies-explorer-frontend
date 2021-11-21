import React from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import loginLogo from '../../images/logo.svg';
import { useFormWithValidation } from "../../utils/Validation";

function Login(props) {
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
        const { password, email } = values;
        props.onLogin({ password, email });
    };

    return (
        <section className="login">
            <Link to="/" className='login__logo'>
                <img
                    src={loginLogo}
                    alt="logo"
                />
            </Link>
            <form className="auth__form" onSubmit={handleSubmit}>
                <h1 className="form__title">Добро пожаловать!</h1>
                <div>
                    <div className='form__block'>
                        <p className="form__input-label">E-mail</p>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className='form__input'
                            placeholder="Почта"
                            minLength={2}
                            maxLength={30}
                            required
                            value={values.email || ""}
                            onChange={handleChange}
                            autoComplete="off"
                            disabled={props.isSending}
                        />
                        <span className="login__input-error" id="email-error">
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
                            required
                            value={values.password || ""}
                            minLength="8"
                            onChange={handleChange}
                            disabled={props.isSending}
                        />
                        <span className="login__input-error" id="password-error">
                            {errors.password}
                        </span>
                    </div>
                </div>
                <button
                    type="submit"
                    className='form__submit'
                >
                    Войти
                </button>
                <div className='form__text-block'>
                    <p className='form__text'>Ещё не зарегистрированы?</p>
                    <Link to="/signup" className='form__link clickable'>
                        Регистрация
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default Login;