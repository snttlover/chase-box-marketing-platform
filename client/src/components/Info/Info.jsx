import React from 'react';

import s from './Info.module.css';
import google1 from './../../img/google1.png'
import google2 from './../../img/google2.png'
import google3 from './../../img/google3.png'
import facebook1 from './../../img/facebook1.png'
import facebook2 from './../../img/facebook2.png'
import facebook3 from './../../img/facebook3.png'
import facebook4 from './../../img/facebook4.png'
import mytarget from './../../img/myTarget.jpg'
import vk1 from './../../img/vk1.jpg'
import vk2 from './../../img/vk2.jpg'
import vk3 from './../../img/vk3.jpg'
import vk4 from './../../img/vk4.png'
import yandex1 from './../../img/yandex1.png'
import yandex2 from './../../img/yandex2.png'
import yandex3 from './../../img/yandex3.png'
import yandex4 from './../../img/yandex4.jpg'
import yandex5 from './../../img/yandex5.jpg'
import yandex6 from './../../img/yandex6.jpg'
import black from './../../img/black.svg'
import box1 from './../../img/box1.jpg'
import box2 from './../../img/box2.jpg'
import box3 from './../../img/box3.jpg'
import box4 from './../../img/box4.jpg'
import box5 from './../../img/box5.jpg'
import box6 from './../../img/box6.jpg'
import box7 from './../../img/box7.jpg'











// import app from './../../../../base'
// import { removeInfoActionCreator } from './../../../../redux/Public-reducer'

