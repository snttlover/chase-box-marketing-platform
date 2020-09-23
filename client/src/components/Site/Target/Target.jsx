import React from 'react';
import s from './Target.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { targetingTextActionCreator } from './../../../redux/Site-reducer'
import { changeSocActionCreator } from './../../../redux/Site-reducer'

import { createPositionActionCreator } from './../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import {addSumActionCreator} from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
const Target = (props) => {
    const cost = 3790;

    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let soc = React.createRef();
    let disk = React.createRef();
    let time = React.createRef();
    let budjet = React.createRef();



    let linkText = ""
    let cityText = ""
    let goodText = ""
    let socText = ""
    let diskText = ""
    let timeText = ""
    let budjetText = ""




    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let onTextChange = () => {

        linkText = link.current.value;
        cityText = city.current.value;
        goodText = good.current.value;
        socText = soc.current.value;
        diskText = disk.current.value
        timeText = time.current.value;
        budjetText = budjet.current.value;
        debugger

        props.dispatch(targetingTextActionCreator({budjet: budjetText, time: timeText,link: linkText, city: cityText, good: goodText, soc: socText, disk: diskText }));


    };
    let disabled;
    let buttonText;
    if (props.target.link != "" && props.target.city != "" && props.target.good != "" && props.target.soc != "-99999" && props.target.disk != ""&& parseInt(props.target.time)>=1&& parseInt(props.target.budjet)>=3000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        linkText = link.current.value;
        socText = soc.current.value;
        cityText = city.current.value;
        goodText = good.current.value;
        diskText = disk.current.value;
        timeText = time.current.value;
        budjetText = parseInt(budjet.current.value)*parseInt(time.current.value);


        let id = props.table.elementsData.length;
        let section = props.target.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({ id: id,budjet: budjetText,time: timeText, section: section, name: name, link: linkText, positions: [diskText, socText, cityText, goodText, "Недель: "+timeText, "Бюджет: ₽"+budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText)+parseInt(cost*parseInt(time.current.value))))
        
        props.target.link = ""
        props.target.city = ""
        props.target.good = ""
        props.target.soc = ""
        props.target.disk = ""
        props.target.time = ""
        props.target.budjet = ""



    };


    return (
        <div id={s.target}>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            Таргетированная реклама
                            <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                openInfo()
                                typeInfo("targeting")
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
                            Заполните поля ниже, все остальное настроят наши специалисты по таргетированной рекламе
                        </div>
                    </div>
                    <div className={s.table_wrap}>
                        <div className={s.table_container}>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Ссылка на сайт (НЕ группа или профиль):</div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="link"
                                            value={props.target.link}
                                            onChange={onTextChange}
                                            ref={link}
                                            placeholder="Пример: https://example.com" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Выберите соц. сеть:</div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <select name="soc-type" onChange={onTextChange} className={s.soc_select} ref={soc} id={s.type_soc}>
                                            <option value="-99999">Выберите соц. сеть...</option>
                                            <option value="vk">VK</option>
                                            <option value="instagram">Instagram</option>
                                            <option value="facebook">Facebook</option>
                                            <option value="odnoklassniki">Одноклассники</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>
                                        Ссылка на диск с файлом объявления:
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
                                        <input name="disk"
                                            value={props.target.disk}
                                            onChange={onTextChange}
                                            ref={disk} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Город/населенный пункт (опционально): </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="city"
                                            value={props.target.city}
                                            onChange={onTextChange}
                                            ref={city}
                                            placeholder="Пример: Москва" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Тематика ресурса: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="good"
                                            value={props.target.good}
                                            onChange={onTextChange}
                                            ref={good}
                                            placeholder="Пример: Косметика" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Бюджет (минимум ₽3000): </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                    <input name="budjet"
                                            type="number"
                                            min="3000"
                                            value={props.target.budjet}
                                            onChange={onTextChange}
                                            ref={budjet} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Продолжительность (в неделях): </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                    <input name="time"
                                            type="number"
                                            min="1"
                                            max="1000"
                                            value={props.target.time}
                                            onChange={onTextChange}
                                            ref={time} />
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
                <title>Таргетированная реклама - ChaseBox</title>
                <meta name="Targeting"
                    content="Targeting" />
            </Helmet>
        </div>
    );
}

export default Target;