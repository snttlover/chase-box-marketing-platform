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
const Traffic = (props) => {
    const cost = 6;

    let link = React.createRef();
    // let ref = React.createRef();
    // let content = React.createRef();
    let num = React.createRef();

    let linkText = ""
    // let refText = ""
    // let contentText = ""
    let numText = ""

    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }

    let onTextChange = () => {

        linkText = link.current.value;
        // refText = ref.current.value;
        // contentText = content.current.value;
        numText = num.current.value;


        props.dispatch(trafficTextActionCreator({ link: linkText, num: numText }));


    };
    let disabled;
    let buttonText;
    if (props.traffic.link != "" && parseInt(props.traffic.num) >= 5000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        linkText = link.current.value;
        // refText = ref.current.value;
        // contentText = content.current.value;
        numText = num.current.value;
        let id = props.table.elementsData.length;
        let section = props.traffic.section;
        let name = props.name;
        debugger
        props.dispatch(createPositionActionCreator({budjet:parseInt(numText)*cost, time: "...", id: id, section: section, name: name, link: linkText, positions: [numText+" ед."] }))
        props.dispatch(addSumActionCreator(parseInt(numText)*cost))
        props.traffic.link = ""
        props.traffic.ref = ""
        // props.traffic.content = ""
        props.traffic.num = ""
    };

    debugger
    return (
        <div id={s.traffic}>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            Онлайн трафик
                            <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                openInfo()
                                typeInfo("traffic")
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
                                            onChange={onTextChange}
                                            ref={link}
                                            placeholder="Пример: https://example.com" />
                                    </div>
                                </div>
                            </div>
                            {/* <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Ссылка на ваш профиль на партнерской площадке:</div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="ref"
                                            value={props.traffic.ref}
                                            onChange={onTextChange}
                                            ref={ref} />
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Ссылка на диск с файлом письма: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="content"
                                            value={props.traffic.content}
                                            onChange={onTextChange}
                                            ref={content} />
                                    </div>
                                </div>
                            </div> */}
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Количество товара<br /> (от 5000): </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="num"
                                            value={props.traffic.num}
                                            onChange={onTextChange}
                                            ref={num}
                                            type="number"
                                            min="5000"
                                            placeholder="Минимум 5000" />
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
                <title>Онлайн трафик - ChaseBox</title>
                <meta name="Traffic"
                    content={props.traffic.content} />
            </Helmet>
        </div>
    );
}

export default Traffic;