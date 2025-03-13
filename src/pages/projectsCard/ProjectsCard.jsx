import React from 'react';
import './projectsCard.css'

const ProjectsCard = ({ projects = [] }) => {
    return (
            <div>
                <h1 className={'h1'}>Наши Проекты</h1>
                <div className="container flex flex-wrap gap-y-[43px] pt-[25px] justify-between ">
                    {projects.map(el => {
                            return <div className={""} key={el.id}>
                                <img src={el.image} alt="" className={'img pb-3'}/>
                                <h1 className={'name mb-2'}>{el.name}</h1>
                                <div className={'desc'}>{el.desc}</div>
                            </div>
                        }
                    )}
                </div>
                <div className='buttons pd-[40px]'>
                    <button style={{marginLeft: '-10px'}}>Жилые помещения</button>
                    <button style={{padding: '23px 33px'}}>Коммерческие помещения</button>
                </div>
            </div>
    );
};

export default ProjectsCard;