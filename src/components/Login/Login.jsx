import { Link } from 'react-router-dom';
import './Login.css';
import loginLogo from '../../images/logo.png';


function Login() {
    return (
        <section className="login">
            <Link to="/" className='login__logo'>
                <img
                    src={loginLogo}
                    alt="logo"
                />
            </Link>
            <form className="auth__form">
                <h1 className="form__title">Добро пожаловать!</h1>
                <div>
                    <div className='form__block'>
                        <p className="form__input-label">E-mail</p>
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
                        <p className="form__input-label">Пароль</p>
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
                </div>
                <button
                    type="submit"
                    className='form__submit'
                >
                    Войти
                </button>
            </form>
        </section>
    );
};

export default Login;