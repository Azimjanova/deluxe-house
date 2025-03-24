import React, {useEffect, useState} from 'react';
import {supabase} from "../../supabase/index.js";
import './remontCard.css'
import noteBook from '/src/assets/notebook.svg'

const RemontCard = () => {
    const [aboutUs2, setAboutUs2] = useState([]);

    useEffect(() => {
        const getAboutUsData = async () => {
            let {data: aboutUs2Data, error: aboutUs2Error} = await supabase
                .from('about_us2')
                .select('*');
            console.log(aboutUs2Data)
            setAboutUs2(aboutUs2Data);
        }
        getAboutUsData()
    }, [])
    if (aboutUs2.length === 0) {
        return <h2>Loading...</h2>;
    }
    
    return (
        <div className={'app-container'} style={{color:'white', paddingTop: '5%'}}>
            <h4 style={{lineHeight: '60px', fontSize: '25px',letterSpacing: '3px'}}>
                Всего <span style={{
                    fontSize: '40px',
                color: 'rgba(225, 222, 206, 0.92)',
            }}> 6 шагов, 3 дня</span> и вы <br/> можете <span style={{
                fontSize: '40px',
                color: 'rgba(225, 222, 206, 0.92)',

            }}>приступать </span>к <br/><span style={{
                fontSize: '40px',
                color: 'rgba(225, 222, 206, 0.92)',
            }}>ремонту</span>
            </h4>
            <div className={'remontCard'}>
                <div className={'hover:l'}>
                    <img src={noteBook} alt=""/>
                    <h3>{aboutUs2[0]?.name}</h3>
                    <p>{aboutUs2[0]?.text}</p>
                </div>
                <div>
                    <img src={noteBook} alt=""/>
                    <h3>{aboutUs2[0]?.name}</h3>
                    <p>{aboutUs2[0]?.text}</p>
                </div>
                <div>
                    <img src={noteBook} alt=""/>
                    <h3>{aboutUs2[0]?.name}</h3>
                    <p>{aboutUs2[0]?.text}</p>
                </div>
                <div>
                    <img src={noteBook} alt=""/>
                    <h3>{aboutUs2[0]?.name}</h3>
                    <p>{aboutUs2[0]?.text}</p>
                </div>
                <div>
                    <img src={noteBook} alt=""/>
                    <h3>{aboutUs2[0]?.name}</h3>
                    <p>{aboutUs2[0]?.text}</p>
                </div>
                <div>
                    <img src={noteBook} alt=""/>
                    <h3>{aboutUs2[0]?.name}</h3>
                    <p>{aboutUs2[0]?.text}</p>
                </div>
            </div>

        </div>
    );
};

export default RemontCard;