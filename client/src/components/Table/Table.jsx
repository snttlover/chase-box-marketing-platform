import React from 'react';
import s from './Table.module.css'
import { NavLink } from "react-router-dom";
import Element from './Element/Element'
import { sendDataActionCreator } from '../../redux/Pay-reducer'
import TableDOM from './TableDOM';



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
    
        <TableDOM {...props} sumStr={sumStr} navClass={navClass} disabled={disabled} type={type} elements={elements} />
    );
}

export default Table;