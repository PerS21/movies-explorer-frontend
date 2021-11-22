import React from "react";
import { useHistory } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {

    const history = useHistory();

    function backClick() {
          history.goBack();
    }

    return (
        <section className="not-found">
            <h2 className="not-found__title">404</h2>
            <p className="not-found__subtitle">Страница не найдена</p>
            <button className="not-found__back-button clickable" onClick={backClick}>
                Назад
            </button>
        </section>
    );
};

export default PageNotFound;