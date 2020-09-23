import React from 'react';
import s from './Vk.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from './../../Table/Table'
import { vkTargetingTextActionCreator } from './../../../redux/Smm-reducer'
import { createPositionActionCreator } from './../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import Info from './../../Info/Info'
const Vk = (props) => {
    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let onTextChange = () => {
        let linkText = link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        props.dispatch(vkTargetingTextActionCreator({ link: linkText, city: cityText, good: goodText }));
    };
    let disabled;
    let buttonText;
    if (props.vk.link != "" && props.vk.city != "" && props.vk.good != "") {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://vk.com/" + link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let id = props.table.elementsData.length;
        let section = props.vk.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({ id: id, section: section, name: name, link: linkText, positions: [cityText, goodText] }))
    };
    return (
        <div>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            VK
                            {/* <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                openInfo()
                                typeInfo("vkontakte")
                            }}>
                                <i className="far fa-question-circle"></i>
                            </a> */}
                        </div>
                    </div>
                </div>
                <nav>
                    <div className={s.links} >
                        <NavLink to="/smm/vk" exact className={s.navlink} activeClassName={s.act}><div className={s.link_text}>Таргетинг</div> <div className={s.active} ></div></NavLink>
                        <NavLink to="/smm/vk/banner" className={s.navlink} activeClassName={s.act}><div className={s.link_text}>Баннерная реклама</div> <div className={s.active} style={{ width: 148 + 'px' }}></div></NavLink>

                    </div>
                </nav>
                <div className={s.line}></div>

            </div>
        </div>
    );
}

export default Vk;