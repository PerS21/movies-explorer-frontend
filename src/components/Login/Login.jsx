import React from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import loginLogo from '../../images/logo.svg';
import { useFormWithValidation } from "../../utils/Validation";

function Login(props) {
    const { values, handleChange, resetForm, errors, isValid } =
        useFormWithValidation();

    React.useEffect(() => {
        resetForm({});
    }, []);

    console.log(isValid)

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
                            pattern='^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$'
                        />
                        <span className="form__input-error" id="email-error">
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
                        <span className="form__input-error" id="password-error">
                            {errors.password}
                        </span>
                    </div>
                </div>
                <button
                    type="submit"
                    className={`form__submit clickable
                        ${isValid ? "" : "form-btn_disabled"}
                        ${props.isSending ? "form-btn_disabled" : ''}`}
                >
                    Войти
                </button>
                <span className="form__input-error">{props.message}</span>
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