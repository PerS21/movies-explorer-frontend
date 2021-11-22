import React from "react";
import { Link } from 'react-router-dom';
import './Register.css';
import registerLogo from '../../images/logo.svg';
import { useFormWithValidation } from "../../utils/Validation";

function Register(props) {
    const { values, handleChange, resetForm, errors, isValid } =
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
                        <span className="form__input-error" id="name-error">
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
                            minLength={8}
                            maxLength={30}
                            required
                            value={values.password || ""}
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
                    Зарегистрироваться
                </button>
                <span className="form__input-error">{props.message}</span>
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