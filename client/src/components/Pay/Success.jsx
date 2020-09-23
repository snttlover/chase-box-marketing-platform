import React from 'react';
import s from './Pay.module.css'
import { NavLink } from "react-router-dom";
import logo from '../../img/gregory.png';
import Table from '../Table/Table'
import { sendDataActionCreator } from '../../redux/Pay-reducer'
import axios from 'axios'
import { HashRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
// import YandexPayment, { Shop, Payment, PaymentToken } from 'react-native-yandex-payment';
import loads from './../../img/loading.svg'


import { yaTextActionCreator } from '../../redux/Pay-reducer'
import { vkTextActionCreator } from '../../redux/Pay-reducer'
import { fbTextActionCreator } from '../../redux/Pay-reducer'
import { googleTextActionCreator } from '../../redux/Pay-reducer'
import { myTargetTextActionCreator } from '../../redux/Pay-reducer'

import { removeAllActionCreator } from '../../redux/Table-reducer'
import { resetSumActionCreator } from '../../redux/Table-reducer'

import app from '../../base'
import { auth } from 'firebase';
import { Button, Header, Icon, Modal } from 'react-bootstrap'
import { openModalActionCreator } from '../../redux/Pay-reducer'
import { closeModalActionCreator } from '../../redux/Pay-reducer'

import { createCabinetsActionCreator } from '../../redux/Pay-reducer'
import { payCabinetActionCreator } from '../../redux/Pay-reducer'
import { openInfoModalActionCreator } from '../../redux/Info-reducer'
import { typeActionCreator } from '../../redux/Info-reducer'
import { addCampaignActionCreator } from '../../redux/Campaigns-reducer'
import { createCampaignsActionCreator } from '../../redux/Campaigns-reducer'


import Info from '../Info/Info'





const Success = (props) => {
    // let name = React.createRef();
    // let email = React.createRef();
    // let message = React.createRef();
    let data = "";
    let paymentStatus

    let sum = 0
    let allPositions = 0;
    let setSum = 0;
    let setAllPositions = 0;
    let checkout;
    let loading = true;
    let sumStr = 0

    // var user = localStorage.getItem('email');
    // let actualUser = user.split('.').join("")
    let remove
    let sitesArr = []
    let vkArr = []
    let fbArr = []
    let googleArr = []
    let myTargetArr = []
    let cabinetObject
    let checkFlag = false
    let activePositions = 0
    let allPos = 0
    let paymentMethod;
    let paymentId
    let flagg
    let check
    let resolved
    

    if (localStorage.getItem('create') === "true") {

        // loading = true
        debugger
        // if (localStorage.getItem('paymentType') === "jud") {
            check = axios.post('/check', {
                id: localStorage.getItem('checkId')
            })
        // }
        // if (localStorage.getItem('paymentType') === "phys") {
        //     check = axios.post('/sbercheck', {
        //         id: localStorage.getItem('checkId')
        //     })
        // }
        check.then((value) => {

            loading = false
            debugger
            // if (localStorage.getItem('paymentType') === "jud") {
                checkFlag = value.data.status === "succeeded" ? true : false
            // }
            // if (localStorage.getItem('paymentType') === "phys") {
            //     checkFlag = value.data.orderStatus === 2 ? true : false

            // }
            if (checkFlag) {
                debugger
                localStorage.setItem('loading_check', 'false')

                localStorage.setItem('paymentStatus', 'true')
                // if (localStorage.getItem('paymentType') === "jud") {
                    localStorage.setItem('paymentMethod', value.data.payment_method.title)
                    localStorage.setItem('paymentId', value.data.id)
                    localStorage.setItem('paymentAmount', value.data.amount.value)
                    paymentMethod = value.data.payment_method.title;
                    paymentId = value.data.id;
                // }
                // if (localStorage.getItem('paymentType') === "phys") {
                //     localStorage.setItem('paymentMethod', 'Сбербанк')
                //     localStorage.setItem('paymentId', value.data.orderNumber)
                //     localStorage.setItem('paymentAmount', (value.data.amount / 100))
                //     paymentMethod = 'Сбербанк';
                //     paymentId = value.data.orderNumber;

                // }

                flagg = true
            } else {
                // if (localStorage.getItem('paymentType') === "jud") {
                    debugger
                    switch (value.data.status) {

                        case "canceled": paymentStatus = true; break;

                        case "pending": paymentStatus = false; break;

                        case "waiting_for_capture": paymentStatus = false; break;

                    }


                // }
                // if (localStorage.getItem('paymentType') === "phys") {
                    // debugger
                    // switch (value.data.orderStatus) {

                    //     case 0: paymentStatus = false; break;
                    //     case 1: paymentStatus = false; break;
                    //     case 3: paymentStatus = true; break;
                    //     case 4: paymentStatus = true; break;
                    //     case 5: paymentStatus = false; break;
                    //     case 6: paymentStatus = true; break;

                    // }


                // }
                if (paymentStatus) {
                    debugger
                    localStorage.setItem('loading_check', 'false')

                    localStorage.setItem('paymentStatus', 'false')
                    localStorage.setItem('create', 'false')
                    flagg = false
                    loading = false
                    if (localStorage.getItem('loading_check') === 'true') {

                        localStorage.setItem('loading_check', 'false')
                        document.location.reload()

                    }
                }
                else{
                    localStorage.setItem('loading_check', 'true')

                }
                debugger
            }
            // console.log(value.data);

            if (localStorage.getItem('create') === "true" && checkFlag === true) {
                debugger
                if (localStorage.getItem('prolong') === "true") {
                    prolongAndSet()
                }
                else {
                    sendAndSet()
                }

            }
            debugger
            if (localStorage.getItem('loading_check') === 'true'&&paymentStatus) {

                localStorage.setItem('loading_check', 'false')
                document.location.reload()

            }
            // console.log(value.data);
        });


    } else {
        loading = false
        localStorage.setItem('loading_check', 'false')

    }

    let sendAndSet = () => {

        let elements = localStorage.getItem('table')
        let campsElements = localStorage.getItem('camps')
        let sumStore = parseInt(localStorage.getItem('sum'))

        // props.dispatch(addCampaignActionCreator(JSON.parse(elements)))
        let go = JSON.parse(campsElements)
        debugger
        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + '/campaigns')
            .set(JSON.parse(campsElements))
        debugger

        // console.log("users/" + localStorage.getItem("email").split(".").join("") + "/sum");

        sum = localStorage.getItem("setSum")


        allPositions = localStorage.getItem("setAllPositions")


        setSum = parseInt(sum) + parseInt(sumStore)


        setAllPositions = parseInt(allPositions) + JSON.parse(elements).length
        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + '/sum').set(setSum)


        // app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + '/allPositions').set(setAllPositions)



        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + "/activePositions").on("value", snapshot => {
            // console.log(snapshot.val());

            activePositions = snapshot.val()

        })
        activePositions = localStorage.getItem("setActivePositions")

        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + "/allPositions").on("value", snapshot => {
            // console.log(snapshot.val());

            allPos = snapshot.val()

        })
        allPos = localStorage.getItem("setAllPositions")


        activePositions = parseInt(activePositions)
        allPos = parseInt(allPos)

        activePositions += JSON.parse(elements).length
        allPos += JSON.parse(elements).length


        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + '/activePositions').set(parseInt(activePositions))
        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + '/allPositions').set(parseInt(allPos))

        flagg = true
        if (localStorage.getItem('create') === "true") {
            localStorage.setItem('create', "false")

            const form = axios.post('/api/form', {
                data: localStorage.getItem('data'),
                format: "work"
            })
        }

        localStorage.setItem('data', "")
        localStorage.setItem('table', "")
        localStorage.setItem('camps', "")
        localStorage.setItem('sum', "")
        localStorage.setItem('paymentStatus', 'true')
        localStorage.setItem('setSum', "")
        localStorage.setItem('setAllPositions', "")
        localStorage.setItem('setActivePositions', "")
        localStorage.setItem('loading_check', 'false')

        flagg = true
        loading = false
    }

    let prolongAndSet = () => {
        debugger
        let campsElements = localStorage.getItem('camps')
        let sumStore = parseInt(localStorage.getItem('sum'))
        // props.dispatch(addCampaignActionCreator(JSON.parse(elements)))
        let go = JSON.parse(campsElements)
        console.log(go);
        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + '/campaigns')
            .set(go)
        debugger
        // console.log("users/" + localStorage.getItem("email").split(".").join("") + "/sum");

        sum = localStorage.getItem("setSum")


        allPositions = localStorage.getItem("setAllPositions")


        setSum = parseInt(sum) + parseInt(sumStore)

        setAllPositions = parseInt(allPositions)
        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + '/sum').set(setSum)


        // app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + '/allPositions').set(setAllPositions)


        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + "/activePositions").on("value", snapshot => {
            // console.log(snapshot.val());

            activePositions = snapshot.val()

        })
        activePositions = localStorage.getItem("setActivePositions")
        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + "/allPositions").on("value", snapshot => {
            // console.log(snapshot.val());

            allPos = snapshot.val()

        })
        // allPos = localStorage.getItem("setAllPositions")

        activePositions = parseInt(activePositions)
        // allPos = parseInt(allPos)

        activePositions += 1

        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + '/activePositions').set(parseInt(activePositions))

        flagg = true
        if (localStorage.getItem('create') === "true") {
            localStorage.setItem('create', "false")

            const form = axios.post('/api/form', {
                data: localStorage.getItem('data'),
                format: "work"
            })
        }
        localStorage.setItem('data', "")
        localStorage.setItem('table', "")
        localStorage.setItem('camps', "")
        localStorage.setItem('sum', "")
        localStorage.setItem('paymentStatus', 'true')
        localStorage.setItem('setSum', "")
        localStorage.setItem('setAllPositions', "")
        localStorage.setItem('setActivePositions', "")
        localStorage.setItem('loading_check', 'false')

        flagg = true
        loading = false
    }

    

    flagg = localStorage.getItem('paymentStatus') === 'true' ? true : false
    loading = localStorage.getItem('loading_check') === 'true' ? true : false
    // if (localStorage.getItem('loading_check') === 'true') {
    //     localStorage.setItem('loading_check', 'false')
    //     document.location.reload()

    // }
    if (localStorage.getItem('reload') === "true") {
        var millisecondsBeforeRefresh = 3000; //Adjust time here
        window.setTimeout(function () {
            //refresh the entire document
            localStorage.setItem('reload', 'false')
            document.location.reload();
        }, millisecondsBeforeRefresh);


    }
    return (
        <div className={s.success}>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />
            <div className={s.success_container} style={{ display: localStorage.getItem('loading_check') === 'true' ? 'flex' : 'none' }}>
                <div className={s.success_block}>
                    <div className={s.success_wrapper}>
                        <img src={loads} alt="" />
                        <div className={s.load_text}>
                            Обработка заказа. Подождите...
                        </div>
                        <div className={s.link_text}>
                            <a href={localStorage.getItem('paymentLink')} target="_blank">текущая сессия</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.success_container} style={{ display: localStorage.getItem('loading_check') === 'true' ? 'none' : 'flex' }}>
                <div className={s.fault_block} style={{ display: flagg ? 'none' : 'flex' }}>
                    <div className={s.success_wrapper}>
                        <div className={s.fault_header}>
                            <h3>Оплата не проведена</h3>
                            <i class="far fa-times-circle"></i>
                            <p>Попробуйте еще раз</p>
                        </div>
                    </div>

                </div>
                <div className={s.success_block} style={{ display: flagg ? 'flex' : 'none' }}>
                    <div className={s.success_wrapper}>
                        <div className={s.success_header}>
                            <h3>Оплата проведена успешно!</h3>
                            <i className="far fa-check-circle"></i>
                        </div>
                        <div className={s.succeed_body}>
                            <div className={s.succeed_row}>
                                <div className={s.left}>
                                    Метод оплаты
                                </div>
                                <div className={s.right}>
                                    {localStorage.getItem('paymentMethod')}
                                </div>

                            </div>
                            <div className={s.succeed_row}>
                                <div className={s.left}>
                                    E-mail
                                </div>
                                <div className={s.right}>
                                    {localStorage.getItem('email')}
                                </div>

                            </div>
                            <div className={s.succeed_row}>
                                <div className={s.left}>
                                    ID транзакции
                                </div>
                                <div className={s.right}>
                                    {localStorage.getItem('paymentId')}
                                </div>

                            </div>
                            <div className={`${s.succeed_row} ${s.bold}`} >
                                <div className={s.left}>
                                    Сумма заказа
                                </div>
                                <div className={s.right}>
                                    ₽ {localStorage.getItem('paymentAmount')}
                                </div>

                            </div>
                            <div className={s.success_button}>
                                <NavLink to="/campaigns">Заказы</NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <Helmet>
                <title>Результат оплаты - ChaseBox</title>
                <meta name="Send" />
            </Helmet>
        </div>
    );
}

export default Success;







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