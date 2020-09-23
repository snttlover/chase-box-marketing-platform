import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import s from './Auth.module.css'
import box from "./img/box.svg"
import { Helmet } from "react-helmet";

import { NavLink } from "react-router-dom";
import { setErrorActionCreator } from './redux/Auth-reducer.js'
const ForgetPass = (history) => {
  let error = "fwe";
  // history.dispatch(setErrorActionCreator(''))
  const handleLogin = useCallback(
    async event => {

      event.preventDefault();
      const { email } = event.target.elements;



      try {
        history.dispatch(setErrorActionCreator(''))
        console.log(email.value)

        await app
          .auth()
          .sendPasswordResetEmail(email.value)
          .then(function () {
            history.dispatch(setErrorActionCreator("Письмо отправлено"))
          })
          .catch(err => {
            console.log(err);

            switch (err.code) {

              case 'auth/wrong-password': history.dispatch(setErrorActionCreator('Неверный логин или пароль'));
                break;
              case "auth/email-already-in-use": history.dispatch(setErrorActionCreator('Этот пользователь уже зарегистрирован'));
                break;
              case "auth/weak-password": history.dispatch(setErrorActionCreator('Пароль должен должен содержать не менее 6 символов'));
                break;
              case "auth/user-not-found": history.dispatch(setErrorActionCreator('Такого пользователя не существует'));
                break;
              case "auth/invalid-email": history.dispatch(setErrorActionCreator('Неверный формат электронной почты'));
                break;
              case err.code: history.dispatch(setErrorActionCreator(err.message));
                break;


            }
            // console.log(err.code);
          });
        history.push("/login");
        // history.dispatch(setErrorActionCreator('Письмо отправлено на вашу электронную почту'))

      } catch (err) {
      }
    },
    [history]
  );
  const resetError = () => {
    history.dispatch(setErrorActionCreator(''))

  }
  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className={s.joinOuterContainer}>
       <div className={s.joinInnerContainer}>
        <div className={s.logo_box}>
          <img src={box} className={s.img} alt="" />

        </div>
        <div className={s.main_form}>
          <h1 className={s.heading}>Забыли пароль?</h1>
          
          <form onSubmit={handleLogin}>

            <div className={s.form_input}>
              <input className={s.joinInput} name="email" type="email" placeholder="Email" />
            </div>
            <div className={s.error}>
            {history.error}
          </div>
            {/* <div>
          <Recaptcha sitekey="" render="explicit" onloadCallback={callback}/>
        </div> */}
            <div className={s.button_form}>
              <button className={s.button} type="submit">Восстановить пароль</button>
            </div>
            <div className={s.switch_auth}>
               <NavLink to="/login" className={s.other} onClick={resetError}>
                  Войти в аккаунт
                </NavLink>
            </div>
            

          </form>
        </div>
      </div>

      <Helmet>
        <title>Восстановление пароля - ChaseBox</title>
        <meta name="ForgetPass" />
      </Helmet>
    </div>
  );
};

export default withRouter(ForgetPass);