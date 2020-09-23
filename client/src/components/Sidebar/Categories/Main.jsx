import React from 'react';
import s from './../Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="act" className={s.category}>
                        <i className="fas fa-book-open"></i>  Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/main/breef" activeClassName="act" className={s.category}>
                        <i className="fas fa-bell"></i>  Рекламная компания
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/main/support" activeClassName="act" className={s.category}>
                        <i className="fas fa-comments"></i> Чат со специалистом
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/main/feedback" activeClassName="act" className={s.category}>
                        <i className="fas fa-envelope"></i>  Обратная связь
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Main;