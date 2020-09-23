import React from 'react';
import s from './Youtube.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import { youtubeTextActionCreator } from "../../../redux/Smm-reducer"
import Table from '../../Table/Table'
import { youtubeTargetingTextActionCreator } from '../../../redux/Smm-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'

const YoutubeTargeting = (props) => {
    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let onTextChange = () => {
        let linkText = link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        props.dispatch(youtubeTargetingTextActionCreator({ link: linkText, city: cityText, good: goodText }));
    };
    let disabled;
    let buttonText;
    if (props.youtube.link != "" && props.youtube.city != "" && props.youtube.good != "") {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.youtube.com/channel/" + link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let id = props.table.elementsData.length;
        let section = props.youtube.section;
        props.dispatch(createPositionActionCreator({ id: id, section: section, link: linkText, positions: [cityText, goodText] }))
        props.youtube.link = ""
        props.youtube.city = ""
        props.youtube.good = ""
    };

    return (
        <div>
            <div className={s.form}>

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
                                    <div className={s.label}>Ссылка на канал: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <div className={s.part_link}>youtube.com/channel/</div>
                                        <input name="link"
                                            value={props.youtube.link}
                                            onChange={onTextChange}
                                            ref={link}
                                            placeholder="Пример: UCaMoBMdDfmBlZTtY7czITeA" />
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
                                            value={props.youtube.city}
                                            onChange={onTextChange}
                                            ref={city}
                                            placeholder="Пример: Москва" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Тематика канала: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="good"
                                            value={props.youtube.good}
                                            onChange={onTextChange}
                                            ref={good}
                                            placeholder="Пример: лайфстайл" />
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
                <title>YouTube таргетированая реклама - ChaseBox</title>
                <meta name="Targeting YouTube"
                    content="Targeting YouTube" />
            </Helmet>
        </div>
    );
}

export default YoutubeTargeting;