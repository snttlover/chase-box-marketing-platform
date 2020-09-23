import React from 'react';
import s from './Chat.module.css'
import onlineIcon from './../../img/onlineIcon.svg'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { useEffect, useRef } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import User from './User/User'
import { Helmet } from "react-helmet";
import axios from 'axios'

import { messageTextActionCreator } from './../../redux/Admin-reducer'
// import { newElementActionCreator } from './../../redux/Admin-reducer'
import { createDialogActionCreator } from './../../redux/Admin-reducer'
import { createMessageActionCreator } from './../../redux/Admin-reducer'
import { addNewUserActionCreator } from './../../redux/Admin-reducer'

import app from './../../base'
import { applyMiddleware } from 'redux'
// class Chat extends React.Component {
//     constructor(props) {
//         super(props)
//         this.remove="";
//         this.chatText = React.createRef();
//         this.messageText = "";
//         this.messages = [];
//         this.dialogObject="";
//         this.allUsers = [];
//         this.props.dispatch();
//         this.messagesEndRef = useRef(null);

//     }
//     onTextChange() {
//         this.messageText = this.chatText.current.value
//         this.props.dispatch(messageTextActionCreator(this.messageText));
//     };
//     jamToArray(snapshot) {

//         const returnArr = [];
//         snapshot.forEach(function (childSnapshot) {

//             const item = childSnapshot.val();

//             returnArr.push(item);
//         });
//         return returnArr;

//     };
//     getMessages() {
//         this.remove = ''

//         app.database().ref("users/" + this.props.chat.actualUser + "/messages").on('value', function (snapshort) {

//             this.props.dispatch(createDialogActionCreator(this.jamToArray(snapshort)))

//             // console.log(jamToArray(snapshort))
//         })
//         this.getUsers();

//         console.log(this.props.chat.usersData)
//     }
//     getUsers() {
//         app.database().ref().on('value', function (snapshort) {

//             // props.dispatch(createDialogActionCreator(jamToArray(snapshort)))

//             this.test = this.jamToArray(snapshort)
//             this.forin = Object.values(test).shift()

//             if (this.props.chat.usersData.length == 0) {

//                 for (var key in this.forin) {

//                     this.props.dispatch(addNewUserActionCreator(key))

//                 }
//             }
//         })

//     }
//     setMessage() {

//         this.messageText = this.chatText.current.value
//         this.dialogObject = {
//             text: this.messageText,
//             sender: 'companion'

//         }
//         this.props.dispatch(createMessageActionCreator(this.dialogObject))

//         app.database().ref('users/' + this.props.chat.actualUser + '/messages')
//             .set(this.props.chat.messagesData)
//         this.props.chat.messageText = ""
//     }
//     scrollToBottom() {
//         this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
//     }
//     handleButton(e) {

//         if (e.key === 'Enter') {
//             this.setMessage()
//         }
//     }
//     render() {

//         if (this.props.chat.messagesData.length === 0) {
//             app.database().ref("users/" + this.props.chat.actualUser + "/messages").on('value', function (snapshot) {

//                 this.props.dispatch(createDialogActionCreator(this.jamToArray(snapshot)))
//                 this.getMessages();
//                 // console.log(jamToArray(snapshort))
//             })
//         }
//         this.allUsers = this.props.chat.usersData.map((item) => {
//             return <User
//                 username={item}
//                 dispatch={this.props.dispatch} />
//         })


//         this.messages = this.props.chat.messagesData.map((item) => {

//             return <Message
//                 text={item.text}
//                 sender={item.sender} />
//         })
//         useEffect(this.scrollToBottom, [this.messages]);
//         if (this.messages.length === 0) {
//             this.remove = ''
//         } else this.remove = 'remove'
//         return (
//             <div>
//                 <div className={s.chat}>
//                     <div className={s.users}>
//                         {this.allUsers}
//                     </div>


//                     <div className={s.dialog}>
//                         <div className={s.infoBar}>
//                             <div className={s.leftInnerContainer}>
//                                 <img className={s.onlineIcon} src={onlineIcon} alt="online icon" />
//                                 <h3>Чат</h3>
//                             </div>
//                         </div>
//                         <div className={s.messages} >
//                             <div className="messages">
//                                 <div className={`${s.loading} ${this.remove}`}>Загрузка...</div>
//                                 {this.messages}
//                             </div>
//                             <div ref={this.messagesEndRef} />
//                         </div>
//                         <div className={s.input}>
//                             <div className={s.form}>
//                                 <input type="text" className={s.typeMessage}
//                                     ref={this.chatText}
//                                     value={this.props.chat.messageText}
//                                     onChange={this.onTextChange}
//                                     onKeyPress={this.handleButton} />
//                                 <button className={s.sendButton}
//                                     onClick={this.setMessage} onKeyDown={this.handleButton}>Отправить</button>

//                             </div>
//                         </div>
//                     </div>
//                     <Helmet>
//                         <title>Support</title>
//                         <meta name="Support"
//                             content={this.messages} />
//                     </Helmet>
//                 </div>
//             </div>
//         )
//     }
// }

