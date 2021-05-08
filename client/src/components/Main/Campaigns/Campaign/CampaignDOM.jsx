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

const CampaignDOM = (props) => {
  debugger
  return (
    props.section !== "default" ? (
      <tbody className={s.element}>
        <tr>
          <td>
            <div className={s.td_wrap}>
              <div className={s.status} style={{ color: props.actStatus ? "#8d31c1" : "#0000008a" }}>
                <i className="fas fa-clock" style={{ display: props.actStatus ? "inline" : "none" }}></i>

                {/* <div className={s.circle_out}>
                  <div className={s.progress}></div>
                  <div
                    class={s.circle_in}>
                  </div>
                </div> */}
                <i className="fas fa-history" style={{ display: props.actStatus ? "none" : "inline" }}></i>
                <p style={{ display: props.actStatus ? "block" : "none" }}>
                  Активно
              </p>
                <p style={{ display: props.actStatus ? "none" : "block" }}>
                  Завершено
              </p>
              </div>

            </div>
          </td>
          <td><div className={s.td_wrap}>{props.date}</div> </td>
          <td><div className={s.td_wrap}>{props.section}</div> </td>
          <td><div className={s.td_wrap}>₽ {props.budjetStr}</div> </td>

          <td><div className={s.td_wrap}><a href={props.link} className={s.link_camp} target="_blank">Перейти <i class="fas fa-external-link-alt"></i></a></div> </td>
          <td>
            <div className={s.td_wrap}>
              <div className={s.buttons}>
                {/* <a href="#" target="_blank" className={s.opt}><i class="fas fa-ellipsis-v"></i></a> */}
                <a className={s.ref} onClick={props.open} style={{ display: props.actStatus ? "none" : "block" }}>
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
              <div className={s.header_modal_text} >Продлить <span class={s.close} onClick={props.close}>&times;</span></div>
            </div>


            <div className={s.modal_body} style={{ display: props.modalType ? 'block' : 'none' }}>
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
                      onChange={props.onTextChange}
                      ref={props.newBudjet} />
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
                      onChange={props.onTextChange}
                      ref={props.time} />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={props.disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  props.prolong('/payment')
                  // open()
                }}>Оплатить (физлицо): ₽ {props.totalSum} </button>
                <button className={props.disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  props.prolong('/payment_of')
                  // open()
                }}>Оплатить (юрлицо): ₽ {props.totalSum} </button>
                <img style={{ display: props.loading ? 'inline-block' : 'none' }} src={loading} />

              </div>

            </div>
            
            <div className={s.modal_body} style={{ display: props.modalType ? 'none' : 'block' }}>
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
                      onChange={props.onTextChange}
                      ref={props.num}
                      type="number" />
                  </div>
                </div>
              </div>
              <div className={s.button}>
                <button className={props.disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  props.prolong('/payment')
                  // open()
                }}>Оплатить (физлицо): ₽ {props.totalSum} </button>
                <button className={props.disabled} style={{ display: props.loading ? 'none' : 'inline-block' }} onClick={() => {
                  props.prolong('/payment_of')
                  // open()
                }}>Оплатить (юрлицо): ₽ {props.totalSum} </button>
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
        <div className={s.no_pos} style={{ display: props.remove }}>
          <p>Нет позиций</p>
        </div>
      )
  );
}

export default CampaignDOM;