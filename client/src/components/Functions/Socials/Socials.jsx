import React from 'react';
import s from './Socials.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Table from '../../Table/Table'
import { Helmet } from "react-helmet";
import { addSumActionCreator } from './../../../redux/Table-reducer'
import { removeSumActionCreator } from './../../../redux/Table-reducer'
import { socialsTextActionCreator } from '../../../redux/Functions-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import Info from './../../Info/Info'
import SocialsDOM from './SocialsDOM';

const Socials = (props) => {
    const cost = 3;

    let link = React.createRef();
    let type = React.createRef();
    let content = React.createRef();
    let num = React.createRef();
    let soc = React.createRef();


    let linkText = ""
    let typeText = ""
    let contentText = ""
    let numText = ""
    let socText = ""

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
        socText = soc.current.value
        props.dispatch(socialsTextActionCreator({ link: linkText, type: typeText, content: contentText, num: numText, soc: socText }));

    };

    let disabled;
    let buttonText;
    if (props.socials.link != "" && props.socials.type != "" && props.socials.soc != "" && props.socials.content != "" && parseInt(props.socials.num) >= 10000) {
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
        socText = soc.current.value;


        let id = props.table.elementsData.length;
        let section = props.socials.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({budjet:parseInt(numText)*cost,time: "...", id: id, section: section, name: name, link: linkText, positions: [typeText, socText, contentText, numText+" ед."] }))
        props.dispatch(addSumActionCreator(parseInt(numText)*cost))

        props.socials.link = ""
        props.socials.type = ""
        props.socials.content = ""
        props.socials.soc = ""

    };

    return (
    <SocialsDOM {...props} openInfo={openInfo} typeInfo={typeInfo} onTextChange={onTextChange} link={link} type={type}
    content={content} soc={soc} num={num} disabled={disabled} createPosition={createPosition} buttonText={buttonText} />
        );
}

export default Socials;