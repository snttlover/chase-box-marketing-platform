import React from 'react';
import s from './Instagram.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { instagramTargetingTextActionCreator } from '../../../redux/Smm-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import {addSumActionCreator} from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
const InstagramTargeting = (props) => {
    const cost = 3790;

    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let post = React.createRef();
    let time = React.createRef();
    let budjet = React.createRef();

    let onTextChange = () => {

        let linkText = link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let postText = post.current.value;
        let timeText = time.current.value;
        let budjetText = budjet.current.value;

        props.dispatch(instagramTargetingTextActionCreator({budjet: budjetText, time: timeText, link: linkText, city: cityText, good: goodText, post: postText }));
    };
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let disabled;
    let buttonText;
    if (props.instagram.link != "" && props.instagram.city != "" && props.instagram.good != ""&& props.instagram.post != ""&& parseInt(props.instagram.time)>=1&& parseInt(props.instagram.budjet)>=3000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.instagram.com/" + link.current.value;
        let cityText = city.current.value;
        let goodText = good.current.value;
        let postText = post.current.value;
        let timeText = time.current.value;
        let budjetText = parseInt(budjet.current.value)*parseInt(time.current.value);


        let id = props.table.elementsData.length;
        let section = props.instagram.section;
        let name = props.name
        props.dispatch(createPositionActionCreator({ id: id,budjet: budjetText, time: timeText, section: section, name: name, link: linkText, positions: [postText,cityText, goodText, "Недель: " + timeText, "Бюджет: ₽"+budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText)+parseInt(cost*parseInt(time.current.value))))
        
        props.instagram.link = ""
        props.instagram.city = ""
        props.instagram.good = ""
        props.instagram.post = ""
        props.instagram.time = ""
        props.instagram.budjet = ""


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
                                    <div className={s.label}>Ссылка на профиль: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <div className={s.part_link}>instagram.com/</div>
                                        <input name="link"
                                            value={props.instagram.link}
                                            onChange={onTextChange}
                                            ref={link}
                                            placeholder="Пример: example" />
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
                                            value={props.instagram.city}
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
                                            value={props.instagram.good}
                                            onChange={onTextChange}
                                            ref={good}
                                            placeholder="Пример: личный" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Ссылка на рекламируемый пост: </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="post"
                                            value={props.instagram.post}
                                            onChange={onTextChange}
                                            ref={post} />
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
                                            value={props.instagram.budjet}
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
                                            value={props.instagram.time}
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
                <title>Instagram таргетированая реклама - ChaseBox</title>
                <meta name="Targeting Instagram"
                    content="Targeting Instagram" />
            </Helmet>
        </div>
    );
}

export default InstagramTargeting;