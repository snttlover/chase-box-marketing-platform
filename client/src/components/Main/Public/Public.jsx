import React from 'react';
import s from './Public.module.css'
import ava from './../../../img/ava.svg'
import blue from './../../../img/blue.png'
import siren from './../../../img/siren.jpg'
import purple from './../../../img/purple.jpg'
import pale from './../../../img/pale.jpg'
import youtube_icon from './../../../img/youtube.svg'
import instagram_icon from './../../../img/instagram.svg'
import loading from './../../../img/loading.svg'
import { withRouter, Redirect } from "react-router";

import vk_icon from './../../../img/vk.svg'
import twitter_icon from './../../../img/twitter.svg'
import telegram_icon from './../../../img/telegram.svg'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./../../../img/Ouverblue.svg"
import { Helmet } from "react-helmet";
import { openModalActionCreator } from './../../../redux/Public-reducer'
import { closeModalActionCreator } from './../../../redux/Public-reducer'
import { changeTypeActionCreator } from './../../../redux/Public-reducer'
import { yaTextActionCreator } from './../../../redux/Public-reducer'
import { vkTextActionCreator } from './../../../redux/Public-reducer'
import { fbTextActionCreator } from './../../../redux/Public-reducer'
import { googleTextActionCreator } from './../../../redux/Public-reducer'
import { myTargetTextActionCreator } from './../../../redux/Public-reducer'
import Info from './../../Info/Info'


import app from './../../../base'
import { createCabinetsActionCreator } from './../../../redux/Public-reducer'
import { addCabinetActionCreator } from './../../../redux/Public-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'



import Cabinet from './Cabinet/Cabinet';
import PublicDOM from './PublicDOM';


