import React from 'react';
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import logo from '../../img/gregory.svg';
import ava from '../../img/ava.svg';
import app from "./../../base";
import Sidebar from './../Sidebar/Sidebar'
import { nameActionCreator } from './../../redux/Header-reducer'
import { updateActionCreator } from './../../redux/Header-reducer'
import { showSidebarActionCreator } from './../../redux/Header-reducer'

import { preloaderReducer } from '../../redux/Preloader-reducer';
import Info from './../Info/Info'
import { openInfoModalActionCreator } from './../../redux/Info-reducer'
import { typeActionCreator } from './../../redux/Info-reducer'
import HeaderDOM from './HeaderDOM';



const Header = (props) => {
    if (typeof localStorage.getItem("activePositions") === "undefined") {
        localStorage.setItem("activePositions", "")
    }
    if (typeof localStorage.getItem("camps") === "undefined") {
        localStorage.setItem("camps", "")
    } if (typeof localStorage.getItem("checkId") === "undefined") {
        localStorage.setItem("checkId", "")
    } if (typeof localStorage.getItem("create") === "undefined") {
        localStorage.setItem("create", "")
    } if (typeof localStorage.getItem("data") === "undefined") {
        localStorage.setItem("data", "")
    } if (typeof localStorage.getItem("email") === "undefined" || localStorage.getItem("email") === "") {
        localStorage.setItem("email", "ttt.ttt")
    }
    if (typeof localStorage.getItem("password") === "undefined") {
        localStorage.setItem("password", "")
    }
    if (typeof localStorage.getItem("path") === "undefined") {
        localStorage.setItem("path", "")
    } if (typeof localStorage.getItem("paymentId") === "undefined") {
        localStorage.setItem("paymentId", "")
    } if (typeof localStorage.getItem("paymentMethod") === "undefined") {
        localStorage.setItem("paymentMethod", "")
    } if (typeof localStorage.getItem("paymentStatus") === "undefined") {
        localStorage.setItem("paymentStatus", "")
    } if (typeof localStorage.getItem("setActivePositions") === "undefined") {
        localStorage.setItem("setActivePositions", "")
    } if (typeof localStorage.getItem("setAllPositions") === "undefined") {
        localStorage.setItem("setAllPositions", "")
    } if (typeof localStorage.getItem("setSum") === "undefined") {
        localStorage.setItem("setSum", "")
    } if (typeof localStorage.getItem("sum") === "undefined") {
        localStorage.setItem("sum", "")
    } if (typeof localStorage.getItem("table") === "undefined") {
        localStorage.setItem("table", "")
    }
    console.log(localStorage.getItem('email'));

    let notification = false;
    let actualUser
    let uidUser

    // app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + "/notification").on("value", snapshot => {
    // if (localStorage.getItem('email') !== "" && typeof localStorage.getItem('email') !== "undefined") {
    //     app.database().ref('users/' + localStorage.getItem("email").split('.').join("") + "/notification").on("value", snapshot => {

    //         notification = snapshot.val()

    //     })
    // }

    const logOut = () => {
        const ele = document.getElementById('ipl-progress-indicator')
        localStorage.setItem('email', "");
        localStorage.setItem('password', "");
        ele.style.display = "block"
        app.auth().signOut().then(function () {
            window.location = 'login';
        })

    }
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    // let showSidebar = () => {

    //     props.dispatch(showSidebarActionCreator())
    // }
    // let changeScreen = () => {
    //     switch (window.location.pathname) {

    //         case '/': case '/main/breef': case '/main/support': case '/main/feedback': {
    //             mainActive = 'activeHeader'
    //             funcActive = ''
    //             siteActive = ''
    //             smmActive = ''
    //         } break;
    //         case '/func/traffic': case '/func/email': case '/func/socials': case '/func/messengers': {
    //             funcActive = 'activeHeader'
    //             mainActive = ''
    //             siteActive = ''
    //             smmActive = ''

    //         } break;
    //         case '/site/seo': case '/site/context': case '/site/target': {
    //             funcActive = ''
    //             mainActive = ''
    //             siteActive = 'activeHeader'
    //             smmActive = ''

    //         } break;
    //         case '/smm/youtube': case '/smm/youtube/context': case '/smm/instagram': case '/smm/instagram/context': case '/smm/vk': case '/smm/vk/context': case '/smm/twitter': case '/smm/twitter/context': case '/smm/facebook': case '/smm/facebook/context': {
    //             funcActive = ''
    //             mainActive = ''
    //             siteActive = ''
    //             smmActive = 'activeHeader'

    //         } break;
    //     }
    //     props.dispatch(updateActionCreator())
    // }
    // switch (window.location.pathname) {

    //     case '/': case '/main/breef': case '/main/support': case '/main/feedback': {
    //         mainActive = 'activeHeader'
    //         funcActive = ''
    //         siteActive = ''
    //         smmActive = ''
    //     } break;
    //     case '/func/traffic': case '/func/email': case '/func/socials': case '/func/messengers': {
    //         funcActive = 'activeHeader'
    //         mainActive = ''
    //         siteActive = ''
    //         smmActive = ''

    //     } break;
    //     case '/site/seo': case '/site/context': case '/site/target': {
    //         funcActive = ''
    //         mainActive = ''
    //         siteActive = 'activeHeader'
    //         smmActive = ''

    //     } break;
    //     case '/smm/youtube': case '/smm/youtube/context': case '/smm/instagram': case '/smm/instagram/context': case '/smm/vk': case '/smm/vk/context': case '/smm/twitter': case '/smm/twitter/context': case '/smm/facebook': case '/smm/facebook/context': {
    //         funcActive = ''
    //         mainActive = ''
    //         siteActive = ''
    //         smmActive = 'activeHeader'

    //     } break;
    // }
    // if(test){console.log(test.getEmail())}else{console.log("we re in shit")}

    return (
        <HeaderDOM {...props} openInfo={openInfo} typeInfo={typeInfo} logOut={logOut}/>
    );
}

export default Header;