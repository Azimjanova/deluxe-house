<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { supabase } from "./supabase/index.js";
import './App.css';
import HomePage from "./pages/home/HomePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import {DataProvider} from "./DataContext/DataContext.jsx";
import ProjectsPage from "./pages/projectPage/ProjectsPage.jsx";
import ProjectsCard from "./pages/projectsCard/ProjectsCard.jsx";
import RemontCard from "./pages/remontpageCard/RemontCard.jsx";
import Jilye from "./components/portfoli/jilye/Jilye.jsx";
import Comerical from "./components/portfoli/comerical/Comerical.jsx";
import Gallery from "./components/portfoli/gallery/Gallery.jsx";
import Services from "./components/uslugi/section1/Services.jsx";


=======
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import ImageComponent from './components/ImageComponent';
import RemontPage from "./pages/remont/RemontPage.jsx";
>>>>>>> 95cc514a16e7a0a71775e6618c6fe6a9ca24a0f2

const App = () => {
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
<<<<<<< HEAD
        <DataProvider aboutUs={aboutUs} projects={projects}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage projects={projects} />} /> {/* Используем index для главной страницы */}
                        <Route path="/" element={<ProjectsPage />} />
                        <Route path="/" element={<ProjectsCard />} />
                        <Route path="/" element={<RemontCard />} />
                        <Route path="/jilye" element={<Jilye/>} />
                        <Route path="/comerical" element={<Comerical/>} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/services" element={<Services />} />

                    </Route>
                </Routes>
            </Router>
        </DataProvider>
    );
};

export default App;
=======
        <Provider store={store}>
            <ImageComponent />
            <RemontPage/>
        </Provider>
    );
};



export default App;
>>>>>>> 95cc514a16e7a0a71775e6618c6fe6a9ca24a0f2
