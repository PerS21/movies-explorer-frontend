import { Route, Switch } from 'react-router-dom';
import Promo from '../Promo/Promo';
import AboutProject from "./../AboutProject/AboutProject";
import Techs from "./../Techs/Techs";
import AboutMe from "./../AboutMe/AboutMe";

function Main() {
    return (
            <Switch>
                <Route path="/">
                    <Promo />
                    <AboutProject />
                    <Techs />
                    <AboutMe />
                </Route>
            </Switch>
    );
}

export default Main;