import React from 'react';
import s from './Instagram.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { instagramTargetingTextActionCreator } from '../../../redux/Smm-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import {addSumActionCreator} from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
import InstagramTargetingDOM from './InstagramTargetingDOM';
const InstagramTargeting = (props) => {
    const cost = 3790;

    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let post = React.createRef();
    let time = React.createRef();
    let budjet = React.createRef();

    let onTextChange = () => {

        let linkText = link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let postText = post.current.value;
        let timeText = time.current.value;
        let budjetText = budjet.current.value;

        props.dispatch(instagramTargetingTextActionCreator({budjet: budjetText, time: timeText, link: linkText, city: cityText, good: goodText, post: postText }));
    };
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let disabled;
    let buttonText;
    if (props.instagram.link != "" && props.instagram.city != "" && props.instagram.good != ""&& props.instagram.post != ""&& parseInt(props.instagram.time)>=1&& parseInt(props.instagram.budjet)>=3000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.instagram.com/" + link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let postText = post.current.value;
        let timeText = time.current.value;
        let budjetText = parseInt(budjet.current.value)*parseInt(time.current.value);


        let id = props.table.elementsData.length;
        let section = props.instagram.section;
        let name = props.name
        props.dispatch(createPositionActionCreator({ id: id,budjet: budjetText, time: timeText, section: section, name: name, link: linkText, positions: [postText,cityText, goodText, "Недель: " + timeText, "Бюджет: ₽"+budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText)+parseInt(cost*parseInt(time.current.value))))
        
        props.instagram.link = ""
        props.instagram.city = ""
        props.instagram.good = ""
        props.instagram.post = ""
        props.instagram.time = ""
        props.instagram.budjet = ""


    };
    return (
        <InstagramTargetingDOM {...props} onTextChange={onTextChange} link={link} city={city} good={good}
        post={post} budjet={budjet} time={time} disabled={disabled} createPosition={createPosition}
        openInfo={openInfo} typeInfo={typeInfo} buttonText={buttonText}cost={cost}/>
        );
}

export default InstagramTargeting;