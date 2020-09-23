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

import Twitter from './components/Smm/Twitter/Twitter';
import TwitterContext from './components/Smm/Twitter/Twitter-context';
import TwitterTargeting from './components/Smm/Twitter/Twitter-targeting';

import Vk from './components/Smm/Vk/Vk';
import VkContext from './components/Smm/Vk/Vk-context';
import VkTargeting from './components/Smm/Vk/Vk-targeting';

import Youtube from './components/Smm/Youtube/Youtube';
import YoutubeContext from './components/Smm/Youtube/Youtube-context';
import YoutubeTargeting from './components/Smm/Youtube/Youtube-targeting';

import Settings from './components/Settings/Settings';
import Context from './components/Site/Context/Context';
import Email from './components/Functions/Email/Email';
import Socials from './components/Functions/Socials/Socials';
import Messengers from './components/Functions/Messengers/Messengers';
import Error from './components/Error/Error'

import Telegram from './components/Smm/Telegram/Telegram';
import Pay from './components/Pay/Pay'
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
import Main from "./Main"

// import test from './img/ava.jpg'

function App(props) {
  if (typeof localStorage.getItem("activePositions") === "undefined") {
    localStorage.setItem("activePositions", "")
  }
  if (typeof localStorage.getItem("camps") === "undefined") {
    localStorage.setItem("camps", "")
  } if (typeof localStorage.getItem("checkId") === "undefined") {
    localStorage.setItem("checkId", "")
  } if (typeof localStorage.getItem("create") === "undefined") {
    localStorage.setItem("create", "")
  } if (typeof localStorage.getItem("data") === "undefined") {
    localStorage.setItem("data", "")
  } if (typeof localStorage.getItem("email") === "undefined") {
    localStorage.setItem("email", "")
  }
  if (typeof localStorage.getItem("password") === "undefined") {
    localStorage.setItem("password", "")
  }
  if (typeof localStorage.getItem("path") === "undefined") {
    localStorage.setItem("path", "")
  } if (typeof localStorage.getItem("paymentId") === "undefined") {
    localStorage.setItem("paymentId", "")
  } if (typeof localStorage.getItem("paymentMethod") === "undefined") {
    localStorage.setItem("paymentMethod", "")
  } if (typeof localStorage.getItem("paymentStatus") === "undefined") {
    localStorage.setItem("paymentStatus", "")
  } if (typeof localStorage.getItem("setActivePositions") === "undefined") {
    localStorage.setItem("setActivePositions", "")
  } if (typeof localStorage.getItem("setAllPositions") === "undefined") {
    localStorage.setItem("setAllPositions", "")
  } if (typeof localStorage.getItem("setSum") === "undefined") {
    localStorage.setItem("setSum", "")
  } if (typeof localStorage.getItem("sum") === "undefined") {
    localStorage.setItem("sum", "")
  } if (typeof localStorage.getItem("table") === "undefined") {
    localStorage.setItem("table", "")
  }
  let admin = false;
  let PublicComponent = () => <Public
    header={props.state.header.header} />;
  let BreefComponent = () => <Breef
    breef={props.state.main.breef}
    dispatch={props.dispatch}
    header={props.state.header.header} />;
  let SupportComponent = () => <Support
    support={props.state.main.support}
    dispatch={props.dispatch}
    header={props.state.header.header} />;

  let FeedbackComponent = () => <Feedback
    feedback={props.state.main.feedback}
    dispatch={props.dispatch}
    header={props.state.header.header} />;
  let TrafficComponent = () => <Traffic
    table={props.state.table}
    traffic={props.state.functions.traffic}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let SeoComponent = () => <Seo
    table={props.state.table}
    seo={props.state.site.seo}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let TargetComponent = () => <Target
    target={props.state.site.targeting}
    dispatch={props.dispatch}
    table={props.state.table}
    name={props.state.header.name}
    header={props.state.header.header} />
  let FacebookComponent = () => <Facebook
    table={props.state.table}
    facebook={props.state.smm.facebook.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let FacebookTargetingComponent = () => <FacebookTargeting
    table={props.state.table}
    facebook={props.state.smm.facebook.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let FacebookContextComponent = () => <FacebookContext
    table={props.state.table}
    facebook={props.state.smm.facebook.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let InstagramComponent = () => <Instagram
    table={props.state.table}
    instagram={props.state.smm.instagram.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let InstagramTargetingComponent = () => <InstagramTargeting
    table={props.state.table}
    instagram={props.state.smm.instagram.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let InstagramStoriesComponent = () => <InstagramStories
    table={props.state.table}
    instagram={props.state.smm.instagram.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let TwitterComponent = () => <Twitter
    table={props.state.table}
    twitter={props.state.smm.twitter.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let TwitterTargetingComponent = () => <TwitterTargeting
    table={props.state.table}
    twitter={props.state.smm.twitter.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let TwitterContextComponent = () => <TwitterContext
    table={props.state.table}
    twitter={props.state.smm.twitter.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let VkComponent = () => <Vk
    table={props.state.table}
    vk={props.state.smm.vk.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let VkTargetingComponent = () => <VkTargeting
    table={props.state.table}
    vk={props.state.smm.vk.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let VkContextComponent = () => <VkContext
    table={props.state.table}
    vk={props.state.smm.vk.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let YoutubeComponent = () => <Youtube
    table={props.state.table}
    youtube={props.state.smm.youtube.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />

  let YoutubeTargetingComponent = () => <YoutubeTargeting
    table={props.state.table}
    youtube={props.state.smm.youtube.target}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let YoutubeContextComponent = () => <YoutubeContext
    table={props.state.table}
    youtube={props.state.smm.youtube.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let SettingsComponent = () => <Settings table={props.state.table} />
  let ContextComponent = () => <Context
    table={props.state.table}
    context={props.state.site.context}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let EmailComponent = () => <Email
    table={props.state.table}
    email={props.state.functions.email}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let SocialsComponent = () => <Socials
    table={props.state.table}
    socials={props.state.functions.socials}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let MessengersComponent = () => <Messengers
    table={props.state.table}
    messengers={props.state.functions.messengers}
    dispatch={props.dispatch}
    name={props.state.header.name}
    header={props.state.header.header} />
  let TelegramComponent = () => <Telegram table={props.state.table} />
  let PayComponent = () => <Pay
    dispatch={props.dispatch}
    table={props.state.table}
    header={props.state.header.header}
    pay={props.state.pay} />
  let LoginComponent = () => <Login
    error={props.state.auth.error}
    state={props.state.header}
    dispatch={props.dispatch} />
  let ForgetPassComponent = () => <ForgetPass
    error={props.state.auth.error}
    state={props.state.header}
    dispatch={props.dispatch} />
  let SignUpComponent = () => <SignUp
    error={props.state.auth.error}
    header={props.state.header}
    dispatch={props.dispatch} />
  let ChatComponent = () => <Chat
    chat={props.state.admin.chat}
    dispatch={props.dispatch}
    header={props.state.header.header} />
  let adminComponent = SupportComponent
  let MainComponent = () => <Main
    state={props.state}
    dispatch={props.dispatch} />;

  if (props.state.header.header.name === "") {

    app.auth().onAuthStateChanged(async (user) => {
      if (user) {


        // props.state.header.name = user.email
        console.log(user);

        await props.dispatch(nameActionCreator(user.email))

      } else {
        console.log(user);

      }
    });
  }

  console.log(localStorage.email);
  if (window.location.pathname != "/signup" && window.location.pathname != "/login") {
    localStorage.setItem('path', window.location.pathname);
  }

  if (localStorage.getItem("email") === null && localStorage.getItem("password") === null && localStorage.getItem("path") === null) {
    localStorage.setItem('email', "");
    localStorage.setItem('password', "");

  }
  // if (props.state.header.header.name === "chaseboxdatabase@gmail.com") {
  //   adminComponent = ChatComponent
  // } else adminComponent = SupportComponent



  const authenticate = () => {
    return new Promise(resolve => setTimeout(resolve, 3000))
  }
  const componentDidMount = () => {
    authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.style.display = "none"
        }, 3000)
      }
    })
  }
  componentDidMount()
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
  // console.log(app.auth().currentUser);

  return (

    // <AuthProvider>
    //   <Router>

    // <div>
    //   <Switch>
    <div className="wrapper">
      {localStorage.email != "" ?
        (
          <AuthProvider>
            <Router>
              <div>
                <Switch>
                  <div className="wrapper">
                    <Route render={MainComponent} />


                  </div>
                </Switch>
              </div>
            </Router>
          </AuthProvider>
          // <Route path="/" render={MainComponent} />
        ) : (
          // <Route path="/signup" exact component={SignUpComponent} />
          <AuthProvider>
            <Router>
              <div>
                <Switch>
                  <div className="wrapper">
                    <Route path="/login" exact render={LoginComponent} />
                    <Route path="/signup" exact component={SignUpComponent} />
                    <Route path="/forgetpass" exact render={ForgetPassComponent} />
                    <Redirect from='*' to='/login' />
                  </div>
                </Switch>
              </div>
            </Router>
          </AuthProvider>
          // <Route path="/forgetpass" exact render={ForgetPassComponent} />
        )}
      {/* <Route path="/signup" exact component={SignUpComponent} />
              <Route path="/login" exact render={LoginComponent} />
              <Route path="/forgetpass" exact render={ForgetPassComponent} />

              <Route path="/" render={MainComponent} /> */}
      {/* 
              <Menu width={'263px'}>
                <Scrollbars autoHeightMax={100} className="mobile_bar">

                  <div className={s.logo}> <img src={logo} alt="" /></div>
                  <div className={s.menu_container}>
                    <div className={s.main_container}>
                      <NavLink exact to="/" activeClassName={s.act} className={s.main_page}> <i className="fas fa-house-user"></i> Представление</NavLink>
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
                      <input type="checkbox" id={s.func_check} />

                      <div className={s.group_elem} id={s.func_block}>

                        <div className={s.group_title}>Функции <i className="fas fa-sort-up"></i></div>
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
                        <NavLink to="/smm/youtube" activeClassName={s.act} className={s.dropdown_item}>
                          <i className="fab fa-youtube"></i>  YouTube
        </NavLink>
                        <NavLink to="/smm/instagram" activeClassName={s.act} className={s.dropdown_item}>
                          <i className="fab fa-instagram"></i> Instagram
        </NavLink>
                        <NavLink to="/smm/vk" activeClassName={s.act} className={s.dropdown_item}>
                          <i className="fab fa-vk"></i>  VK
        </NavLink>
                        <NavLink to="/smm/twitter" activeClassName={s.act} className={s.dropdown_item}>
                          <i className="fab fa-twitter"></i> Twitter

        </NavLink>
                        <NavLink to="/smm/facebook" activeClassName={s.act} className={s.dropdown_item}>
                          <i className="fab fa-facebook-f"></i> Facebook
        </NavLink>
                      </div>
                    </div>
                  </div>

                  <a href="http://chase-box.com/cases.html" target='_blank' className={s.cases}>
                    <i className="fas fa-boxes"></i> Кейсы
                </a>

                  <div className={s.nav_toggle}>
                    <div className={s.mark}>© 2020 ChaseBox</div>
                  </div>
                </Scrollbars>
              </Menu>

              <Header state={props.state.header.header} smm={props.state.smm} dispatch={props.dispatch} />

              <Sidebar smm={props.state.smm} dispatch={props.dispatch} state={props.state.header.header} />




              <div className="content">

                <PrivateRoute exact path="/" render={PublicComponent} />

                <PrivateRoute exact path="/main/breef" render={BreefComponent} />
                <Route path="/main/support" render={adminComponent} />
                <PrivateRoute exact path="/main/feedback" render={FeedbackComponent} />
                <PrivateRoute exact path="/func/traffic" render={TrafficComponent} />
                <PrivateRoute exact path="/func/socials" render={SocialsComponent} />
                <PrivateRoute exact path="/func/messengers" render={MessengersComponent} />
                <PrivateRoute exact path="/site/seo" render={SeoComponent} />
                <PrivateRoute exact path="/site/target" render={TargetComponent} />
                <PrivateRoute path="/smm/facebook" render={FacebookComponent} />
                <PrivateRoute exact path="/smm/facebook" render={FacebookTargetingComponent} />

                <PrivateRoute exact path="/smm/facebook/context" render={FacebookContextComponent} />
                <PrivateRoute path="/smm/instagram" render={InstagramComponent} />
                <PrivateRoute exact path="/smm/instagram" render={InstagramTargetingComponent} />

                <PrivateRoute exact path="/smm/instagram/context" render={InstagramContextComponent} />
                <PrivateRoute path="/smm/twitter" render={TwitterComponent} />
                <PrivateRoute exact path="/smm/twitter" render={TwitterTargetingComponent} />
                <PrivateRoute exact path="/smm/twitter/context" render={TwitterContextComponent} />

                <PrivateRoute path="/smm/vk" render={VkComponent} />
                <PrivateRoute exact path="/smm/vk" render={VkTargetingComponent} />
                <PrivateRoute exact path="/smm/vk/context" render={VkContextComponent} />

                <PrivateRoute path="/smm/youtube" render={YoutubeComponent} />
                <PrivateRoute exact path="/smm/youtube" render={YoutubeTargetingComponent} />
                <PrivateRoute exact path="/smm/youtube/context" render={YoutubeContextComponent} />
                <PrivateRoute exact path="/settings" render={SettingsComponent} />
                <PrivateRoute exact path="/site/context" render={ContextComponent} />
                <PrivateRoute exact path="/func/email" render={EmailComponent} />
                <PrivateRoute exact path="/pay" render={PayComponent} />
              </div> */}

    </div>
    // </Switch>
    // </div> 
    // </Router>
    //  </AuthProvider> 

  );
}

export default App;
