import React from 'react';
import s from './Campaigns.module.css'
import loading from './../../../img/loading.svg'
import { withRouter, Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./../../../img/Ouverblue.svg"
import { Helmet } from "react-helmet";
import Info from '../../Info/Info'

import Campaign from './Campaign/Campaign'
import app from '../../../base'
// import { createCabinetsActionCreator } from '../../../redux/Campaigns-reducer'
// import { addCabinetActionCreator } from '../../../redux/Campaigns-reducer'
import { createCampaignsActionCreator } from './../../../redux/Campaigns-reducer'
import { addCampaignActionCreator } from './../../../redux/Campaigns-reducer'
import { openInfoModalActionCreator } from '../../../redux/Info-reducer'
import { typeActionCreator } from '../../../redux/Info-reducer'



// import Campaign from './Campaign/Campaign';


const CampaignsDOM = (props) => {
    
    return (
        <div className={s.public}>
            <div className={s.feature}>
                <div className={s.feature_bar}>
                    <div className={s.feature_wrap}>
                        <div className={s.feature_text}>
                            Заказы
                            {/* <a className={`${s.question} ${s.lil_question}`} onClick={() => {
                                openInfo()
                                typeInfo("context")
                            }}>
                                <i className="far fa-question-circle"></i>
                            </a> */}
                        </div>
                    </div>
                </div>
                {/* <div className={s.line}></div> */}

            </div>
            <div className={s.boards}>
                <div className={s.boards_wrap}>
                    <div className={s.board}>
                        <div className={s.board_wrap}>
                            <div className={s.board_title}>
                                <p>Активные заказы</p>
                            </div>
                            <div className={`${s.loading_mini} ${props.remove}`}>
                                <img src={loading} />
                            </div>
                            <div className={s.board_main} style={{display: props.remove==="remove" ? "block" : "none"}}>
                                <h3>{props.activePositions}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={s.board}>
                        <div className={s.board_wrap}>

                            <div className={s.board_title}>
                                <p>Вложено за все время</p>
                            </div>
                            <div className={`${s.loading_mini} ${props.remove}`}>
                                <img src={loading} />
                            </div>
                            <div className={s.board_main} style={{display: props.remove==="remove" ? "block" : "none"}}>
                                <h3>₽ {props.sumStr}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={s.board}>
                        <div className={s.board_wrap}>

                            <div className={s.board_title}>
                                <p>Всего было заказов</p>
                            </div>
                            <div className={`${s.loading_mini} ${props.remove}`}>
                                <img src={loading} />
                            </div>
                            <div className={s.board_main}  style={{display: props.remove==="remove" ? "block" : "none"}}>
                                <h3>{props.allPositions}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.table}>
                <div className={s.table_wrap}>
                    <div className={s.table_header}>

                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Статус</th>
                                <th>Дата окончания</th>
                                <th>Вид</th>
                                <th>Бюджет</th>

                                <th>Ссылка</th>

                                <th></th>

                            </tr>
                        </thead>
                        <div className={`${s.loading} ${props.remove}`}>
                            <img src={loading} />
                        </div>
                        {props.campaigns.reverse()}
                        {/* <Campaign /> */}
                    </table>
                    <div className={s.table_footer}>

                    </div>
                </div>
            </div>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />
            <Helmet>
                <title>Главная - ChaseBox</title>
                <meta name="ChaseBox"
                    content="ChaseBox" />
            </Helmet>
        </div>
    );
}

export default CampaignsDOM;