import { Route, Switch, Link } from 'react-router-dom';
import headerLogo from '../../images/banner.1c6262f1.png';
import './Promo.css';

function Promo() {
    return (
        <Switch>
            <Route path="/">
                <section className='promo'>
                    <div>
                        <h1 className='promo__title'>Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.</h1>
                        <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                        <Link to='/' className='promo__button clickable'>
                            Узнать больше
                        </Link>
                    </div>
                    <img src={headerLogo} alt="" className='promo__img' />
                </section>
            </Route>
        </Switch>
    );
}

export default Promo;