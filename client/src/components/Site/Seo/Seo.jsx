import React, { useEffect, useState } from 'react';
import s from './Seo.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { seoTextActionCreator } from './../../../redux/Site-reducer'
import { createPositionActionCreator } from './../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import { addSumActionCreator } from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
import SeoDOM from './SeoDOM';
const Seo = (props) => {
    let link = React.createRef();
    let number = React.createRef();
    let content = React.createRef();
    let time = React.createRef();
    let budjet = React.createRef();


    let linkText = ""
    let numberText = ""
    let contentText = ""
    let timeText = ""
    let budjetText = ""

    let disabled;
    let buttonText;
    let errors = {
        link: false,
        number: false,
        content: false,
        time: false,
        budjet: false

    }
    let [touched, setTouched] = useState({
        link: '',
        number: '',
        content: '',
        time: '',
        budjet: ''
    })
    const validate = (link, number, content, time, budjet) => {

        return {
            link: link.length === 0,
            number: number.length === 0,
            content: false,
            time: time < 1,
            budjet: budjet < 7000,

        }
    }
    errors = validate(props.seo.link,
        props.seo.number,
        props.seo.content,
        props.seo.time,
        props.seo.budjet)


    const handleBlur = (field) => (evt) => {

        setTouched({
            ...touched,
            [field]: true
        })
    }
    const shouldMarkError = (field) => {

        const hasError = errors[field]
        const shouldShow = touched[field]
        return hasError ? shouldShow : false;
    }

    disabled = !Object.keys(errors).some(x => errors[x]) ? 'nodisabled' : 'disabled';
    buttonText = !Object.keys(errors).some(x => errors[x]) ? 'Подтвердить' : 'Заполните все поля';

    const cost = 9990;






    let onTextChange = () => {

        linkText = link.current.value;
        numberText = number.current.value;
        contentText = content.current.value;
        timeText = time.current.value;
        budjetText = budjet.current.value;




        props.dispatch(seoTextActionCreator({ budjet: budjetText, time: timeText, link: linkText, number: numberText, content: contentText }));


    };
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }

    if (props.seo.link != "" && props.seo.number != "" && parseInt(props.seo.time) >= 1 && parseInt(props.seo.budjet) >= 7000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }

    let createPosition = () => {

        for (let key in touched) {
            touched[key] = false
          }

        linkText = link.current.value;

        numberText = number.current.value;
        contentText = content.current.value;
        timeText = time.current.value;
        budjetText = parseInt(budjet.current.value) * parseInt(time.current.value);



        let id = props.table.elementsData.length;
        let section = props.seo.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({ id: id, budjet: budjetText, time: timeText, section: section, name: name, link: linkText, positions: [numberText, contentText, "Месяцев: " + timeText, "Бюджет: ₽" + budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText) + parseInt(cost * parseInt(time.current.value))))

        props.seo.link = ""
        props.seo.number = ""
        props.seo.content = ""
        props.seo.time = ""
        props.seo.budjet = ""



    };


    return (
        <SeoDOM {...props} openInfo={openInfo} typeInfo={typeInfo} onTextChange={onTextChange}
        link={link} handleBlur={handleBlur} shouldMarkError={shouldMarkError} onTextChange={onTextChange}
        number={number} handleBlur={handleBlur} shouldMarkError={shouldMarkError} budjet={budjet}
        time={time} content={content} cost={cost} disabled={disabled} createPosition={createPosition}
        buttonText={buttonText}/>
        );
}

export default Seo;