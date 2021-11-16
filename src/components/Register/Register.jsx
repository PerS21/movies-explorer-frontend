import { Link } from 'react-router-dom';
import './Register.css';
import registerLogo from '../../images/logo.svg';


function Register() {
    return (
        <section className="register">
                <Link to="/" className='register__logo'>
                    <img
                        src={registerLogo}
                        alt="logo"
                    />
                </Link>
                <form className="auth__form">
                    <h1 className="form__title">Добро пожаловать!</h1>
                    <div>
                        <div className='form__block'>
                            <p className="form__input-label">Имя</p>
                            <input
                                id=""
                                name="name"
                                type="text"
                                className='form__input'
                                placeholder="Max"
                                autoComplete="off"
                                minLength={2}
                                maxLength={30}
                                required
                                value=''
                                onChange=''
                                onBlur=''
                            />
                        </div>
                        <div className='form__block'>
                            <p className="form__input-label">E-mail</p>
                            <input
                                id=""
                                name="email"
                                type="email"
                                className='form__input'
                                placeholder="pochta@yandex.ru"
                                autoComplete="off"
                                pattern="^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$"
                                required
                                value=''
                                onChange=''
                                onBlur=''
                            />
                        </div>
                        <div className='form__block'>
                            <p className="form__input-label">Пароль</p>
                            <input
                                id="input-user-password"
                                name="password"
                                type="password"
                                className='form__input'
                                placeholder="Минимум 8 символов"
                                autoComplete="off"
                                minLength={8}
                                maxLength={30}
                                required
                                value=''
                                onChange=''
                                onBlur=''
                            />
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