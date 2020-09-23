import React from 'react';
import s from './Table.module.css'
import { NavLink } from "react-router-dom";
import Element from './Element/Element'
import { sendDataActionCreator } from '../../redux/Pay-reducer'



const Table = (props) => {
    let type = "";
    let sumStr=0
    let elements = props.table.elementsData.map((element) => {
        let cost
        debugger
        if (element.section === "SEO") {
            cost = 9990
        }
        else if (element.section === "Онлайн трафик" || element.section === "E-mail рассылка" || element.section === "Рассылка в мессенджерах" || element.section === "Рассылка в социальных сетях") {
            cost = 0
        } else {
            cost = 3790;
        }

        debugger
        return <Element
            sum={props.table.sum}
            section={element.section}
            id={element.id}
            budjet={element.budjet}
            name={props.header.name}
            link={element.link}
            positions={element.positions}
            dispatch={props.dispatch}
            cost={cost}
            time={element.time} />
    });
    // let submitForm=()=>{
    //     props.dispatch(sendDataActionCreator(props.table))
    // };
    let buttonClass;
    let navClass;
    let disabled;
    if (props.button == "Подтвердить") {
        navClass = "remove"
    }
    else {
        navClass = "noremove"
    }
    if (props.table.elementsData.length == 0) {
        disabled = "disabled"
    } else {
        disabled = "nodisabled"
    }
    sumStr = props.table.sum
    sumStr = sumStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
        <div className={s.content}>
            {/* {elements} */}
            <div className={s.content_container}>
                <div className={s.table_header}>
                    <div className={s.table_header_container}>
                        <div className={s.label}>
                            Заказы
                        </div>
                        <div className={s.button_block}>
                            <span className={s.sum_block}>
                                <span className={s.res}>Итого:</span>
                                <span className={s.real_sum} style={{color: props.table.sum===0 ? "#9c9c9c" : "#4e4e4e"}}> ₽ {sumStr} </span>
                            </span>

                            <NavLink to="/pay" className={`${navClass} ${s.payPage} ${disabled}`} type={type}> {props.button} </NavLink>
                        </div>
                    </div>
                </div>
                <div className={s.table}>
                    <div className={s.table_head}>
                        <tr>
                            <th className={`${s.table_element} ${s.first_item}`}>
                                Имя пользователя
                            </th>
                            <th className={s.table_element}>
                                Позиция
                            </th>
                            <th className={s.table_element}>
                                Ссылка
                            </th>
                            <th className={s.table_element}>
                                Дополнительно
                            </th>
                            <th className={s.table_element}>
                                &nbsp;
                            </th>
                        </tr>
                    </div>
                    {elements}

                    <div className={s.table_footer}>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default Table;