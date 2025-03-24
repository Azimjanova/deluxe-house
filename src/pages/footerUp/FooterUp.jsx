import React from 'react';
import footerUpIcon from '../../assets/footerUpIcon.svg';  // Путь относительно текущего файла

const FooterUp = () => {
    return (
        <div className={'container'}>
            <div className={'text-white text-right mt-[100px]'} style={{
                fontSize: '20px',
            }}>
                Наши <span style={{
                fontSize: '40px',
            }}>уважаемые партнеры, <br/></span> которые остались <span style={{
                fontSize: '40px',
            }}>довольны <br/></span>  сотрудничеством с нами
            </div>
            <img src={footerUpIcon} alt=""/>
        </div>
    );
};

export default FooterUp;