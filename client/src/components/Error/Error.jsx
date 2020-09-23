import React from "react";
import s from './Error.module.css';
import { NavLink } from "react-router-dom";
import box from './../../img/box.svg'
const Error = () => {
  return (
    <div id={s.notfound}>
      <div className={s.notfound}>
        <div className={s.notfound_400}>
          <h1>4<span className={s.box}></span>4</h1>
        </div>
        <h2>Oops! СТРАНИЦА НЕ НАЙДЕНА</h2>
        <p>Извините, но страница, которую вы ищете, не существует, удалена, переименована или недоступна.</p>
        <NavLink to="/">Вернуться на главную страницу</NavLink>
      </div>
    </div>
  );
};

export default Error;
