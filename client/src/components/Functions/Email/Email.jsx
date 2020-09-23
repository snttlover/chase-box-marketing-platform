import React from 'react';
import s from './Email.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Table from '../../Table/Table'
import { Helmet } from "react-helmet";
import { addSumActionCreator } from './../../../redux/Table-reducer'
import { removeSumActionCreator } from './../../../redux/Table-reducer'
import { emailTextActionCreator } from './../../../redux/Functions-reducer'
import { createPositionActionCreator } from './../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import Info from './../../Info/Info'

const Email = (props) => {
    const cost = 1;
    let link = React.createRef();
    let type = React.createRef();
    let content = React.createRef();
    let num = React.createRef();
    let linkText = ""
    let typeText = ""
    let numText = ""
    let contentText = ""



    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let onTextChange = () => {

        linkText = link.current.value;
        typeText = type.current.value;
        numText = num.current.value;
        contentText = content.current.value;


        props.dispatch(emailTextActionCreator({ link: linkText, type: typeText, num: numText, content: contentText }));


    };
    let disabled;
    let buttonText;
    if (props.email.link != "" && props.email.type != "" && props.email.content != "" && parseInt(props.email.num) >= 20000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        linkText = link.current.value;
        typeText = type.current.value;
        numText = num.current.value;
        contentText = content.current.value;
        let id = props.table.elementsData.length;
        let section = props.email.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({budjet:parseInt(numText)*cost,time: "...", id: id, section: section, name: name, link: linkText, positions: [typeText, numText+" ед.", contentText] }))
        props.dispatch(addSumActionCreator(parseInt(numText)*cost))

        console.log(props.email.content);

        props.email.link = ""
        props.email.type = ""
        props.email.content = ""
        props.email.num = ""
        props.email.content = ""
    };

    return (
        <div id={s.email}>
            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            E-mail рассылка
                            <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                openInfo()
                                typeInfo("email")
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
                            Заполните поля ниже, все остальное настроят наши специалисты по E-mail рассылке
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
                                            value={props.email.link}
                                            onChange={onTextChange}
                                            ref={link}
                                            placeholder="Пример: https://example.com" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Тип ресурса:</div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="type"
                                            value={props.email.type}
                                            onChange={onTextChange}
                                            ref={type}
                                            placeholder="Пример: Личный блог" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Ссылка на диск с файлом письма:
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
                                        <input name="content"
                                            type="text"
                                            value={props.email.content}
                                            onChange={onTextChange}
                                            ref={content} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Количество писем<br /> (от 20 000): </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="num"
                                            type="number"
                                            min="20000"
                                            value={props.email.num}
                                            onChange={onTextChange}
                                            ref={num}
                                            placeholder="Минимум 20 000" />
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
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <Helmet>
                <title>E-mail рассылка - ChaseBox</title>
                <meta name="Email"
                    content={props.email.content} />
            </Helmet>
        </div>
    );
}

export default Email;