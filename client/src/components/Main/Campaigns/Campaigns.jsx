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


const Campaigns = (props) => {
    let campaigns
    let remove
    let sum = 0
    let allPositions = 0
    let activePositions = 0
    let sumStr
    let actualUser
    let uidUser
    let campaignsLength
    let campaignsObject
    // localStorage.setItem('paymentStatus', 'false')

    app.database().ref('users/' + localStorage.email.split('.').join("") + "/sum").on("value", snapshot => {

        sum = snapshot.val()

    })
    app.database().ref('users/' + localStorage.email.split('.').join("") + "/allPositions").on("value", snapshot => {

        allPositions = snapshot.val()

    })
    app.database().ref('users/' + localStorage.email.split('.').join("") + "/activePositions").on("value", snapshot => {

        activePositions = snapshot.val()

    })
    // app.database().ref('users/' + localStorage.email.split('.').join("") + '/activePositions').set(0)
    localStorage.setItem('activePositions', 0)
    // app.database().ref('users/' + localStorage.email.split('.').join("") + "/activePositions").on("value", snapshot => {

    //     activePositions = snapshot.val()

    // })
    if (props.campaigns.camps.length === 0) {


        app.auth().onAuthStateChanged(function (user) {

            if (user) {

                actualUser = user.email.split('.').join("")
                uidUser = user.uid

                getCampaigns()

            } else {

            }
        });
    }
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
    let getCampaigns = () => {
        remove = ''

        app.database().ref("users/" + actualUser + "/campaigns").on('value', function (snapshort) {
            // console.log(snapshort);

            props.dispatch(createCampaignsActionCreator(jamToArray(snapshort)))

        })

    }


    // console.log(props.header);
    // if (props.campaigns.camps.length > 0) {
    campaigns = props.campaigns.camps.map((item, index) => {
        debugger
        let currentModal=false
        if(props.campaigns.showModal===true&&props.campaigns.modalId===index){
            currentModal=true
        }
        return <Campaign
            cabinet={item.cabinet}
            date={item.date}
            section={item.section}
            link={item.link}
            budjet={item.budjet}
            header={props.header}
            camps={props.campaigns.camps}
            id={index}
            dispatch={props.dispatch}
            campaignId={props.campaigns.campaignId}
            showModal={currentModal}
            newBudjet={props.campaigns.budjet}
            num={props.campaigns.num}
            time={props.campaigns.time} 
            loading={props.campaigns.loading}/>
    })

    if (campaigns.length === 0) {
        remove = ''
    } else remove = 'remove'
    
    app.database().ref('users/' + localStorage.email.split('.').join("") + "/activePositions").on("value", snapshot => {

        activePositions = snapshot.val()
        // console.log(activePositions);
        
    })
    if(campaigns.length === 1){
        localStorage.setItem('activePositions', 0)
        activePositions=0;
    }
    sumStr = sum
    sumStr = sumStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
    // if (localStorage.path != "" && localStorage.path != "/") {
    //     return <Redirect to={localStorage.path} />;

    // }
    // VK.Widgets.Group("vk_groups", {mode: 3, width: "328", color3: '8A30BD'}, 190497618);
    // let cabinets
    // let remove
    //  
    // let actualUser
    // let uidUser
    // let cabinetLength
    // let cabinetObject
    // let yaName = React.createRef();
    // let yaEmail = React.createRef();
    // let yaYourEmail = React.createRef();
    // let yaCheckbox = React.createRef();
    // let yaNumber = React.createRef();
    // let vkLink = React.createRef();
    // let fbLink = React.createRef();
    // let googleEmail = React.createRef();
    // let googleCheckbox = React.createRef();
    // let myTargetEmail = React.createRef();
    // let myTargetCheckbox = React.createRef();
    // let selection = React.createRef();



    // let yaNameText = "";
    // let yaEmailText = "";
    // let yaYourEmailText = "";
    // let yaCheckboxText = false;
    // let yaNumberText = "";
    // let vkLinkText = "";
    // let fbLinkText = "";
    // let googleEmailText = "";
    // let googleChaseboxText = false;
    // let myTargetEmailText = "";
    // let myTargetChaseboxText = false;



    // if (props.campaign.cabinets.length === 0) {

    //     app.auth().onAuthStateChanged(function (user) {
    //         if (user) {

    //             actualUser = user.email.split('.').join("")
    //             uidUser = user.uid

    //             getCabinets()

    //         } else {

    //         }
    //     });
    // }

    // function jamToArray(snapshot) {

    //     const returnArr = [];

    //     snapshot.forEach(function (childSnapshot) {

    //         const item = childSnapshot.val();
    //         console.log(item);

    //         returnArr.push(item);
    //     });
    //     console.log(returnArr);

    //     return returnArr;
    // };
    // let getCabinets = () => {
    //     remove = ''

    //     app.database().ref("users/" + actualUser + "/cabinets").on('value', function (snapshort) {
    //         console.log(snapshort);


    //     })

    // }
    // cabinets = props.campaign.cabinets.map((item) => {

    //     return <Cabinet
    //         data={item.data}
    //         type={item.type} />
    // })




    // let openInfo = () => {
    //     props.dispatch(openInfoModalActionCreator())
    // }
    // let typeInfo = (type) => {
    //     console.log(type);
    //     if (type != "select") {
    //         props.dispatch(typeActionCreator(type))
    //     }
    //     else {
    //         props.dispatch(typeActionCreator(selection.current.value))
    //     }
    // }
    // let open = async () => {
    //     await props.dispatch(openModalActionCreator())
    // }
    // let close = async () => {
    //     await props.dispatch(closeModalActionCreator())
    // }
    // const logOut = () => {
    //     const ele = document.getElementById('ipl-progress-indicator')
    //     ele.style.display = "block"
    //     app.auth().signOut().then(function () {
    //         window.location = 'login';
    //     })
    // }


    
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
                            <div className={`${s.loading_mini} ${remove}`}>
                                <img src={loading} />
                            </div>
                            <div className={s.board_main} style={{display: remove==="remove" ? "block" : "none"}}>
                                <h3>{activePositions}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={s.board}>
                        <div className={s.board_wrap}>

                            <div className={s.board_title}>
                                <p>Вложено за все время</p>
                            </div>
                            <div className={`${s.loading_mini} ${remove}`}>
                                <img src={loading} />
                            </div>
                            <div className={s.board_main} style={{display: remove==="remove" ? "block" : "none"}}>
                                <h3>₽ {sumStr}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={s.board}>
                        <div className={s.board_wrap}>

                            <div className={s.board_title}>
                                <p>Всего было заказов</p>
                            </div>
                            <div className={`${s.loading_mini} ${remove}`}>
                                <img src={loading} />
                            </div>
                            <div className={s.board_main}  style={{display: remove==="remove" ? "block" : "none"}}>
                                <h3>{allPositions}</h3>
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
                        <div className={`${s.loading} ${remove}`}>
                            <img src={loading} />
                        </div>
                        {campaigns.reverse()}
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

export default Campaigns;