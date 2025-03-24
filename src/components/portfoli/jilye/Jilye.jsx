import React, {useEffect, useState} from 'react';
import {supabase} from "../../../supabase/index.js";
import { useNavigate } from 'react-router-dom';
import Image from "../../../assets/Top.png";


const Jilye = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState(null);
    const [aboutUs, setAboutUs] = useState(null);

    const getData = async () => {
        try {
            let { data: projectsData, error: projectsError } = await supabase
                .from('projects')
                .select('*');

            if (projectsError) throw projectsError;
            setProjects(projectsData);

            let { data: aboutUsData, error: aboutUsError } = await supabase
                .from('about_us')
                .select('*');

            if (aboutUsError) throw aboutUsError;
            setAboutUs(aboutUsData);

        } catch (err) {
            console.error("Ошибка загрузки данных:", err.message);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    if (!projects || !aboutUs) {
        return <h4>Loading...</h4>;
    }
    return (
        <div>
            <div
                className="background"
                style={{
                    backgroundImage: `url(${Image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    marginBottom: '100px'
                }}
            >
                {/* Затемнённый фон */}
                <div
                    className="overlay"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)"
                    }}
                ></div>

                {/* Текст поверх изображения */}
                <div
                    className="header-text"
                    style={{
                        position: "relative",
                        color: "white",
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: "400",
                        fontFamily: "Roboto",
                        lineHeight: "22px",
                        letterSpacing: 0,
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                        zIndex: 2
                    }}
                >
                    Дизайн-студия DELUXE HOUSE предлагает услуги по созданию уникального интерьера Вашей квартиры, дома
                    или коттеджа. <br/> Мы предоставляем услуги профессиональных дизайнеров для реализации проектов
                    любой сложности <br/>
                    и работаем со всеми направлениями в области дизайна интерьера.<br/>
                    Обратившись к нам, Вы точно получите незабываемое удовольствие, продумывая все детали <br/>
                    и планируя собственную квартиру или дом. <br/>
                    Под руководством профессионалов , имеющих большой опыт в создании интерьеров жилых и общественных
                    помещений <br/> Вы можете быть уверены, что результат Вас порадует
                </div>
            </div>
            <div>
                <h1 className="h1">Наши работы по дизайну интерьера квартир и домов</h1>

                {/* Контейнер для карточек */}
                <div className="container flex flex-wrap gap-y-[63px] pt-[25px] justify-between">
                    {projects.map(el => (
                        <div
                            key={el.id}
                            className="card inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"
                        >
                            <img src={el.image} alt="" className="img pb-3" style={{
                                backdropFilter: "blur(10px)",
                                transition: "0.3s ease-in-out",
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                            }}/>
                            <div className={'overlay'}></div>
                            <span className="view-project" onClick={() => navigate('/gallery')}>СМОТРЕТЬ ПРОЕКТ</span>
                            <h1 className="name mb-2 text-center">{el.name}</h1>
                            <div className="desc">{el.desc}</div>
                        </div>
                    ))}
                </div>

                <div className="buttons p-[40px]">
                    <button style={{padding: '23px 33px'}} onClick={() => navigate('/comerical')}>Коммерческие помещения
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Jilye;