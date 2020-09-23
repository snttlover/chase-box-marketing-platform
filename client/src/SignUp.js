import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import firebase from 'firebase'
import s from './Auth.module.css'
import box from "./img/box.svg"

import { Helmet } from "react-helmet";

import { NavLink } from "react-router-dom";
import { setErrorActionCreator } from './redux/Auth-reducer.js'

const SignUp = (history) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const ele = document.getElementById('ipl-progress-indicator')
    ele.style.display = "block"
    const { email, password } = event.target.elements;
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('path', "/");

    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .catch(err => {
          console.log(err);
          localStorage.setItem('email', "");
          localStorage.setItem('password', "");
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
              case "auth/network-request-failed": history.dispatch(setErrorActionCreator('Ошибка сети. Попробуйте позже или используйте VPN'));
              break;
            case err.code: history.dispatch(setErrorActionCreator(err.message));
              break;
          }
        });

      let newName = app.auth().currentUser.email.split('.').join("")
      let firstMessage = 0
      let newUser = {
        messages: {
          [firstMessage]: {
            text: "Это чат для общения с нашими специалистами",
            sender: "companion"
          }
        },
        cabinets: {
          [firstMessage]: {
            type: "default",
            data: "0"
          }
        },
        campaigns: {
          [firstMessage]: {
            section: "default",
            link: "default",
            cabinet: "default",
            date: "default"

          }
        },
        notification: false,
        send: false,
        email: app.auth().currentUser.email,
        activePositions: 0,
        allPositions: 0,
        sum: 0


      }
      console.log(newName)

      // let key = app.database().ref('users/').push(newUser).key
      app.database().ref('users/').child(newName).set(newUser)

      // app.database().ref('users').child(key).setValue(newUser)
      // app.database().ref('users').on('value', function(snapshot){
      //   console.log(snapshot.val())
      // })
      // console.log(key)
      // let ref = app.database().ref('users')

      history.push("/");

    } catch (err) {
      // localStorage.setItem('email', "");
      //       localStorage.setItem('password', "");
    }

  }, [history]);
  const resetError = () => {
    history.dispatch(setErrorActionCreator(''))

  }
  return (
    <div className={s.joinOuterContainer}>
      <div className={s.joinInnerContainer}>
        <div className={s.logo_box}>
          <img src={box} className={s.img} alt="" />

        </div>
        <h1 className={s.heading}>Регистрация</h1>
        
        <form onSubmit={handleSignUp}>
          <div className={s.form_input}>
            <input className={s.joinInput} name="email" type="email" placeholder="Email" />
          </div>
          <div className={s.form_input}>
            <input name="password" placeholder="Пароль" className={s.joinInput} type="password" />
          </div>
          <div className={s.tip}>
              <span>Используйте не менее 8 символов</span>
            </div>
            <div className={s.error}>
            {history.error}
          </div>
          <div className={s.button_form}>

            <button className={s.button} type="submit">Зарегистрироваться</button>
          </div>
          <div className={s.terms}>
            <span>
            Нажимая «Зарегистрироваться», вы соглашаетесь с нашими правилами (<a href="https://chase-box.com/terms.pdf" target="_blank" className={s.other}>
               Пользовательское соглашение
        </a>), включая способ сбора и обработки ваших персональных данных
            </span>
          </div>
          <div className={s.switch_auth}>
              Уже есть аккаунт? <NavLink onClick={resetError} to="/login" className={s.other}>
              Войти прямо сейчас
        </NavLink>
            </div>


        </form>
      </div>
      <Helmet>
        <title>Регистрация - ChaseBox</title>
        <meta name="SignUp" />
      </Helmet>

    </div>
  );
};

export default withRouter(SignUp);