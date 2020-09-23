import React from 'react';
import s from './../Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Site = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/site/seo" activeClassName="act" className={s.category}>
                        <i className="fas fa-sort-amount-up-alt"></i> SEO
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/site/target" activeClassName="act" className={s.category}>
                        <i className="fas fa-bullseye"></i>  Таргетинг
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/site/context" activeClassName="act" className={s.category}>
                        <i className="fas fa-sign"></i>  Контекстная реклама
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Site;