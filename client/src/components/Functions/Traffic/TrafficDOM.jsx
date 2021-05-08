import React from 'react';
import s from './Traffic.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Table from '../../Table/Table'
import { Helmet } from "react-helmet";
import { addSumActionCreator } from './../../../redux/Table-reducer'
import { removeSumActionCreator } from './../../../redux/Table-reducer'

import { trafficTextActionCreator } from './../../../redux/Functions-reducer'
import { createPositionActionCreator } from './../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import Info from './../../Info/Info'
const TrafficDOM = (props) => {
    
    return (
        <div id={s.traffic}>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            Онлайн трафик
                            <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                props.openInfo()
                                props.typeInfo("traffic")
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
                            Заполните поля ниже, все остальное настроят наши специалисты по арбитражу
                        </div>
                    </div>
                    <div className={s.table_wrap}>
                        <div className={s.table_container}>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Ссылка на товар:</div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="link"
                                            value={props.traffic.link}
                                            onChange={props.onTextChange}
                                            ref={props.link}
                                            placeholder="Пример: https://example.com" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Количество товара<br /> (от 5000): </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="num"
                                            value={props.traffic.num}
                                            onChange={props.onTextChange}
                                            ref={props.num}
                                            type="number"
                                            min="5000"
                                            placeholder="Минимум 5000" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.button}>
                                <button className={`${s.submit_btn} ${props.disabled}`} onClick={() => {
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
            <Helmet>
                <title>Онлайн трафик - ChaseBox</title>
                <meta name="Traffic"
                    content={props.traffic.content} />
            </Helmet>
        </div>
    );
}

export default TrafficDOM;