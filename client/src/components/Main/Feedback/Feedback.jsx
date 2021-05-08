import React from 'react';
import s from './Feedback.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Component } from 'react';
import { feedbackTextActionCreator } from './../../../redux/Main-reducer'
import { openModalActionCreator } from './../../../redux/Main-reducer'
import { closeModalActionCreator } from './../../../redux/Main-reducer'
import Info from './../../Info/Info'

import axios from 'axios'
import FeedbackDOM from './FeedbackDOM';
const Feedback = (props) => {

    let email = React.createRef();
    let name = React.createRef();
    let object = React.createRef();
    let text = React.createRef();

    // let componentDidMount = () => {
    //     email.current.value = email.current.value
    //   }
    let onTextChange = () => {
        let emailText = email.current.value;
        let nameText = name.current.value;
        let objectText = object.current.value;
        let textText = text.current.value;
        props.dispatch(feedbackTextActionCreator({ email: emailText, name: nameText, object: objectText, text: textText }));
    };
    let sendForm = async () => {

        let data = email.current.value + "\n" + text.current.value;
        let obj = object.current.value;
        let emailText = "";
        let nameText = "";
        let objectText = "";
        let textText = "";
        props.dispatch(feedbackTextActionCreator({ email: emailText, name: nameText, object: objectText, text: textText }))
        const form = await axios.post('/api/form', {
            data,
            format: "feedback",
            object: obj
        })

        clear();
    }
    let clear = () => {
    }
    let disabled;
    let buttonText;
    if (props.feedback.email != "" && props.feedback.name != "" && props.feedback.object != "" && props.feedback.text != "") {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let open = async () => {

        await props.dispatch(openModalActionCreator('feedback'))
    }
    let close = async () => {
        await props.dispatch(closeModalActionCreator('feedback'))
    }
    return (
        <FeedbackDOM {...props} onTextChange={onTextChange} email={email} name={name} object={object} text={text} 
        disabled={disabled} open={open} sendForm={sendForm} buttonText={buttonText} close={close} />
        );
}


export default Feedback;