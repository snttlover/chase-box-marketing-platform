import React from 'react';
import s from './Twitter.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from './../../Table/Table'
import { twitterTargetingTextActionCreator } from './../../../redux/Smm-reducer'
import { createPositionActionCreator } from './../../../redux/Table-reducer'

const Twitter = (props) => {
    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let onTextChange = () => {
        let linkText = link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        props.dispatch(twitterTargetingTextActionCreator({ link: linkText, city: cityText, good: goodText }));
    };
    let disabled;
    let buttonText;
    if (props.twitter.link != "" && props.twitter.city != "" && props.twitter.good != "") {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.twitter.com/" + link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let id = props.table.elementsData.length + 1;
        let section = props.twitter.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({ id: id, section: section, name: name, link: linkText, positions: [cityText, goodText] }))
        props.twitter.link = ""
        props.twitter.city = ""
        props.twitter.good = ""
    };
    return (
        <div>

            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            Twitter
                        </div>
                    </div>
                </div>
                <nav>
                    <div className={s.links} >
                        <NavLink to="/smm/twitter" exact className={s.navlink} activeClassName={s.act}><div className={s.link_text}>Таргетинг</div> <div className={s.active} ></div></NavLink>
                        <NavLink to="/smm/twitter/context" className={s.navlink} activeClassName={s.act}><div className={s.link_text}>Контекст</div> <div className={s.active} style={{ width: 63 + 'px' }}></div></NavLink>

                    </div>
                </nav>
                <div className={s.line}></div>

            </div>
        </div>
    );
}

export default Twitter;