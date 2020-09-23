import React from 'react';
import s from './Messengers.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Table from '../../Table/Table'
import { Helmet } from "react-helmet";
import { addSumActionCreator } from './../../../redux/Table-reducer'
import { removeSumActionCreator } from './../../../redux/Table-reducer'
import { messengersTextActionCreator } from '../../../redux/Functions-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import Info from './../../Info/Info'

const Messengers = (props) => {
    const cost = 3;

    let link = React.createRef();
    let type = React.createRef();
    let content = React.createRef();
    let num = React.createRef();
    let messenger = React.createRef();

    let linkText = ""
    let typeText = ""
    let contentText = ""
    let numText = ""
    let messengerText = ""
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let onTextChange = () => {

        linkText = link.current.value;
        typeText = type.current.value;
        contentText = content.current.value;
        numText = num.current.value;
        messengerText = messenger.current.value;
        props.dispatch(messengersTextActionCreator({ link: linkText, type: typeText, content: contentText, num: numText, messenger: messengerText }));
        console.log(props.messengers.messenger);


    };

    let disabled;
    let buttonText;
    if (props.messengers.link != "" && props.messengers.type != "" && props.messengers.content != "" && parseInt(props.messengers.num) >= 15000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        linkText = link.current.value;
        typeText = type.current.value;
        contentText = content.current.value;
        numText = num.current.value;
        messengerText = messenger.current.value;
        let id = props.table.elementsData.length;
        let section = props.messengers.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({budjet:parseInt(numText)*cost,time: "...", id: id, section: section, name: name, link: linkText, positions: [typeText, messengerText, numText+" ед."] }))
        props.dispatch(addSumActionCreator(parseInt(numText)*cost))

        props.messengers.link = ""
        props.messengers.type = ""
        props.messengers.content = ""
        props.messengers.messenger = ""

    };

    return (
        <div id={s.messengers}>
            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            Рассылка в мессенджерах
                            <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                openInfo()
                                typeInfo("messengers")
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
                                            onChange={onTextChange}
                                            ref={link}
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
                                            value={props.messengers.content}
                                            onChange={onTextChange}
                                            ref={content} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Выберите мессенджер: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <select name="messenger" id={s.messenger} onChange={onTextChange} ref={messenger}>
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
                                            onChange={onTextChange}
                                            ref={num}
                                            placeholder="Минимум 15 000" />
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
                <title>Рассылка в мессенджерах - ChaseBox</title>
                <meta name="Messengers"
                    content={props.messengers.content} />
            </Helmet>
        </div>
    );
}

export default Messengers;