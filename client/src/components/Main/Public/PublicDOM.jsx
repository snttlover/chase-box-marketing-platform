import React from 'react';
import s from './Public.module.css'
import ava from './../../../img/ava.svg'
import blue from './../../../img/blue.png'
import siren from './../../../img/siren.jpg'
import purple from './../../../img/purple.jpg'
import pale from './../../../img/pale.jpg'
import youtube_icon from './../../../img/youtube.svg'
import instagram_icon from './../../../img/instagram.svg'
import loading from './../../../img/loading.svg'
import { withRouter, Redirect } from "react-router";

import vk_icon from './../../../img/vk.svg'
import twitter_icon from './../../../img/twitter.svg'
import telegram_icon from './../../../img/telegram.svg'
import { NavLink } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./../../../img/Ouverblue.svg"
import { Helmet } from "react-helmet";
import { openModalActionCreator } from './../../../redux/Public-reducer'
import { closeModalActionCreator } from './../../../redux/Public-reducer'
import { changeTypeActionCreator } from './../../../redux/Public-reducer'
import { yaTextActionCreator } from './../../../redux/Public-reducer'
import { vkTextActionCreator } from './../../../redux/Public-reducer'
import { fbTextActionCreator } from './../../../redux/Public-reducer'
import { googleTextActionCreator } from './../../../redux/Public-reducer'
import { myTargetTextActionCreator } from './../../../redux/Public-reducer'
import Info from './../../Info/Info'


import app from './../../../base'
import { createCabinetsActionCreator } from './../../../redux/Public-reducer'
import { addCabinetActionCreator } from './../../../redux/Public-reducer'
import { openInfoModalActionCreator } from './../../../redux/Info-reducer'
import { typeActionCreator } from './../../../redux/Info-reducer'



import Cabinet from './Cabinet/Cabinet';


