import React, { useEffect, useState } from 'react';
import imgHeader from "../../assets/img1.png";
import './headerDown.css';
import { FaInstagram, FaPinterestP } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoVk } from "react-icons/io";
import { supabase } from "../../supabase/index.js";

const HeaderDown = () => {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedTarif, setSelectedTarif] = useState(null);
    const [loading, setLoading] = useState(false);
    const [klients, setKlients] = useState([]);
    const [showClientsModal, setShowClientsModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedTarif(null);
        setName('');
        setPhone('');
    };

    const handleSubmit = async () => {
        if (!name.trim() || !phone.trim()) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        if (!/^\+?[0-9]{10,15}$/.test(phone)) {
            alert('Введите корректный номер телефона');
            return;
        }

        setLoading(true);

        const { error } = await supabase
            .from('klients')
            .insert([{ name, phone }]);

        setLoading(false);

        if (error) {
            console.error("Ошибка при отправке данных:", error);
            alert("Ошибка при отправке данных, попробуйте снова.");
        } else {
            alert("Заявка успешно отправлена!");
            handleCloseModal();
            fetchKlients();
        }
    };

    const fetchKlients = async () => {
        let { data: klientsData, error: klientsError } = await supabase.from('klients').select('*');
        if (klientsError) {
            console.error("Ошибка при загрузке клиентов:", klientsError);
        } else {
            setKlients(klientsData || []);
        }
    };

    useEffect(() => {
        fetchKlients();
    }, []);

    const handleDeleteClient = async (id) => {
        const { error } = await supabase.from('klients').delete().eq('id', id);

        if (error) {
            console.error("Ошибка при удалении клиента:", error);
            alert("Ошибка при удалении, попробуйте снова.");
        } else {
            alert("Запрос успешно удалён!");
            fetchKlients();
        }
    };


    return (
        <div className={'container w-[1440px]'} style={{ width: '1440px', height: '694px' }}>
            <div className={'headerDown flex'}>
                <div className="home-header-left w-[96px] h-[694px] bg-black items-center justify-center">
                    <p className={'text text-center'}>СТУДИЯ ДИЗАЙНА ИНТЕРЬЕРА</p>
                    <div className={'underline align-center m-auto'}></div>
                    <a href="https://www.instagram.com/dh_studio/" className="social-icon border p-2" style={{borderRadius: '30px'}}>
                        <FaInstagram />
                    </a>
                    <a href="https://www.pinterest.com/dhstudiokz/_created/" className="social-icon border p-2 rounded-circle" style={{borderRadius: '30px'}}>
                        <FaPinterestP />
                    </a>
                    <a href="https://www.facebook.com/DHstudioKZ" className="social-icon border p-2 rounded-circle" style={{borderRadius: '30px'}}>
                        <FaFacebookF />
                    </a>
                    <a href="https://vk.com/dh_studio_kz" className="social-icon border p-2 rounded-circle" style={{borderRadius: '30px'}}>
                        <IoLogoVk />
                    </a>
                </div>
                <div style={{ position: 'relative', width: '1345px', fontFamily: 'Roboto' }}>
                    <img src={imgHeader} alt="Роскошный дизайн интерьера" style={{ width: '100%', display: 'block' }} />
                    <p style={{
                        position: 'absolute',
                        top: '40%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '50px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        width: '100%',
                        fontFamily: 'Poppins, sans-serif',
                        color: 'white',
                        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
                    }}>
                        РОСКОШНЫЙ <span style={{ color: 'rgb(225, 222, 206)' }}>ДИЗАЙН </span><br />
                        <span style={{ color: 'rgb(225, 222, 206)' }}>ИНТЕРЬЕРА В </span>НУР-СУЛТАНЕ
                    </p>
                    <p style={{
                        position: 'absolute',
                        top: '55%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '20px',
                        textAlign: 'center',
                        width: '100%',
                        lineHeight: '32px',
                        letterSpacing: '2px',
                        paddingTop: '50px',
                    }}>
                        Мы создаем уникальные проекты любой сложности <br /> на высоком уровне качества!
                    </p>
                    <button className={'hover:bg-custom-color'}
                            style={{
                                position: 'absolute',
                                transition: 'background-color 0.3s ease-in-out',
                                top: '67%',
                                left: '38%',
                                transform: 'translate(-50%, -50%)',
                                color: 'black',
                                fontSize: '14px',
                                textAlign: 'center',
                                width: '18%',
                                borderRadius: '40px',
                                backgroundColor: 'white',
                                padding: '23px 50px',
                                marginTop: '30px',
                            }}
                            onClick={handleOpenModal}
                    >
                        Расчет стоимости
                    </button>
                    {/* ✅ Кнопка для показа/скрытия списка клиентов */}
                    <button onClick={() => setShowClientsModal(true)}
                            style={{
                                position: 'absolute',
                                transition: 'background-color 0.3s ease-in-out',
                                top: '68%',
                                left: '60%',
                                padding: '23px 50px',
                                transform: 'translate(-50%, -50%)',
                                color: 'black',
                                fontSize: '14px',
                                textAlign: 'center',
                                backgroundColor: 'white',
                                width: '260px',
                                height: '68px',
                                borderRadius: '40px',
                                marginTop: '25px',

                            }}>
                        {showClientsModal ? "Скрыть список клиентов" : "Показать список клиентов"}
                    </button>
                </div>
                {showModal && (
                    <div className="modal-overlay" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h2><strong style={{ fontSize: '25px' }}>Заказать услугу</strong></h2>
                            <p style={{ fontSize: '20px', marginBottom: '20px' }}>Наш менеджер перезвонит вам в течение 10 минут</p>
                            <div className="input-container">
                                <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
                                <input type="text" placeholder="Номер" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <button className="btnZak" onClick={handleCloseModal}>Закрыть</button>
                            <button className="buttonZap" onClick={handleSubmit} disabled={loading}>
                                {loading ? "Отправка..." : "Отправить запрос"}
                            </button>
                        </div>
                    </div>
                )}



                {/* ✅ Список клиентов */}
                {showClientsModal && (
                    <div className="modal-overlay" onClick={() => setShowClientsModal(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ color: 'black', padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
                            <h1 style={{fontSize: '35px',padding: '20px'}}>Список клиентов</h1>
                            <ul>
                                {klients.length > 0 ? (
                                    klients.map((client) => (
                                        <li key={client.id} style={{ marginBottom: "10px",fontSize: '20px',padding: '20px 30px'}}>
                                            {client.name} - {client.phone}
                                            <button
                                                onClick={() => handleDeleteClient(client.id)}
                                                style={{
                                                    marginLeft: "20px",
                                                    backgroundColor: "red",
                                                    color: "white",
                                                    border: "none",
                                                    padding: "10px 20px",
                                                    cursor: "pointer",
                                                    borderRadius: "5px"

                                                }}>
                                                Удалить
                                            </button>
                                        </li>
                                    ))
                                ) : (
                                    <p style={{fontSize: '30px'}}>Нет данных</p>
                                )}
                            </ul>
                            <button onClick={() => setShowClientsModal(false)} style={{ marginTop: "20px", padding: "20px 30px", backgroundColor: "gray", color: "white", borderRadius: "5px", cursor: "pointer" }}>
                                Закрыть
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeaderDown;
