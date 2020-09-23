import React from 'react';
import s from './Sidebar.module.css'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import logo from '../../img/gregory.svg';
import './../../App.css';
import main from './../../App.css'
import Main from "./Categories/Main";
import Functions from "./Categories/Functions";
import Site from "./Categories/Site";
import Smm from "./Categories/Smm";
import Scrollbars from 'react-custom-scrollbars';
import { slide as Menu } from 'react-burger-menu';
const Sidebar = (props) => {
    let remove
    let MainComponent = () => <Main />;
    let FunctionsComponent = () => <Functions />;
    let SiteComponent = () => <Site />;
    let SmmComponent = () => <Smm state={props.smm} dispatch={props.dispatch} />
    let mainPath =()=>{
        localStorage.setItem('path','/')
    }
    if (props.state.showSidebar || window.innerWidth > 900) {
        remove = ''
    } else remove = 'remove'
    return (

        <Scrollbars autoHeightMax={100} background={"#a88ab2"} className={`${s.sidebar} ${remove}`}>

            <div className={s.logo}> <img src={logo} alt="" /></div>
            <div className={s.menu_container}>
                <div className={s.main_container}>
                    <NavLink exact to="/" activeClassName={s.act} onClick={mainPath} className={s.main_page}> <i className="fas fa-house-user"></i> Представление</NavLink>
                    <NavLink exact to="/campaigns" activeClassName={s.act} className={s.main_page}> <i className="fas fa-vote-yea"></i> Заказы</NavLink>

                </div>
                <div className={s.menu_elem}>
                    <input type="checkbox" id={s.main_check} />

                    <div className={s.group_elem} id={s.main_block}>

                        <div className={s.group_title}>Главная <i className="fas fa-sort-up"></i></div>
                        <div className={s.group_desc}>Бриф, чат, поддержка</div>

                    </div>
                    <div className={s.dropdown_menu} id={s.main_route}>
                        <NavLink to="/main/breef" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fas fa-book-open"></i> Рекламная кампания
                        </NavLink>
                        <NavLink to="/main/support" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fas fa-comments"></i> Чат
                        </NavLink>
                        <NavLink to="/main/feedback" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fas fa-envelope"></i> Обратная связь
                        </NavLink>
                    </div>
                </div>

                <div className={s.menu_elem}>
                    <input type="checkbox" id={s.site_check} />

                    <div className={s.group_elem} id={s.site_block}>

                        <div className={s.group_title}>Сайт <div className={s.icon_title}><i className="fas fa-sort-up"></i></div></div>
                        <div className={s.group_desc}>Продвижение сайта</div>

                    </div>
                    <div className={s.dropdown_menu} id={s.site_route}>
                        <NavLink to="/site/seo" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fas fa-sort-amount-up-alt"></i> SEO

                        </NavLink>
                        <NavLink to="/site/target" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fas fa-bullseye"></i>  Таргетинг
                        </NavLink>
                        <NavLink to="/site/context" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fas fa-sign"></i>  Контекстная реклама
                        </NavLink>
                    </div>
                </div>
                <div className={s.menu_elem}>
                    <input type="checkbox" id={s.smm_check} />

                    <div className={s.group_elem} id={s.smm_block}>

                        <div className={s.group_title}>SMM <div className={s.icon_title}><i className="fas fa-sort-up"></i></div></div>
                        <div className={s.group_desc}>Раскрутка в соцсетях</div>

                    </div>
                    <div className={s.dropdown_menu} id={s.smm_route}>
                        {/* <NavLink to="/smm/youtube" activeClassName={s.act} className={s.dropdown_item}>
                                <i className="fab fa-youtube"></i>  YouTube
                        </NavLink> */}
                        <NavLink to="/smm/instagram" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fab fa-instagram"></i> Instagram
                        </NavLink>
                        <NavLink to="/smm/vk" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fab fa-vk"></i>  VK
                        </NavLink>
                        <NavLink to="/smm/odnoklassniki" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fab fa-odnoklassniki"></i>  Одноклассники
                        </NavLink>
                        {/* <NavLink to="/smm/telegram" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fab fa-telegram"></i> Telegram

                        </NavLink> */}
                        <NavLink to="/smm/facebook" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fab fa-facebook-f"></i> Facebook
                        </NavLink>
                    </div>
                </div>
                <div className={s.menu_elem}>
                    <input type="checkbox" id={s.func_check} />

                    <div className={s.group_elem} id={s.func_block}>

                        <div className={s.group_title}>Дополнительно <i className="fas fa-sort-up"></i></div>
                        <div className={s.group_desc}>Дополнительные средства продвижения</div>

                    </div>
                    <div className={s.dropdown_menu} id={s.func_route}>
                        <NavLink to="/func/traffic" activeClassName={s.act} className={s.dropdown_item}>
                            <i className="fas fa-tachometer-alt"></i> Онлайн траффик
                        </NavLink>
                        <NavLink to="/func/email" activeClassName={s.act} className={s.dropdown_item}>
                            <i class="fas fa-at"></i>  E-mail рассылка
                        </NavLink>
                        <NavLink to="/func/socials" activeClassName={s.act} className={s.dropdown_item}>
                            <i class="fas fa-user-circle"></i>  Рассылка в соцсетях
                        </NavLink>
                        <NavLink to="/func/messengers" activeClassName={s.act} className={s.dropdown_item}>
                            <i class="fas fa-envelope-square"></i>  Рассылка в мессенджерах

                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={s.cases}>
                <a href="http://chase-box.com/price" target='_blank'>
                    <i className="fas fa-tags"></i> Прайс

                </a>
                <a href="http://chase-box.com/work" target='_blank'>
                    <i className="fas fa-boxes"></i> Кейсы
                </a>
            </div>
            {/* <a href="http://chase-box.com/price" target='_blank' className={s.cases}>
                <i className="fas fa-boxes"></i> Прайс-лист
            </a>
            <a href="http://chase-box.com/work" target='_blank' className={s.cases}>
                <i className="fas fa-boxes"></i> Кейсы
            </a> */}

            <div className={s.nav_toggle}>
                {/* <input type="checkbox" id="hide_sidebar" /> */}
                <div className={s.mark}>© 2020 ChaseBox</div>
                {/* <i className="fas fa-chevron-left"></i> */}
            </div>
            {/* <Route exact path="/" render={MainComponent} />
            <Route path="/main" render={MainComponent} />
            <Route path="/func" render={FunctionsComponent} />
            <Route path="/site" render={SiteComponent} />
            <Route path="/smm" render={SmmComponent} />
            <div className={s.trademark}>ChaseBox, 2020</div> */}
        </Scrollbars>


    );

}

export default Sidebar;