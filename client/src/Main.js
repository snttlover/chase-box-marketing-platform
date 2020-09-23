import React from 'react';
import './App.css';
import s from './components/Sidebar/Sidebar.module.css'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from './img/gregory.svg';

import Scrollbars from 'react-custom-scrollbars';
import { slide as Menu } from 'react-burger-menu';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Public from './components/Main/Public/Public';
import Breef from './components/Main/Breef/Breef';
import Support from './components/Main/Support/Support';
import Campaigns from './components/Main/Campaigns/Campaigns';

import Feedback from './components/Main/Feedback/Feedback';
import Traffic from './components/Functions/Traffic/Traffic';
import Seo from './components/Site/Seo/Seo';
import Target from './components/Site/Target/Target';
import Facebook from './components/Smm/Facebook/Facebook';
import FacebookContext from './components/Smm/Facebook/Facebook-context';
import FacebookTargeting from './components/Smm/Facebook/Facebook-targeting';

import Instagram from './components/Smm/Instagram/Instagram';
import InstagramStories from './components/Smm/Instagram/Instagram-stories';
import InstagramTargeting from './components/Smm/Instagram/Instagram-targeting';

import Telegram from './components/Smm/Telegram/Telegram';


import Twitter from './components/Smm/Twitter/Twitter';
import TwitterContext from './components/Smm/Twitter/Twitter-context';
import TwitterTargeting from './components/Smm/Twitter/Twitter-targeting';

import Vk from './components/Smm/Vk/Vk';
import VkContext from './components/Smm/Vk/Vk-context';
import VkTargeting from './components/Smm/Vk/Vk-targeting';

import Odnoklassniki from './components/Smm/Odnoklassniki/Odnoklassniki';
import OdnoklassnikiBanner from './components/Smm/Odnoklassniki/Odnoklassniki-banner';
import OdnoklassnikiTargeting from './components/Smm/Odnoklassniki/Odnoklassniki-targeting';

import Youtube from './components/Smm/Youtube/Youtube';
import YoutubeContext from './components/Smm/Youtube/Youtube-context';
import YoutubeTargeting from './components/Smm/Youtube/Youtube-targeting';

import Settings from './components/Settings/Settings';

import Context from './components/Site/Context/Context';
import Email from './components/Functions/Email/Email';
import Socials from './components/Functions/Socials/Socials';
import Messengers from './components/Functions/Messengers/Messengers';
import Error from './components/Error/Error'

import Pay from './components/Pay/Pay'
import Success from './components/Pay/Success'

import Chat from './admin/Chat/Chat'
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgetPass from "./ForgetPass";

import { AuthProvider } from "./Auth";
import app from "./base.js";
import PrivateRoute from "./PrivateRoute";
import { nameActionCreator } from './redux/Header-reducer'
import preloader from './img/preloader.svg'
import { toggleIsFetchingActionCreator } from './redux/Preloader-reducer'
import axios from 'axios'
import { publicReducer } from './redux/Public-reducer';

// import test from './img/ava.jpg'

