import React from 'react';
import s from './Messengers.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Table from '../../Table/Table'
import { Helmet } from "react-helmet";
import { addSumActionCreator } from '../../../redux/Table-reducer'
import { removeSumActionCreator } from '../../../redux/Table-reducer'
import { messengersTextActionCreator } from '../../../redux/Functions-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from '../../../redux/Info-reducer'
import { typeActionCreator } from '../../../redux/Info-reducer'
import Info from '../../Info/Info'

const MessengersDOM = (props) => {
    

    return (
        <div id={s.messengers}>
            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            Рассылка в мессенджерах
                            <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                props.openInfo()
                                props.typeInfo("messengers")
                            }}>
                                <i className="far fa-question-circle"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.line}></div>

            </div>
            <div className={s.form}>

                <div className={s.col}>
                    <div className={s.header}>
                        <div className={s.header_text}>
                            Заполните поля ниже, все остальное настроят наши специалисты по рассылке в мессенджерах
                        </div>
                    </div>
                    <div className={s.table_wrap}>
                        <div className={s.table_container}>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Ссылка на сайт:</div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="link"
                                            value={props.messengers.link}
                                            onChange={props.onTextChange}
                                            ref={props.link}
                                            placeholder="Пример: https://example.com" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Тип ресурса: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="type"
                                            value={props.messengers.type}
                                            onChange={props.onTextChange}
                                            ref={props.type}
                                            placeholder="Пример: Личный блог" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Ссылка на диск с файлом письма:
                                    <a className={s.question} onClick={() => {
                                            props.openInfo()
                                            props.typeInfo("disk")
                                        }}>
                                            <i className="far fa-question-circle"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="content"
                                            value={props.messengers.content}
                                            onChange={props.onTextChange}
                                            ref={props.content} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Выберите мессенджер: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <select name="messenger" id={s.messenger} onChange={props.onTextChange} ref={props.messenger}>
                                            <option value="viber">Viber</option>
                                            <option value="whatsapp">What's App</option>
                                            <option value="telegram">Telegram</option>


                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Количество писем<br /> (от 15 000): </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="num"
                                            type="number"
                                            min="15000"
                                            value={props.messengers.num}
                                            onChange={props.onTextChange}
                                            ref={props.num}
                                            placeholder="Минимум 15 000" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.button}>
                                <button className={`${s.submit_btn} ${props.disabled}`} onClick={()=>{
                                    props.createPosition()
                                    props.openInfo()
                                    props.typeInfo("position")
                                    }}>{props.buttonText}</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={s.col}>
                    <Table table={props.table} dispatch={props.dispatch} header={props.header} button="Отправить" />
                </div>
            </div>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <Helmet>
                <title>Рассылка в мессенджерах - ChaseBox</title>
                <meta name="Messengers"
                    content={props.messengers.content} />
            </Helmet>
        </div>
    );
}

export default MessengersDOM;