import React from 'react';
import './projectsCard.css';
import { useNavigate } from 'react-router-dom';

const ProjectsCard = ({ projects = [] }) => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="h1">Наши Проекты</h1>

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
                        <span className="view-project" onClick={() => navigate('/remont')}>СМОТРЕТЬ ПРОЕКТ</span>
                        <h1 className="name mb-2 text-center">{el.name}</h1>
                        <div className="desc">{el.desc}</div>
                    </div>
                ))}
            </div>

            <div className="buttons p-[40px]">
                <button style={{ marginLeft: '-10px' }} onClick={() => navigate('/jilye')}>Жилые помещения</button>
                <button style={{ padding: '23px 33px' }} onClick={() => navigate('/comerical')}>Коммерческие помещения</button>
            </div>
        </div>
    );
};

export default ProjectsCard;