function Main(props) {
  let admin = false;
  let PublicComponent = () => <Public
    header={props.state.header.header}
    public={props.state.public}
    dispatch={props.dispatch} info={props.state.info} />;
  let BreefComponent = () => <Breef
    breef={props.state.main.breef}
    dispatch={props.dispatch}
    header={props.state.header.header} info={props.state.info} />;
  let SupportComponent = () => <Support
    support={props.state.main.support}
    dispatch={props.dispatch}
    header={props.state.header.header} info={props.state.info} />;

  let FeedbackComponent = () => <Feedback
    feedback={props.state.main.feedback}
    dispatch={props.dispatch}
    header={props.state.header.header} info={props.state.info} />;
  let CampaignsComponent = () => <Campaigns
    table={props.state.table}
    campaigns={props.state.campaigns}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let TrafficComponent = () => <Traffic
    table={props.state.table}
    traffic={props.state.functions.traffic}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let SeoComponent = () => <Seo
    table={props.state.table}
    seo={props.state.site.seo}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let TargetComponent = () => <Target
    target={props.state.site.targeting}
    dispatch={props.dispatch}
    table={props.state.table}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let FacebookComponent = () => <Facebook
    table={props.state.table}
    facebook={props.state.smm.facebook.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let FacebookTargetingComponent = () => <FacebookTargeting
    table={props.state.table}
    facebook={props.state.smm.facebook.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let FacebookContextComponent = () => <FacebookContext
    table={props.state.table}
    facebook={props.state.smm.facebook.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let InstagramComponent = () => <Instagram
    table={props.state.table}
    instagram={props.state.smm.instagram.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let InstagramTargetingComponent = () => <InstagramTargeting
    table={props.state.table}
    instagram={props.state.smm.instagram.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let TelegramComponent = () => <Telegram
    table={props.state.table}
    telegram={props.state.smm.telegram}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let InstagramStoriesComponent = () => <InstagramStories
    table={props.state.table}
    instagram={props.state.smm.instagram.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let TwitterComponent = () => <Twitter
    table={props.state.table}
    twitter={props.state.smm.twitter.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let TwitterTargetingComponent = () => <TwitterTargeting
    table={props.state.table}
    twitter={props.state.smm.twitter.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let TwitterContextComponent = () => <TwitterContext
    table={props.state.table}
    twitter={props.state.smm.twitter.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let VkComponent = () => <Vk
    table={props.state.table}
    vk={props.state.smm.vk.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let VkTargetingComponent = () => <VkTargeting
    table={props.state.table}
    vk={props.state.smm.vk.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let VkContextComponent = () => <VkContext
    table={props.state.table}
    vk={props.state.smm.vk.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let OdnoklassnikiComponent = () => <Odnoklassniki
    table={props.state.table}
    odnoklassniki={props.state.smm.odnoklassniki.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let OdnoklassnikiTargetingComponent = () => <OdnoklassnikiTargeting
    table={props.state.table}
    odnoklassniki={props.state.smm.odnoklassniki.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let OdnoklassnikiBannerComponent = () => <OdnoklassnikiBanner
    table={props.state.table}
    odnoklassniki={props.state.smm.odnoklassniki.banner}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let YoutubeComponent = () => <Youtube
    table={props.state.table}
    youtube={props.state.smm.youtube.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />

  let YoutubeTargetingComponent = () => <YoutubeTargeting
    table={props.state.table}
    youtube={props.state.smm.youtube.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let YoutubeContextComponent = () => <YoutubeContext
    table={props.state.table}
    youtube={props.state.smm.youtube.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let SettingsComponent = () => <Settings table={props.state.table} info={props.state.info} />
  let ContextComponent = () => <Context
    table={props.state.table}
    context={props.state.site.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let EmailComponent = () => <Email
    table={props.state.table}
    email={props.state.functions.email}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let SocialsComponent = () => <Socials
    table={props.state.table}
    socials={props.state.functions.socials}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let MessengersComponent = () => <Messengers
    table={props.state.table}
    messengers={props.state.functions.messengers}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} info={props.state.info} />
  let PayComponent = () => <Pay
    dispatch={props.dispatch}
    table={props.state.table}
    campaigns={props.state.campaigns}
    header={props.state.header.header}
    pay={props.state.pay} info={props.state.info} />
  let SuccessComponent = () => <Success
    dispatch={props.dispatch}
    table={props.state.table}
    campaigns={props.state.campaigns}
    header={props.state.header.header}
    pay={props.state.pay} info={props.state.info} />
  let LoginComponent = () => <Login
    error={props.state.auth.error}
    state={props.state.header}
    dispatch={props.dispatch} info={props.state.info} />
  let ForgetPassComponent = () => <ForgetPass
    error={props.state.auth.error}
    state={props.state.header}
    dispatch={props.dispatch} info={props.state.info} />
  let SignUpComponent = () => <SignUp
    error={props.state.auth.error}
    header={props.state.header}
    dispatch={props.dispatch} info={props.state.info} />
  let ChatComponent = () => <Chat
    chat={props.state.admin.chat}
    dispatch={props.dispatch}
    header={props.state.header.header} info={props.state.info} />
  let adminComponent = SupportComponent
  let publicComponent = PublicComponent;
  let mainPath =()=>{
    localStorage.setItem('path','/')
}

  let paymentStatus
  let check
  // props.dispatch(nameActionCreator(localStorage.email))
  if (props.state.header.header.name === "") {
    props.dispatch(nameActionCreator(localStorage.email))
    if (localStorage.getItem('create') === 'true' && window.location.pathname != "/success") {
      check = axios.post('/check', {
        id: localStorage.getItem('checkId')
      })
      check.then((value) => {
        // if (localStorage.getItem('paymentType') === "jud") {
        // console.log(value.data.status);
        switch (value.data.status) {
          case "succeeded": paymentStatus = true; break;

          case "canceled": paymentStatus = true; break;

          case "pending": paymentStatus = false; break;

          case "waiting_for_capture": paymentStatus = false; break;

        }

        if (paymentStatus) {
          window.location.pathname = '/success'
          localStorage.setItem('path', '/success')
        }
      })


    }
  }

  if (props.state.header.header.name === "chaseboxdatabase@gmail.com") {
    adminComponent = ChatComponent
    publicComponent = ""
  } else adminComponent = SupportComponent

  // const authenticate = () => {
  //   return new Promise(resolve => setTimeout(resolve, 3000))
  // }
  // const componentDidMount = () => {
  //   authenticate().then(() => {
  //     const ele = document.getElementById('ipl-progress-indicator')
  //     if (ele) {
  //       // fade out
  //       ele.classList.add('available')
  //       setTimeout(() => {
  //         // remove from DOM
  //         ele.style.display = "none"
  //       }, 3000)
  //     }
  //   })
  // }
  // componentDidMount()
  // app.auth().onAuthStateChanged(async (user) => {
  //   if (user) {
  //     

  //     if(app.auth().currentUser.email==="chaseboxdatabase@gmail.com"){
  //       adminComponent=ChatComponent
  //     }else adminComponent=SupportComponent
  //     
  //   } else {

  //   }
  // });
  return (
    // <AuthProvider>
    //   <Router>
    //     <div className="admin-wrapper">
    //         <PrivateRoute exact path="/" component={ChatComponent}  info={props.state.info}/>

    //       <Route path="/signup" exact component={SignUpComponent}  info={props.state.info}/>
    //       <Route path="/login" exact component={LoginComponent}  info={props.state.info}/>
    //     </div>
    //   </Router>
    // </AuthProvider>
    <AuthProvider>
      <Router>

        <div>
          {/* <Switch> */}
          <div className="app-wrapper">
            {/* {props.state.preloader.isFetching ? <img src={preloader}/> : null} */}

            <Menu width={'263px'}>
              <Scrollbars autoHeightMax={100} className="mobile_bar">

                <div className={s.logo}> <img src={logo} alt="" /></div>
                <div className={s.menu_container}>
                  <div className={s.main_container}>
                    <NavLink exact to="/" onClick={mainPath} activeClassName={s.act} className={s.main_page}> <i className="fas fa-house-user"></i> Представление</NavLink>
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
            </Menu>

            <Header state={props.state.header.header} info={props.state.info} smm={props.state.smm} dispatch={props.dispatch} />

            <Sidebar smm={props.state.smm} dispatch={props.dispatch} state={props.state.header.header} />




            <div className="content">
              <Redirect exact from='/login' to='/' />
              <Redirect exact from='/signup' to='/' />
              <Route exact path="/" render={publicComponent} />

              <Route exact path="/main/breef" render={BreefComponent} />
              <Route exact path="/campaigns" render={CampaignsComponent} />

              <Route path="/main/support" render={adminComponent} />
              <Route exact path="/main/feedback" render={FeedbackComponent} />
              <Route exact path="/func/traffic" render={TrafficComponent} />
              <Route exact path="/func/socials" render={SocialsComponent} />
              <Route exact path="/func/messengers" render={MessengersComponent} />
              <Route exact path="/site/seo" render={SeoComponent} />
              <Route exact path="/site/target" render={TargetComponent} />
              <Route path="/smm/facebook" render={FacebookComponent} />
              <Route exact path="/smm/facebook" render={FacebookTargetingComponent} />

              <Route exact path="/smm/facebook/context" render={FacebookContextComponent} />
              <Route path="/smm/instagram" render={InstagramComponent} />
              <Route exact path="/smm/instagram" render={InstagramTargetingComponent} />
              <Route exact path="/smm/telegram" render={TelegramComponent} />

              <Route exact path="/smm/instagram/stories" render={InstagramStoriesComponent} />
              <Route path="/smm/twitter" render={TwitterComponent} />
              <Route exact path="/smm/twitter" render={TwitterTargetingComponent} />
              <Route exact path="/smm/twitter/context" render={TwitterContextComponent} />

              <Route path="/smm/vk" render={VkComponent} />
              <Route exact path="/smm/vk" render={VkTargetingComponent} />
              <Route exact path="/smm/vk/banner" render={VkContextComponent} />

              <Route path="/smm/odnoklassniki" render={OdnoklassnikiComponent} />
              <Route exact path="/smm/odnoklassniki" render={OdnoklassnikiTargetingComponent} />
              <Route exact path="/smm/odnoklassniki/banner" render={OdnoklassnikiBannerComponent} />

              <Route path="/smm/youtube" render={YoutubeComponent} />
              <Route exact path="/smm/youtube" render={YoutubeTargetingComponent} />
              <Route exact path="/smm/youtube/context" render={YoutubeContextComponent} />
              <Route exact path="/settings" render={SettingsComponent} />
              <Route exact path="/site/context" render={ContextComponent} />
              <Route exact path="/func/email" render={EmailComponent} />
              <Route exact path="/pay" render={PayComponent} />
              <Route exact path="/success" render={SuccessComponent} />

            </div>

          </div>
          {/* </Switch> */}
        </div>
      </Router>
    </AuthProvider>

  );
}

export default Main;
