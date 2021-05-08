import React from 'react';
import s from './Breef.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Info from './../../Info/Info'

import { breefTextActionCreator } from '../../../redux/Main-reducer'
import { openModalActionCreator } from '../../../redux/Main-reducer'
import { closeModalActionCreator } from '../../../redux/Main-reducer'
import axios from 'axios'
import Feedback from '../Feedback/Feedback';
import BreefDOM from './BreefDOM';
// class Breef extends React.Component{
//     constructor(props){
//         super(props)
//         // this.props.breef=this.props.breef;
//         // this.props.dispatch=this.props.dispatch;
//         // this.props.header=this.props.header;

//     }
//     render() {
//         return (
//             <div>
//                 <BreefFunc breef={this.props.breef} dispatch={this.props.dispatch} header={this.props.header}/>
//             </div>
//         )
//     }
// }
const Breef = (props) => {
    let email = React.createRef();
    let name = React.createRef();
    let company = React.createRef();
    let phone = React.createRef();
    let tasks = React.createRef();
    let instruments = React.createRef();
    
    let onTextChange = () => {
        let emailText = email.current.value;
        let nameText = name.current.value;
        let companyText = company.current.value;
        let phoneText = phone.current.value;
        let tasksText = tasks.current.value;
        let instrumentsText = instruments.current.value;


        props.dispatch(breefTextActionCreator({ email: emailText, name: nameText, company: companyText, phone: phoneText, tasks: tasksText, instruments: instrumentsText }));

    };
    let sendForm = async () => {

        let data = "Email: " + email.current.value + "\n" + "Имя: " + name.current.value + "\n" + "Компания: " + company.current.value + "\n" + "Телефон: " + phone.current.value + "\n" + "Задачи: " + tasks.current.value + "\n" + "Инструменты: " + instruments.current.value;

        let emailText = "";
        let nameText = "";
        let companyText = "";
        let phoneText = "";
        let tasksText = "";
        let instrumentsText = "";

        props.dispatch(breefTextActionCreator({ email: emailText, name: nameText, company: companyText, phone: phoneText, tasks: tasksText, instruments: instrumentsText }))
        const form = await axios.post('/api/form', {
            data,
            format: "breef"
        })

        clear();
    }
    let clear = () => {
    }
    let disabled;
    let buttonText;
    if (props.breef.email != "" && props.breef.name != "" && props.breef.company != "" && props.breef.phone != "" && props.breef.tasks != "" && props.breef.instruments != "") {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let open = async () => {

        await props.dispatch(openModalActionCreator('breef'))
    }
    let close = async () => {
        await props.dispatch(closeModalActionCreator('breef'))
    }
    return (
        <BreefDOM {...props} onTextChange={onTextChange} email={email} name={name} company={company} phone={phone}
        tasks={tasks} instruments={instruments} disabled={disabled} sendForm={sendForm} buttonText={buttonText}
        close={close} open={open} />
        );
    
}


export default Breef;