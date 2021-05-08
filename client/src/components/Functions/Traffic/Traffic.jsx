import React from 'react';
import s from './Traffic.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Table from '../../Table/Table'
import { Helmet } from "react-helmet";
import { addSumActionCreator } from './../../../redux/Table-reducer'
import { removeSumActionCreator } from './../../../redux/Table-reducer'

import { trafficTextActionCreator } from './../../../redux/Functions-reducer'
import { createPositionActionCreator } from './../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import Info from './../../Info/Info'
import TrafficDOM from './TrafficDOM';
const Traffic = (props) => {
    const cost = 6;

    let link = React.createRef();
    // let ref = React.createRef();
    // let content = React.createRef();
    let num = React.createRef();

    let linkText = ""
    // let refText = ""
    // let contentText = ""
    let numText = ""

    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }

    let onTextChange = () => {

        linkText = link.current.value;
        // refText = ref.current.value;
        // contentText = content.current.value;
        numText = num.current.value;


        props.dispatch(trafficTextActionCreator({ link: linkText, num: numText }));


    };
    let disabled;
    let buttonText;
    if (props.traffic.link != "" && parseInt(props.traffic.num) >= 5000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        linkText = link.current.value;
        // refText = ref.current.value;
        // contentText = content.current.value;
        numText = num.current.value;
        let id = props.table.elementsData.length;
        let section = props.traffic.section;
        let name = props.name;
        debugger
        props.dispatch(createPositionActionCreator({budjet:parseInt(numText)*cost, time: "...", id: id, section: section, name: name, link: linkText, positions: [numText+" ед."] }))
        props.dispatch(addSumActionCreator(parseInt(numText)*cost))
        props.traffic.link = ""
        props.traffic.ref = ""
        // props.traffic.content = ""
        props.traffic.num = ""
    };

    return (
    <TrafficDOM {...props} openInfo={openInfo} typeInfo={typeInfo} onTextChange={onTextChange} link={link} num={num}
    disabled={disabled} createPosition={createPosition} buttonText={buttonText} />
        );
}

export default Traffic;