const Chat = (props) => {
    let remove;
    let chatText = React.createRef();
    let messageText = ""
    // let messagesData
    let messages
    // let actualUser
    // let uidUser
    // let dialogLength
    let dialogObject
    // let users = []
    let allUsers
    // let usersArray = []
    let onTextChange = () => {
        messageText = chatText.current.value
        props.dispatch(messageTextActionCreator(messageText));
    };
    // let createMessage = () => {
    //     let messageText=message.current.value;
    //     props.dispatch(createMessageActionCreator(messageText))
    //     props.support.messageText="" 
    // };

    // app.database().ref('users/').on('value', function (snapshot){
    //     
    // })

    // if (props.chat.usersData.length === 0) {

    //     app.auth().onAuthStateChanged(function (user) {
    //         if (user) {
    //             getMessages()
    //             
    //             for(let i = 0; i< usersArray.length;i++){
    //                 actualUser=usersArray[i]
    //                 props.dispatch(newElementActionCreator(actualUser))
    //             }
    //             


    //         } else {

    //         }

    //     });
    //     props.chat.messagesData.push("jfoiwe")
    // }

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

        app.database().ref("users/" + props.chat.actualUser + "/messages").on('value', function (snapshort) {

            props.dispatch(createDialogActionCreator(jamToArray(snapshort)))

            // console.log(jamToArray(snapshort))
        })
        app.database().ref('users/' + props.chat.actualUser + '/send').set(false)

        getUsers();

        console.log(props.chat.usersData)
    }
    let getUsers = () => {
        app.database().ref().on('value', function (snapshort) {

            // props.dispatch(createDialogActionCreator(jamToArray(snapshort)))

            let test = jamToArray(snapshort)
            let forin = Object.values(test).shift()

            if (props.chat.usersData.length == 0) {

                for (var key in forin) {

                    props.dispatch(addNewUserActionCreator(key))

                }
            }
        })

    }
    // if (props.chat.messagesData.length === 0) {
    //     getMessages()
    // }
    if (props.chat.messagesData.length === 0) {
        app.database().ref("users/" + props.chat.actualUser + "/messages").on('value', function (snapshot) {

            props.dispatch(createDialogActionCreator(jamToArray(snapshot)))
            getMessages();
            // console.log(jamToArray(snapshort))
        })
    }





    let setMessage = () => {
        if (chatText.current.value != "") {
            messageText = chatText.current.value
            dialogObject = {
                text: messageText,
                sender: 'companion'

            }
            props.dispatch(createMessageActionCreator(dialogObject))
            // app.database().ref('users/' + props.chat.actualUser + '/notification').set(true)
            app.database().ref('users/' + props.chat.actualUser + '/send').set(false)

            app.database().ref('users/' + props.chat.actualUser + '/messages')
                .set(props.chat.messagesData)

            props.chat.messageText = ""
        }
    }
    // console.log(props.chat.usersData);


    allUsers = props.chat.usersData.map((item) => {
        let send = false

        app.database().ref('users/' + item + '/send').on("value", (snapshot) => {
            send = snapshot.val()
        })


        return <User
            username={item}
            dispatch={props.dispatch}
            send={send} />
    })


    messages = props.chat.messagesData.map((item) => {

        return <Message
            text={item.text}
            sender={item.sender} />
    })
    const messagesEndRef = useRef(null)
    let scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
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
    let sendForm = async () => {
        if (chatText.current.value != "") {
            let notif = false;
            app.database().ref('users/' + props.chat.actualUser + '/notification').on("value", (snapshot) => {
                notif = snapshot.val()
            })
            if (notif === false) {
                let email
                app.database().ref('users/' + props.chat.actualUser + '/notification').set(true)
                app.database().ref('users/' + props.chat.actualUser + '/email').on("value", (snapshot)=>{
                    email=snapshot.val()
                })
                
                let messageText = chatText.current.value
                let data = ""
                data = "Послание от ChaseBox!" + "\n" + messageText + "\n" + "http://ru.chase-box.com"

                const form = await axios.post('/api/form', {
                    data,
                    format: "messageBase",
                    email: email
                })

            } 
        }

    }
    return (
        <div className={s.chat}>
            <div className={s.users}>
                {allUsers}
            </div>


            <div className={s.dialog}>
                <div className={s.infoBar}>
                    <div className={s.leftInnerContainer}>
                        <img className={s.onlineIcon} src={onlineIcon} alt="online icon" />
                        <h3>Чат</h3>
                    </div>
                </div>
                <div className={s.messages} >
                    <div className="messages">
                        <div className={`${s.loading} ${remove}`}>Загрузка...</div>
                        {messages}
                    </div>
                    <div ref={messagesEndRef} />
                </div>
                <div className={s.input}>
                    <div className={s.form}>
                        <input type="text" className={s.typeMessage}
                            ref={chatText}
                            value={props.chat.messageText}
                            onChange={onTextChange}
                            onKeyPress={handleButton} />
                        <button className={s.sendButton}
                            onClick={() => {
                                setMessage()
                                sendForm()
                            }} onKeyDown={handleButton}>Отправить</button>

                    </div>
                </div>
            </div>
            <Helmet>
                <title>Support</title>
                <meta name="Support"
                    content={messages} />
            </Helmet>
        </div>
    );
}

export default Chat;