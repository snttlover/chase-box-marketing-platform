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
import { Button, Header, Icon, Modal } from 'react-bootstrap'
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





const Pay = (props) => {
    // let name = React.createRef();
    // let email = React.createRef();
    // let message = React.createRef();
    let data = "";

    let sum = 0
    let allPositions = 0;
    let setSum = 0;
    let setAllPositions = 0;
    let checkout;
    let siteCabinet = React.createRef();
    let vkCabinet = React.createRef();
    let fbCabinet = React.createRef();
    let googleCabinet = React.createRef();
    let myTargetCabinet = React.createRef();
    let yaName = React.createRef();
    let yaEmail = React.createRef();
    let yaYourEmail = React.createRef();
    let yaCheckbox = React.createRef();
    let yaNumber = React.createRef();
    let vkLink = React.createRef();
    let fbLink = React.createRef();
    let googleEmail = React.createRef();
    let googleCheckbox = React.createRef();
    let myTargetEmail = React.createRef();
    let myTargetCheckbox = React.createRef();

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

    let disabled_ya;
    if (props.pay.yandex.name != "" && props.pay.yandex.email != "" && props.pay.yandex.number != "" && props.pay.yandex.yourEmail != "" && props.pay.yandex.checked === true) {
        disabled_ya = "nodisabled"
    } else {
        disabled_ya = "disabled"
    }
    let disabled_vk;
    if (props.pay.vk.link != "") {
        disabled_vk = "nodisabled"
    } else {
        disabled_vk = "disabled"
    }
    let disabled_fb;
    if (props.pay.fb.link != "") {
        disabled_fb = "nodisabled"
    } else {
        disabled_fb = "disabled"
    }
    let disabled_google;
    if (props.pay.google.email != "" && props.pay.google.checked === true) {
        disabled_google = "nodisabled"
    } else {
        disabled_google = "disabled"
    }
    let disabled_myTarget;
    if (props.pay.myTarget.email != "" && props.pay.myTarget.checked === true) {
        disabled_myTarget = "nodisabled"
    } else {
        disabled_myTarget = "disabled"
    }


    let cabinets
    let sites = "none";
    let google = "none"
    let vk = "none"
    let fb = "none"
    let myTarget = "none"


    let siteOn = true
    let vkOn = true
    let fbOn = true
    let myTargetOn = true


    let yandexModal = false
    let googleModal = false
    let vkModal = false
    let fbModal = false
    let myTargetModal = false


    let siteAdd = "none"
    let vkAdd = "none"
    let fbAdd = "none"
    let myTargetAdd = "none"
    let yandexAdd = "none"
    let googleAdd = "none"

    let mainModal = true;


    let sitesInput = []
    let vkInput = []
    let fbInput = []
    let googleInput = []
    let myTargetInput = []



    if (props.pay.cabs.length === 0 || props.campaigns.camps.length === 0) {

        app.auth().onAuthStateChanged(function (user) {
            if (user) {

                let actualUser = user.email.split('.').join("")
                if (props.pay.cabs.length === 0) {
                    getCabinets()
                }
                if (props.campaigns.camps.length === 0) {
                    getCampaigns()
                }

            } else {

            }
        });
    }



    let submitForm = () => {
        // e.preventDefault()
        localStorage.setItem('create', "true")

        cabinets = props.pay.cabs
        let cabinet = ""

        if (sites === "block") {
            cabinet += cabinets[siteCabinet.current.value].type + ": ";
            for (var key in cabinets[siteCabinet.current.value].data) {
                cabinet += key + ": " + cabinets[siteCabinet.current.value].data[key] + "; "

            }
            cabinet += "\n"
        }
        if (vk === "block") {
            cabinet += cabinets[vkCabinet.current.value].type + ": " + cabinets[vkCabinet.current.value].data.link + "\n";

        }
        if (fb === "block") {
            cabinet += cabinets[fbCabinet.current.value].type + ": " + cabinets[fbCabinet.current.value].data.link + "\n";

        }
        if (google === "block") {
            cabinet += cabinets[googleCabinet.current.value].type + ": " + cabinets[googleCabinet.current.value].data.email + "\n";

        }
        if (myTarget === "block") {
            cabinet += cabinets[myTargetCabinet.current.value].type + ": " + cabinets[myTargetCabinet.current.value].data.email + "\n";

        }
        data += cabinet + "\n";
        for (let i = 0; i < props.table.elementsData.length; i++) {
            data += props.table.elementsData[i].id + ', ' + props.table.elementsData[i].section + ', ' + props.table.elementsData[i].link + ', Единиц: ' + props.table.elementsData[i].time + ', ' + app.auth().currentUser.email + '\n'
            for (let y = 0; y < props.table.elementsData[i].positions.length; y++) {
                data += props.table.elementsData[i].positions[y] + '\n'
            }
            data += '---------------\n'
        }
        localStorage.setItem('data', data)
        localStorage.setItem('sum', props.table.sum)
        localStorage.setItem('table', JSON.stringify(props.table.elementsData))

        props.dispatch(addCampaignActionCreator(props.table.elementsData))
        localStorage.setItem('camps', JSON.stringify(props.campaigns.camps))
        localStorage.setItem('create', "true")
        localStorage.setItem('paymentStatus', 'false')

        localStorage.setItem('loading_check', 'true')
        localStorage.setItem('reload', 'true')

        localStorage.setItem('prolong', 'false')


        app.database().ref("users/" + localStorage.getItem("email").split(".").join("") + "/sum").on("value", snapshot => {
            // console.log(snapshot.val());

            localStorage.setItem('setSum', snapshot.val())

        })
        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + "/allPositions").on("value", snapshot => {

            localStorage.setItem('setAllPositions', snapshot.val())

        })
        app.database().ref('users/' + localStorage.getItem('email').split('.').join("") + "/activePositions").on("value", snapshot => {
            // console.log(snapshot.val());

            localStorage.setItem('setActivePositions', snapshot.val())


        })

        props.dispatch(removeAllActionCreator())

        let test = localStorage.getItem('create')
        localStorage.setItem('create', "true")

        let paymentType
        debugger
        if (props.pay.payPerson === "phys") {
            paymentType = "/payment"
        }
        if (props.pay.payPerson === "jud") {
            paymentType = "/payment_of"
        }
        debugger
        let payment = axios.post(paymentType, {
            data,
            value: props.table.sum + ".00"
            // value: "50.00"
        })

        payment.then((value) => {
            localStorage.setItem('create', "true")
            localStorage.setItem('paymentType', "jud")

            console.log(value.data.id);
            localStorage.setItem('checkId', value.data.id)
            localStorage.setItem('paymentLink', value.data.confirmation.confirmation_url)

            window.location = value.data.confirmation.confirmation_url

        })
            .catch((err) => {
                console.log(err);
            });

        props.dispatch(resetSumActionCreator())

        // console.log(localStorage.getItem('data'));
        // console.log(localStorage.getItem('table'));
        // console.log(localStorage.getItem('camps'));
        // console.log(data);
        // console.log(props.table.elementsData);
        // console.log(props.campaigns.camps);
        // console.log(localStorage);




    }

    function jamToArray(snapshot) {

        const returnArr = [];

        snapshot.forEach(function (childSnapshot) {

            const item = childSnapshot.val();
            console.log(item);

            returnArr.push(item);
        });
        console.log(returnArr);

        return returnArr;
    };
    let getCampaigns = () => {
        remove = ''

        app.database().ref("users/" + localStorage.getItem('email').split('.').join("") + "/campaigns").on('value', function (snapshort) {
            console.log(snapshort);

            props.dispatch(createCampaignsActionCreator(jamToArray(snapshort)))
            // console.log(props.table.elementsData);
            // props.dispatch(addCampaignActionCreator(props.table.elementsData))
            // console.log(props.campaigns.camps);
        })

    }
    // let sendAndSet=()=>{
    //     let elements = localStorage.getItem('table')
    //     let campsElements = localStorage.getItem('camps')
    //     let sumStore = localStorage.getItem('sum')


    //     props.dispatch(addCampaignActionCreator(JSON.parse(elements)))

    //     app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/campaigns')
    //         .set(JSON.parse(campsElements))


    //     app.database().ref('users/' + localStorage.email.split('.').join("") + "/sum").on("value", snapshot => {
    //         sum = snapshot.val()

    //     })

    //     app.database().ref('users/' + localStorage.email.split('.').join("") + "/allPositions").on("value", snapshot => {

    //         allPositions = snapshot.val()
    //     })

    //     setSum = sum + parseInt(sumStore)

    //     setAllPositions = allPositions + JSON.parse(elements).length
    //     app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/sum').set(setSum)

    //     app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/allPositions').set(setAllPositions)

    //     let activePositions=0
    //     let allPos=0

    //     app.database().ref('users/' + localStorage.email.split('.').join("") + "/activePositions").on("value", snapshot => {

    //         activePositions = snapshot.val()

    //     })
    //     app.database().ref('users/' + localStorage.email.split('.').join("") + "/allPositions").on("value", snapshot => {

    //         allPos = snapshot.val()

    //     })
    //     activePositions += JSON.parse(elements).length
    //     allPos += JSON.parse(elements).length

    //     app.database().ref('users/' + localStorage.email.split('.').join("") + '/activePositions').set(activePositions)
    //     app.database().ref('users/' + localStorage.email.split('.').join("") + '/allPositions').set(allPos)

    //     const form = axios.post('/api/form', {
    //         data:localStorage.getItem('data'),
    //         format: "work"
    //     })
    //     localStorage.setItem('data', "")
    //     localStorage.setItem('table', "")
    //     localStorage.setItem('camps', "")
    //     localStorage.setItem('sum', "")

    // }
    let tableElements = props.table.elementsData
    let test = () => {
        //     if (props.campaigns.camps.length === 0) {
        //         getCampaigns()

        //     } else {

        // console.log(props.table.elementsData);
        let elements = props.table.elementsData

        props.dispatch(addCampaignActionCreator(elements))
        // console.log(props.campaigns.camps);

        // app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/campaigns')
        //     .set(props.campaigns.camps)

    }

    // let campsArr=[];
    // for(let i = 0; i<props.table.elementsData.length; i++){
    //     props.table.elementsData[i]
    // }
    // let createCampaign = (type, data) => {
    //     cabinetObject = {
    //         type: type,
    //         data: data,
    //         id: props.public.cabinets.length
    //     }

    //     props.dispatch(addCampaignActionCreator(cabinetObject))
    //     app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/campaigns')
    //         .set(props.campaigns.camps)
    // }

    let open = (typeSite) => {
        props.dispatch(openModalActionCreator(typeSite))

    }
    let close = async () => {
        await props.dispatch(closeModalActionCreator())
    }
    console.log(props.table.elementsData)
    props.table.elementsData.forEach(element => {
        if (element.section === "Контекстная реклама") sites = "block"
        if (element.section === "VK/Таргетинг") vk = "block"
        if (element.section === "Facebook" || element.section === "Instagram/Таргетинг" || element.section === "Instagram/Сторис") fb = "block"

        if (element.section === "VK/Баннерная реклама" || element.section === "Одноклассники/Баннерная реклама" || element.section === "Одноклассники/Таргетинг") myTarget = "block"


    });
    function jamToArray(snapshot) {

        const returnArr = [];

        snapshot.forEach(function (childSnapshot) {

            const item = childSnapshot.val();
            // console.log(item);

            returnArr.push(item);
        });
        // console.log(returnArr);

        return returnArr;
    };
    let getCabinets = () => {
        remove = ''

        app.database().ref("users/" + localStorage.getItem('email').split('.').join("") + "/cabinets").on('value', function (snapshort) {
            cabinets = jamToArray(snapshort);
            props.dispatch(createCabinetsActionCreator(jamToArray(snapshort)))


        })
    }
    let changePers = (pers) => {
        props.dispatch(changePersActionCreator(pers))

    }
    console.log(props.pay.payPerson)
    props.pay.cabs.map((item, index) => {
        // console.log(index)
        if (item.type === "yandex" || item.type === "google") sitesArr.push({ item: item, index: index })
        if (item.type === "vk") vkArr.push({ item: item, index: index })
        if (item.type === "fb") fbArr.push({ item: item, index: index })
        if (item.type === "google") googleArr.push({ item: item, index: index })
        if (item.type === "myTarget") myTargetArr.push({ item: item, index: index })



    })
    let createCabinet = (type, data) => {
        cabinetObject = {
            type: type,
            data: data
        }


        // console.log(cabinetObject);

        props.dispatch(payCabinetActionCreator(cabinetObject))
        app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/cabinets')
            .set(props.pay.cabs)



        props.pay.yandex.name = ""
        props.pay.yandex.email = ""
        props.pay.yandex.yourEmail = ""
        props.pay.yandex.number = ""
        props.pay.vk.link = ""
        props.pay.fb.link = ""
        props.pay.google.email = ""
        props.pay.myTarget.email = ""







    }
    if (sites === "block" && sitesArr.length === 0) {
        siteOn = false
        siteAdd = "block"
        sites = "none"
    }
    if (vk === "block" && vkArr.length === 0) {

        vkOn = false
        vkAdd = "block"
        vk = "none"
    }
    if (fb === "block" && fbArr.length === 0) {
        fbOn = false
        fbAdd = "block"
        fb = "none"
    }
    if (google === "block" && googleArr.length === 0) {
        googleAdd = "block"
        google = "none"
    }
    if (myTarget === "block" && myTargetArr.length === 0) {
        myTargetOn = false
        myTargetAdd = "block"
        myTarget = "none"
    }
    let disabled;

    if (props.table.elementsData.length == 0 || (siteOn === false || fbOn === false || vkOn === false || myTargetOn === false)) {

        disabled = "disabled"
    } else {
        disabled = "nodisabled"
    }
    sitesInput = sitesArr.map((item) => {
        console.log(item)
        if (item.item.type === "yandex") {
            return <option value={item.index} >Яндекс: {item.item.data.email}</option>
        }
        if (item.item.type === "google") {
            return <option value={item.index} >Google Ads: {item.item.data.email}</option>
        }
    })
    vkInput = vkArr.map((item) => {
        return <option value={item.index} >VK: {item.item.data.link}</option>
    })
    fbInput = fbArr.map((item) => {
        return <option value={item.index} >Facebook: {item.item.data.link}</option>
    })
    googleInput = googleArr.map((item) => {
        return <option value={item.index} >Google Ads: {item.item.data.email}</option>
    })
    myTargetInput = myTargetArr.map((item) => {
        return <option value={item.index} >MyTarget: {item.item.data.email}</option>
    })



    let onYaTextChange = () => {
        let yaNameText = yaName.current.value;
        let yaEmailText = yaEmail.current.value;
        let yaYourEmailText = yaYourEmail.current.value;
        let yaNumberText = yaNumber.current.value;
        console.log(yaCheckbox.current)
        props.dispatch(yaTextActionCreator({ name: yaNameText, email: yaEmailText, number: yaNumberText, yourEmail: yaYourEmailText, checked: props.pay.yandex.checked }));
    }
    let onYaCheckChange = () => {
        let yaNameText = yaName.current.value;
        let yaEmailText = yaEmail.current.value;
        let yaYourEmailText = yaYourEmail.current.value;
        let yaNumberText = yaNumber.current.value;
        props.dispatch(yaTextActionCreator({ name: yaNameText, email: yaEmailText, number: yaNumberText, yourEmail: yaYourEmailText, checked: !props.pay.yandex.checked }));

    }
    let openInfo = () => {
        props.dispatch(openInfoModalActionCreator())
    }
    let typeInfo = (type) => {
        props.dispatch(typeActionCreator(type))
    }
    let onVkTextChange = () => {
        let vkLinkText = vkLink.current.value;

        props.dispatch(vkTextActionCreator(vkLinkText));
    }
    let onFbTextChange = () => {
        let fbLinkText = fbLink.current.value;
        props.dispatch(fbTextActionCreator(fbLinkText));
    }
    let onGoogleTextChange = () => {
        let googleEmailText = googleEmail.current.value;
        props.dispatch(googleTextActionCreator({ email: googleEmailText, checked: props.pay.google.checked }));
    }
    let onGoogleCheckChange = () => {
        let googleEmailText = googleEmail.current.value;
        props.dispatch(googleTextActionCreator({ email: googleEmailText, checked: !props.pay.google.checked }));
    }
    let onMyTargetTextChange = () => {
        let myTargetEmailText = myTargetEmail.current.value;
        props.dispatch(myTargetTextActionCreator({ email: myTargetEmailText, checked: props.pay.myTarget.checked }));
    }
    let onMyTargetCheckChange = () => {
        let myTargetEmailText = myTargetEmail.current.value;
        props.dispatch(myTargetTextActionCreator({ email: myTargetEmailText, checked: !props.pay.myTarget.checked }));
    }
    sumStr = props.table.sum
    sumStr = sumStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (

        <div className={s.payPage}>
            <Info showRemoveModal={props.info.showModal} dispatch={props.dispatch} type={props.info.type} />

            <Table table={props.table} dispatch={props.dispatch} button="Подтвердить" header={props.header} />
            {/* <div className={s.ask_block}>
                <a className={s.question}>
                    <i className="far fa-question-circle"></i>
                </a>
            </div> */}

            <div className={s.input} style={{ display: sites }}>
                <div className={s.input_header}>
                    Кабинет сайта
                </div>
                <select ref={siteCabinet}>
                    {sitesInput}

                </select>
            </div>
            <div className={s.input} style={{ display: siteAdd }}>
                <div className={s.input_header}>
                    У вас нет кабинета для сайта<span>*</span>

                </div>
                <button onClick={() => { open("google") }}>Добавить Google Ads</button>
                <a className={s.question} onClick={() => {
                    openInfo()
                    typeInfo("google")
                }}>
                    <i className="far fa-question-circle"></i>
                </a>
                <span className={s.or}>или</span>
                <button onClick={() => { open("yandex") }}>Добавить Яндекс</button>
                <a className={s.question} onClick={() => {
                    openInfo()
                    typeInfo("yandex")
                }}>
                    <i className="far fa-question-circle"></i>
                </a>

            </div>
            <div className={s.input} style={{ display: vk }}>
                <div className={s.input_header}>
                    Кабинет VK
                </div>

                <select ref={vkCabinet}>
                    {vkInput}

                </select>
            </div>
            <div className={s.input} style={{ display: vkAdd }}>
                <div className={s.input_header}>
                    У вас нет кабинета VK<span>*</span>

                </div>
                <button onClick={() => { open("vk") }}>Добавить VK</button>
                <a className={s.question} onClick={() => {
                    openInfo()
                    typeInfo("vk")
                }}>
                    <i className="far fa-question-circle"></i>
                </a>

            </div>
            <div className={s.input} style={{ display: fb }}>
                <div className={s.input_header}>
                    Кабинет Facebook/Instagram
                </div>

                <select ref={fbCabinet}>
                    {fbInput}
                </select>
            </div>
            <div className={s.input} style={{ display: fbAdd }}>
                <div className={s.input_header}>
                    У вас нет кабинета Facebook BM<span>*</span>

                </div>
                <button onClick={() => { open("fb") }}>Добавить Facebook BM</button>
                <a className={s.question} onClick={() => {
                    openInfo()
                    typeInfo("facebook")
                }}>
                    <i className="far fa-question-circle"></i>
                </a>
            </div>
            <div className={s.input} style={{ display: myTarget }}>
                <div className={s.input_header}>

                    Кабинет MyTarget
                </div>

                <select ref={myTargetCabinet}>
                    {myTargetInput}

                </select>
            </div>
            <div className={s.input} style={{ display: myTargetAdd }}>
                <div className={s.input_header}>
                    У вас нет кабинета myTarget<span>*</span>
                </div>
                <button onClick={() => { open("myTarget") }}>Добавить кабинет myTarget</button>
                <a className={s.question} onClick={() => {
                    openInfo()
                    typeInfo("myTarget")
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
                    changePers('phys')
                    close()
                }} checked={props.pay.payPerson === 'phys'} />
                <label for="sizeWeight">Физическое лицо</label>
                <input type="radio" name="sizeBy" value="jud" id="sizeDimensions" onClick={() => {
                    changePers("jud")
                    close()
                }} checked={props.pay.payPerson === 'jud'} />
                <label for="sizeDimensions">Юридическое лицо</label>
            </div>
            <div className={s.button}>
                <button className={` ${disabled}`} onClick={() => {
                    open("main");
                    submitForm()
                    test()
                }}>Оплатить: ₽ {sumStr}</button>
            </div>
            <div className={s.attention}>Внимательно проверьте правильность введенных данных!</div>

            <div ref={s.myModal} class={s.modal} style={{ display: props.pay.showModal ? 'block' : 'none' }}>
                <div class={s.modal_content}>

                    <div className={s.header_modal}>
                        {/* <div className={s.header_modal_text} style={{ display: props.pay.newType === "main" ? "block" : "none" }}>Спасибо! <span class={s.close} onClick={close}>&times;</span></div> */}
                        <div className={s.header_modal_text} style={{ display: props.pay.newType === "main" ? "none" : "block" }}>Добавить кабинет <span class={s.close} onClick={close}>&times;</span></div>
                    </div>


                    <div className={s.modal_body} style={{ display: props.pay.newType === "main" ? "block" : "none" }}>
                        <div className={s.loading}>
                            <img src={loading} />
                        </div>
                        <p className={s.p_center}>Создание страницы оплаты</p>
                    </div>
                    <div className={s.modal_body} style={{ display: props.pay.newType === "yandex" ? "grid" : "none" }}>
                        <div className={s.section_name}>
                            Имя:
                            </div>
                        <input type="text" className={s.input_accs} value={props.pay.yandex.name} ref={yaName} onChange={onYaTextChange} />

                        <div className={s.section_name}>
                            E-mail:
                            </div>
                        <input type="email" className={s.input_accs} value={props.pay.yandex.email} ref={yaEmail} onChange={onYaTextChange} />
                        <div className={s.section_name}>
                            Номер телефона:
                            </div>
                        <input type="number" className={s.input_accs} value={props.pay.yandex.number} ref={yaNumber} onChange={onYaTextChange} />
                        <div className={s.section_name}>
                            Ваш E-mail:
                            </div>
                        <input type="email" className={s.input_accs} value={props.pay.yandex.yourEmail} ref={yaYourEmail} onChange={onYaTextChange} />
                        <input type="checkbox" ref={yaCheckbox} defaultChecked={props.pay.yandex.checked} onChange={onYaCheckChange} />
                        <div className={s.section_name}>
                            Я дал доступ аккаунту chasebox@gmail.com в РСЯ
                        </div>
                        <div className={s.button}>
                            <button className={`${s.submit_btn} ${disabled_ya}`} onClick={() => {
                                close()
                                createCabinet("yandex", { email: props.pay.yandex.email, number: props.pay.yandex.number, name: props.pay.yandex.name, yourEmail: props.pay.yandex.yourEmail })
                            }}>Добавить</button>
                        </div>
                    </div>
                    <div className={s.modal_body} style={{ display: props.pay.newType === "google" ? "grid" : "none" }}>
                        <div className={s.section_name}>
                            Ваша электронная почта:
                        </div>
                        <input type="text" className={s.input_accs} value={props.pay.google.email} ref={googleEmail} onChange={onGoogleTextChange} />
                        <input type="checkbox" ref={googleCheckbox} defaultChecked={props.pay.google.checked} onChange={onGoogleCheckChange} />
                        <div className={s.section_name}>
                            Я дал доступ аккаунту chasebox@gmail.com в Google Ads
                        </div>
                        <div className={s.button}>
                            <button className={`${s.submit_btn} ${disabled_google}`} onClick={() => {
                                close()
                                createCabinet("google", { email: props.pay.google.email })
                            }}>Добавить</button>
                        </div>
                    </div>
                    <div className={s.modal_body} style={{ display: props.pay.newType === "vk" ? "grid" : "none" }}>
                        <div className={s.section_name}>
                            Ссылка на страницу:
                        </div>
                        <input type="text" className={s.input_accs} value={props.pay.vk.link} ref={vkLink} onChange={onVkTextChange} />
                        <div className={s.button}>
                            <button className={`${s.submit_btn} ${disabled_vk}`} onClick={() => {
                                close()
                                createCabinet("vk", { link: props.pay.vk.link })
                            }}>Добавить</button>
                        </div>
                    </div>
                    <div className={s.modal_body} style={{ display: props.pay.newType === "fb" ? "grid" : "none" }}>
                        <div className={s.section_name}>
                            Ссылка на страницу:
                        </div>
                        <input type="text" className={s.input_accs} value={props.pay.fb.link} ref={fbLink} onChange={onFbTextChange} />
                        <div className={s.button}>
                            <button className={`${s.submit_btn} ${disabled_fb}`} onClick={() => {
                                close()
                                createCabinet("fb", { link: props.pay.fb.link })
                            }}>Добавить</button>
                        </div>
                    </div>
                    <div className={s.modal_body} style={{ display: props.pay.newType === "myTarget" ? "grid" : "none" }}>
                        <div className={s.section_name}>
                            Ваша электронная почта:
                        </div>
                        <input type="text" className={s.input_accs} value={props.pay.myTarget.email} ref={myTargetEmail} onChange={onMyTargetTextChange} />
                        <input type="checkbox" ref={myTargetCheckbox} defaultChecked={props.pay.myTarget.checked} onChange={onMyTargetCheckChange} />
                        <div className={s.section_name}>
                            Я дал доступ аккаунту chasebox@gmail.com в MyTarget
                            </div>
                        <div className={s.button}>
                            <button className={`${s.submit_btn} ${disabled_myTarget}`} onClick={() => {
                                close()
                                createCabinet("myTarget", { email: props.pay.myTarget.email })
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

export default Pay;







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