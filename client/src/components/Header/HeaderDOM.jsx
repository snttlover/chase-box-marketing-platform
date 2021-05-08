import React from 'react';
import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import logo from '../../img/gregory.svg';
import ava from '../../img/ava.svg';
import app from "./../../base";
import Sidebar from './../Sidebar/Sidebar'
import { nameActionCreator } from './../../redux/Header-reducer'
import { updateActionCreator } from './../../redux/Header-reducer'
import { showSidebarActionCreator } from './../../redux/Header-reducer'

import { preloaderReducer } from '../../redux/Preloader-reducer';
import Info from './../Info/Info'
import { openInfoModalActionCreator } from './../../redux/Info-reducer'
import { typeActionCreator } from './../../redux/Info-reducer'



const HeaderDOM = (props) => {
    
    return (
        <header className={s.header} >
            {/* <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} /> */}

            <nav>
                <div className={s.perefer}>
                    {/* <div className={s.dropdown} id={s.sum}>
                        <a className={s.balance}>
                            <span className={s.label}>{props.state.name} </span>
                        </a>
                    </div> */}
                    <div className={s.col}>
                        <div className={s.phone}><i class="fas fa-phone"></i>+7 (912) 807-95-04</div>
                        <NavLink to="/main/support" className={s.support_link}>Поддержка</NavLink>
                    </div>
                    <div className={`${s.col} ${s.nobackground}`}>
                        <div className={s.ref}>
                            <div className={s.ref_wrap}>
                                <a onClick={() => {
                                    props.openInfo()
                                    props.typeInfo("ref")
                                }}>
                                    Справка
                            </a>
                            </div>
                        </div>
                        {/* <div className={s.chat} >
                            <div className={s.chat_wrap}>

                                <NavLink to="/main/support">
                                    <div className={s.notification} style={{ display: notification ? "inline-block" : "none" }}></div>
                                    <i className="fas fa-comment"></i>
                                </NavLink>


                            </div>
                        </div> */}
                        <div className={s.dropdown} id={s.prof}>
                            <input type="checkbox" />

                            <span className={s.label}>{props.state.name} </span>
                            <img src={ava} className={s.ava} />

                            <div className={s.dropdown_content} id={s.prof_cont}>
                                <div className={s.container_drop}>
                                    <div className={s.image_pref}><img src={ava} /></div>
                                    <div className={s.pref_container}>
                                        <div className={s.sub_pref}>{props.state.name} </div>
                                        <NavLink to='/' className={s.dropElement} onClick={props.logOut} >
                                            <i className="fas fa-sign-out-alt"></i>
                                            Выйти
                                        </NavLink>
                                    </div>
                                    <div className={`${s.ref} ${s.mobile_ref}`}>
                                        <div className={s.ref_wrap}>
                                            <a onClick={() => {
                                                props.openInfo()
                                                props.typeInfo("ref")
                                            }}>
                                                Справка
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderDOM;