import React from 'react';
import s from './Support.module.css'
import onlineIcon from './../../../img/onlineIcon.svg'
import loading from './../../../img/loading.svg'

import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { useEffect, useRef } from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import { Helmet } from "react-helmet";
import axios from 'axios'
import Info from './../../Info/Info'

import { messageTextActionCreator } from './../../../redux/Main-reducer'
import app from './../../../base'
import { createMessageActionCreator } from './../../../redux/Main-reducer'
import { createDialogActionCreator } from './../../../redux/Main-reducer'



const SupportDOM = (props) => {
    

    return (
        <div className={s.support}>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.infoBar}>
                <div className={s.leftInnerContainer}>
                    <img className={s.onlineIcon} src={onlineIcon} alt="online icon" />
                    <h3>Чат</h3>
                </div>
            </div>
            <div className={s.messages}>
                <div className="messages">
                    <div className={`${s.loading} ${props.remove}`}><img src={props.loading} /></div>
                    {props.messages}
                </div>
                <div ref={props.messagesEndRef} />

            </div>
            <div className={s.input}>
                <div className={s.form}>
                    <input
                        className={s.typeMessage}
                        type="text"
                        value={props.support.messageText}
                        placeholder="Введите сообщение..."
                        ref={props.message}
                        onChange={props.onTextChange}
                        onKeyPress={props.handleButton}
                    />
                    <button className={s.sendButton}
                        onClick={() => {

                            props.setMessage()
                            props.sendForm()
                        }} onKeyDown={props.handleButton}><i class="fas fa-location-arrow"></i></button>

                </div>
            </div>
            <Helmet>
                <title>Чат - ChaseBox</title>
                <meta name="Support"
                    content={ props.messages} />
            </Helmet>
        </div>
    );
}

export default SupportDOM;