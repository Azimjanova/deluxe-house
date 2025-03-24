import './projectPage.css';
import book from '/src/assets/book.png';
import {useEffect, useState} from "react"
import {supabase} from "../../supabase/index.js";


const ProjectsPage = () => {
    const [aboutUs, setAboutUs] = useState([]);

    useEffect(() => {
        const getAboutUsData = async () => {
            let {data: aboutUsData, error: aboutUsError} = await supabase
                .from('about_us')
                .select('*');
            console.log(aboutUsData)
            setAboutUs(aboutUsData);
        }
        getAboutUsData()
    }, [])

    if (!aboutUs.length) {
        return <h2>Loading...</h2>;
    }
    return (
        <div className={"projects border overflow-hidden"}>
            <div className={"container"}>
                <img src={book} className={'book'} alt=""/>
            </div>
            <div className={'projectPage'}></div>
            <div className={"app-container"}>
                <div className={"projects_content"}>
                    <h2 className={"mb-[358px] pt-[320px]"}>
                        Мы всегда <span>стремимся</span> к <span>совершенству</span> во всех деталях!
                    </h2>
                    <div>
                        Мы <span>находимся</span> в Астане (Нур-Султане), но работаем во всех городах
                        <span>Казахстана</span>
                        как удаленно, так и с выездом на замер и авторский надзор.
                    </div>
                    <div>
                        Нами уже были <span>реализованы проекты</span> в г. Актау, Алматы, Павлодар, Шымкент, Жезказган, Караганды, Актобе, Тараз, Атырау и Петропавловск.
                    </div>
                    <div>
                        Среди которых <span>не только жилые дома</span> и квартиры, но коммерческие помещения: рестораны, кафе, лаунж-бары, сауна и SPA, гостиницы и другое.
                    </div>
                </div>
                <div className={"projects_footer flex"}>
                    <div>
                        <img src={aboutUs[0]?.icon} className={'icon w-[133px] m-auto'} alt="icon"/>
                        <h4>{aboutUs[0]?.name}</h4>
                        <p>{aboutUs[0]?.text}</p>
                    </div>
                    <div>
                        <img src={aboutUs[1]?.icon} className={'icon w-[133px] m-auto'} alt="icon"/>
                        <h4>{aboutUs[1]?.name}</h4>
                        <p>{aboutUs[1]?.text}</p>
                    </div>
                    <div>
                        <img src={`/src/assets/${aboutUs[2]?.icon}`} className={'icon w-[133px] m-auto'} alt="icon"/>
                        <h4>{aboutUs[2]?.name}</h4>
                        <p>{aboutUs[2]?.text}</p>
                    </div>
                    <div>
                        <img src={aboutUs[3]?.icon} className={'icon w-[133px] m-auto'} alt="icon"/>
                        <h4>{aboutUs[3]?.name}</h4>
                        <p>{aboutUs[3]?.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;