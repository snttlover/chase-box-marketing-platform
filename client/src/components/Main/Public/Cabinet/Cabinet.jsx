import React from 'react';

import s from './Cabinet.module.css';
import app from './../../../../base'
import { removeCabinetActionCreator } from './../../../../redux/Public-reducer'

import { openRemoveModalActionCreator } from './../../../../redux/Public-reducer'
import { closeRemoveModalActionCreator } from './../../../../redux/Public-reducer'

const Cabinet = (props) => {
  // let isSentByCurrentUser;

  // if(props.sender==="current") {
  //   isSentByCurrentUser = true;
  // }

  let remove;
  if (props.cabinets.length <= 1) {
    remove = "block"
  } else remove = "none";


  let removeCabinet = (id) => {
    props.dispatch(removeCabinetActionCreator(id))
    app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/cabinets')
      .set(props.cabinets)
    // app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/cabinets').remove(props.id);

  }
  let open = async (id) => {
    
    await props.dispatch(openRemoveModalActionCreator(id))
  }
  let close = async () => {
    await props.dispatch(closeRemoveModalActionCreator())
  }
  return (
    props.type === "yandex"
      ? (
        <div className={s.wrap}>
          <div className={s.container}>
            <div className={s.header}>
              Яндекс
            </div>
            <div className={s.data}>
              <div className={`${s.position} ${s.droptop}`}>
                <div className={s.label}>Имя: </div>{props.data.name}
              </div>
              <div className={s.position}>
                <div className={s.label}>E-mail:</div>{props.data.email}
              </div>
              <div className={s.position}>
                <div className={s.label}>Номер:</div>{props.data.number}
              </div>
              <div className={s.position}>
                <div className={s.label}>Ваш E-mail:</div>{props.data.yourEmail}
              </div>
            </div>
            <div className={s.remove}>
              <a onClick={() => { open(props.id) }}>
                <i className="fas fa-times"></i>
              </a>


            </div>
          </div>
          <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
            <div class={s.modal_content}>

              <div className={s.modal_body}>



                <div className={s.body_section} id={s.yandex_section}  >

                  <div className={s.head_remove}>
                    Вы уверены, что хотите удалить рекламный кабинет?
                            </div>
                  <div className={s.buttons}>
                    <div className={s.button}>
                      <button className={s.remove_button} onClick={() => {
                        close()
                        removeCabinet(props.cabinetId)
                      }}>Удалить</button>
                    </div>
                    <div className={s.button}>
                      <button className={s.cancel_button} onClick={close}>Отмена</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      : props.type === "vk"
        ? (
          <div className={s.wrap}>
            <div className={s.container}>
              <div className={s.header}>
                VK
            </div>
              <div className={s.data}>
                <div cclassName={`${s.position} ${s.droptop}`}>
                  <div className={s.label}>Ссылка на страницу: </div>{props.data.link}
                </div>

              </div>
              <div className={s.remove}>
                <a onClick={() => { open(props.id) }}>
                  <i className="fas fa-times"></i>
                </a>


              </div>
            </div>
            <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
              <div class={s.modal_content}>

                <div className={s.modal_body}>



                  <div className={s.body_section} id={s.yandex_section}  >

                    <div className={s.head_remove}>
                      Вы уверены, что хотите удалить рекламный кабинет?
                            </div>
                    <div className={s.buttons}>
                      <div className={s.button}>
                        <button className={s.remove_button} onClick={() => {
                          close()
                          removeCabinet(props.cabinetId)


                        }}>Удалить</button>
                      </div>
                      <div className={s.button}>
                        <button className={s.cancel_button} onClick={close}>Отмена</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        : props.type === "fb"
          ? (
            <div className={s.wrap}>
              <div className={s.container}>
                <div className={s.header}>
                  Facebook
            </div>
                <div className={s.data}>
                  <div className={`${s.position} ${s.droptop}`}>
                    <div className={s.label}>Ссылка на страницу: </div>{props.data.link}
                  </div>

                </div>
                <div className={s.remove}>
                  <a onClick={() => { open(props.id) }}>
                    <i className="fas fa-times"></i>
                  </a>


                </div>
              </div>
              <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                <div class={s.modal_content}>

                  <div className={s.modal_body}>



                    <div className={s.body_section} id={s.yandex_section}  >

                      <div className={s.head_remove}>
                        Вы уверены, что хотите удалить рекламный кабинет?
                            </div>
                      <div className={s.buttons}>
                        <div className={s.button}>
                          <button className={s.remove_button} onClick={() => {
                            close()
                            removeCabinet(props.cabinetId)


                          }}>Удалить</button>
                        </div>
                        <div className={s.button}>
                          <button className={s.cancel_button} onClick={close}>Отмена</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
          : props.type === "google"
            ? (
              <div className={s.wrap}>
                <div className={s.container}>
                  <div className={s.header}>
                    Google Ads
            </div>
                  <div className={s.data}>
                    <div className={`${s.position} ${s.droptop}`}>
                      <div className={s.label}>Ваш E-mail: </div>{props.data.email}
                    </div>

                  </div>
                  <div className={s.remove}>
                    <a onClick={() => { open(props.id) }}>
                      <i className="fas fa-times"></i>
                    </a>


                  </div>
                </div>
                <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                  <div class={s.modal_content}>

                    <div className={s.modal_body}>



                      <div className={s.body_section} id={s.yandex_section}  >

                        <div className={s.head_remove}>
                          Вы уверены, что хотите удалить рекламный кабинет?
                            </div>
                        <div className={s.buttons}>
                          <div className={s.button}>
                            <button className={s.remove_button} onClick={() => {
                              close()
                              removeCabinet(props.cabinetId)


                            }}>Удалить</button>
                          </div>
                          <div className={s.button}>
                            <button className={s.cancel_button} onClick={close}>Отмена</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            : props.type === "myTarget"
              ? (
                <div className={s.wrap}>
                  <div className={s.container}>
                    <div className={s.header}>
                      MyTarget
            </div>
                    <div className={s.data}>
                      <div className={`${s.position} ${s.droptop}`}>
                        <div className={s.label}>Ваш E-mail: </div>{props.data.email}
                      </div>

                    </div>
                    <div className={s.remove}>
                    <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                    <div class={s.modal_content}>

                      <div className={s.modal_body}>



                        <div className={s.body_section} id={s.yandex_section}  >

                          <div className={s.head_remove}>
                            Вы уверены, что хотите удалить рекламный кабинет?
                            </div>
                          <div className={s.buttons}>
                            <div className={s.button}>
                              <button className={s.remove_button} onClick={() => {
                                close()
                                removeCabinet(props.cabinetId)


                              }}>Удалить</button>
                            </div>
                            <div className={s.button}>
                              <button className={s.cancel_button} onClick={close}>Отмена</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                      <a onClick={() => { open(props.id) }}>
                        <i className="fas fa-times"></i>
                      </a>


                    </div>
                  </div>
                  
                </div>
              )
              : props.type === "default"
                ? (
                  <div className={s.default}>
                    <div className={s.empty} style={{ display: remove }}>
                      Нет кабинетов
            </div>
                  </div>
                )

                : (
                  <></>
                )
  );
}

export default Cabinet;