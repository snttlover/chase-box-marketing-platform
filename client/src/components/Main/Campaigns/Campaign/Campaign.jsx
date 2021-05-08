import React from 'react';
import axios from 'axios'

import s from './Campaign.module.css';
import app from '../../../../base'
import loading from './../../../../img/loading.svg'

import { removeCabinetActionCreator } from '../../../../redux/Public-reducer'
import { activePositionsActionCreator } from './../../../../redux/Header-reducer'
// import { openRemoveModalActionCreator } from '../../../../redux/Public-reducer'
// import { closeRemoveModalActionCreator } from '../../../../redux/Public-reducer'
import { openModalActionCreator } from './../../../../redux/Campaigns-reducer'
import { closeModalActionCreator } from './../../../../redux/Campaigns-reducer'
import { campaignTextActionCreator } from './../../../../redux/Campaigns-reducer'
import { loadingActionCreator } from './../../../../redux/Campaigns-reducer'

const Campaign = (props) => {
  debugger
  let time = React.createRef();
  let newBudjet = React.createRef();
  let num = React.createRef();
  let totalSum = ''
  let actStatus = false
  let remove;
  let activePositions
  let budjetStr = 0
  let disabled = "disabled"
  let modalType = true;
  debugger
  if (props.cabinet != "default") {
    budjetStr = props.budjet
    budjetStr = budjetStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  else {
    actStatus = false
    // app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/activePositions').set(0)

  }
  if (props.camps.length <= 1) {
    remove = "block"

  } else remove = "none";
  if (props.date === "...") {
    actStatus = true
  }
  else if (props.date === "-") {
    actStatus = false
  }
  else if (props.date === "default") {
    actStatus = false
  }
  else {
    let date = props.date.replace(/[\.\/]/g, '-');
    console.log(date);
    console.log(new Date());
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;

    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    console.log(today + " " + date);
    date = date.split("-");
    today = today.split("-");

    actStatus = new Date(date[2], date[1] - 1, date[0]) >= new Date(today[2], today[1] - 1, today[0]);

  }
  console.log(actStatus);
  if (actStatus) {

    activePositions = localStorage.getItem('activePositions')
    activePositions++

    if (props.camps.length === 1) {
      activePositions = 0
    }
    localStorage.setItem("activePositions", activePositions)

    app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/activePositions').set(parseInt(localStorage.getItem('activePositions')))

  } else {
    activePositions = localStorage.getItem('activePositions')

    app.database().ref('users/' + app.auth().currentUser.email.split('.').join("") + '/activePositions').set(parseInt(localStorage.getItem('activePositions')))

  }

  let open = () => {
    debugger
    props.dispatch(openModalActionCreator(props.id))

  }



  let close = () => {
    props.dispatch(closeModalActionCreator())
  }

  let onTextChange = () => {

    let timeText = time.current.value;
    let budjetText = newBudjet.current.value;
    let numText = num.current.value;
    debugger


    props.dispatch(campaignTextActionCreator({ budjet: budjetText, time: timeText, num: numText }));
    props.dispatch(openModalActionCreator(props.id))



  };

  debugger
  if (props.section === "SEO") {
    if (props.newBudjet !== "" && props.time !== "") {
      disabled = "nodisabled"
      totalSum = parseInt(props.newBudjet) * parseInt(props.time)
      totalSum = totalSum + parseInt(9990 * parseInt(props.time))

    }
  }
  else if (props.section === "Онлайн трафик") {
    if (parseInt(props.num) >= 5000) {
      disabled = "nodisabled"
      totalSum = totalSum + parseInt(6 * parseInt(props.num))
    }
    modalType = false

  }
  else if (props.section === "E-mail рассылка") {
    if (parseInt(props.num) >= 20000) {
      disabled = "nodisabled"
      totalSum = totalSum + parseInt(1 * parseInt(props.num))
    }
    modalType = false

  }
  else if (props.section === "Рассылка в мессенджерах") {
    if (parseInt(props.num) >= 15000) {
      disabled = "nodisabled"
      totalSum = totalSum + parseInt(3 * parseInt(props.num))
    }
    modalType = false

  }
  else if (props.section === "Рассылка в соцсетях") {
    if (parseInt(props.num) >= 10000) {
      disabled = "nodisabled"
      totalSum = totalSum + parseInt(3 * parseInt(props.num))
    }
    modalType = false

  }
  else {
    if (parseInt(props.time) >= 1 && parseInt(props.newBudjet) >= 3000) {
      debugger
      disabled = "nodisabled"
      totalSum = parseInt(props.newBudjet) * parseInt(props.time)
      totalSum = totalSum + parseInt(3790 * parseInt(props.time))
    }
  }
  let prolong = (payType) => {
    debugger


    if (props.section !== "Онлайн трафик" && props.section !== "E-mail рассылка" && props.section !== "Рассылка в соцсетях" && props.section !== "Рассылка в мессенджерах") {
      props.camps[props.id].budjet = parseInt(props.newBudjet) * parseInt(props.time)

      let today = new Date()
      let date = new Date()
      if (props.section === "SEO") {
        debugger

        date.setMonth(parseInt(today.getMonth()) + parseInt(props.time))
        console.log(date.getMonth());


      } else {
        date.setDate(today.getDate() + (props.time * 7))
      }
      debugger
      let month = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : ("0" + parseInt(date.getMonth() + 1));
      let day = (date.getDate()) > 10 ? (date.getDate()) : ("0" + date.getDate());
      let year = date.getFullYear();
      // console.log(day+"."+month+"."+year);
      let campDate = day + "." + month + "." + year
      props.camps[props.id].date = campDate
    } else {
      props.camps[props.id].date = "..."
      props.camps[props.id].budjet = totalSum
    }
    debugger
    console.log(props.camps);
    localStorage.setItem('prolong', 'true')
    let data
    data = "Пролонгация: " + props.section + ", Время:" + props.time + ", Бюджет: " + props.newBudjet + ", Ссылка: " + props.link
    localStorage.setItem('data', data)
    localStorage.setItem('sum', totalSum)
    // localStorage.setItem('table', JSON.stringify(props.table.elementsData))

    // props.dispatch(addCampaignActionCreator(props.table.elementsData))
    localStorage.setItem('camps', JSON.stringify(props.camps))
    localStorage.setItem('create', "true")
    localStorage.setItem('paymentStatus', 'false')

    localStorage.setItem('loading_check', 'true')
    localStorage.setItem('reload', 'true')
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

    debugger

    let payment = axios.post(payType, {
      data,
      value: totalSum + ".00"
    })
    
    payment.then((value) => {
      // if (payType === "/payment_of") {
        localStorage.setItem('create', "true")
        localStorage.setItem('paymentType', "jud")

        debugger
        console.log(value.data.id);
        localStorage.setItem('checkId', value.data.id)
        localStorage.setItem('paymentLink', value.data.confirmation.confirmation_url)

        window.location = value.data.confirmation.confirmation_url
      // }
      // if (payType === "/payment") {
      //   console.log(value);
      //   localStorage.setItem('create', "true")
      //   localStorage.setItem('paymentType', "phys")
      //   debugger
      //   localStorage.setItem('checkId', value.data.checkId)
      //   localStorage.setItem('paymentLink', value.data.body.formUrl)

      //   window.location = value.data.body.formUrl

      // }

    })
      .catch((err) => {
        console.log(err);
      });

      
  }


  return (
    props.section !== "default" ? (
      <tbody className={s.element}>
        <tr>
          <td>
            <div className={s.td_wrap}>
              <div className={s.status} style={{ color: actStatus ? "#8d31c1" : "#0000008a" }}>
                <i className="fas fa-clock" style={{ display: actStatus ? "inline" : "none" }}></i>

                {/* <div className={s.circle_out}>
                  <div className={s.progress}></div>
                  <div
                    class={s.circle_in}>
                  </div>
                </div> */}
                <i className="fas fa-history" style={{ display: actStatus ? "none" : "inline" }}></i>
                <p style={{ display: actStatus ? "block" : "none" }}>
                  Активно
              </p>
                <p style={{ display: actStatus ? "none" : "block" }}>
                  Завершено
              </p>
              </div>

            </div>
          </td>
          <td><div className={s.td_wrap}>{props.date}</div> </td>
          <td><div className={s.td_wrap}>{props.section}</div> </td>
          <td><div className={s.td_wrap}>₽ {budjetStr}</div> </td>

          <td><div className={s.td_wrap}><a href={props.link} className={s.link_camp} target="_blank">Перейти <i class="fas fa-external-link-alt"></i></a></div> </td>
          <td>
            <div className={s.td_wrap}>
              <div className={s.buttons}>
                {/* <a href="#" target="_blank" className={s.opt}><i class="fas fa-ellipsis-v"></i></a> */}
                <a className={s.ref} onClick={open} style={{ display: actStatus ? "none" : "block" }}>
                  Продлить
              </a>
              </div>
            </div>
          </td>
        </tr>
        <div ref={s.myModal} class={s.modal} style={{ display: props.showModal ? 'block' : 'none' }}>
          <div class={s.modal_content}>

            <div className={s.header_modal}>
              {/* <div className={s.header_modal_text} style={{ display: props.pay.newType === "main" ? "block" : "none" }}>Спасибо! <span class={s.close} onClick={close}>&times;</span></div> */}
              <div className={s.header_modal_text} >Продлить <span class={s.close} onClick={close}>&times;</span></div>
            </div>


            <div className={s.modal_body} style={{ display: modalType ? 'block' : 'none' }}>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label} style={{ display: props.section === "SEO" ? 'block' : 'none' }}>Бюджет (минимум ₽7000): </div>

                  <div className={s.label} style={{ display: props.section === "SEO" ? 'none' : 'block' }}>Бюджет (минимум ₽3000): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="budjet"
                      type="number"
                      value={props.newBudjet}
                      onChange={onTextChange}
                      ref={newBudjet} />
                  </div>
                </div>
              </div>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label} style={{ display: props.section === "SEO" ? 'block' : 'none' }}>Продолжительность (в месяцах): </div>

                  <div className={s.label} style={{ display: props.section === "SEO" ? 'none' : 'block' }}>Продолжительность (в неделях): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="time"
                      type="number"
                      min="1"
                      max="1000"
                      value={props.time}
                      onChange={onTextChange}
                      ref={time} />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong('/payment')
                  // open()
                }}>Оплатить (физлицо): ₽ {totalSum} </button>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong('/payment_of')
                  // open()
                }}>Оплатить (юрлицо): ₽ {totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            {/* <div className={s.modal_body} style={{ display: props.section === "Контекстная реклама" ? 'block' : 'none' }}>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Бюджет (минимум ₽3000): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input
                      type="number"
                      min="3000"
                      value={props.newBudjet}
                      onChange={onTextChange}
                      ref={newBudjet} />
                  </div>
                </div>
              </div>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Продолжительность (в неделях): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="time"
                      type="number"
                      min="1"
                      max="1000"
                      value={props.time}
                      onChange={onTextChange}
                      ref={time} />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong()
                  // open()
                }}>Оплатить: ₽ {totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            <div className={s.modal_body} style={{ display: props.section === "SEO" ? 'block' : 'none' }}>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Бюджет (минимум ₽7000): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="budjet"
                      type="number"
                      min="3000"
                      value={props.newBudjet}
                      onChange={onTextChange}
                      ref={newBudjet} />
                  </div>
                </div>
              </div>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Продолжительность (в месяцах): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="time"
                      type="number"
                      min="1"
                      max="1000"
                      value={props.time}
                      onChange={onTextChange}
                      ref={time} />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong()
                  // open()
                }}>Оплатить: ₽ {totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            <div className={s.modal_body} style={{ display: props.section === "Instagram/Таргетинг" ? 'block' : 'none' }}>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Бюджет (минимум ₽3000): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="budjet"
                      type="number"
                      min="3000"
                      value={props.newBudjet}
                      onChange={onTextChange}
                      ref={newBudjet} />
                  </div>
                </div>
              </div>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Продолжительность (в неделях): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="time"
                      type="number"
                      min="1"
                      max="1000"
                      value={props.time}
                      onChange={onTextChange}
                      ref={time} />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong()
                  // open()
                }}>Оплатить: ₽ {totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            <div className={s.modal_body} style={{ display: props.section === "Instagram/Сторис" ? 'block' : 'none' }}>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Бюджет (минимум ₽3000): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="budjet"
                      type="number"
                      min="3000"
                      value={props.newBudjet}
                      onChange={onTextChange}
                      ref={newBudjet} />
                  </div>
                </div>
              </div>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Продолжительность (в неделях): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="time"
                      type="number"
                      min="1"
                      max="1000"
                      value={props.time}
                      onChange={onTextChange}
                      ref={time} />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong()
                  // open()
                }}>Оплатить: ₽ {totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            <div className={s.modal_body} style={{ display: props.section === "VK/Таргетинг" ? 'block' : 'none' }}>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Бюджет (минимум ₽3000): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="budjet"
                      type="number"
                      min="3000"
                      value={props.newBudjet}
                      onChange={onTextChange}
                      ref={newBudjet} />
                  </div>
                </div>
              </div>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Продолжительность (в неделях): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="time"
                      type="number"
                      min="1"
                      max="1000"
                      value={props.time}
                      onChange={onTextChange}
                      ref={time} />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong()
                  // open()
                }}>Оплатить: ₽ {totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            <div className={s.modal_body} style={{ display: props.section === "VK/Баннерная реклама" ? 'block' : 'none' }}>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Бюджет (минимум ₽3000): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="budjet"
                      type="number"
                      min="3000"
                      value={props.newBudjet}
                      onChange={onTextChange}
                      ref={newBudjet} />
                  </div>
                </div>
              </div>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Продолжительность (в неделях): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="time"
                      type="number"
                      min="1"
                      max="1000"
                      value={props.time}
                      onChange={onTextChange}
                      ref={time} />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong()
                  // open()
                }}>Оплатить: ₽ {totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            <div className={s.modal_body} style={{ display: props.section === "Facebook" ? 'block' : 'none' }}>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Бюджет (минимум ₽3000): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="budjet"
                      type="number"
                      min="3000"
                      value={props.newBudjet}
                      onChange={onTextChange}
                      ref={newBudjet} />
                  </div>
                </div>
              </div>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Продолжительность (в неделях): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="time"
                      type="number"
                      min="1"
                      max="1000"
                      value={props.time}
                      onChange={onTextChange}
                      ref={time} />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong()
                  // open()
                }}>Оплатить: ₽ {totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            <div className={s.modal_body} style={{ display: props.section === "Одноклассники/Таргетинг" ? 'block' : 'none' }}>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Бюджет (минимум ₽3000): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="budjet"
                      type="number"
                      min="3000"
                      value={props.newBudjet}
                      onChange={onTextChange}
                      ref={newBudjet} />
                  </div>
                </div>
              </div>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Продолжительность (в неделях): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="time"
                      type="number"
                      min="1"
                      max="1000"
                      value={props.time}
                      onChange={onTextChange}
                      ref={time} />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong()
                  // open()
                }}>Оплатить: ₽ {totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            <div className={s.modal_body} style={{ display: props.section === "Одноклассники/Баннерная реклама" ? 'block' : 'none' }}>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Бюджет (минимум ₽3000): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="budjet"
                      type="number"
                      min="3000"
                      value={props.newBudjet}
                      onChange={onTextChange}
                      ref={newBudjet} />
                  </div>
                </div>
              </div>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label}>Продолжительность (в неделях): </div>
                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="time"
                      type="number"
                      min="1"
                      max="1000"
                      value={props.time}
                      onChange={onTextChange}
                      ref={time} />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong()
                  // open()
                }}>Оплатить: ₽ {totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            */}
            <div className={s.modal_body} style={{ display: modalType ? 'none' : 'block' }}>
              <div className={s.table}>
                <div className={s.label_block}>
                  <div className={s.label} style={{ display: props.section === "Онлайн трафик" ? 'block' : 'none' }}>Количество товара (минимум 5000): </div>

                  <div className={s.label} style={{ display: props.section === "E-mail рассылка" ? 'block' : 'none' }}>Количество писем (минимум 20 000): </div>
                  <div className={s.label} style={{ display: props.section === "Рассылка в соцсетях" ? 'block' : 'none' }}>Количество писем (минимум 10 000): </div>
                  <div className={s.label} style={{ display: props.section === "Рассылка в мессенджерах" ? 'block' : 'none' }}>Количество писем (минимум 15 000): </div>


                </div>
                <div className={s.input_block}>
                  <div className={s.input}>
                    <input name="num"
                      value={props.num}
                      onChange={onTextChange}
                      ref={num}
                      type="number" />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong('/payment')
                  // open()
                }}>Оплатить (физлицо): ₽ {totalSum} </button>
                <button className={disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  prolong('/payment_of')
                  // open()
                }}>Оплатить (юрлицо): ₽ {totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            {/* <div className={s.modal_body} style={{ display: props.section === "E-mail рассылка" ? 'block' : 'none' }}>

            </div>
            <div className={s.modal_body} style={{ display: props.section === "Рассылка в мессенджерах" ? 'block' : 'none' }}>

            </div>
            <div className={s.modal_body} style={{ display: props.section === "Рассылка в соцсетях" ? 'block' : 'none' }}> 

            </div>*/}
            <div className={s.modal_footer}>
              {/* <NavLink to="/campaigns" className={`${s.submitButton} ${s.margin_none}`}>Заказы</NavLink> */}

            </div>
          </div>
        </div>
      </tbody>
    ) : (
        <div className={s.no_pos} style={{ display: remove }}>
          <p>Нет позиций</p>
        </div>
      )
  );
}

export default Campaign;