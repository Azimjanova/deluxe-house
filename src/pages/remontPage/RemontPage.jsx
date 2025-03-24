import React, { useEffect, useState } from 'react';
import { supabase } from "../../supabase/index.js";  // Теперь supabase импортируется
import './RemontPage.css';

const RemontPage = () => {
    const [remont, setRemont] = useState([]);
    const [tarif, setTarif] = useState([]);
    const [selectedTab, setSelectedTab] = useState('standard');
    const [showModal, setShowModal] = useState(false);
    const [selectedTarif, setSelectedTarif] = useState(null);
     const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getRemont = async () => {
            const { data, error } = await supabase.from('remont').select('*');
            if (error) {
                console.error("Ошибка при загрузке данных:", error);
                return;
            }
            setRemont(data.map(item => ({
                ...item,
                term: typeof item.term === "string" ? JSON.parse(item.term) : item.term
            })));
        };
        getRemont();
    }, []);

    useEffect(() => {
        const getTarif = async () => {
            const { data, error } = await supabase.from('tarif').select('*');
            if (error) {
                console.error("Ошибка при загрузке тарифов:", error);
                return;
            }
            setTarif(data);
        };
        getTarif();
    }, []);

    if (!remont.length || !tarif.length) {
        return <h2>Loading...</h2>;
    }

    const filteredData = remont.map(item => ({
        ...item,
        term: selectedTab === 'standard' ? item.term.slice(0, 3) : item.term.slice(3)
    }));

    const handleOpenModal = (tarif) => {
        setSelectedTarif(tarif);
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

        if (!name.trim()) {
            alert('Введите имя');
            return;
        }

        if (!/^\+?[0-9\s\-\(\)]{7,20}$/.test(phone)) {
            alert('Введите корректный номер телефона');
            return;
        }

        setLoading(true);

        const { error } = await supabase
            .from('orders')  // Таблица в Supabase
            .insert([{
                name: name,
                phone: phone,
                tarif: selectedTarif?.name || 'Не указан',
                created_at: new Date().toISOString() // Время заявки
            }]);

        setLoading(false);

        if (error) {
            console.error("Ошибка при отправке данных:", error);
            alert("Ошибка при отправке данных, попробуйте снова.");
        } else {
            alert("Заявка успешно отправлена!");
            handleCloseModal(); // Закрыть модальное окно после отправки
        }
    };


    return (
        <div className={`remont-container ${showModal ? 'modal-open' : ''}`}>
            <h1 className="remont-title">Сроки ремонта</h1>

            <div className="tab-buttons">
                <button className={`tab-button ${selectedTab === 'standard' ? 'active' : ''}`}
                        onClick={() => setSelectedTab('standard')}>
                    Ремонт без дизайна
                </button>
                <button className={`tab-button ${selectedTab === 'design' ? 'active' : ''}`}
                        onClick={() => setSelectedTab('design')}>
                    Ремонт с дизайном
                </button>
            </div>

            <div className="table-container">
                <table className="remont-table">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Черновая</th>
                        <th>Предчистовая</th>
                        <th>Вторичка</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.term?.[0] ?? "Нет данных"}мес</td>
                            <td>{item.term?.[1] ?? "Нет данных"}мес</td>
                            <td>{item.term?.[2] ?? "Нет данных"}мес</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <h2 className="tarif-title">Линейка тарифов</h2>
            <div className="tarif-grid">
                {tarif.map((plan) => (
                    <div key={plan.id} className="tarif-card">
                        <div className="tarif-header">
                            <h5>{plan.paket}</h5>
                            <h3>{plan.name}</h3>
                        </div>
                        <p className="tarif-description text-center"><strong>{plan.text1}</strong></p>
                        <p className="tarif-price text-center">{plan.size}</p>
                        <p className="tarif-description1 text-black text-center">{plan.remontkey}</p>
                        <p className="tarif-description2">{plan.text2}</p>
                        <button className="tarif-button" onClick={() => handleOpenModal(plan)}>
                            Заказать тариф
                        </button>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2><strong style={{fontSize: '25px'}}>Заказать услугу</strong></h2>
                        <p style={{fontSize: '20px', marginBottom: '20px'}}>Наш менеджер
                            перезвонит вам в течение 10 минут</p>
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
        </div>
    );
};

export default RemontPage;
