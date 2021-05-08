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
const FeedbackDOM = (props) => {

    
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
                            onChange={props.onTextChange}

                            ref={props.email}
                            value={props.feedback.email} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="name">Ваше имя</label>
                        <input name="name"
                            onChange={props.onTextChange}
                            ref={props.name}
                            value={props.feedback.name} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="object">Тема письма</label>
                        <input name="object"
                            onChange={props.onTextChange}
                            ref={props.object}
                            value={props.feedback.object} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="text">Текст письма</label>
                        <textarea name="text"
                            onChange={props.onTextChange}
                            ref={props.text}
                            value={props.feedback.text}
                            className={s.textarea} />
                    </div>
                    <div className={s.btn_wrap}>
                        <button className={`${s.submit_btn} ${props.disabled}`} onClick={() => {
                            props.open();
                            props.sendForm();
                        }}>{props.buttonText}</button>
                    </div>
                    <div ref={s.myModal} class={s.modal} style={{ display: props.feedback.showModal ? 'block' : 'none' }}>
                        <div class={s.modal_content}>
                            <span class={s.close} onClick={props.close}>&times;</span>
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


export default FeedbackDOM;