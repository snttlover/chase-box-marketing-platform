import React from 'react';
import s from './Messengers.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Table from '../../Table/Table'
import { Helmet } from "react-helmet";
import { addSumActionCreator } from './../../../redux/Table-reducer'
import { removeSumActionCreator } from './../../../redux/Table-reducer'
import { messengersTextActionCreator } from '../../../redux/Functions-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import Info from './../../Info/Info'
import MessengersDOM from './MessengersDOM';

const Messengers = (props) => {
    const cost = 3;

    let link = React.createRef();
    let type = React.createRef();
    let content = React.createRef();
    let num = React.createRef();
    let messenger = React.createRef();

    let linkText = ""
    let typeText = ""
    let contentText = ""
    let numText = ""
    let messengerText = ""
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let onTextChange = () => {

        linkText = link.current.value;
        typeText = type.current.value;
        contentText = content.current.value;
        numText = num.current.value;
        messengerText = messenger.current.value;
        props.dispatch(messengersTextActionCreator({ link: linkText, type: typeText, content: contentText, num: numText, messenger: messengerText }));
        console.log(props.messengers.messenger);


    };

    let disabled;
    let buttonText;
    if (props.messengers.link != "" && props.messengers.type != "" && props.messengers.content != "" && parseInt(props.messengers.num) >= 15000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        linkText = link.current.value;
        typeText = type.current.value;
        contentText = content.current.value;
        numText = num.current.value;
        messengerText = messenger.current.value;
        let id = props.table.elementsData.length;
        let section = props.messengers.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({budjet:parseInt(numText)*cost,time: "...", id: id, section: section, name: name, link: linkText, positions: [typeText, messengerText, numText+" ед."] }))
        props.dispatch(addSumActionCreator(parseInt(numText)*cost))

        props.messengers.link = ""
        props.messengers.type = ""
        props.messengers.content = ""
        props.messengers.messenger = ""

    };

    return (
    <MessengersDOM {...props} openInfo={openInfo} typeInfo={typeInfo} onTextChange={onTextChange} link={link}
    type={type} content={content} messenger={messenger} num={num} disabled={disabled} buttonText={buttonText} />
        );
}

export default Messengers;