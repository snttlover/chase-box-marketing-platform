import React from 'react';
import s from './Odnoklassniki.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { odnoklassnikiTargetingTextActionCreator } from '../../../redux/Smm-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import {addSumActionCreator} from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
import OdnoklassnikiTargetingDOM from './OdnoklassnikiTargetingDOM';
const OdnoklassnikiTargeting = (props) => {
    const cost = 3790;

    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let post = React.createRef();
    let time = React.createRef();
    let budjet = React.createRef();

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
        let postText = post.current.value;
        let timeText = time.current.value;
        let budjetText = budjet.current.value;

        props.dispatch(odnoklassnikiTargetingTextActionCreator({budjet: budjetText, time: timeText, link: linkText, city: cityText, good: goodText, post: postText }));
    };
    let disabled;
    let buttonText;
    if (props.odnoklassniki.link != "" && props.odnoklassniki.city != "" && props.odnoklassniki.good != "" && props.odnoklassniki.post!=""&& parseInt(props.odnoklassniki.time)>=1&& parseInt(props.odnoklassniki.budjet)>=3000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.ok.ru/" + link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let postText = post.current.value;
        let timeText = time.current.value;
        let budjetText = parseInt(budjet.current.value)*parseInt(time.current.value);


        let id = props.table.elementsData.length;
        let section = props.odnoklassniki.section;
        let name = props.name
        props.dispatch(createPositionActionCreator({ id: id,budjet: budjetText, time: timeText, section: section, name: name, link: linkText, positions: [postText, cityText, goodText,"Недель: "+timeText, "Бюджет: ₽"+budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText)+parseInt(cost*parseInt(time.current.value))))
        
        props.odnoklassniki.link = ""
        props.odnoklassniki.city = ""
        props.odnoklassniki.good = ""
        props.odnoklassniki.post = ""
        props.odnoklassniki.time = ""
        props.odnoklassniki.budjet = ""

    };
    return (
    <OdnoklassnikiTargetingDOM {...props} onTextChange={onTextChange} link={link} post={post} city={city}
    good={good} budjet={budjet} time={time} disabled={disabled} createPosition={createPosition} openInfo={openInfo}
    typeInfo={typeInfo} buttonText={buttonText} />
        );
}

export default OdnoklassnikiTargeting;