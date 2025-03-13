import React from 'react';
import studioImg2 from '/src/assets/studioImg2.png'
import studioImg from '/src/assets/studioImg.png'
import l10et from '/src/assets/10let.svg'
import l200et from '/src/assets/200let.svg'
import './studioDyzain.css'
import studioLeft from '/src/assets/slideLeft.svg'
import studioRight from '/src/assets/sliderRight.svg'

const StudioDyzine = () => {
    return (
        <div className={'container'} style={{marginTop: '100px',marginBottom: '100px'}}>
            <div className={'studio-h1'}>
                <h1 style={{color: 'white'}}>Лучшие решения, актуальный дизайн, непревзойденное качество — все это о
                    нашей студии</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className={'studioImgs'}>
                    <div className={'div1'}></div>
                    <img src={studioImg} alt=""/>
                    <img src={studioImg2} alt=""/>
                    <div className={'div2'}></div>
                </div>
                <div className={'studioText'}>
                    <p>С 2011 года было нами было разработано уже множество успешных проектов. Мы проектируем подробные
                        проекты дизайна интерьеров помещений любой сложности и не боимся сложных задач.
                        Дизайн-проект может включать в себя перепланировку, рабочие чертежи, 3D-визуализацию, а также
                        дополнителнительные услуги: авторский надзор, подбор материалов, смету и другое на Ваше личное
                        усмотрение.
                    </p>
                    <p>Мы работаем с помещениями любого типа и назначения: квартиры, коттедж, загородный дом, кафе или
                        ресторан, офис, гостиница или бизнес-центр, бутик и многое другое.
                    </p>
                    <p>Мы не упустим ни один квадратный сантиметр, учтем все Ваши пожелания, добавим свои свежие идеи,
                        познакомим с секретами интерьерных решений, скоординируем в ремонте и поможем создать в Вашем
                        помещении утонченную роскошь!</p>
                    <div className={'studioIcons'}>
                        <img src={l10et} alt=""/>
                        <img src={l200et} alt=""/>
                        {/*<img src={''} alt=""/>*/}
                    </div>
                    <div className={'studioIcons2'}
                         style={{
                             display: 'flex',
                             gap: '70px',
                             justifyContent: 'space-between',

                         }}>
                        <div style={{display: 'flex'}}>
                            <img src={studioLeft} alt="" style={{
                                filter: 'brightness(0) invert(1)'
                            }}/>
                            <img src={studioRight} alt="" style={{
                                filter: 'brightness(0) invert(1)',
                                fontWeight: '300',
                            }}/>
                        </div>
                        <p style={{fontFamily: '"Segoe Script", cursive', textAlign: 'center',margin: 'auto'}}>Мы создаем
                            прекрасное!</p>
                        <img style={{
                            width: '100px', color: 'white', filter: 'brightness(0) invert(1)'
                        }}
                             src='https://s3-alpha-sig.figma.com/img/0213/f05f/58b5cbcdb7aac151df59ab871174530a?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BPs6LWc8-1nDw9FccSaocZGt7-TNSwSOihYgFem83bPv8pd3CqFuUuN~ghN4ScCkq-iFIkmmUWW0peOj6ocy0hz13JEAolVMApUp-usX24GDPuDXWE00j0iaXASXXEUb-3mh58CpkhyARD6AY91Qt7jJbfiw7jatttpS7IJZNQO6xbIGQ6aAM2DpaYvLRFquG4wDXzco5HwciGCMnBStyTypTtJz5lxApxljjB0kRvHn52yTaT0BtJjyIfsrM7Plu5cbAa6BCKW7~vhaHgs1mamhQB~vcec~odsvI9YoM4vrhFWVtT9vo8SvBdUCy72PVjjaCl8xmADlUXpoAXqAHA__'
                             alt=""/>
                    </div>
                </div>
            </div>
            <div className={'buttons'}>
                <button style={{padding: '23px 93px',marginLeft: '-20px'}}>О нас</button>
                <button style={{padding: '23px 73px'}}>Наши услуги</button>
            </div>
        </div>
    );
};

export default StudioDyzine;