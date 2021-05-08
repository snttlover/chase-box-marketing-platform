import React from 'react';
import s from './Email.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Table from '../../Table/Table'
import { Helmet } from "react-helmet";
import { addSumActionCreator } from './../../../redux/Table-reducer'
import { removeSumActionCreator } from './../../../redux/Table-reducer'
import { emailTextActionCreator } from './../../../redux/Functions-reducer'
import { createPositionActionCreator } from './../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import Info from './../../Info/Info'
import EmailDOM from './EmailDOM';

const Email = (props) => {
    const cost = 1;
    let link = React.createRef();
    let type = React.createRef();
    let content = React.createRef();
    let num = React.createRef();
    let linkText = ""
    let typeText = ""
    let numText = ""
    let contentText = ""



    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let onTextChange = () => {

        linkText = link.current.value;
        typeText = type.current.value;
        numText = num.current.value;
        contentText = content.current.value;


        props.dispatch(emailTextActionCreator({ link: linkText, type: typeText, num: numText, content: contentText }));


    };
    let disabled;
    let buttonText;
    if (props.email.link != "" && props.email.type != "" && props.email.content != "" && parseInt(props.email.num) >= 20000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        linkText = link.current.value;
        typeText = type.current.value;
        numText = num.current.value;
        contentText = content.current.value;
        let id = props.table.elementsData.length;
        let section = props.email.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({budjet:parseInt(numText)*cost,time: "...", id: id, section: section, name: name, link: linkText, positions: [typeText, numText+" ед.", contentText] }))
        props.dispatch(addSumActionCreator(parseInt(numText)*cost))

        console.log(props.email.content);

        props.email.link = ""
        props.email.type = ""
        props.email.content = ""
        props.email.num = ""
        props.email.content = ""
    };

    return (
    <EmailDOM {...props} openInfo={openInfo} typeInfo={typeInfo} onTextChange={onTextChange} link={link} type={type}
    content={content} num={num} disabled={disabled} createPosition={createPosition} buttonText={buttonText} />
        );
}

export default Email;