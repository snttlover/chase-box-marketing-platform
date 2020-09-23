import React from 'react';
import s from './Element.module.css'
import { NavLink } from "react-router-dom";
import { removePositionActionCreator } from './../../../redux/Table-reducer'
import { removeSumActionCreator } from './../../../redux/Table-reducer'


const Element = (props) => {
    console.log(props.cost);


    let removePosition = () => {

        props.dispatch(removePositionActionCreator(props.id))
        debugger
        if (props.cost === 0) {
            props.dispatch(removeSumActionCreator({ budjet: parseInt(props.budjet), cost: 0 }))

        }
        else {
            props.dispatch(removeSumActionCreator({ budjet: parseInt(props.budjet), cost: parseInt(props.cost * props.time) }))
        }
    }

    let allPostitons =
        props.positions.map((position) => {
            return <div className={`${s.no_space} ${s.pos_item}`}>{position} <div className={s.line}></div></div>
        });

    return (
        <div className={s.element_body}>

            <ul>
                <li className={s.first_item}>
                    <div className={s.element_cell}>
                        <div className={s.element}>
                            {props.name}
                        </div>
                    </div>
                </li>
                <li>
                    <div className={s.element_cell}>
                        <div className={s.element}>
                            {props.section}
                        </div>
                    </div>
                </li>
                <li>
                    <div className={s.element_cell}>
                        <div className={s.element}>
                            <a target="_blank" href={props.link}>{props.link} <i className="fas fa-external-link-alt" id={s.link}></i></a>
                        </div>
                    </div>
                </li>
                <li className={s.no_space}>
                    <div className={`${s.element_cell} ${s.no_space}`}>
                        <div className={`${s.element} ${s.no_space} ${s.column}`}>
                            {allPostitons}<br />

                        </div>
                    </div>
                </li>
                <li>
                    <div className={s.element_cell}>
                        <div className={s.element}>
                            <a className={s.delete} onClick={removePosition}>
                                <i className="fas fa-times"></i>
                            </a>

                        </div>
                    </div>
                </li>

            </ul>
            {/* <div className={s.header}>
                <ul className={s.articles}>
                    <li className={s.section}> {props.section}</li>
                    <li>{props.name}</li>
                    <li><a target="_blank" href={props.link}>Ссылка</a></li>
                    <li className={s.deleteLi}> <a className={s.delete} onClick={removePosition}>X</a></li>
                </ul>
            </div>
            <div className={s.main}>
                    {allPostitons}
            </div> */}

        </div>
    );
}

export default Element;