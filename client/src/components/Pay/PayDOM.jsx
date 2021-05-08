import React from 'react';
import s from './Pay.module.css'
import { NavLink } from "react-router-dom";
import logo from '../../img/gregory.png';
import Table from './../Table/Table'
import { sendDataActionCreator } from '../../redux/Pay-reducer'
import axios from 'axios'
import { HashRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
// import YandexPayment, { Shop, Payment, PaymentToken } from 'react-native-yandex-payment';
import loading from './../../img/loading.svg'


import { yaTextActionCreator } from './../../redux/Pay-reducer'
import { vkTextActionCreator } from './../../redux/Pay-reducer'
import { fbTextActionCreator } from './../../redux/Pay-reducer'
import { googleTextActionCreator } from './../../redux/Pay-reducer'
import { myTargetTextActionCreator } from './../../redux/Pay-reducer'

import { removeAllActionCreator } from './../../redux/Table-reducer'
import { resetSumActionCreator } from './../../redux/Table-reducer'

import app from './../../base'
import { auth } from 'firebase';
// import { Button, Header, Icon, Modal } from 'react-bootstrap'
import { openModalActionCreator } from './../../redux/Pay-reducer'
import { closeModalActionCreator } from './../../redux/Pay-reducer'

import { createCabinetsActionCreator } from './../../redux/Pay-reducer'
import { payCabinetActionCreator } from './../../redux/Pay-reducer'
import { openInfoModalActionCreator } from './../../redux/Info-reducer'
import { typeActionCreator } from './../../redux/Info-reducer'
import { addCampaignActionCreator } from './../../redux/Campaigns-reducer'
import { createCampaignsActionCreator } from './../../redux/Campaigns-reducer'
import { changePersActionCreator } from './../../redux/Pay-reducer'



import Info from '../Info/Info'





const PayDOM = (props) => {
    debugger
    return (

        <div className={s.payPage}>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <Table table={props.table} dispatch={props.dispatch} button="Подтвердить" header={props.header} />
            {/* <div className={s.ask_block}>
                <a className={s.question}>
                    <i className="far fa-question-circle"></i>
                </a>
            </div> */}

            <div className={s.input} style={{ display: props.sites }}>
                <div className={s.input_header}>
                    Кабинет сайта
                </div>
                <select ref={props.siteCabinet}>
                    {props.sitesInput}

                </select>
            </div>
            <div className={s.input} style={{ display: props.siteAdd }}>
                <div className={s.input_header}>
                    У вас нет кабинета для сайта<span>*</span>

                </div>
                <button onClick={() => { props.open("google") }}>Добавить Google Ads</button>
                <a className={s.question} onClick={() => {
                    props.openInfo()
                    props.typeInfo("google")
                }}>
                    <i className="far fa-question-circle"></i>
                </a>
                <span className={s.or}>или</span>
                <button onClick={() => { props.open("yandex") }}>Добавить Яндекс</button>
                <a className={s.question} onClick={() => {
                    props.openInfo()
                    props.typeInfo("yandex")
                }}>
                    <i className="far fa-question-circle"></i>
                </a>

            </div>
            <div className={s.input} style={{ display: props.vk }}>
                <div className={s.input_header}>
                    Кабинет VK
                </div>

                <select ref={props.vkCabinet}>
                    {props.vkInput}

                </select>
            </div>
            <div className={s.input} style={{ display: props.vkAdd }}>
                <div className={s.input_header}>
                    У вас нет кабинета VK<span>*</span>

                </div>
                <button onClick={() => { props.open("vk") }}>Добавить VK</button>
                <a className={s.question} onClick={() => {
                    props.openInfo()
                    props.typeInfo("vk")
                }}>
                    <i className="far fa-question-circle"></i>
                </a>

            </div>
            <div className={s.input} style={{ display: props.fb }}>
                <div className={s.input_header}>
                    Кабинет Facebook/Instagram
                </div>

                <select ref={props.fbCabinet}>
                    {props.fbInput}
                </select>
            </div>
            <div className={s.input} style={{ display: props.fbAdd }}>
                <div className={s.input_header}>
                    У вас нет кабинета Facebook BM<span>*</span>

                </div>
                <button onClick={() => { props.open("fb") }}>Добавить Facebook BM</button>
                <a className={s.question} onClick={() => {
                    props.openInfo()
                    props.typeInfo("facebook")
                }}>
                    <i className="far fa-question-circle"></i>
                </a>
            </div>
            <div className={s.input} style={{ display: props.myTarget }}>
                <div className={s.input_header}>

                    Кабинет MyTarget
                </div>

                <select ref={props.myTargetCabinet}>
                    {props.myTargetInput}

                </select>
            </div>
            <div className={s.input} style={{ display: props.myTargetAdd }}>
                <div className={s.input_header}>
                    У вас нет кабинета myTarget<span>*</span>
                </div>
                <button onClick={() => { props.open("myTarget") }}>Добавить кабинет myTarget</button>
                <a className={s.question} onClick={() => {
                    props.openInfo()
                    props.typeInfo("myTarget")
                }}>
                    <i className="far fa-question-circle"></i>
                </a>

            </div>
            {/* <div className={s.input} style={{ display: google }}>
                <div className={s.input_header}>Кабинет Google Ads для YouTube</div>

                <select ref={googleCabinet}>
                    {googleInput}

                </select>
            </div> */}
            <div className={s.toggle}>
                <input type="radio" name="sizeBy" value="phys" id="sizeWeight" onClick={() => {
                    props.changePers('phys')
                    props.close()
                }} checked={props.pay.payPerson === 'phys'} />
                <label for="sizeWeight">Физическое лицо</label>
                <input type="radio" name="sizeBy" value="jud" id="sizeDimensions" onClick={() => {
                    props.changePers("jud")
                    props.close()
                }} checked={props.pay.payPerson === 'jud'} />
                <label for="sizeDimensions">Юридическое лицо</label>
            </div>
            <div className={s.button}>
                <button className={` ${props.disabled}`} onClick={() => {
                    props.open("main");
                    props.submitForm()
                    props.test()
                }}>Оплатить: ₽ {props.sumStr}</button>
            </div>
            <div className={s.attention}>Внимательно проверьте правильность введенных данных!</div>

            <div ref={s.myModal} class={s.modal} style={{ display: props.pay.showModal ? 'block' : 'none' }}>
                <div class={s.modal_content}>

                    <div className={s.header_modal}>
                        {/* <div className={s.header_modal_text} style={{ display: props.pay.newType === "main" ? "block" : "none" }}>Спасибо! <span class={s.close} onClick={close}>&times;</span></div> */}
                        <div className={s.header_modal_text} style={{ display: props.pay.newType === "main" ? "none" : "block" }}>Добавить кабинет <span class={s.close} onClick={props.close}>&times;</span></div>
                    </div>


                    <div className={s.modal_body} style={{ display: props.pay.newType === "main" ? "block" : "none" }}>
                        <div className={s.loading}>
                            <img src={props.loading} />
                        </div>
                        <p className={s.p_center}>Создание страницы оплаты</p>
                    </div>
                    <div className={s.modal_body} style={{ display: props.pay.newType === "yandex" ? "grid" : "none" }}>
                        <div className={s.section_name}>
                            Имя:
                            </div>
                        <input type="text" className={s.input_accs} value={props.pay.yandex.name} ref={props.yaName} onChange={props.onYaTextChange} />

                        <div className={s.section_name}>
                            E-mail:
                            </div>
                        <input type="email" className={s.input_accs} value={props.pay.yandex.email} ref={props.yaEmail} onChange={props.onYaTextChange} />
                        <div className={s.section_name}>
                            Номер телефона:
                            </div>
                        <input type="number" className={s.input_accs} value={props.pay.yandex.number} ref={props.yaNumber} onChange={props.onYaTextChange} />
                        <div className={s.section_name}>
                            Ваш E-mail:
                            </div>
                        <input type="email" className={s.input_accs} value={props.pay.yandex.yourEmail} ref={props.yaYourEmail} onChange={props.onYaTextChange} />
                        <input type="checkbox" ref={props.yaCheckbox} defaultChecked={props.pay.yandex.checked} onChange={props.onYaCheckChange} />
                        <div className={s.section_name}>
                            Я дал доступ аккаунту chasebox@gmail.com в РСЯ
                        </div>
                        <div className={s.button}>
                            <button className={`${s.submit_btn} ${props.disabled_ya}`} onClick={() => {
                                props.close()
                                props.createCabinet("yandex", { email: props.pay.yandex.email, number: props.pay.yandex.number, name: props.pay.yandex.name, yourEmail: props.pay.yandex.yourEmail })
                            }}>Добавить</button>
                        </div>
                    </div>
                    <div className={s.modal_body} style={{ display: props.pay.newType === "google" ? "grid" : "none" }}>
                        <div className={s.section_name}>
                            Ваша электронная почта:
                        </div>
                        <input type="text" className={s.input_accs} value={props.pay.google.email} ref={props.googleEmail} onChange={props.onGoogleTextChange} />
                        <input type="checkbox" ref={props.googleCheckbox} defaultChecked={props.pay.google.checked} onChange={props.onGoogleCheckChange} />
                        <div className={s.section_name}>
                            Я дал доступ аккаунту chasebox@gmail.com в Google Ads
                        </div>
                        <div className={s.button}>
                            <button className={`${s.submit_btn} ${props.disabled_google}`} onClick={() => {
                                props.close()
                                props.createCabinet("google", { email: props.pay.google.email })
                            }}>Добавить</button>
                        </div>
                    </div>
                    <div className={s.modal_body} style={{ display: props.pay.newType === "vk" ? "grid" : "none" }}>
                        <div className={s.section_name}>
                            Ссылка на страницу:
                        </div>
                        <input type="text" className={s.input_accs} value={props.pay.vk.link} ref={props.vkLink} onChange={props.onVkTextChange} />
                        <div className={s.button}>
                            <button className={`${s.submit_btn} ${props.disabled_vk}`} onClick={() => {
                                props.close()
                                props.createCabinet("vk", { link: props.pay.vk.link })
                            }}>Добавить</button>
                        </div>
                    </div>
                    <div className={s.modal_body} style={{ display: props.pay.newType === "fb" ? "grid" : "none" }}>
                        <div className={s.section_name}>
                            Ссылка на страницу:
                        </div>
                        <input type="text" className={s.input_accs} value={props.pay.fb.link} ref={props.fbLink} onChange={props.onFbTextChange} />
                        <div className={s.button}>
                            <button className={`${s.submit_btn} ${props.disabled_fb}`} onClick={() => {
                                props.close()
                                props.createCabinet("fb", { link: props.pay.fb.link })
                            }}>Добавить</button>
                        </div>
                    </div>
                    <div className={s.modal_body} style={{ display: props.pay.newType === "myTarget" ? "grid" : "none" }}>
                        <div className={s.section_name}>
                            Ваша электронная почта:
                        </div>
                        <input type="text" className={s.input_accs} value={props.pay.myTarget.email} ref={props.myTargetEmail} onChange={props.onMyTargetTextChange} />
                        <input type="checkbox" ref={props.myTargetCheckbox} defaultChecked={props.pay.myTarget.checked} onChange={props.onMyTargetCheckChange} />
                        <div className={s.section_name}>
                            Я дал доступ аккаунту chasebox@gmail.com в MyTarget
                            </div>
                        <div className={s.button}>
                            <button className={`${s.submit_btn} ${props.disabled_myTarget}`} onClick={() => {
                                props.close()
                                props.createCabinet("myTarget", { email: props.pay.myTarget.email })
                            }}>Добавить</button>
                        </div>
                    </div>

                    <div className={s.modal_footer} style={{ display: props.pay.newType === "main" ? "block" : "none" }}>
                        {/* <NavLink to="/campaigns" className={`${s.submitButton} ${s.margin_none}`}>Заказы</NavLink> */}

                    </div>
                    <div className={s.modal_footer} style={{ display: props.pay.newType === "main" ? "none" : "block" }}>

                    </div>
                </div>
            </div>
            <Helmet>
                <title>Подтверждение формы - ChaseBox</title>
                <meta name="Send"
                    content={props.table} />
            </Helmet>
        </div>
    );
}

export default PayDOM;







// let recipient = React.createRef();
//   let sender = React.createRef();
//   let subject = React.createRef();
//   let text = React.createRef();
//   return (
//     <div className="App">
//       <form  method="POST">
//             {/* <Table table={props.table} dispatch={props.dispatch} button="Подтвердить"/> */}
//             <input type="text" name="recipient" ref={recipient}/>
//             <input type="text" name="sender" ref={sender}/> 
//             <input type="text" name="subject" ref={subject}/>
//             <input type="text" name="text" ref={text}/>
//             <button type="submit" >Test</button>
//       </form>
//     </div>
//   );