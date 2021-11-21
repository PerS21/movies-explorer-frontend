import React from "react";
import headerLogo from '../../images/logo.svg';
import burger from '../../images/burger.svg';
import close from '../../images/close.svg';
import { Route, Switch, Link } from 'react-router-dom';
import './Header.css';
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn }) {
    const [isOpen, setIsOpen] = React.useState(false);

    function mobNavOpenTogle(a) {
        console.log(11)
        setIsOpen(!isOpen)
    }

    const openClass = isOpen ? 'mob-nav__open' : '';

    return (
        <Switch>
            <Route exact path={['/movies', '/saved-movies', '/profile', '/']}>
                {loggedIn ?
                    <header className='header header_color-false'>
                        <Link to="/">
                            <img
                                className="header__logo"
                                src={headerLogo}
                                alt="Лого"
                            />
                        </Link>
                        <div className='dect-nav'>
                            <Navigation />
                        </div>
                        <div className={`mob-nav ${openClass}`}>
                            <div className='mob-nav__conteiner'>
                                <div className='mob-nav__button-cont' onClick={mobNavOpenTogle}>
                                    <button className='mob-nav__button clickable'>
                                        <img src={close} alt="моб меню" />
                                    </button>
                                </div>
                                <Navigation />
                            </div>
                        </div>
                        <button className='mob-nav__button mob-nav__open-button clickable' onClick={mobNavOpenTogle}>
                            <img src={burger} alt="моб меню" />
                        </button>
                    </header> :
                    <header className='header'>
                        <Link to='/' className='clickable'>
                            <img src={headerLogo} alt="logo" />
                        </Link>
                        <nav className='header__auth-section'>
                            <Link to='/signup' className='header__text clickable'>
                                Регистрация
                            </Link>
                            <Link to='/signin' className='header__button clickable'>Войти</Link>
                        </nav>
                    </header>
                }
            </Route>
        </Switch>
    );
}

export default Header;