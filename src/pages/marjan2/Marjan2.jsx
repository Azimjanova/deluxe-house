import React from 'react'
import './marjan.css'

const Marjan2 = () => {
    const icon = 'https://s3-alpha-sig.figma.com/img/ae75/ef76/467a1280cbb98db85ab1358fdb8c5349?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TUD6TmViXQV~QNsVtHd6DjBplFYO4a4To2xDLmdlAt4yod775eJ5gsJTlZ~TB5sGs-F3BNZPLUW2wfM1RHoqwNCpUYH5ulcNnsCQEq1ARe~ZvtEmHzuu43xbF2GMS7-V0Zp2vByjHm64Dz42jp9T21w6X~LzjV1ISnUYsZgb~yDX13ixdsA5VVLtRcIxWoHd~GEuMbh61IWa9lPHQMikhlwEJxdFBWPVhat4vriLw77jAjLsmHK9tTO5MvzIQqshDJQmtY0lZnSUJA7mVl6G5K2W7z81kycIUK2fHxfvwO~Gxqwya30xCfk4spPXoOrF1NvskqOHxcie9nt5gxRDmA__'
    return (
        <div className={"marjan overflow-hidden"}>
            <div className={"container"}>
                <img src={icon} className={'icon-marjan'} alt=""/>
            </div>
            <div className={'marjanPage'}></div>
            <div className={"app-container"}>
                <div className={"text-marjan"}>
                    <h1 className={'marjanH1'}> <span style={{fontSize: '100px',marginLeft: '20px'}}>10</span> <span style={{fontWeight: 'bold', }}>лет</span> <br/>
                      <span>успешной работы!</span></h1>
                    <p>Наша студия предлагает свои услуги на рынке дизайна интерьеров Астаны с 2011 года. За этот период
                        нами было создано и реализовано уже более 200 проектов.
                    </p>
                    <p>У нас широкий ассортимент дизайн-услуг, и мы работаем с любыми помещениями, будь это квартира,
                        коттедж, Торговый Центр, бутик, SPA, сауны, магазины, рестораны, кафе, бизнес-центры или офисы.
                    </p>
                    <p>Основное наше направление - это разработка проектов дизайна интерьера жилых и общественных
                        помещений. С нашими работами Вы можете ознакомиться здесь.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Marjan2;