const PublicDOM = (props) => {
     
   
    

    return (
        <div className={s.public}>
            <div className={s.back}>
                <div className={s.header}>
                    <div className={s.name}>

                        {props.header.name}
                    </div>
                    <div className={s.buttons}>

                         <a onClick={props.logOut}><i className="fas fa-sign-out-alt"></i>Выйти</a>
                    </div>
                </div>
                <div className={s.cabinets_header}>
                    <div className={s.cabinets_text}>
                        <i className="fas fa-key"></i>Рекламные кабинеты
                    </div>
                </div>
                <div className={s.table_accs_wrap}>

                    <div className={s.table_accs_container}>

                        <div className={s.table_accs}>
                            <div className={s.accs_header}>
                                <div className={s.adds}>
                                    <a className={s.add_acc} onClick={props.open}>
                                        <i className="fas fa-plus" id={s.add_plus}></i>
                                    </a>
                                    <a className={s.add_acc} onClick={() => {
                                        props.openInfo()
                                        props.typeInfo("cabinets")
                                    }}>
                                        <i className="far fa-question-circle"></i>
                                    </a>


                                </div>
                            </div>
                            <div className={s.cabinets}>
                                <div className={`${s.loading} ${props.remove}`}><img src={loading} /></div>

                                {props.cabinets}
                            </div>
                            <div className={`${s.no_pos} ${props.hide}`}>
                                Нет кабинетов
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className={s.features_wrap}>
                <div className={s.opts}>
                    <div className={s.opts_wrap}>
                        <a className={s.opt} href="http://chase-box.com/work" target="_blank">
                            <div className={s.opt_icon}>
                                <i className="fas fa-boxes" style={{ color: "#f3bd37" }} aria-hidden="true"></i>
                            </div>
                            <div className={s.opt_title}>
                                Кейсы
                            </div>
                            <div className={s.opt_sub}>
                                Наши работы
                            </div>
                        </a>
                        <a className={s.opt} href="http://chase-box.com/price" target="_blank">
                            <div className={s.opt_icon}>
                                <i className="fas fa-tags" style={{ color: "#36aff4" }} aria-hidden="true"></i>
                            </div>
                            <div className={s.opt_title}>
                                Прайс
                            </div>
                            <div className={s.opt_sub}>
                                Цены на услуги
                            </div>
                        </a>
                        <a className={s.opt} onClick={() => {
                            props.openInfo()
                            props.typeInfo("ref")
                        }}>
                            <div className={s.opt_icon}>
                                <i className="fas fa-book" style={{ color: "#dc293c" }}></i>
                            </div>
                            <div className={s.opt_title}>
                                Справка
                            </div>
                            <div className={s.opt_sub}>
                                Как пользоваться
                            </div>
                        </a>
                        <a className={s.opt} href="http://chase-box.com/about" target="_blank">
                            <div className={s.opt_icon}>
                            <i style={{color: "#8d31c1"}} className="fas fa-trophy"></i>
                            </div>
                            <div className={s.opt_title}>
                                О нас
                            </div>
                            <div className={s.opt_sub}>
                                Про ChaseBox
                            </div>
                        </a>
                    </div>
                </div>

                <div className={s.features_content}>
                    <div className={s.features_left}>
                        <div className={s.feature}>
                            <NavLink to="/func/email" className={s.first_child}>
                                <div className={s.link_name}>
                                    <div className={`${s.icon} ${s.blue}`}>
                                        <i className="fas fa-envelope-square"></i>
                                    </div>

                                    <div className={s.text}>
                                        <div className={s.main_text}>Рассылки</div>
                                        <div className={s.sub_text}>Всех видов</div>

                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className={s.feature}>
                            <NavLink to="/site/seo">
                                <div className={s.link_name}>
                                    <div className={`${s.icon} ${s.green1}`}>
                                        <i className="fas fa-sort-amount-up-alt"></i>
                                    </div>

                                    <div className={s.text}>
                                        <div className={s.main_text}>SEO</div>
                                        <div className={s.sub_text}>Оптимизация</div>

                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className={s.feature}>
                            <NavLink to="/site/target">
                                <div className={s.link_name}>
                                    <div className={`${s.icon} ${s.green2}`}>
                                        <i className="fas fa-bullseye"></i>
                                    </div>

                                    <div className={s.text}>
                                        <div className={s.main_text}>Таргетинг</div>
                                        <div className={s.sub_text}>В социальных сетях</div>

                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className={s.feature}>
                            <NavLink to="/site/context" className={s.last_child}>
                                <div className={s.link_name}>
                                    <div className={`${s.icon} ${s.blue2}`}>
                                        <i className="fas fa-sign"></i>
                                    </div>

                                    <div className={s.text}>
                                        <div className={s.main_text}>Контекстная реклама</div>
                                        <div className={s.sub_text}>Яндекс и Google</div>

                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.features_right}>
                        <iframe allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" frameborder="0" width="100%" height="98%" src="https://youtube.com/embed/aXDksS7p-18" className={s.frame}></iframe>
                    </div>
                </div>
                
                <div className={s.guide_wrap}>
                    <div className={s.guide}>
                        <div className={s.guide_head}>
                            <h2>Как начать продвижение</h2>
                        </div>
                        <div className={s.orders_wrap}>
                            <div className={s.orders}>
                                <div className={s.order}>
                                    <div className={s.order_digit}>
                                        <p>1</p>
                                    </div>
                                    <div className={s.order_txt}>
                                        <p>
                                            Добавьте рекламные кабинеты интересующих вас площадок по продвижению. Вы так же сможете сделать это при оформлении заказа
                                        </p>
                                    </div>

                                </div>
                                <div className={s.order}>
                                    <div className={s.order_digit}>
                                        <p>2</p>
                                    </div>
                                    <div className={s.order_txt}>
                                        <p>
                                            Выберите в левом меню инструмент продвижения
                                        </p>
                                    </div>

                                </div>
                                <div className={s.order}>
                                    <div className={s.order_digit}>
                                        <p>3</p>
                                    </div>
                                    <div className={s.order_txt}>
                                        <p>
                                            Заполните данные формы и добавьте в список заказов
                                        </p>
                                    </div>

                                </div>
                                <div className={s.order}>
                                    <div className={s.order_digit}>
                                        <p>4</p>
                                    </div>
                                    <div className={s.order_txt}>
                                        <p>
                                            После создания всех позиций перейдите на страницу оформления заказа
                                        </p>
                                    </div>

                                </div>
                                <div className={s.order}>
                                    <div className={s.order_digit}>
                                        <p>5</p>
                                    </div>
                                    <div className={s.order_txt}>
                                        <p>
                                            Выберите кабинет для каждой позиции или добавьте недостающие
                                        </p>
                                    </div>

                                </div>
                                <div className={s.order}>
                                    <div className={s.order_digit}>
                                        <p>6</p>
                                    </div>
                                    <div className={s.order_txt}>
                                        <p>
                                            Оплатите и отправьте заказ, следите за прогрессом в своих рекламных кабинетах
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={s.guide_bottom}>
                            <p>Нажмите "<i className="far fa-question-circle"></i>", чтобы узнавать больше</p>
                        </div>
                    </div>

                </div>
              

            </div>
            <div className={s.socials_wrap}>


                <div className={s.name_container}>
                    <div className={`${s.soc_header} ${s.p_none}`}>
                        ChaseBox в социальных сетях
                    </div>
                </div>
                <div className={s.footer_info}>
                    <a href="https://www.youtube.com/channel/UCQ_AhfuzJG_Jn_N609GmWtA" target="_blank"><img src={youtube_icon} alt="" /></a>
                    <a href="https://www.instagram.com/chasebox_official" target="_blank"><img src={instagram_icon} alt="" /></a>
                    <a href="https://vk.com/chasebox" target="_blank"><img src={vk_icon} alt="" /></a>
                    <a href="https://twitter.com/pPHzs6VqrRanadq" target="_blank"><img src={twitter_icon} alt="" /></a>
                    <a href="https://t.me/ChaseBoxofficial" target="_blank"><img src={telegram_icon} alt="" /></a>
                </div>
            </div>
            <div ref={s.myModal} class={s.modal} style={{ display: props.public.showModal ? 'block' : 'none' }}>
                <div class={s.modal_content}>
                    <div className={s.header_modal}> <div className={s.header_modal_text}>Добавить кабинет <span class={s.close} onClick={props.close}>&times;</span></div></div>

                    <div className={s.modal_body}>
                        <div className={s.body_section}>
                            <div className={s.section_name}>
                                Рекламный кабинет
                            </div>
                            <select name="cabinet-type" onChange={props.handleType} ref={props.selection} className={s.cab_select} id={s.type_cabinet}>
                                <option value="-99999">Выберите тип кабинета...</option>

                                <option value="google">Google Ads</option>
                                <option value="myTarget">MyTarget</option>

                                <option value="yandex">Яндекс</option>
                                <option value="vk">VK</option>
                                <option value="facebook">Facebook BM</option>




                            </select>
                            <a className={s.question} onClick={() => {
                                props.openInfo()
                                props.typeInfo("select")
                            }}>
                                <i className="far fa-question-circle"></i>
                            </a>
                        </div>
                        <div className={s.body_section} id={s.yandex_section} style={{ display: props.public.typeCabinet == "yandex" ? 'grid' : 'none' }} >

                            <div className={s.section_name}>
                                Имя:
                            </div>
                            <input type="text" className={s.input_accs} value={props.public.yandex.name} ref={props.yaName} onChange={props.onYaTextChange} />

                            <div className={s.section_name}>
                                E-mail:
                            </div>
                            <input type="email" className={s.input_accs} value={props.public.yandex.email} ref={props.yaEmail} onChange={props.onYaTextChange} />
                            <div className={s.section_name}>
                                Номер телефона:
                            </div>
                            <input type="number" className={s.input_accs} value={props.public.yandex.number} ref={props.yaNumber} onChange={props.onYaTextChange} />
                            <div className={s.section_name}>
                                Ваш E-mail:
                            </div>
                            <input type="email" className={s.input_accs} value={props.public.yandex.yourEmail} ref={props.yaYourEmail} onChange={props.onYaTextChange} />
                            <input type="checkbox" ref={props.yaCheckbox} defaultChecked={props.public.yandex.checked} onChange={props.onYaCheckChange} />
                            <div className={s.section_name}>
                                Я дал доступ аккаунту chasebox@gmail.com в РСЯ
                            </div>

                            <div className={s.button}>
                                <button className={`${s.submit_btn} ${props.disabled_ya}`} onClick={() => {
                                    props.close()
                                    props.createCabinet("yandex", { name: props.public.yandex.name, email: props.public.yandex.email, number: props.public.yandex.number, yourEmail: props.public.yandex.yourEmail })
                                }}>Добавить</button>
                            </div>
                        </div>
                        <div className={s.body_section} id={s.google_section} style={{ display: props.public.typeCabinet == "google" ? 'grid' : 'none' }} >
                            <div className={s.section_name}>
                                Ваша электронная почта:
                            </div>
                            <input type="text" className={s.input_accs} value={props.public.google.email} ref={props.googleEmail} onChange={props.onGoogleTextChange} />
                            <input type="checkbox" ref={props.googleCheckbox} defaultChecked={props.public.google.checked} onChange={props.onGoogleCheckChange} />
                            <div className={s.section_name}>
                                Я дал доступ аккаунту chasebox@gmail.com в Google Ads
                            </div>
                            <div className={s.button}>
                                <button className={`${s.submit_btn} ${props.disabled_google}`} onClick={() => {
                                    props.close()
                                    props.createCabinet("google", { email: props.public.google.email })
                                }}>Добавить</button>
                            </div>
                        </div>
                        <div className={s.body_section} id={s.vk_section} style={{ display: props.public.typeCabinet == "vk" ? 'grid' : 'none' }} >
                            <div className={s.section_name}>
                                Ссылка на страницу:
                            </div>
                            <input type="text" className={s.input_accs} value={props.public.vk.link} ref={props.vkLink} onChange={props.onVkTextChange} />
                            <div className={s.button}>
                                <button className={`${s.submit_btn} ${props.disabled_vk}`} onClick={() => {
                                    props.close()
                                    props.createCabinet("vk", { link: props.public.vk.link })
                                }}>Добавить</button>
                            </div>
                        </div>
                        <div className={s.body_section} id={s.fb_section} style={{ display: props.public.typeCabinet == "facebook" ? 'grid' : 'none' }} >
                            <div className={s.section_name}>
                                Ссылка на страницу:
                            </div>
                            <input type="text" className={s.input_accs} value={props.public.fb.link} ref={props.fbLink} onChange={props.onFbTextChange} />
                            <div className={s.button}>
                                <button className={`${s.submit_btn} ${props.disabled_fb}`} onClick={() => {
                                    props.close()
                                    props.createCabinet("fb", { link: props.public.fb.link })
                                }}>Добавить</button>
                            </div>
                        </div>
                        <div className={s.body_section} id={s.myTarget_section} style={{ display: props.public.typeCabinet == "myTarget" ? 'grid' : 'none' }} >
                            <div className={s.section_name}>
                                Ваша электронная почта:
                            </div>
                            <input type="text" className={s.input_accs} value={props.public.myTarget.email} ref={props.myTargetEmail} onChange={props.onMyTargetTextChange} />
                            <input type="checkbox" ref={props.myTargetCheckbox} defaultChecked={props.public.myTarget.checked} onChange={props.onMyTargetCheckChange} />
                            <div className={s.section_name}>
                                Я дал доступ аккаунту chasebox@gmail.com в MyTarget
                            </div>
                            <div className={s.button}>
                                <button className={`${s.submit_btn} ${props.disabled_myTarget}`} onClick={() => {
                                    props.close()
                                    props.createCabinet("myTarget", { email: props.public.myTarget.email })
                                }}>Добавить</button>
                            </div>
                        </div>
                    </div>
                    <div className={s.modal_footer}>


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

export default PublicDOM;