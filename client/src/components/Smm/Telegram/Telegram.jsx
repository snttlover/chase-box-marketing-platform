import React from 'react';
import s from './Telegram.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { telegramTextActionCreator } from '../../../redux/Smm-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import Info from './../../Info/Info'
const Telegram = (props) => {
    let link = React.createRef();
    let good = React.createRef();
    let post = React.createRef();
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let onTextChange = () => {

        let linkText = link.current.value;
        let goodText = good.current.value;
        let postText = post.current.value;

        props.dispatch(telegramTextActionCreator({ link: linkText, good: goodText, post: postText }));
    };
    let disabled;
    let buttonText;
    if (props.telegram.link != "" && props.telegram.good != "" && props.telegram.post != "") {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = link.current.value;
        let goodText = good.current.value;
        let postText = post.current.value;

        let id = props.table.elementsData.length;
        let section = props.telegram.section;
        let name = props.name
        props.dispatch(createPositionActionCreator({ id: id, section: section, name: name, link: linkText, positions: [postText, goodText] }))
        props.telegram.link = ""
        props.telegram.good = ""
        props.telegram.post = ""

    };
    return (
        <div>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            Telegram
                            {/* <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                openInfo()
                                typeInfo("telegram")
                            }}>
                                <i className="far fa-question-circle"></i>
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className={s.line}></div>

            </div>
            <div className={s.forms}>


                <div className={s.col}>
                    <div className={s.header}>
                        <div className={s.header_text}>
                            Заполните поля ниже, все остальное настроят наши специалисты по продвижению в Телеграмме
                        </div>
                    </div>
                    <div className={s.table_wrap}>
                        <div className={s.table_container}>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Ссылка на канал: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <div className={s.part_link}></div>
                                        <input name="link"
                                            value={props.telegram.link}
                                            onChange={onTextChange}
                                            ref={link} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Тематика профиля: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="good"
                                            value={props.telegram.good}
                                            onChange={onTextChange}
                                            ref={good}
                                            placeholder="Пример: новости" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>
                                        Ссылка на диск с рекламным постом:
                                        <a className={s.question} onClick={() => {
                                            openInfo()
                                            typeInfo("disk")
                                        }}>
                                            <i className="far fa-question-circle"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="post"
                                            value={props.telegram.post}
                                            onChange={onTextChange}
                                            ref={post} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.button}>
                                <button className={`${s.submit_btn} ${disabled}`} onClick={()=>{
                                    createPosition()
                                    openInfo()
                                    typeInfo("position")
                                    }}>{buttonText}</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={s.col}>
                    <Table table={props.table} dispatch={props.dispatch} header={props.header} button="Отправить" />
                </div>
            </div>
            <Helmet>
                <title>Telegram - ChaseBox</title>
                <meta name="Telegram"
                    content="Telegram" />
            </Helmet>
        </div>
    );
}

export default Telegram;