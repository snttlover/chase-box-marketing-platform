import React from 'react';
import s from './../Sidebar.module.css';
import { NavLink } from "react-router-dom";

const Functions = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/func/traffic" activeClassName="act" className={s.category}>
                        <i className="fas fa-tachometer-alt"></i> Онлайн трафик
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/func/email" activeClassName="act" className={s.category}>
                        <i class="fas fa-at"></i>  E-mail рассылка
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/func/socials" activeClassName="act" className={s.category}>
                        <i class="fas fa-user-circle"></i>  Рассылка в социальных сетях
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/func/messengers" activeClassName="act" className={s.category}>
                        <i class="fas fa-envelope-square"></i>  Рассылка в мессенджерах
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Functions;