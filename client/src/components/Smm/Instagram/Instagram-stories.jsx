import React from 'react';
import s from './Instagram.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Table from '../../Table/Table'
import { instagramStoriesTextActionCreator } from '../../../redux/Smm-reducer'
import { createPositionActionCreator } from '../../../redux/Table-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'
import {addSumActionCreator} from './../../../redux/Table-reducer'

import Info from './../../Info/Info'
const InstagramStories = (props) => {
    const cost = 3790;

    let link = React.createRef();
    let city = React.createRef();
    let good = React.createRef();
    let content = React.createRef();
    let disk = React.createRef();
    let time = React.createRef();
    let budjet = React.createRef();


    let linkText = ""
    let cityText = ""
    let goodText = ""
    let contentText = ""
    let diskText = ""
    let timeText =""
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
        contentText = content.current.value;
        diskText = disk.current.value;
        timeText = time.current.value;
        budjetText = budjet.current.value;



        props.dispatch(instagramStoriesTextActionCreator({budjet: budjetText, time: timeText, link: linkText, city: cityText, good: goodText, content: contentText, disk: diskText }));


    };
    let disabled;
    let buttonText;
    if (props.instagram.link != "" && props.instagram.city != "" && props.instagram.good != "" && props.instagram.disk!="" && parseInt(props.instagram.time)>=1&& parseInt(props.instagram.budjet)>=3000) {
        disabled = "nodisabled"
        buttonText = "Подтвердить"
    } else {
        disabled = "disabled"
        buttonText = "Заполните все поля"
    }
    let createPosition = () => {
        let linkText = "https://www.instagram.com/" + link.current.value;


        cityText = city.current.value;
        goodText = good.current.value;
        contentText = content.current.value;
        diskText = disk.current.value;
        timeText = time.current.value;
        budjetText = parseInt(budjet.current.value)*parseInt(time.current.value);



        let id = props.table.elementsData.length;
        let section = props.instagram.section;
        let name = props.name;
        props.dispatch(createPositionActionCreator({ id: id,budjet: budjetText, time: timeText, section: section, name: name, link: linkText, positions: [diskText, cityText, goodText, contentText, "Недель: "+timeText, "Бюджет: ₽"+budjetText] }))
        props.dispatch(addSumActionCreator(parseInt(budjetText)+parseInt(cost*parseInt(time.current.value))))
        
        props.instagram.link = ""
        props.instagram.city = ""
        props.instagram.good = ""
        props.instagram.content = ""
        props.instagram.disk = ""
        props.instagram.time = ""
        props.instagram.budjet = ""


    };


    return (
        <div>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <div className={s.form}>

                <div className={s.col}>
                    <div className={s.header}>
                        <div className={s.header_text}>
                            Заполните поля ниже, все остальное настроят наши специалисты по настройке контекстной рекламы
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
                                            placeholder="Пример: лайфстайл" />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Дополнительные сведения (опционально): </div>
                                </div>
                                <div className={s.input_block}>
                                    <div className={s.input}>
                                        <input name="content"
                                            value={props.instagram.content}
                                            onChange={onTextChange}
                                            ref={content} />
                                    </div>
                                </div>
                            </div>
                            <div className={s.table}>
                                <div className={s.label_block}>
                                    <div className={s.label}>Ссылка на диск с видео для сторис: 
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
                                            value={props.instagram.disk}
                                            onChange={onTextChange}
                                            ref={disk} />
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
                <title>Instagram сторис - ChaseBox</title>
                <meta name="Context Instagram"
                    content="Context Instagram" />
            </Helmet>
        </div>
    );
}

export default InstagramStories;