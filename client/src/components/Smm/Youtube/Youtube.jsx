import React from 'react';
import s from './Youtube.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import { youtubeTextActionCreator } from "../../../redux/Smm-reducer"
import Table from './../../Table/Table'
import { youtubeTargetingTextActionCreator } from './../../../redux/Smm-reducer'
import { createPositionActionCreator } from './../../../redux/Table-reducer'

const Youtube = (props) => {
    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let onTextChange = () => {
        let linkText = link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        props.dispatch(youtubeTargetingTextActionCreator({ link: linkText, city: cityText, good: goodText }));
    };
    let disabled;
    let buttonText;
    if (props.youtube.link != "" && props.youtube.city != "" && props.youtube.good != "") {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.youtube.com/channel/" + link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let id = props.table.elementsData.length;
        let section = props.youtube.section;
        props.dispatch(createPositionActionCreator({ id: id, section: section, link: linkText, positions: [cityText, goodText] }))
        props.youtube.link = ""
        props.youtube.city = ""
        props.youtube.good = ""
    };
    return (
        <div>
            
            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            YouTube
                        </div>
                    </div>
                </div>
                <nav>
                    <div className={s.links} >
                            <NavLink to="/smm/youtube" exact className={s.navlink} activeClassName={s.act}><div className={s.link_text}>Таргетинг</div> <div className={s.active} ></div></NavLink>
                            <NavLink to="/smm/youtube/context" className={s.navlink} activeClassName={s.act}><div className={s.link_text}>Контекст</div> <div className={s.active} style={{width: 63 + 'px'}}></div></NavLink>

                    </div>
                </nav>
                <div className={s.line}></div>

            </div>

        </div>
    );
}

export default Youtube;