import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import Recaptcha from "react-recaptcha";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import s from './Auth.module.css'
import box from "./img/box.svg"
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

import { setErrorActionCreator } from './redux/Auth-reducer.js'
import { verifyActionCreator } from './redux/Auth-reducer.js'

const Login = (history) => {
  let error = "fwe";
  
  const handleLogin = useCallback(

    async event => {
      

      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.style.display = "none"
        }, 3000)
      }
      event.preventDefault();
      const { email, password } = event.target.elements;
      localStorage.setItem('email', email.value);
      localStorage.setItem('password', password.value);


      try {
        

        history.dispatch(setErrorActionCreator(''))


        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
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
              case "auth/too-many-requests": history.dispatch(setErrorActionCreator('Слишком много неудачных попыток. Попробуйте позже'));
                break;
                case "auth/network-request-failed": history.dispatch(setErrorActionCreator('Ошибка сети. Попробуйте позже или используйте VPN'));
                break;
              case err.code: history.dispatch(setErrorActionCreator(err.message));
                break;
                


            }
            // console.log(err.code);
          });
        let actualUser = app.auth().currentUser.email.split('.').join("")
        function jamToArray(snapshot) {

          const returnArr = [];

          snapshot.forEach(function (childSnapshot) {

            const item = childSnapshot.val();
            console.log(item);

            returnArr.push(item);
          });

          return returnArr;
        };
        app.database().ref("users/" + actualUser).on('value', snapshort => {
          if (jamToArray(snapshort).length == 5) {
            let campaigns = {
              0: {
                section: "default",
                link: "default",
                cabinet: "default",
                date: "default"

              }
            }
            let activePositions = 0
            let allPositions = 0
            let sum = 0

            let obj = snapshort.val()
            obj["campaigns"] = campaigns;
            obj["activePositions"] = activePositions;
            obj["allPositions"] = allPositions;
            obj["sum"] = sum;
            

            console.log(obj);
            app.database().ref('users/').child(actualUser).set(obj)


          }
          if (jamToArray(snapshort).length == 6) {

            let activePositions = 0
            let allPositions = 0
            let sum = 0

            let obj = snapshort.val()
            obj["activePositions"] = activePositions;
            obj["allPositions"] = allPositions;
            obj["sum"] = sum;
            

            console.log(obj);
            app.database().ref('users/').child(actualUser).set(obj)


          }

        })



        // history.push("/");
        // console.log(app.database().ref("users/" + email.split('.').join("") + "/campaigns"));


      } catch (err) {

      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  
  // if (currentUser) {
  //   
  //   return <Redirect to="/" />;
  // }
  const resetError = () => {
    history.dispatch(setErrorActionCreator(''))

  }
  // if(history.isVerified){
  //   console.log("fwef");

  // }
  return (
    <div className={s.joinOuterContainer}>
      <div className={s.joinInnerContainer}>
        <div className={s.logo_box}>
          <img src={box} className={s.img} alt="" />

        </div>
        <div className={s.main_form}>
          <h1 className={s.heading}>Войти</h1>

          <form onSubmit={handleLogin}>

            <div className={s.form_input}>
              <input className={s.joinInput} name="email" type="email" placeholder="Email" />
            </div>
            <div className={s.form_input}>
              <input name="password" type="password" placeholder="Пароль" className={s.joinInput} />

            </div>

            <div className={s.forget_pass}>
              <NavLink to="/forgetpass" className={s.reset_pass} onClick={resetError}>
                Забыли пароль?
              </NavLink>
            </div>
            <div className={s.error}>
              {history.error}
            </div>
            {/* <div>
          <Recaptcha sitekey="" render="explicit" onloadCallback={callback}/>
        </div> */}
            <div className={s.button_form}>
              <button className={s.button} type="submit">Войти</button>
            </div>
            <div className={s.switch_auth}>
              Впервые в ChaseBox? <NavLink to="/signup" onClick={resetError} className={s.other}>
                Зарегистрируйтесь
        </NavLink>
            </div>


          </form>

        </div>
      </div>

      <Helmet>
        <title>Войти в аккаунт - ChaseBox</title>
        <meta name="Login"
        />
      </Helmet>
    </div>
  );
};

export default withRouter(Login);