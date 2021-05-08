import React from 'react';
import s from './Odnoklassniki.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { odnoklassnikiBannerTextActionCreator } from '../../../redux/Smm-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import {addSumActionCreator} from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
import OdnoklassnikiBannerDOM from './OdnoklassnikiBannerDOM';
const OdnoklassnikiBanner = (props) => {
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



        props.dispatch(odnoklassnikiBannerTextActionCreator({budjet: budjetText, time: timeText, link: linkText, city: cityText, good: goodText, content: contentText, disk: diskText }));


    };
    let disabled;
    let buttonText;
    if (props.odnoklassniki.link != "" && props.odnoklassniki.city != "" && props.odnoklassniki.good != "" && props.odnoklassniki.disk != "" && parseInt(props.odnoklassniki.time)>=1&& parseInt(props.odnoklassniki.budjet)>=3000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.ok.ru/" + link.current.value;


        cityText = city.current.value;
        goodText = good.current.value;
        contentText = content.current.value;
        diskText = disk.current.value;
        timeText = time.current.value;
        budjetText = parseInt(budjet.current.value)*parseInt(time.current.value);



        let id = props.table.elementsData.length;
        let section = props.odnoklassniki.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({ id: id,budjet: budjetText, time: timeText, section: section, name: name, link: linkText, positions: [diskText, cityText, goodText, contentText, "Недель: "+timeText, "Бюджет: ₽"+budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText)+parseInt(cost*parseInt(time.current.value))))
        
        props.odnoklassniki.link = ""
        props.odnoklassniki.city = ""
        props.odnoklassniki.good = ""
        props.odnoklassniki.content = ""
        props.odnoklassniki.disk = ""
        props.odnoklassniki.time = ""
        props.odnoklassniki.budjet = ""


    };


    return (
    <OdnoklassnikiBannerDOM {...props}  onTextChange={onTextChange} link={link} openInfo={openInfo} typeInfo={typeInfo}
    disk={disk} city={city} good={good} budjet={budjet} time={time} content={content} disabled={disabled} createPosition={createPosition}
    buttonText={buttonText} cost={cost} />
        );
}

export default OdnoklassnikiBanner;