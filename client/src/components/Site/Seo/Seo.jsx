import React from 'react';
import s from './Seo.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { seoTextActionCreator } from './../../../redux/Site-reducer'
import { createPositionActionCreator } from './../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import {addSumActionCreator} from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
const Seo = (props) => {
    const cost = 9990;

    let link = React.createRef();
    let number = React.createRef();
    let content = React.createRef();
    let time = React.createRef();
    let budjet = React.createRef();


    let linkText = ""
    let numberText = ""
    let contentText = ""
    let timeText = ""
    let budjetText = ""




    let onTextChange = () => {

        linkText = link.current.value;
        numberText = number.current.value;
        contentText = content.current.value;
        timeText = time.current.value;
        budjetText = budjet.current.value;




        props.dispatch(seoTextActionCreator({ budjet: budjetText, time: timeText, link: linkText, number: numberText, content: contentText }));


    };
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let disabled;
    let buttonText;
    if (props.seo.link != "" && props.seo.number != "" && parseInt(props.seo.time) >= 1 && parseInt(props.seo.budjet) >= 7000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        linkText = link.current.value;

        numberText = number.current.value;
        contentText = content.current.value;
        timeText = time.current.value;
        budjetText = parseInt(budjet.current.value)*parseInt(time.current.value);



        let id = props.table.elementsData.length;
        let section = props.seo.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({ id: id, budjet: budjetText, time: timeText, section: section, name: name, link: linkText, positions: [numberText, contentText, "Месяцев: " + timeText, "Бюджет: ₽"+budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText)+parseInt(cost*parseInt(time.current.value))))
        
        props.seo.link = ""
        props.seo.number = ""
        props.seo.content = ""
        props.seo.time = ""
        props.seo.budjet = ""



    };


    return (
        <div id={s.seo}>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            SEO-оптимизация
                            <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                openInfo()
                                typeInfo("seo")
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
                                            onChange={onTextChange}
                                            ref={link}
                                            placeholder="Пример: https://example.com" />
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
                                            onChange={onTextChange}
                                            ref={number}
                                            placeholder="Пример: Косметика" />
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
                                            onChange={onTextChange}
                                            ref={budjet} />
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
                                            onChange={onTextChange}
                                            ref={time} />
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
                                            onChange={onTextChange}
                                            ref={content} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.button}>
                                <button className={`${s.submit_btn} ${disabled}`} onClick={() => {
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
                <title>SEO-оптимизация - ChaseBox</title>
                <meta name="SEO"
                    content={props.seo.content} />
            </Helmet>
        </div>
    );
}

export default Seo;