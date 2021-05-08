import React from 'react';
import s from './Target.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { targetingTextActionCreator } from './../../../redux/Site-reducer'
import { changeSocActionCreator } from './../../../redux/Site-reducer'

import { createPositionActionCreator } from './../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import { addSumActionCreator } from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
import TargetDOM from './TargetDOM';
const Target = (props) => {
    const cost = 3790;

    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let soc = React.createRef();
    let disk = React.createRef();
    let time = React.createRef();
    let budjet = React.createRef();



    let linkText = ""
    let cityText = ""
    let goodText = ""
    let socText = ""
    let diskText = ""
    let timeText = ""
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
        socText = soc.current.value;
        diskText = disk.current.value
        timeText = time.current.value;
        budjetText = budjet.current.value;
        debugger

        props.dispatch(targetingTextActionCreator({ budjet: budjetText, time: timeText, link: linkText, city: cityText, good: goodText, soc: socText, disk: diskText }));


    };
    let disabled;
    let buttonText;
    if (props.target.link != "" && props.target.city != "" && props.target.good != "" && props.target.soc != "-99999" && props.target.disk != "" && parseInt(props.target.time) >= 1 && parseInt(props.target.budjet) >= 3000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        linkText = link.current.value;
        socText = soc.current.value;
        cityText = city.current.value;
        goodText = good.current.value;
        diskText = disk.current.value;
        timeText = time.current.value;
        budjetText = parseInt(budjet.current.value) * parseInt(time.current.value);


        let id = props.table.elementsData.length;
        let section = props.target.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({ id: id, budjet: budjetText, time: timeText, section: section, name: name, link: linkText, positions: [diskText, socText, cityText, goodText, "Недель: " + timeText, "Бюджет: ₽" + budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText) + parseInt(cost * parseInt(time.current.value))))

        props.target.link = ""
        props.target.city = ""
        props.target.good = ""
        props.target.soc = ""
        props.target.disk = ""
        props.target.time = ""
        props.target.budjet = ""



    };


    return (
        <TargetDOM {...props} openInfo={openInfo} typeInfo={typeInfo} onTextChange={onTextChange}
            link={link} disk={disk} city={city} good={good} budjet={budjet} time={time} soc={soc}
            disabled={disabled} createPosition={createPosition} buttonText={buttonText} cost={cost} />
    );
}

export default Target;