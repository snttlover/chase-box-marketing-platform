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
        <div className={s.breef}>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            Рекламная кампания
                        </div>
                    </div>
                </div>
                <div className={s.line}></div>

            </div>
            <div className={s.description}>
                Рекламные кампании - это масштабные дорогостоящие мероприятия, требующие индивидуального подхода и слаженной работы команды специалистов. Если вы представляете крупную организацию и хотите привлечь внимание огромного количества людей к вашему бренду, событию или новинке, и если вы готовы инвестировать в это большие суммы денег, то рекламная кампания вам подходит.            </div>


            {/* <div className={s.pillar}>
                <div className={s.pillar_header}>
                    <div className={s.pillar_text}>Свежий взгляд на продукт</div>
                </div>
                <div className={s.pillar_container}>
                    <div className={s.pillar_block}>
                        <img src="" alt=""></img>
                        <div className={s.pillar_down_container}>
                            <div className={s.pillar_down}>
                                <div className={s.pillar_title}>Инновации</div>
                                <div className={s.pillar_content}>Самые современные средства и идеи</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
            <div className={s.forms}>
                <div className={s.card}>
                    <div className={s.input_block}>
                        <label htmlFor="email">E-mail</label>
                        <input name="email"
                            onChange={onTextChange}
                            ref={email}
                            key="email"
                            value={props.breef.email} />
                    </div>


                    <div className={s.input_block}>
                        <label htmlFor="name">Ваше имя</label>
                        <input name="name"
                            key="name"
                            onChange={onTextChange}
                            ref={name}
                            value={props.breef.name} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="company">Компания</label>
                        <input name="company"
                            key="company"
                            onChange={onTextChange}
                            ref={company}
                            value={props.breef.company} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="phone">Мобильный телефон</label>
                        <input name="phone"
                            key="phone"
                            onChange={onTextChange}
                            ref={phone}
                            value={props.breef.phone} />
                    </div>

                    <div className={s.input_block}>
                        <label htmlFor="tasks">Задачи рекламной компании</label>
                        <textarea name="tasks"
                            key="tasks"
                            onChange={onTextChange}
                            ref={tasks}
                            value={props.breef.tasks}
                            className={s.textarea} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="instruments">Инструменты рекламной компании</label>
                        <textarea name="instruments"
                            key="instruments"
                            onChange={onTextChange}
                            ref={instruments}
                            value={props.breef.instruments}
                            className={s.textarea} />
                    </div>
                    <div className={s.btn_wrap}>
                        <button className={`${s.submit_btn} ${disabled}`} onClick={() => {
                            open();
                            sendForm();
                        }}>{buttonText}</button>
                    </div>
                    <div ref={s.myModal} className={s.modal} style={{ display: props.breef.showModal ? 'block' : 'none' }}>
                        <div className={s.modal_content}>
                            <span className={s.close} onClick={close}>&times;</span>
                            <p>Ваше письмо отправлено</p>
                        </div>
                    </div>
                </div>
            </div>
            <Helmet>
                <title>Рекламная кампания - ChaseBox</title>
                <meta name="Breef"
                    content={props.breef.tasks} />
            </Helmet>
        </div>
    );
    
}


export default Breef;