const Public = (props) => {

    if (localStorage.path != "" && localStorage.path != "/") {
        return <Redirect to={localStorage.path} />;

    }
    // VK.Widgets.Group("vk_groups", {mode: 3, width: "328", color3: '8A30BD'}, 190497618);
    let cabinets
    let remove

    let actualUser
    let uidUser
    let cabinetLength
    let cabinetObject
    let yaName = React.createRef();
    let yaEmail = React.createRef();
    let yaYourEmail = React.createRef();
    let yaCheckbox = React.createRef();
    let yaNumber = React.createRef();
    let vkLink = React.createRef();
    let fbLink = React.createRef();
    let googleEmail = React.createRef();
    let googleCheckbox = React.createRef();
    let myTargetEmail = React.createRef();
    let myTargetCheckbox = React.createRef();
    let selection = React.createRef();



    let yaNameText = "";
    let yaEmailText = "";
    let yaYourEmailText = "";
    let yaCheckboxText = false;
    let yaNumberText = "";
    let vkLinkText = "";
    let fbLinkText = "";
    let googleEmailText = "";
    let googleChaseboxText = false;
    let myTargetEmailText = "";
    let myTargetChaseboxText = false;


    localStorage.setItem('paymentStatus', 'false')

    if (props.public.cabinets.length === 0) {

        app.auth().onAuthStateChanged(function (user) {

            if (user) {

                actualUser = user.email.split('.').join("")
                uidUser = user.uid

                getCabinets()

            } else {

            }
        });
    }

    function jamToArray(snapshot) {

        const returnArr = [];

        snapshot.forEach(function (childSnapshot) {

            const item = childSnapshot.val();
            console.log(item);

            returnArr.push(item);
        });
        console.log(returnArr);

        return returnArr;
    };
    let getCabinets = () => {
        remove = ''

        app.database().ref("users/" + actualUser + "/cabinets").on('value', function (snapshort) {
            console.log(snapshort);

            props.dispatch(createCabinetsActionCreator(jamToArray(snapshort)))

        })

    }
    // cabinets = props.public.cabinets.map((item) => {

    //     return <Cabinet
    //         data={item.data}
    //         type={item.type} />
    // })



    let onYaTextChange = () => {
        let yaNameText = yaName.current.value;
        let yaEmailText = yaEmail.current.value;
        let yaYourEmailText = yaYourEmail.current.value;
        let yaNumberText = yaNumber.current.value;
        console.log(yaCheckbox.current)
        props.dispatch(yaTextActionCreator({ name: yaNameText, email: yaEmailText, number: yaNumberText, yourEmail: yaYourEmailText, checked: props.public.yandex.checked }));
    }
    let onYaCheckChange = () => {
        let yaNameText = yaName.current.value;
        let yaEmailText = yaEmail.current.value;
        let yaYourEmailText = yaYourEmail.current.value;
        let yaNumberText = yaNumber.current.value;
        props.dispatch(yaTextActionCreator({ name: yaNameText, email: yaEmailText, number: yaNumberText, yourEmail: yaYourEmailText, checked: !props.public.yandex.checked }));

    }
    let onVkTextChange = () => {
        let vkLinkText = vkLink.current.value;

        props.dispatch(vkTextActionCreator(vkLinkText));
    }
    let onFbTextChange = () => {
        let fbLinkText = fbLink.current.value;
        props.dispatch(fbTextActionCreator(fbLinkText));
    }
    let onGoogleTextChange = () => {
        let googleEmailText = googleEmail.current.value;
        props.dispatch(googleTextActionCreator({ email: googleEmailText, checked: props.public.google.checked }));
    }
    let onGoogleCheckChange = () => {
        let googleEmailText = googleEmail.current.value;
        props.dispatch(googleTextActionCreator({ email: googleEmailText, checked: !props.public.google.checked }));
    }
    let onMyTargetTextChange = () => {
        let myTargetEmailText = myTargetEmail.current.value;
        props.dispatch(myTargetTextActionCreator({ email: myTargetEmailText, checked: props.public.myTarget.checked }));
    }
    let onMyTargetCheckChange = () => {
        let myTargetEmailText = myTargetEmail.current.value;
        props.dispatch(myTargetTextActionCreator({ email: myTargetEmailText, checked: !props.public.myTarget.checked }));
    }
    let disabled_ya;
    if (props.public.yandex.name != "" && props.public.yandex.email != "" && props.public.yandex.number != "" && props.public.yandex.yourEmail != "" && props.public.yandex.checked === true) {
        disabled_ya = "nodisabled"
    } else {
        disabled_ya = "disabled"
    }
    let disabled_vk;
    if (props.public.vk.link != "") {
        disabled_vk = "nodisabled"
    } else {
        disabled_vk = "disabled"
    }
    let disabled_fb;
    if (props.public.fb.link != "") {
        disabled_fb = "nodisabled"
    } else {
        disabled_fb = "disabled"
    }
    let disabled_google;
    if (props.public.google.email != "" && props.public.google.checked === true) {
        disabled_google = "nodisabled"
    } else {
        disabled_google = "disabled"
    }
    let disabled_myTarget;
    if (props.public.myTarget.email != "" && props.public.myTarget.checked === true) {
        disabled_myTarget = "nodisabled"
    } else {
        disabled_myTarget = "disabled"
    }
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        console.log(type);
        if (type != "select") {
            props.dispatch(typeActionCreator(type))
        }
        else {
            props.dispatch(typeActionCreator(selection.current.value))
        }
    }
    let createCabinet = (type, data) => {
        cabinetObject = {
            type: type,
            data: data,
            id: props.public.cabinets.length
        }

        props.dispatch(addCabinetActionCreator(cabinetObject))
        app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/cabinets')
            .set(props.public.cabinets)


        if (cabinetObject.type === "yandex") {
            props.dispatch(yaTextActionCreator({ name: "", email: "", number: "", yourEmail: "", checked: true }));

        }
        if (cabinetObject.type === "google") {
            props.dispatch(googleTextActionCreator({ email: " ", checked: true }));
        }
        if (cabinetObject.type === "myTarget") {
            props.dispatch(myTargetTextActionCreator({ email: " ", checked: true }));

        }



        props.public.yandex.name = ""
        props.public.yandex.email = ""
        props.public.yandex.yourEmail = ""
        props.public.yandex.number = ""
        props.public.vk.link = ""
        props.public.fb.link = ""
        props.public.google.email = ""
        props.public.myTarget.email = ""







    }

    cabinets = props.public.cabinets.map((item, index) => {
        return <Cabinet
            type={item.type}
            data={item.data}
            id={index}
            dispatch={props.dispatch}
            cabinets={props.public.cabinets}
            cabinetId={props.public.cabinetId}
            showRemoveModal={props.public.showRemoveModal} />
    })
    let hide = "hide";
    let typeCabinet = React.createRef();
    if (cabinets.length === 0) {
        remove = ''
    } else remove = 'remove'
    let open = async () => {
        await props.dispatch(openModalActionCreator())
    }
    let close = async () => {
        await props.dispatch(closeModalActionCreator())
    }
    let handleType = (e) => {
        let { value } = e.target;
        props.dispatch(changeTypeActionCreator(value))

    }
    const logOut = () => {
        const ele = document.getElementById('ipl-progress-indicator')
        ele.style.display = "block"
        app.auth().signOut().then(function () {
            window.location = 'login';
        })
    }



    return (
        <PublicDOM {...props} logOut={logOut} open={open} openInfo={openInfo} typeInfo={typeInfo}
            remove={remove} cabinets={cabinets} hide={hide} close={close} handleType={handleType} selection={selection}
            yaName={yaName} onYaTextChange={onYaTextChange} yaEmail={yaEmail} onYaTextChange={onYaTextChange}
            yaNumber={yaNumber} yaYourEmail={yaYourEmail} yaCheckbox={yaCheckbox} disabled_ya={disabled_ya}
            createCabinet={createCabinet} googleEmail={googleEmail} onGoogleTextChange={onGoogleTextChange}
            googleCheckbox={googleCheckbox} onGoogleCheckChange={onGoogleCheckChange} disabled_google={disabled_google}
            vkLink={vkLink} onVkTextChange={onVkTextChange} disabled_vk={disabled_vk} fbLink={fbLink} onFbTextChange={onFbTextChange}
            disabled_fb={disabled_fb} myTargetEmail={myTargetEmail} onMyTargetTextChange={onMyTargetTextChange}
            myTargetCheckbox={myTargetCheckbox} onMyTargetCheckChange={onMyTargetCheckChange} disabled_myTarget={disabled_myTarget}
        />
    );
}

export default Public;