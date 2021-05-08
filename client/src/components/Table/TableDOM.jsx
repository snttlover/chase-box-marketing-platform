import React from 'react';
import s from './Table.module.css'
import { NavLink } from "react-router-dom";
import Element from './Element/Element'
import { sendDataActionCreator } from '../../redux/Pay-reducer'



const TableDOM = (props) => {
    
    return (
        <div className={s.content}>
            <div className={s.content_container}>
                <div className={s.table_header}>
                    <div className={s.table_header_container}>
                        <div className={s.label}>
                            Заказы
                        </div>
                        <div className={s.button_block}>
                            <span className={s.sum_block}>
                                <span className={s.res}>Итого:</span>
                                <span className={s.real_sum} style={{color: props.table.sum===0 ? "#9c9c9c" : "#4e4e4e"}}> ₽ {props.sumStr} </span>
                            </span>

                            <NavLink to="/pay" className={`${props.navClass} ${s.payPage} ${props.disabled}`} type={props.type}> {props.button} </NavLink>
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
                    {props.elements}

                    <div className={s.table_footer}>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default TableDOM;