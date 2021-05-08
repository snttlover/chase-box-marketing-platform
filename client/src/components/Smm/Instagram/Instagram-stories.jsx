import React from 'react';
import s from './Instagram.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { instagramStoriesTextActionCreator } from '../../../redux/Smm-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import {addSumActionCreator} from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
import InstagramStoriesDOM from './InstagramStoriesDOM';
const InstagramStories = (props) => {
    const cost = 3790;

    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let content = React.createRef();
    let disk = React.createRef();
    let time = React.createRef();
    let budjet = React.createRef();


    let linkText = ""
    let cityText = ""
    let goodText = ""
    let contentText = ""
    let diskText = ""
    let timeText =""
    let budjetText = ""


    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let onTextChange = () => {

        linkText = link.current.value;
        cityText = city.current.value;
        goodText = good.current.value;
        contentText = content.current.value;
        diskText = disk.current.value;
        timeText = time.current.value;
        budjetText = budjet.current.value;



        props.dispatch(instagramStoriesTextActionCreator({budjet: budjetText, time: timeText, link: linkText, city: cityText, good: goodText, content: contentText, disk: diskText }));


    };
    let disabled;
    let buttonText;
    if (props.instagram.link != "" && props.instagram.city != "" && props.instagram.good != "" && props.instagram.disk!="" && parseInt(props.instagram.time)>=1&& parseInt(props.instagram.budjet)>=3000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.instagram.com/" + link.current.value;


        cityText = city.current.value;
        goodText = good.current.value;
        contentText = content.current.value;
        diskText = disk.current.value;
        timeText = time.current.value;
        budjetText = parseInt(budjet.current.value)*parseInt(time.current.value);



        let id = props.table.elementsData.length;
        let section = props.instagram.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({ id: id,budjet: budjetText, time: timeText, section: section, name: name, link: linkText, positions: [diskText, cityText, goodText, contentText, "Недель: "+timeText, "Бюджет: ₽"+budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText)+parseInt(cost*parseInt(time.current.value))))
        
        props.instagram.link = ""
        props.instagram.city = ""
        props.instagram.good = ""
        props.instagram.content = ""
        props.instagram.disk = ""
        props.instagram.time = ""
        props.instagram.budjet = ""


    };


    return (
        <InstagramStoriesDOM {...props}onTextChange={onTextChange}  link={link} city={city} good={good}
        content={content} openInfo={openInfo} typeInfo={typeInfo} disk={disk} budjet={budjet} disabled={disabled}
        time={time} createPosition={createPosition} buttonText={buttonText} />
        );
}

export default InstagramStories;