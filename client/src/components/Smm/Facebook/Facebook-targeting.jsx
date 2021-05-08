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
import {addSumActionCreator} from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
import FacebookTargetingDOM from './FacebookTargetingDOM';

const FacebookTargeting = (props) => {
    const cost = 3790;

    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let disk = React.createRef();
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
        let diskText = disk.current.value;
        let timeText = time.current.value;
        let budjetText = budjet.current.value;

        props.dispatch(facebookTargetingTextActionCreator({budjet: budjetText, time: timeText, link: linkText, city: cityText, good: goodText, disk: diskText }));
    
    };
    let disabled;
    let buttonText;
    if (props.facebook.link != "" && props.facebook.city != "" && props.facebook.good != "" && props.facebook.disk != ""&& parseInt(props.facebook.time)>=1&& parseInt(props.facebook.budjet)>=3000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.facebook.com/" + link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let diskText = disk.current.value;
        let timeText = time.current.value;
        let budjetText = parseInt(budjet.current.value)*parseInt(time.current.value);

        let id = props.table.elementsData.length;
        let section = props.facebook.section;
        let name = props.name
        props.dispatch(createPositionActionCreator({ id: id,budjet: budjetText,time: timeText, section: section, name: name, link: linkText, positions: [diskText, cityText, goodText, "Недель: "+timeText, "Бюджет: ₽"+budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText)+parseInt(cost*parseInt(time.current.value))))
        
        props.facebook.link = ""
        props.facebook.city = ""
        props.facebook.good = ""
        props.facebook.disk = ""
        props.facebook.time = ""
        props.facebook.budjet = ""

    };
    return (
        <FacebookTargetingDOM {...props} onTextChange={onTextChange} link={link} onTextChange={onTextChange}
        disk={disk} city={city} good={good} budjet={budjet} time={time} disabled={disabled} createPosition={createPosition}
        openInfo={openInfo} typeInfo={typeInfo} buttonText={buttonText}/>
    );
}

export default FacebookTargeting;