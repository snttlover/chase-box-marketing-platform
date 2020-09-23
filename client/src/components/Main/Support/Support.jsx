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



const Support = (props) => {
    let remove
    var Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;
    let message = React.createRef();
    let messagesData
    let messages
    let actualUser
    let uidUser
    let dialogLength
    let dialogObject
    let onTextChange = () => {

        let messageText = message.current.value

        props.dispatch(messageTextActionCreator(messageText));
    };
    // let createMessage = () => {
    //     let messageText=message.current.value;
    //     props.dispatch(createMessageActionCreator(messageText))
    //     props.support.messageText="" 
    // };

    if (props.support.messagesData.length === 0) {

        app.auth().onAuthStateChanged(function (user) {
            if (user) {

                actualUser = user.email.split('.').join("")
                uidUser = user.uid

                getMessages()

            } else {

            }
        });
    }

    function jamToArray(snapshot) {

        const returnArr = [];

        snapshot.forEach(function (childSnapshot) {

            const item = childSnapshot.val();

            returnArr.push(item);
        });
        return returnArr;
    };

    let getMessages = () => {
        remove = ''

        app.database().ref("users/" + actualUser + "/messages").on('value', function (snapshort) {
            props.dispatch(createDialogActionCreator(jamToArray(snapshort)))

        })
        app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/notification').set(false)
    }

    let setMessage = () => {
        if (props.support.messageText != "") {
            let messageText = message.current.value

            dialogLength = props.support.messagesData.length

            dialogObject = {
                text: messageText,
                sender: 'current'

            }

            props.dispatch(createMessageActionCreator(dialogObject))
            app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/messages')
                .set(props.support.messagesData)
            app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/notification').set(false)

            props.support.messageText = ""
        }


    }
    messages = props.support.messagesData.map((item) => {

        return <Message
            text={item.text}
            sender={item.sender} />
    })
    const messagesEndRef = useRef(null)
    let scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        // scroll.scrollToBottom({ behavior: "smooth" })
        // this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' })
    }
    useEffect(scrollToBottom, [messages]);
    if (messages.length === 0) {
        remove = ''
    } else remove = 'remove'
    let handleButton = (e) => {

        if (e.key === 'Enter') {
            setMessage()
            sendForm()
        }
    }
    let sendForm = async (e) => {
        

        if ( message.current.value != "") {
            
            let send = false;
            app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/send').on("value", (snapshot) => {
                send = snapshot.val()
            })
            if (send === false) {
                app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/send').set(true)

                let messageText = message.current.value
                let data = ""
                let user = app.auth().currentUser.email
                data = user + "\n" + messageText + "\n" + "http://ru.chase-box.com"


                const form = await axios.post('/api/form', {
                    data,
                    format: "message"
                })

            } 
        }

    }

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
                    <div className={`${s.loading} ${remove}`}><img src={loading} /></div>
                    {messages}
                </div>
                <div ref={messagesEndRef} />

            </div>
            <div className={s.input}>
                <div className={s.form}>
                    <input
                        className={s.typeMessage}
                        type="text"
                        value={props.support.messageText}
                        placeholder="Введите сообщение..."
                        ref={message}
                        onChange={onTextChange}
                        onKeyPress={handleButton}
                    />
                    <button className={s.sendButton}
                        onClick={() => {

                            setMessage()
                            sendForm()
                        }} onKeyDown={handleButton}><i class="fas fa-location-arrow"></i></button>

                </div>
            </div>
            <Helmet>
                <title>Чат - ChaseBox</title>
                <meta name="Support"
                    content={messages} />
            </Helmet>
        </div>
    );
}

export default Support;