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
const BreefDOM = (props) => {
    
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
                Рекламные кампании - это масштабные дорогостоящие мероприятия, требующие индивидуального подхода и слаженной работы команды специалистов. Если вы представляете крупную организацию и хотите привлечь внимание огромного количества людей к вашему бренду, событию или новинке, и если вы готовы инвестировать в это большие суммы денег, то рекламная кампания вам подходит.      
                      </div>


            <div className={s.forms}>
                <div className={s.card}>
                    <div className={s.input_block}>
                        <label htmlFor="email">E-mail</label>
                        <input name="email"
                            onChange={props.onTextChange}
                            ref={props.email}
                            key="email"
                            value={props.breef.email} />
                    </div>


                    <div className={s.input_block}>
                        <label htmlFor="name">Ваше имя</label>
                        <input name="name"
                            key="name"
                            onChange={props.onTextChange}
                            ref={props.name}
                            value={props.breef.name} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="company">Компания</label>
                        <input name="company"
                            key="company"
                            onChange={props.onTextChange}
                            ref={props.company}
                            value={props.breef.company} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="phone">Мобильный телефон</label>
                        <input name="phone"
                            key="phone"
                            onChange={props.onTextChange}
                            ref={props.phone}
                            value={props.breef.phone} />
                    </div>

                    <div className={s.input_block}>
                        <label htmlFor="tasks">Задачи рекламной компании</label>
                        <textarea name="tasks"
                            key="tasks"
                            onChange={props.onTextChange}
                            ref={props.tasks}
                            value={props.breef.tasks}
                            className={s.textarea} />
                    </div>
                    <div className={s.input_block}>
                        <label htmlFor="instruments">Инструменты рекламной компании</label>
                        <textarea name="instruments"
                            key="instruments"
                            onChange={props.onTextChange}
                            ref={props.instruments}
                            value={props.breef.instruments}
                            className={s.textarea} />
                    </div>
                    <div className={s.btn_wrap}>
                        <button className={`${s.submit_btn} ${props.disabled}`} onClick={() => {
                            props.open();
                            props.sendForm();
                        }}>{props.buttonText}</button>
                    </div>
                    <div ref={s.myModal} className={s.modal} style={{ display: props.breef.showModal ? 'block' : 'none' }}>
                        <div className={s.modal_content}>
                            <span className={s.close} onClick={props.close}>&times;</span>
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


export default BreefDOM;