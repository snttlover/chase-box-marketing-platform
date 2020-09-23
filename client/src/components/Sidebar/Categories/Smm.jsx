import React from 'react';
import s from './../Sidebar.module.css';
import { NavLink } from "react-router-dom";
import { hideActionCreator } from './../../../redux/Smm-reducer'

const Smm = (props) => {
    
    let youtubeHide='';
    let instagramHide='';
    let vkHide='';
    let twitterHide='';
    let facebookHide='';
    let hide = (event) => {
        
        let youtubeBool=true
        let instagramBool = true
        let vkBool = true
        let twitterBool = true
        let facebookBool = true
        switch(event.target.id)
        {
            case 'youtube':{
                youtubeBool=false
            }break;
            case 'instagram':{
                instagramBool=false
            }break;
            case 'vk':{
                vkBool=false
            }break;
            case 'twitter':{
                twitterBool=false
            }break;
            case 'facebook':{
                facebookBool=false
            }break;
        }
        props.dispatch(hideActionCreator({youtube: youtubeBool, instagram: instagramBool, vk: vkBool, twitter: twitterBool, facebook: facebookBool}))
    }
    
    if (props.state.youtubeHide) {
        
        youtubeHide = 'hide'
    } else youtubeHide = ''
    if (props.state.instagramHide) {
        instagramHide = 'hide'
    } else instagramHide = ''
    if (props.state.vkHide) {
        vkHide = 'hide'
    } else vkHide = ''
    if (props.state.twitterHide) {
        twitterHide = 'hide'
    } else twitterHide = ''
    if (props.state.facebookHide) {
        facebookHide = 'hide'
    } else facebookHide = ''
    return (
        <div>
            <ul className={s.topmenu}>
                <li>
                    <NavLink to="/smm/youtube" activeClassName="act" id="youtube" className={s.category} exact={false} onClick={hide}>
                        <i className="fab fa-youtube"></i>  YouTube
                    </NavLink>
                    <ul className={`${s.submenu} ${youtubeHide}`}>
                        <li><NavLink to="/smm/youtube" activeClassName="act" exact={true} className={s.category}>Таргетинг</NavLink></li>
                        <li><NavLink to="/smm/youtube/context" activeClassName="act" className={s.category}>Контекст</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/smm/instagram" activeClassName="act" id="instagram" className={s.category} exact={false} onClick={hide}>
                        <i className="fab fa-instagram"></i> Instagram
                    </NavLink>
                    <ul className={`${s.submenu} ${instagramHide}`}>
                        <li><NavLink to="/smm/instagram" activeClassName="act" exact={true} className={s.category}>Таргетинг</NavLink></li>
                        <li><NavLink to="/smm/instagram/context" activeClassName="act" className={s.category}>Контекст</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/smm/vk" activeClassName="act" id="vk" className={s.category} exact={false} onClick={hide}>
                        <i className="fab fa-vk"></i>  VK
                    </NavLink>
                    <ul className={`${s.submenu} ${vkHide}`}>
                        <li><NavLink to="/smm/vk" activeClassName="act" exact={true} className={s.category}>Таргетинг</NavLink></li>
                        <li><NavLink to="/smm/vk/context" activeClassName="act" className={s.category}>Контекст</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/smm/twitter" activeClassName="act" id="twitter" className={s.category} exact={false} onClick={hide}>
                        <i className="fab fa-twitter"></i> Twitter
                    </NavLink>
                    <ul className={`${s.submenu} ${twitterHide}`}>
                        <li><NavLink to="/smm/twitter" activeClassName="act" exact={true} className={s.category}>Таргетинг</NavLink></li>
                        <li><NavLink to="/smm/twitter/context" activeClassName="act" className={s.category}>Контекст</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/smm/facebook" activeClassName="act" id="facebook" className={s.category} exact={false} onClick={hide}>
                        <i className="fab fa-facebook-f"></i> Facebook

                        
                    </NavLink>
                    <ul className={`${s.submenu} ${facebookHide}`}>
                        <li><NavLink to="/smm/facebook" activeClassName="act" exact={true} className={s.category}>Таргетинг</NavLink></li>
                        <li><NavLink to="/smm/facebook/context" activeClassName="act" className={s.category}>Контекст</NavLink></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Smm;