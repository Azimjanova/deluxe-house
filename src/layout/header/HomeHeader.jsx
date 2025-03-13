import React from 'react';
import phoneIcon from "../../assets/phoneIcon.svg";
import  Loco2 from "../../assets/loco2.png";
import './homeHeader.css'
import imgHeader from "../../assets/img_1.png";


const HomeHeader = () => {

    return (
        <div>
            <div className={'home-header'}>
                <div style={{width:'1170px',background: 'black'}} className={'home-header'}>
                    <div className={'textDelux'}>
                        <p style={{
                            width: '180px',
                            fontSize: '20px',
                            fontFamily: 'Poppins, sans-serif',
                            background: 'linear-gradient(to right, rgba(224, 222, 222, 1), rgba(161, 160, 160, 1))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block', // Чтобы фон не растягивался
                        }}>
                            DELUXE HOUSE
                            design studio
                        </p>
                    </div>
                    <div className={'home-content'}>
                        <a href="">Услуги</a>
                        <a href="">Ремонт</a>
                        <a href="">Портфолио</a>
                        <a href="/about">О нас</a>
                        <a href="">Статьи</a>
                        <a href="">Контакты</a>
                        <div className={'cursor'}></div>
                    </div>
                    <div className={'numberIcon'}>
                        <img src={phoneIcon} alt=""/>
                        <p>8 (700) 300-03-40</p>
                    </div>
                </div>

            </div>
            <div className={'container'} style={{}}>
                <img src={Loco2} alt=""/>
                <div className="home-header-left">
                    <p>СТУДИЯ ДИЗАЙНА ИНТЕРЬЕРА</p>
                    <div className={'underline'}></div>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
                <div>
                    <div>
                        <img className={'imgHeader'} src={imgHeader} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeHeader;