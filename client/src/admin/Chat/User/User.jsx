import React from 'react';
import {changeActualUserActionCreator} from './../../../redux/Admin-reducer'
import s from './User.module.css';
import { NavLink } from 'react-router-dom';
import app from './../../../base'


const User = (props) => {
  let actual = React.createRef()
  
  let path = "/main/support/" + props.username
  
  let changeActualUser = () => {
    let actualUser = actual.current.text
    
    props.dispatch(changeActualUserActionCreator(actualUser))
  }
  return (
    <NavLink to={path} className={s.user} style={{color: props.send ? "#8d31c1" : "#000"} } activeClassName={s.active} onClick={changeActualUser} ref={actual}>
      {props.username}
    </NavLink>
  );
}

export default User;