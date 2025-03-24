import React, { useEffect, useState } from 'react';
import { supabase } from "../../../supabase/index.js";
import { useNavigate } from 'react-router-dom';
import Image from "../../../assets/Top.png";

const Comerical = () => {
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [aboutUs, setAboutUs] = useState([]);

    const getData = async () => {
        try {
            let { data: projectsData, error: projectsError } = await supabase
                .from('projects')
                .select('*');

            if (projectsError) throw projectsError;
            setProjects(projectsData || []);

            let { data: aboutUsData, error: aboutUsError } = await supabase
                .from('about_us')
                .select('*');

            if (aboutUsError) throw aboutUsError;
            setAboutUs(aboutUsData || []);

        } catch (err) {
            console.error("Ошибка загрузки данных:", err.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (projects.length === 0 || aboutUs.length === 0) {
        return <h4>Загрузка...</h4>;
    }

    return (
        <div>
            {/* Заголовок с изображением */}
            <div className="header-container" style={{ position: "relative" }}>
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
                        // marginBottom: '100px'
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
                        Мы с высоким уровнем профессионализма подходим к разработке проектов дизайна интерьеров
                        коммерческих<br/> помещений. У нас за плечами богатый опыт в создании проектов для объектов
                        общественного назначения: рестораны, <br/> гостевые дома, сауны и SPA, бутики и магазины. Мы
                        готовы взяться за любой проект не менее 60 кв.м. Наши работы Вы <br/> можете увидеть не только у
                        нас
                        на сайте, но и в <br/> живую, посетив одно из общественных мест, которые представлены в нашем
                        портфолио. <br/>
                        Мы так же учитываем прогнозируемое развитие тенденций в сфере дизайна. Поэтому наши проекты
                        остаются <br/> актуальными очень долгое время!
                    </div>
                </div>

                {/* Хлебные крошки */}
                <div className="breadcrumb" style={{ padding: "15px", fontSize: "14px" }}>
                    Главная / Портфолио / Коммерческие помещения
                </div>
            </div>

            {/* Секция с проектами */}
            <div>
                <h1 className="h1">Наши работы по дизайну коммерческих помещений</h1>

                <div className="container flex flex-wrap gap-y-[63px] pt-[25px] justify-between">
                    {projects.map((el, index) => (
                        <div
                            key={el.id || index}
                            className="card inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"
                        >
                            <img
                                src={el.image}
                                alt={el.name || "Изображение проекта"}
                                loading="lazy"
                                className="img pb-3"
                                style={{
                                    backdropFilter: "blur(10px)",
                                    transition: "0.3s ease-in-out",
                                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                                }}
                            />
                            <div className="overlay"></div>
                            <span className="view-project" onClick={() => navigate('/gallery')}>
                                СМОТРЕТЬ ПРОЕКТ
                            </span>
                            <h1 className="name mb-2 text-center">{el.name}</h1>
                            <div className="desc">{el.desc}</div>
                        </div>
                    ))}
                </div>

                {/* Кнопка для перехода к жилым помещениям */}
                <div className="buttons p-[40px]">
                    <button className="btn" style={{ padding: '23px 33px' }} onClick={() => navigate('/jilye')}>
                        Жилые помещения
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comerical;
