import { Route, Switch } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import banner from '../../images/banner.svg';
import './Promo.css';

function Promo() {
    return (
        <Switch>
            <Route path="/">
                <section className='promo'>
                    <div>
                        <h1 className='promo__title'>Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.</h1>
                        <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                        <HashLink to='#about-project-id' className='promo__button clickable'>
                            Узнать больше
                        </HashLink>
                    </div>
                    <img src={banner} alt="баннер" className='promo__img' />
                </section>
            </Route>
        </Switch>
    );
}

export default Promo;