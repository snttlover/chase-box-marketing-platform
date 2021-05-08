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
import CampaignsDOM from './CampaignsDOM';



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
    

    
    return (
    <CampaignsDOM {...props} remove={remove} activePositions={activePositions} sumStr={sumStr} allPositions={allPositions} 
    campaigns={campaigns} />
        );
}

export default Campaigns;