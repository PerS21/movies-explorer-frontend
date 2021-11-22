import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import { CurrentUserContext } from "./../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../utils/Validation";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const { values, handleChange, resetForm, errors, isValid } =
        useFormWithValidation();

    React.useEffect(() => {
        if (currentUser) {
            resetForm(currentUser, {}, true);
        }
    }, [currentUser, resetForm]);

    function handleSubmit(e) {
        e.preventDefault();
        props.onEditProfile({ email: values.email, name: values.name });
    }

    return (
        <section className="profile">
            <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__input-block">
                    <span className="profile__input-text">Имя</span>
                    <input
                        className="profile__input"
                        name="name"
                        id="name"
                        type="text"
                        autoComplete="off"
                        minLength={2}
                        maxLength={40}
                        required
                        value={values.name || currentUser.name}
                        onChange={handleChange}
                    ></input>
                </div>
                <span className="form__input-error" id="name-error">
                    {errors.name}
                </span>
                <div className="profile__input-block">
                    <span className="profile__input-text">E-mail</span>
                    <input
                        className="profile__input"
                        name="email"
                        type="email"
                        id="email"
                        required
                        autoComplete="off"
                        value={values.email || currentUser.email}
                        onChange={handleChange}
                        pattern='^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$'
                    ></input>
                </div>
                <span className="form__input-error" id="email-error">
                    {errors.email}
                </span>

                <button
                    type="submit"
                    className={`profile__submit clickable
                        ${isValid ? "" : "profile__submit-disabled"}
                        ${props.isSending ? "profile__submit-disabled" : ''}
                        ${
                            values.email === currentUser.email &&
                            values.name === currentUser.name &&
                            "profile__submit-disabled"
                          }`}
                >
                    Редактировать
                </button>
                <span className="form__input-error">{props.message}</span>
                <Link to="/">
                    <button
                        className='profile__logout clickable'
                        onClick={props.onSignOut}>
                        Выйти из аккаунта
                    </button>
                </Link>
            </form>
        </section>
    );
}

export default Profile;
