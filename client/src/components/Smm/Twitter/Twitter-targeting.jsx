import React from 'react';
import s from './Twitter.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { twitterTargetingTextActionCreator } from '../../../redux/Smm-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'

const TwitterTargeting = (props) => {
    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let onTextChange = () => {
        let linkText = link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        props.dispatch(twitterTargetingTextActionCreator({ link: linkText, city: cityText, good: goodText }));
    };
    let disabled;
    let buttonText;
    if (props.twitter.link != "" && props.twitter.city != "" && props.twitter.good != "") {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.twitter.com/" + link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let id = props.table.elementsData.length + 1;
        let section = props.twitter.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({ id: id, section: section, name: name, link: linkText, positions: [cityText, goodText] }))
        props.twitter.link = ""
        props.twitter.city = ""
        props.twitter.good = ""
    };
    return (
        <div>

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
                                    <div className={s.label}>Ссылка на профиль: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <div className={s.part_link}>twitter.com/</div>
                                        <input name="link"
                                            value={props.twitter.link}
                                            onChange={onTextChange}
                                            ref={link}
                                            placeholder="Пример: realdonaldtrump" />
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
                                            value={props.twitter.city}
                                            onChange={onTextChange}
                                            ref={city}
                                            placeholder="Пример: Москва" />
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
                                            value={props.twitter.good}
                                            onChange={onTextChange}
                                            ref={good}
                                            placeholder="Пример: Косметика" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.button}>
                                <button className={`${s.submit_btn} ${disabled}`} onClick={createPosition}>{buttonText}</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={s.col}>
                    <Table table={props.table} dispatch={props.dispatch} header={props.header} button="Отправить" />
                </div>
            </div>
            <Helmet>
                <title>Twitter таргетированая реклама - ChaseBox</title>
                <meta name="Targeting Twitter"
                    content="Targeting Twitter" />
            </Helmet>
        </div>
    );
}

export default TwitterTargeting;