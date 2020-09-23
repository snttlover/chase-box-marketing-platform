import React from 'react';
import s from './Facebook.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Table from '../../Table/Table'
import { facebookTargetingTextActionCreator } from '../../../redux/Smm-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import Info from './../../Info/Info'

const Facebook = (props) => {
    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let onTextChange = () => {
        let linkText = link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        props.dispatch(facebookTargetingTextActionCreator({ link: linkText, city: cityText, good: goodText }));
    };
    let disabled;
    let buttonText;
    if (props.facebook.link != "" && props.facebook.city != "" && props.facebook.good != "") {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let createPosition = () => {
        let linkText = "https://www.facebook.com/" + link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let id = props.table.elementsData.length;
        let section = props.facebook.section;
        let name = props.name
        props.dispatch(createPositionActionCreator({ id: id, section: section, name: name, link: linkText, positions: [cityText, goodText] }))
        props.facebook.link = ""
        props.facebook.city = ""
        props.facebook.good = ""
    };
    return (
        <div>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />
            
            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            Facebook
                            {/* <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                openInfo()
                                typeInfo("fb")
                            }}>
                                <i className="far fa-question-circle"></i>
                            </a> */}
                        </div>
                    </div>
                </div>
                
                <div className={s.line}></div>

            </div>
        </div>
    );
}

export default Facebook;