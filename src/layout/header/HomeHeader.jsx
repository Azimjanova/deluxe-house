import React, { useState } from 'react';
import phoneIcon from "../../assets/phoneIcon.svg";
import Loco2 from "../../assets/Loco2.png";
import './homeHeader.css';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="HomeHeader mx-auto max-w-[1940px] sticky top-0 z-[9999] w-full bg-black">
            <div className="app-container">
                <div style={{ background: 'black' }} className="home-header">
                    <div className="textDelux flex gap-2">
                        <img src={Loco2} alt="" style={{ width: '70px' }} />
                        <Link to="/">
                            <p
                                style={{
                                    width: '180px',
                                    fontSize: '20px',
                                    fontFamily: 'Poppins, sans-serif',
                                    background: 'linear-gradient(to right, rgba(224, 222, 222, 1), rgba(161, 160, 160, 1))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    display: 'inline-block',
                                }}
                            >
                                DELUXE HOUSE design studio
                            </p>
                        </Link>
                    </div>

                    {/* Бургер-меню для мобильных */}
                    <div className="burger-menu" onClick={toggleMenu}>
                        <div className={`burger-icon ${isMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    {/* Навигационное меню */}
                    <div className={`home-content ${isMenuOpen ? 'open' : ''}`}>
                        <Link to="/services">Услуги</Link>
                        <Link to="/cards">Ремонт</Link>
                        <details style={{ position: 'relative', display: 'inline-block' }}>
                            <summary style={{
                                cursor: 'pointer',
                                background: 'black',
                                color: 'white',
                                borderRadius: '5px',
                                fontSize: '16px',
                                outline: 'none'
                            }}>
                                Портфолио
                            </summary>
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: '0',
                                background: 'white',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                borderRadius: '5px',
                                overflow: 'hidden',
                                zIndex: 1000,
                                minWidth: '150px',
                            }}>
                                <Link to="/comercial" style={{
                                    display: 'block',
                                    padding: '10px',
                                    textDecoration: 'none',
                                    color: 'black',
                                    fontSize: '14px',
                                    transition: 'background 0.3s ease',
                                    backgroundColor: 'white',
                                }}
                                      onMouseEnter={(e) => e.target.style.backgroundColor = 'grey'}
                                      onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                                >
                                    Коммерческий
                                </Link>
                                <Link to="/jilye" style={{
                                    display: 'block',
                                    padding: '10px',
                                    textDecoration: 'none',
                                    color: 'black',
                                    fontSize: '14px',
                                    transition: 'background 0.3s ease',
                                    backgroundColor: 'white',
                                }}
                                      onMouseEnter={(e) => e.target.style.backgroundColor = 'grey'}
                                      onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                                >
                                    Жилые
                                </Link>
                            </div>
                        </details>
                        <a href="/">О нас</a>
                        <a href="">Статьи</a>
                        <a href="">Контакты</a>
                    </div>

                    <div className="numberIcon">
                        <a href="tel:+77003000340">
                            <img src={phoneIcon} alt="Phone Icon" />
                        </a>
                        <p>8 (700) 300-03-40</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;