// import { openRemoveModalActionCreator } from './../../../../redux/Public-reducer'
// import { closeRemoveModalActionCreator } from './../../../../redux/Public-reducer'
import { closeInfoModalActionCreator } from './../../redux/Info-reducer'
const Info = (props) => {

  let close = async () => {
    await props.dispatch(closeInfoModalActionCreator())
  }
  return (
    props.type === "yandex"
      ? (

        <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
          <div class={s.modal_content}>
            <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

            <div className={s.modal_body}>



              <div className={s.body_section} id={s.yandex_section}  >

                <div className={s.head_remove}>
                  <h2>Яндекс Директ и РСЯ (Контекстная реклама)</h2><br />
                  <h3>Как открыть доступ к Яндекс Директу</h3><br />
                  <ul>
                    <li>Переходим на страницу <a target="_blank" href="https://direct.yandex.ru/registered/main.pl?cmd=showCamps">https://direct.yandex.ru/registered/main.pl?cmd=showCamps</a> , если аккаунт уже есть, то откроется страница “Мои кампании”. Листаем вниз и нажимаем на “Зарегистрированные представители”.</li><br />

                    <img src={yandex1} alt="" />


                    <li>На странице “Зарегистрированные представители” нажимаем на ссылку “Назначить нового представителя”.</li><br />

                    <img src={yandex2} alt="" />


                    <li>Тут видим поле для ввода логина представителя. Но дать гостевой доступ можно только на тот аккаунт, который не использовался для Яндекс Директа. Поэтому нужно регистрировать новый аккаунт, нажимаем “Зарегистрировать логин для нового представителя”.</li><br />

                    <img src={yandex3} alt="" />


                    <li>Заполняем имя, фамилию, логин, пароль, нажимаем “Зарегистрировать”.</li> <br />

                    <img src={yandex4} alt="" />


                    <li>Нас переправит на страницу “Назначение представителей”, зарегистрированный логин автоматически подставится в логин представителя. Это последний шаг. Нужно указать имя, e-mail и телефон человека, которому даете доступ.</li><br />

                    <img src={yandex5} alt="" />





                    <li>Внесите все данные в поля ввода</li><br />
                  </ul>
                  <h3>Как открыть доступ к РСЯ</h3><br />
                  <ul>
                    <li>

                      На странице <a href="https://partner2.yandex.ru/v2/inviter/" target="_blank">Приглашения</a> нажмите кнопку <b>Пригласить</b>, выберите язык приглашения и укажите адрес электронной почты chasebox@yandex.ru.
                    </li><br />


                    <img src={yandex6} alt="" />

                    <li>

                      Когда ChaseBox зарегистрирован, откройте страницу со списком площадок (например, Продукты → Тематические площадки). Найдите в списке площадку, к которой вы хотите предоставить доступ, и нажмите Редактировать. На вкладке Доступы нажмите Добавить ассистента и укажите наш логин.
                    </li><br />



                  </ul>
                </div>

              </div>
            </div>
            <div className={s.modal_footer}>

            </div>
          </div>
        </div>
      )
      : props.type === "vk"
        ? (
          <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
            <div class={s.modal_content}>
              <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

              <div className={s.modal_body}>



                <div className={s.body_section} id={s.yandex_section}  >

                  <div className={s.head_remove}>

                    <h2>Как дать доступ к рекламному кабинету VK (Таргетинг)</h2><br />
                    <ul>
                      <li>
                        Введите ссылку на свою страницу VK (наш специалист свяжется с вами через эту страницу).
                    </li><br />
                      <li>
                        Заходите в рекламный кабинет, выбираете раздел таргетинг, далее перейти в настройки. Именно «Таргетинг», а не «Маркет-платформа» (реклама в сообществах).
                    </li><br />
                      <img src={vk1} alt="" />
                      <br />
                      <img src={vk2} alt="" />




                      <li>
                        В разделе настройки доступа, вставляете ссылку на страницу специалиста ChaseBox.
                    </li><br />
                      <img src={vk3} alt="" />


                      <li>
                        Нажав на кнопку «Добавить пользователя», указываете уровень доступа «Администратор», и завершаете добавление.
                    </li><br />
                      <img src={vk4} alt="" />


                    </ul>
                  </div>

                </div>
              </div>
              <div className={s.modal_footer}>

              </div>
            </div>
          </div>
        )
        : props.type === "facebook"
          ? (
            <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
              <div class={s.modal_content}>
                <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                <div className={s.modal_body}>



                  <div className={s.body_section} id={s.yandex_section}  >

                    <div className={s.head_remove}>
                      <h2>Как дать доступ к рекламному кабинету Facebook (Facebook, Instagram)</h2><br />

                      <ul>
                        <li>
                          Зарегистрируйтесь на <a href="https://direct.yandex.ru/" target="_blank">https://direct.yandex.ru/</a> и на <a href="https://partner2.yandex.ru/" target="_blank">https://partner2.yandex.ru/</a>
                        </li><br />
                        <li>
                          Ввдеите ссылку на ваш профиль (наш специалист свяжется с вами по этому профилю).
                    </li><br />
                        <h3>Предоставить доступ к Ads Manager</h3><br />

                        <li>
                          Переходим в Ads Manager в пункт меню «Настройки».
                    </li><br />



                        <li>
                          В блоке «Роли для рекламного аккаунта» нажимаем кнопку «Добавить людей».
                    </li><br />
                        <img src={facebook1} alt="" />

                        <li>
                          В окне в поле ввода указываем имя специалиста ChaseBox, в выпадающем списке выбираем права «Администратора» и нажимаем кнопку «Подтвердить».
                    </li><br />
                        <img src={facebook2} alt="" />

                        <h3>Предоставить доступ к Business Manager</h3><br />

                        <li>
                          Переходим в <a href="https://business.facebook.com/" target="_blank">Business Manager</a>. Нажимаем на кнопку с полосками в левом верхнем углу и в меню, которое открылось, выбираем пункт «Настройки компании» .
                    </li><br />
                        <img src={facebook3} alt="" />

                        <li>
                          Дальше переходим Пользователи/Люди и нажимаем кнопку «Добавить». После этого указываем e-mail пользователя, которого хотим добавить, назначаем права и нажимаем кнопку «Далее».
                        </li><br />
                        <img src={facebook4} alt="" />

                        <li>
                          Указываем к каким рекламным аккаунтам у ChaseBox будет доступ и нажимаем «Пригласить».
                        </li><br />
                      </ul>
                    </div>

                  </div>
                </div>
                <div className={s.modal_footer}>

                </div>
              </div>
            </div>
          )
          : props.type === "google"
            ? (

              <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                <div class={s.modal_content}>
                  <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                  <div className={s.modal_body}>



                    <div className={s.body_section} id={s.yandex_section}  >

                      <div className={s.head_remove}>
                        <h2>Как дать доступ к аккаунту Google Ads (Контекстная реклама)</h2><br />
                        <ul>
                          <li>
                            Зарегистрируйтесь на <a href="https://ads.google.com/" target="_blank">https://ads.google.com/</a>
                          </li><br />
                          <li>
                            Для того, чтобы предоставить доступ потребуется нажать на «Инструменты и настройки», а в выпавшем меню выбираем «Доступ к аккаунту».
                          </li><br />


                          <img src={google1} alt="" />
                          <li>
                            После нажимаем на «+» (добавить).
                          </li><br />
                          <img src={google2} alt="" />

                          <li>
                            Далее вводим электронный адрес chasebox@gmail.com и выбираем уровень прав «Администратор».
                          </li><br />
                          <img src={google3} alt="" />

                          <li>
                            За выбором нужных пунктов достаточно кликнуть на «Отправить приглашение».
                          </li><br />
                        </ul>
                      </div>

                    </div>
                  </div>
                  <div className={s.modal_footer}>

                  </div>
                </div>
              </div>
            )
            : props.type === "myTarget"
              ? (

                <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                  <div class={s.modal_content}>
                    <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                    <div className={s.modal_body}>



                      <div className={s.body_section} id={s.yandex_section}  >

                        <div className={s.head_remove}>
                          <h2>Как дать доступ к аккаунты myTarget (Одноклассники, VK Баннерная реклама)</h2><br />
                          <ul>
                            <li>
                              Зарегистрируйтесь на <a href="https://target.my.com/" target="_blank">https://target.my.com/</a>
                            </li><br />
                            <li>
                              Чтобы дать доступ к своему аккаунту другому пользователю, откройте вкладку «Профиль» → «Права доступа». Нажмите «Добавить пользователя» и введите chasebox@gmail.com.
                          </li><br />



                            <li>
                              Выберите расширенные права с доступом к счету и нажмите «Сохранить».
                          </li><br />
                            <img src={mytarget} alt="" />

                          </ul>
                        </div>

                      </div>
                    </div>
                    <div className={s.modal_footer}>

                    </div>
                  </div>
                </div>

              )
              : props.type === "disk"
                ? (

                  <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                    <div class={s.modal_content}>
                      <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                      <div className={s.modal_body}>



                        <div className={s.body_section} id={s.yandex_section}  >

                          <div className={s.head_remove}>
                            <p>Для данного вида продвижения вам необходимо иметь определенные материалы. Как передать файлы?</p><br />
                            <ul>
                              <li>
                                Загрузите все материалы на Google или Яндекс Диск.
                              </li><br />



                              <li>
                                Кликните правой кнопкой мыши по загруженным материалам и нажмите на кнопку поделиться и скопируйте ссылку.
                              </li><br />
                              <li>
                                Вставьте скопированную ссылку в поле ввода.
                              </li><br />
                            </ul>

                          </div>

                        </div>
                      </div>
                      <div className={s.modal_footer}>

                      </div>
                    </div>
                  </div>

                )
                
                : props.type === "position"
                ? (

                  <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                    <div class={s.modal_content} id={s.position} >
                      <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                      <div className={s.modal_body}>



                        <div className={s.body_section} id={s.yandex_section}  >

                          <div className={s.head_remove}>
                            <p>
                              Позиция добавлена
                            </p>
                            

                          </div>

                        </div>
                      </div>
                      <div className={s.modal_footer}>

                      </div>
                    </div>
                  </div>

                )
                : props.type === "cabinets"
                  ? (

                    <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                      <div class={s.modal_content}>
                        <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                        <div className={s.modal_body}>



                          <div className={s.body_section} id={s.yandex_section}  >

                            <div className={s.head_remove}>
                              <p>Для продвижения вашего интернет ресурса нам будут нужны доступы к вашим рекламным кабинетам, добавьте кабинет площадки, где вы планируете продвигаться, для этого нажмите на "+".</p>
                              <p>Доступ к кабинетам команде ChaseBox необходим исключительно в целях продвижения ваших ресурсов, и для того, чтобы делать это эффективно, мы запрашиваем доступ "Администратора".</p>
                            </div>

                          </div>
                        </div>
                        <div className={s.modal_footer}>

                        </div>
                      </div>
                    </div>

                  )
                  : props.type === "ref"
                    ? (

                      <div ref={s.myModal} class={`${s.modal} ${s.inst}`} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                        <div class={s.modal_content}>
                          <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                          <div className={s.modal_body}>



                            <div className={s.body_section} id={s.yandex_section}  >

                              <div className={s.head_remove}>
                                <div className={s.logo}>
                                  <img src={black} alt="" />
                                  <h3>Инструкция по использованию платформы</h3>
                                </div>
                                <div className={s.list}>
                                  <div className={s.elem}>
                                    <div className={s.img}>
                                      <img src={box1} style={{ width: "33em" }} alt="" />
                                    </div>
                                    <div className={s.txt}>
                                      <div class={s.num} >I.</div>

                                      Для начала вы можете добавить рекламные кабинеты. Какие кабинеты вам нужно добавить зависит от того, какое продвижение вы будете заказывать. Добавить нужные кабинеты вы так же сможете во время оформления заказа.
                                    </div>
                                  </div>
                                  <div className={`${s.elem} ${s.reverse}`}>

                                    <div className={s.txt}>
                                      <div class={s.num}>II.</div>

                                      В левом меню раскройте нужную секцию и выберите вкладку с интересующим вас способом
                                    </div>
                                    <div className={s.img}>
                                      <img src={box2} alt="" />
                                    </div>
                                  </div>
                                  <div className={s.elem}>
                                    <div className={s.img}>
                                      <img src={box3} style={{ width: "33em" }} alt="" />
                                    </div>
                                    <div className={s.txt}>
                                      <div class={s.num} >III.</div>

                                      Заполните поля и нажмите кнопку "Подтвердить"
                                    </div>
                                  </div>
                                  <div className={`${s.elem} ${s.reverse}`}>


                                    <div className={s.txt}>
                                      <div class={s.num}>IV.</div>

                                      После того, как вы добавили все методы продвижения, нажмите кнопку "Отправить" на таблице "Заказы"
                                    </div>
                                    <div className={s.img}>
                                      <img src={box4} style={{ width: "33em" }} alt="" />
                                    </div>
                                  </div>
                                  <div className={s.elem}>
                                    <div className={s.img}>
                                      <img src={box5} style={{ width: "20em" }} alt="" />
                                      <img src={box6} style={{ width: "20em" }} alt="" />

                                    </div>
                                    <div className={s.txt}>
                                      <div class={s.num} >V.</div>

                                      Выберите кабинеты или добавьте недостающие
                                    </div>
                                  </div>
                                  <div className={`${s.elem} ${s.reverse}`}>


                                    <div className={s.txt}>
                                      <div class={s.num}>VI.</div>

                                      Когда вы убедились, что все введенные данные верны, нажмите кнопку "Подтвердить". Теперь ваш заказ находится в обработке, специалисты уже приступили к работе. Вы можете следить за прогрессом в рекламном кабинете площадок, где осуществляется продвижение. Если у вас возникли трудности или вопросы, вы можете перейти в чат со специалистом во вкладке "Главная" в левом меню.
                                    </div>
                                    <div className={s.img}>
                                      <img src={box7} style={{ width: "33em" }} alt="" />
                                    </div>
                                  </div>
                                 <div className={s.textcenter}> <button className={s.submitButton} onClick={close}>Начать продвижение</button></div>
                                </div>
                              </div>

                            </div>
                          </div>
                          <div className={s.modal_footer}>

                          </div>
                        </div>
                      </div>

                    )
                    : props.type === "traffic"
                      ? (

                        <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                          <div class={s.modal_content}>
                            <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                            <div className={s.modal_body}>



                              <div className={s.body_section} id={s.yandex_section}  >

                                <div className={s.head_remove}>
                                  <p>
                                    <b>Онлайн трафик</b> – это продвижение вашего товара оптимальными способами по нашему усмотрению
                                  <br />
                                    <br />
                                  Продвижение рассчитано на фиксированное количество единиц товара. У вас должна быть отдельная страница вашего товара в социальной сети, интернет магазине или отдельный сайт с товаром(лендинг).

                                  </p>
                                </div>

                              </div>
                            </div>
                            <div className={s.modal_footer}>

                            </div>
                          </div>
                        </div>

                      )
                      : props.type === "email"
                        ? (

                          <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                            <div class={s.modal_content}>
                              <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                              <div className={s.modal_body}>



                                <div className={s.body_section} id={s.yandex_section}  >

                                  <div className={s.head_remove}>
                                    <p>
                                      <b>Email-рассылка</b> – это автоматизированная отправка писем по электронной почте определенной группе адресатов. Такой вид коммуникации – важная часть любой маркетинговой кампании, так как позволяет построить доверительные отношения с клиентами и повысить конверсию продаж.
                                      <br />
                                      <br />

                                      <b>Email-рассылка как инструмент интернет-маркетинга</b>
                                      <br />
                                      <br />

                                      Грамотное создание электронной рассылки поможет вам решить сразу несколько задач:
                                      <br />

                                      <ul>

                                        <li>проинформировать подписчика с помощью рассылки о появлении новых товаров, услуг, обучающих программ, публикаций на сайте;</li>
                                        <li>наладить обратную связь с клиентом посредством «живого» общения;</li>
                                        <li>сформировать целевую аудиторию, так как ваш Интернет-ресурс будут посещать только заинтересованные пользователи;</li>
                                        <li>ненавязчиво прорекламировать рассылкой свой товар или услугу;</li>
                                        <li>увеличить объем продаж;</li>
                                        <li>повысить количество повторных и предварительных заказов.</li>
                                      </ul>
                                      <br />

                                      Таким образом, email-рассылка способна дать сильнейший импульс к формированию лояльности к бренду и развитию бизнеса.
                              </p>
                                  </div>

                                </div>
                              </div>
                              <div className={s.modal_footer}>

                              </div>
                            </div>
                          </div>

                        )
                        : props.type === "socials"
                          ? (

                            <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                              <div class={s.modal_content}>
                                <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                                <div className={s.modal_body}>



                                  <div className={s.body_section} id={s.yandex_section}  >

                                    <div className={s.head_remove}>
                                      <p>
                                        <b>Рассылка в социальных сетях</b> - на сегодняшний день это один из самых популярных способов налаживания коммуникации с потенциальными потребителями и важный элемент маркетинговой стратегии любой компании. Рассылка в социальных сетях позволяет общаться с постоянными клиентами, а также устанавливать контакт с холодной аудиторией и пробуждать ее интерес к продукту.
                                      <br />
                                        <br />

                                        <b>Зачем делать рассылку в социальных сетях?</b>
                                        <br />
                                        <br />


	Предприниматели не всегда лояльны к рассылкам, так как боятся неуместными сообщениями вызвать раздражение у потенциальных потребителей. Доля истины в такой точке зрения есть. Однако при профессиональном подходе данный способ коммуникации может принести бизнесу пользу, не навредив при этом имиджу компании и не вызвав у целевой аудитории негативных эмоций. Ведь социальные сети без рассылок уже никто не может себе представить.
                                      <br />
                                        <br />


                                        <ul>

                                          <li><b> Кому нужны рассылки?</b><br />


	Всем, кто продаёт через онлайн-сообщества товары или услуги. Главное условие – чтобы у бизнеса, крупного или совсем небольшого, была своя группа в социальных сетях и, желательно, сайт.
                                          </li>
                                          <li><b> Для чего использовать рассылки?</b><br />


	В ленте сообщений посты могут затеряться. В любом онлайн-сообществе так много публикаций, что пользователи зачастую не успевают их просмотреть.

                                          </li>
                                        </ul>
                                        <br />
                                        <br />

	Так что рассылка личных сообщений в социальных сетях – единственная возможность привлечь внимание целевой аудитории и донести до нее информацию о своем товаре или услуге.

                                  <br />
                                        <br />

	Социальные сети и рассылки, наверное, неотделимы друг от друга. Никто не помнит тех времен, когда пользователи получали сообщения только от друзей и знакомых. Однако из-за мощного информационного шума, который окружает каждого человека, непросто достучаться до сознания и еще более сложно сделать это тактично, не вызывая раздражения и не нарушая личные границы пользователей, этим и занимаются специалисты по рассылкам в ChaseBox.
                              </p>
                                    </div>

                                  </div>
                                </div>
                                <div className={s.modal_footer}>

                                </div>
                              </div>
                            </div>

                          )
                          : props.type === "messengers"
                            ? (

                              <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                                <div class={s.modal_content}>
                                  <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                                  <div className={s.modal_body}>



                                    <div className={s.body_section} id={s.yandex_section}  >

                                      <div className={s.head_remove}>
                                        <p>
                                          <b>Рассылка сообщений в мессенджерах</b> – это новый канал директ-маркетинга для общения с аудиторией. Мультимедийные возможности, низкая стоимость и высокий отклик клиентов выделяют его на фоне других видов рассылок.
                                      <br />
                                          <br />
                                      Telegram, WhatsApp и Viber по своему охвату сопоставимы с традиционными СМС рассылками. При этом, рекламодатели работающие с массовой рассылкой в мессенджерах не сталкиваются с ограничениями со стороны сотовых операторов.
                                      <br />
                                          <br />

                                          <b>Преимущества рассылки в мессенджерах:</b>
                                          <br />
                                          <br />

                                          <ul>

                                            <li>Название компании в поле отправитель</li>
                                            <li>Добавление простых кнопочных ботов</li>
                                            <li>Размер сообщения не ограничен</li>
                                            <li>Логотип компании - аватар</li>
                                            <li>От регистрации, до начала рассылки 5 минут</li>
                                            <li>Поддержка ответов. Полноценные диалоги</li>
                                            <li>Размер сообщения до 1000 знаков</li>
                                            <li>Добавление кнопки звонка или перехода на сайт</li>
                                            <li>Добавление картинок в рассылку</li>
                                            <li>Моментальная отправка сообщения</li>
                                            <li>Простая API интеграция</li>
                                            <li>75% пользователей смартфонов установили мессенджер</li>
                                            <li>85% сообщений открывают в первые 10 минут</li>
                                            <li>от 40% пользователей отвечают на рассылку в мессенджере</li>
                                            <li>63,6 млн. Россиян каждый месяц пользуются мессенджерами</li>


                                          </ul>
                                          <br />
                                          <br />
                                      Рассылка в мессенджерах очень перспективное направление в маркетинге и имеет много приемущществ на фоне прочих методов продвижения

                              </p>
                                      </div>

                                    </div>
                                  </div>
                                  <div className={s.modal_footer}>

                                  </div>
                                </div>
                              </div>

                            )
                            : props.type === "targeting"
                              ? (

                                <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                                  <div class={s.modal_content}>
                                    <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                                    <div className={s.modal_body}>



                                      <div className={s.body_section} id={s.yandex_section}  >

                                        <div className={s.head_remove}>
                                          <p>
                                            <b>Таргетированная реклама</b> – это объявления различных типов (текстовые, фото, видео) в соцсетях. Особенность таргетированной рекламы в том, что она показывается пользователям, которые соответствуют заданным характеристикам. Это могут быть пол, возраст, географическое положение, интересы, поведение.
                                            <br />
                                            Таргетированная реклама может побудить пользователя перейти по ссылке на сайт, совершить покупку, оставить контактные данные и т.д.
                                      <br />
                                            <br />

                                            <b>Преимущества таргетированной рекламы</b>
                                            <br />
                                            <br />
                                            <ul>

                                              <li>Показывается только целевой аудитории.</li>
                                              <li>Возможность персонализировать объявления.</li>
                                              <li>Можно получать лиды, даже если нет сайта (или он плохого качества). </li>




                                            </ul>
                                            <br />
                                            <br />

                                            <b>Мифы о таргетированной рекламе</b>
                                            <br />
                                            <br />
                                            <ul>

                                              <li><b> Миф: наша аудитория не сидит в соцсетях</b><br />
                                              Ежемесячная аудитория ВКонтакте в России составляет 69,1 млн человек, Instagram — 53,8 млн человек, Facebook — 53,5 млн человек, Одноклассников — 49,4 млн человек (по данным Mediascope / ТАСС, Sostav). Аудитории не целиком дублируют друг друга. То есть любой бизнес может найти релевантную аудиторию по крайней мере в одной из соцсетей.

                                        </li>
                                              <li><b> Миф: в соцсетях сидят одни школьники</b><br />
                                              На самом деле в основных соцсетях больше как раз взрослой платежеспособной аудитории. Наибольшая часть (40%) аудитории ВКонтакте — люди в возрасте от 25 до 34 лет; 38% пользователей Instagram — люди в возрасте 18-24 лет; 28% пользователей Facebook — люди в возрасте от 35 до 44 лет (данные ВЦИОМ).


                                        </li>
                                              <li><b> Миф: реклама в соцсетях не подходит для некоторых сфер, особенно В2В</b><br />
                                        Те, кто работает в В2В, так же, как и все остальные люди, сидят в соцсетях. Возможно, на них будет сложнее таргетироваться и стоимость лида будет выше. Но некоторые В2В-продукты проще продавать как раз в соцсетях: например, стоимость получения заявки на медицинскую франшизу в соцсетях ниже, чем в контексте (подробнее об этом читайте в нашем кейсе).


                                        </li>



                                            </ul>
                                            <br />
                                            <br />
                                            Таргетированная реклама в социальных сетях подойдет любому бизнесу. Особенно будет эффективна для тематик, в которых возможны спонтанные покупки. Также таргетированная реклама поможет выстроить двухшаговые продажи (когда вначале предлагается лид-магнит, например, бесплатный вебинар или мероприятие).
                              </p>
                                        </div>

                                      </div>
                                    </div>
                                    <div className={s.modal_footer}>

                                    </div>
                                  </div>
                                </div>

                              )
                              : props.type === "seo"
                                ? (

                                  <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                                    <div class={s.modal_content}>
                                      <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                                      <div className={s.modal_body}>



                                        <div className={s.body_section} id={s.yandex_section}  >

                                          <div className={s.head_remove}>
                                            <p>
                                              <b>Поисковая оптимизация сайта или SEO</b> – это комплекс мер для повышения позиций сайта в результатах выдачи поисковых систем по заранее отобранным запросам.
                                      <br />
                                              <br />

                                              <b>Зачем Вашей компании нужна SEO оптимизация?</b>
                                              <br />
                                              <br />
                                      Согласно статистике, численность интернет-пользователей растет с каждым годом, сегодня уже более трети россиян пользуются интернетом. Причем именно эта аудитория очень привлекательна для бизнеса, т.к. она обладает высокой платежеспособностью. Задумайтесь, тысячи, а, возможно, десятки и сотни тысяч людей ежедневно ищут Ваши товары, а находят товары конкурентов! И все потому, что более расторопные конкуренты уже заняли самые лучшие места в выдаче поисковых систем. Вы тоже можете занять эти «места под солнцем» - для этого нужно начать поисковую оптимизацию сайта.
                                      <br />
                                              <br />
                                              <b>Почему сайту необходимо быть именно на первых местах в поисковых системах?</b>
                                              <br />
                                              <br />
                                      Работает стереотип: если фирма расположена в самом центре города, то эта фирма процветает. Аналогично этот стереотип работает и при SEO продвижении. Сайты, находящиеся в ТОПе – это, как правило, наиболее уважаемые сайты. Хорошее месторасположение привлекает гораздо большее число посетителей. На сайты, расположенные на первых десяти позициях (ТОП-10, т.е. первая страница выдачи), обратят внимание более 95-ти (!) процентов пользователей.
                                      <br />
                                              <br />
                                              <b>Почему не продвигаться в поисковых системах вредно?</b>
                                              <br />
                                              <br />
                                      Большинство станет искать сведения в интернете. А если сайт не SEO-оптимизирован, то пользователь, скорее всего, просто не найдет информацию о компании в интернете! Сегодняшний интернет-пользователь крайне избалован и не привык тратить много времени на поиск. Не найдет Вас – обратится к конкурентам, поиск информации о которых окажется проще и быстрее. Согласитесь, очень неприятно терять клиентов, которые уже хотели обратиться к Вам, но просто не смогли этого сделать.
                                      <br />
                                              <br />
                                      Вполне очевидно, что для большинства компаний SEO оптимизация сайта – это необходимый и эффективный маркетинговый инструмент.
                              </p>
                                          </div>

                                        </div>
                                      </div>
                                      <div className={s.modal_footer}>

                                      </div>
                                    </div>
                                  </div>

                                )
                                : props.type === "context"
                                  ? (

                                    <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                                      <div class={s.modal_content}>
                                        <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                                        <div className={s.modal_body}>



                                          <div className={s.body_section} id={s.yandex_section}  >

                                            <div className={s.head_remove}>
                                              <p>
                                                <b>Контекстная реклама</b> – это различные объявления (текстовые, графические, видео), которые показываются пользователям в соответствии с их поисковыми запросами, интересами или поведением в интернете. Контекстная реклама показывается в поисковых системах, на различных сайтах, в мобильных приложениях и на других ресурсах.
                                                <br />
                                                <br />
                                                <b>Особенности Яндекс.Директа и Google Ads</b>
                                                <br />
                                                <br />
                                                <ul>

                                                  <li>В обеих системах можно размещать как поисковую рекламу (основа — поисковые запросы пользователей), так и рекламу в сетях (основа — интересы пользователей и их поведение в интернете).</li>
                                                  <li>Особенность поиска Яндекса — большой охват интернет-аудитории в России. По данным Яндекс.Радара на ноябрь 2019 года, дневная аудитория Яндекса — более 50 миллионов пользователей.</li>
                                                  <li>Google, даже несмотря на наличие мощного конкурента в виде Яндекс.Директа, остается одним из главных каналов по привлечению платного трафика в русскоязычном интернет-пространстве. Важный фактор — распространение смартфонов на платформе Android, поиск от Google в которых установлен по умолчанию. </li>




                                                </ul>
                                                <br />
                                                <br />
                                                <b>Преимущества контекстной рекламы</b>
                                                <br />
                                                <br />
                                                <ul>

                                                  <li>Гибкость настроек рекламной кампании и различные возможности для поиска своей целевой аудитории.</li>
                                                  <li>Бесплатные системы веб-аналитики (Яндекс.Метрика и Google Analytics) позволяют анализировать кампании, чтобы четко и ясно понимать, окупаются ли вложения в рекламу и какую прибыль они приносят.</li>
                                                  <li>Быстрая отдача вложенных инвестиций. Действие контекстной рекламы начинается сразу после ее размещения. Но только в том случае, если вы не пустите рекламу на самотек, а будете регулярно отслеживать результаты и оптимизировать кампании на основе статистики. </li>




                                                </ul>
                                                <br />
                                                <br />
                                            Контекстная реклама – интересный, полезный инструмент, который требует точной грамотной настройки, поэтому лучше доверить это опытным специалистам. Заказать контекстную рекламу Яндекс.Директ или Google AdWords можно на нашем сайте.
                              </p>
                                            </div>

                                          </div>
                                        </div>
                                        <div className={s.modal_footer}>

                                        </div>
                                      </div>
                                    </div>

                                  )
                                  : props.type === "instagram"
                                    ? (

                                      <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                                        <div class={s.modal_content}>
                                          <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                                          <div className={s.modal_body}>



                                            <div className={s.body_section} id={s.yandex_section}  >

                                              <div className={s.head_remove}>
                                                <p>
                                                  <b>Instagram</b> – это не только одна из наиболее популярных социальных сетей, но и эффективная площадка для рекламы. Кампании создаются и настраиваются через инструмент ее материнской компании Facebook — Ads Manager.
                                      <br />
                                                  <br />

                                                  <b>Почему в Instagram вы точно найдете свою аудиторию</b>
                                                  <br />
                                                  <br />

                                                  <ul>

                                                    <li>Если не говорить обо всем мире, то только в России подписчиков в Instagram  сегодня 37 миллионов. За 2 года этот показатель увеличился в 2,5 раза.</li>
                                                    <li>Раньше наша аудитория соцсети состояла в основном из жителей двух столиц. Сейчас растет количество пользователей в регионах. Если региональные пользователи – ваша ЦА! Поторопитесь представить себя в Инстаграм.</li>
                                                    <li>Выросло и количество пользователей старше 35 лет.</li>
                                                    <li>В Instagram стало больше мужчин – поэтому в 2019 году рекламу в Инстаграм можно смело делать и тем, кто предлагает “мужские” продукты.</li>
                                                  </ul>
                                                  <br />
                                                  <br />
                                                  <b>Таргетированная реклама в ленте</b>
                                                  <br />
                                                  <br />
                                      Она маскируется под обычный пост. Иногда вы можете так ею заинтересоваться, что не сразу понимаете даже, что это реклама. Если это произошло – таргетинг настроен очень хорошо – вы и есть целевая аудитория.
                                      <br />
                                                  <br />
                                                  <b>Реклама в сторис</b>
                                                  <br />
                                                  <br />
                                      Появляется, когда вы просматриваете истории людей, на которых подписаны. Сюда можно встроить картинку или видео. Стоит дешевле, чем реклама в ленте.
                                      <br />
                                                  <br />
                                      Реклама в Instagram – инструмент, которым можно и нужно пользоваться, ведь у Facebook громадное количество данных о пользователях соцсети.
                              </p>
                                              </div>

                                            </div>
                                          </div>
                                          <div className={s.modal_footer}>

                                          </div>
                                        </div>
                                      </div>

                                    )
                                    : props.type === "vkontakte"
                                      ? (

                                        <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                                          <div class={s.modal_content}>
                                            <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                                            <div className={s.modal_body}>



                                              <div className={s.body_section} id={s.yandex_section}  >

                                                <div className={s.head_remove}>
                                                  <p>
                                                    <b>ВКонтакте</b> – крупнейшая социальная сеть в СНГ с очень развитой рекламной сетью
                                      <br />
                                                    <br />

                                                    <b>Почему в Instagram вы точно найдете свою аудиторию</b>
                                                    <br />
                                                    <br />

                                                    <ul>

                                                      <li>Если не говорить обо всем мире, то только в России подписчиков в Instagram  сегодня 37 миллионов. За 2 года этот показатель увеличился в 2,5 раза.</li>
                                                      <li>Раньше наша аудитория соцсети состояла в основном из жителей двух столиц. Сейчас растет количество пользователей в регионах. Если региональные пользователи – ваша ЦА! Поторопитесь представить себя в Инстаграм.</li>
                                                      <li>Выросло и количество пользователей старше 35 лет.</li>
                                                      <li>В Instagram стало больше мужчин – поэтому в 2019 году рекламу в Инстаграм можно смело делать и тем, кто предлагает “мужские” продукты.</li>
                                                    </ul>
                                                    <br />
                                                    <br />
                                                    <b>Таргетированная реклама в ленте</b>
                                                    <br />
                                                    <br />
                                      Она маскируется под обычный пост. Иногда вы можете так ею заинтересоваться, что не сразу понимаете даже, что это реклама. Если это произошло – таргетинг настроен очень хорошо – вы и есть целевая аудитория.
                                      <br />
                                                    <br />
                                                    <b>Реклама в сторис</b>
                                                    <br />
                                                    <br />
                                      Появляется, когда вы просматриваете истории людей, на которых подписаны. Сюда можно встроить картинку или видео. Стоит дешевле, чем реклама в ленте.
                                      <br />
                                                    <br />
                                      Реклама в Instagram – инструмент, которым можно и нужно пользоваться, ведь у Facebook громадное количество данных о пользователях соцсети.
                              </p>
                                                </div>

                                              </div>
                                            </div>
                                            <div className={s.modal_footer}>

                                            </div>
                                          </div>
                                        </div>

                                      )
                                      : props.type === "odnoklassniki"
                                        ? (

                                          <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                                            <div class={s.modal_content}>
                                              <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                                              <div className={s.modal_body}>



                                                <div className={s.body_section} id={s.yandex_section}  >

                                                  <div className={s.head_remove}>
                                                    <p>Одноклассники</p>
                                                  </div>

                                                </div>
                                              </div>
                                              <div className={s.modal_footer}>

                                              </div>
                                            </div>
                                          </div>

                                        )
                                        : props.type === "telegram"
                                          ? (

                                            <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                                              <div class={s.modal_content}>
                                                <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                                                <div className={s.modal_body}>



                                                  <div className={s.body_section} id={s.yandex_section}  >

                                                    <div className={s.head_remove}>
                                                      <p>Телеграм</p>
                                                    </div>

                                                  </div>
                                                </div>
                                                <div className={s.modal_footer}>

                                                </div>
                                              </div>
                                            </div>

                                          )
                                          : props.type === "fb"
                                            ? (

                                              <div ref={s.myModal} class={s.modal} style={{ display: props.showRemoveModal ? 'block' : 'none' }}>
                                                <div class={s.modal_content}>
                                                  <div className={s.header_modal}> <div className={s.header_modal_text}><span class={s.close} onClick={close}>&times;</span></div></div>

                                                  <div className={s.modal_body}>



                                                    <div className={s.body_section} id={s.yandex_section}  >

                                                      <div className={s.head_remove}>
                                                        <p>Facebook</p>
                                                      </div>

                                                    </div>
                                                  </div>
                                                  <div className={s.modal_footer}>

                                                  </div>
                                                </div>
                                              </div>

                                            )
                                            : (
                                              <></>
                                            )
  );
}

export default Info;