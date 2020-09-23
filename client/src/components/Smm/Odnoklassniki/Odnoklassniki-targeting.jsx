import React from 'react';
import s from './Odnoklassniki.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { odnoklassnikiTargetingTextActionCreator } from '../../../redux/Smm-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import {addSumActionCreator} from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
const OdnoklassnikiTargeting = (props) => {
    const cost = 3790;

    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let post = React.createRef();
    let time = React.createRef();
    let budjet = React.createRef();

    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let onTextChange = () => {

        let linkText = link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let postText = post.current.value;
        let timeText = time.current.value;
        let budjetText = budjet.current.value;

        props.dispatch(odnoklassnikiTargetingTextActionCreator({budjet: budjetText, time: timeText, link: linkText, city: cityText, good: goodText, post: postText }));
    };
    let disabled;
    let buttonText;
    if (props.odnoklassniki.link != "" && props.odnoklassniki.city != "" && props.odnoklassniki.good != "" && props.odnoklassniki.post!=""&& parseInt(props.odnoklassniki.time)>=1&& parseInt(props.odnoklassniki.budjet)>=3000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.ok.ru/" + link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let postText = post.current.value;
        let timeText = time.current.value;
        let budjetText = parseInt(budjet.current.value)*parseInt(time.current.value);


        let id = props.table.elementsData.length;
        let section = props.odnoklassniki.section;
        let name = props.name
        props.dispatch(createPositionActionCreator({ id: id,budjet: budjetText, time: timeText, section: section, name: name, link: linkText, positions: [postText, cityText, goodText,"Недель: "+timeText, "Бюджет: ₽"+budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText)+parseInt(cost*parseInt(time.current.value))))
        
        props.odnoklassniki.link = ""
        props.odnoklassniki.city = ""
        props.odnoklassniki.good = ""
        props.odnoklassniki.post = ""
        props.odnoklassniki.time = ""
        props.odnoklassniki.budjet = ""

    };
    return (
        <div>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.forms}>


                <div className={s.col}>
                    <div className={s.header}>
                        <div className={s.header_text}>
                            Заполните поля ниже, все остальное настроят наши специалисты по таргетингу
                        </div>
                    </div>
                    <div className={s.table_wrap}>
                        <div className={s.table_container}>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Ссылка на группу: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <div className={s.part_link}>ok.ru/</div>
                                        <input name="link"
                                            value={props.odnoklassniki.link}
                                            onChange={onTextChange}
                                            ref={link}
                                            placeholder="Пример: example" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Сылка на рекламируемый пост: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="post"
                                            value={props.odnoklassniki.post}
                                            onChange={onTextChange}
                                            ref={post} />
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
                                            value={props.odnoklassniki.city}
                                            onChange={onTextChange}
                                            ref={city}
                                            placeholder="Пример: Москва" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Тематика группы: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="good"
                                            value={props.odnoklassniki.good}
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
                                            value={props.odnoklassniki.budjet}
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
                                            value={props.odnoklassniki.time}
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
                <title>Одноклассники таргетированая реклама - ChaseBox</title>
                <meta name="Targeting Odnoklassniki"
                    content="Targeting Odnoklassniki" />
            </Helmet>
        </div>
    );
}

export default OdnoklassnikiTargeting;