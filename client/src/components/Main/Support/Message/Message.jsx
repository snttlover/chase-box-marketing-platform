import React from 'react';

import s from './Message.module.css';


const Message = (props) => {
  let isSentByCurrentUser;

  if(props.sender==="current") {
    isSentByCurrentUser = true;
  }
  
  return (
    isSentByCurrentUser
      ? (
        <div className={`${s.messageContainer} ${s.justifyEnd}`}>
          <div className={`${s.messageBox} ${s.backgroundBlue}`}>
            <p className={`${s.messageText} ${s.colorWhite}`}>   {props.text} </p>
          </div>
        </div>
        )
        : (
          <div className={`${s.messageContainer} ${s.justifyStart}`}>
            <div className={`${s.messageBox} ${s.backgroundLight}`}>
              <p className={`${s.messageText} ${s.colorDark}`}>  {props.text} </p>
            </div>
          </div>
        )
  );
}

export default Message;