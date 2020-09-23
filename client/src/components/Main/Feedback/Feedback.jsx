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
const Feedback = (props) => {

    let email = React.createRef();
    let name = React.createRef();
    let object = React.createRef();
    let text = React.createRef();

    let componentDidMount = () => {
        email.current.value = email.current.value
      }
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
        <div className={s.feedback}>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            Обратная связь
                        </div>
                    </div>
                </div>
                <div className={s.line}></div>

            </div>
            <div className={s.forms}>
                <div className={s.card}>
                    <div className={s.input_block}>
                        <label htmlFor="email">Ваш E-mail</label>
                        <input name="email"
                            onChange={onTextChange}

                            ref={email}
                            value={props.feedback.email} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="name">Ваше имя</label>
                        <input name="name"
                            onChange={onTextChange}
                            ref={name}
                            value={props.feedback.name} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="object">Тема письма</label>
                        <input name="object"
                            onChange={onTextChange}
                            ref={object}
                            value={props.feedback.object} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="text">Текст письма</label>
                        <textarea name="text"
                            onChange={onTextChange}
                            ref={text}
                            value={props.feedback.text}
                            className={s.textarea} />
                    </div>
                    <div className={s.btn_wrap}>
                        <button className={`${s.submit_btn} ${disabled}`} onClick={() => {
                            open();
                            sendForm();
                        }}>{buttonText}</button>
                    </div>
                    <div ref={s.myModal} class={s.modal} style={{ display: props.feedback.showModal ? 'block' : 'none' }}>
                        <div class={s.modal_content}>
                            <span class={s.close} onClick={close}>&times;</span>
                            <p>Ваше письмо отправлено</p>
                        </div>
                    </div>
                </div>
            </div>
            <Helmet>
                <title>Обратная связь - ChaseBox</title>
                <meta name="Feedback"
                    content={props.feedback.name} />
            </Helmet>
        </div>
    );
}


export default Feedback;