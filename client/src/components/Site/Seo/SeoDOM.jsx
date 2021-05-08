import React, { useEffect, useState } from 'react';
import s from './Seo.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { seoTextActionCreator } from './../../../redux/Site-reducer'
import { createPositionActionCreator } from './../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import { addSumActionCreator } from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
const SeoDOM = (props) => {
    
    return (
        <div id={s.seo}>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            SEO-оптимизация
                            <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                props.openInfo()
                                props.typeInfo("seo")
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
                            Заполните поля ниже, все остальное настроят наши специалисты по SEO-оптимизации
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
                                            value={props.seo.link}
                                            onChange={props.onTextChange}
                                            ref={props.link}
                                            placeholder="Пример: https://example.com"
                                            onBlur={props.handleBlur('link')}
                                            className={props.shouldMarkError('link') ? s.error : ''} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Тематика ресурса: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="number"
                                            value={props.seo.number}
                                            onChange={props.onTextChange}
                                            ref={props.number}
                                            placeholder="Пример: Косметика"
                                            onBlur={props.handleBlur('number')}
                                            className={props.shouldMarkError('number') ? s.error : ''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Бюджет (минимум ₽ 7000): </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="budjet"
                                            type="number"
                                            min="7000"
                                            value={props.seo.budjet}
                                            onChange={props.onTextChange}
                                            ref={props.budjet}
                                            onBlur={props.handleBlur('budjet')}
                                            className={props.shouldMarkError('budjet') ? s.error : ''}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Продолжительность (в месяцах): </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="time"
                                            type="number"
                                            min="1"
                                            max="1000"
                                            value={props.seo.time}
                                            onChange={props.onTextChange}
                                            ref={props.time}
                                            onBlur={props.handleBlur('time')}
                                            className={props.shouldMarkError('time') ? s.error : ''} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Дополнительные сведения: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="content"
                                            value={props.seo.content}
                                            onChange={props.onTextChange}
                                            ref={props.content}
                                            onBlur={props.handleBlur('content')} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.calculator}>
                                <span className={s.calcWrap}><div className={s.supPrice}>Цена услуги: <span>{props.cost}</span> x <span>{props.seo.time ? props.seo.time : 0}</span> <br></br> <br></br> Бюджет: <span>{props.seo.budjet ? props.seo.budjet : 0}</span> x <span>{props.seo.time ? props.seo.time : 0}</span></div> <div className={s.equalWrap}><span className={s.equal}>Подытог: </span><span className={s.sum}>{props.seo.time && props.seo.budjet ? (parseInt(props.seo.budjet) * parseInt(props.seo.time) + parseInt(props.cost * parseInt(props.seo.time))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " ₽" : `\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`}</span></div></span>
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
                <title>SEO-оптимизация - ChaseBox</title>
                <meta name="SEO"
                    content={props.seo.content} />
            </Helmet>
        </div>
    );
}

export default SeoDOM;