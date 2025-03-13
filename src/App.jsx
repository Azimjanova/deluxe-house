import React, {useEffect, useState} from 'react';
import ImageComponent from './components/ImageComponent';
import {supabase} from "./supabase/index.js";
import './App.css'
import HomePage from "./pages/home/HomePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import ProjectsCard from "./pages/projectsCard/ProjectsCard.jsx";

const App = () => {
    const [projects, setProjects] = useState([])
    // const [aboutUs, setAboutUs] = useState([]);

    const getData = async () => {

        let {data} = await supabase
            .from('projects')
            .select('*');
        console.log(data)
        setProjects(data)
        // let {data2} = await supabase
        //     .from('about_us')
        //     .select('*');
        // console.log(data2)
        // setProjects(data2)
    }

    useEffect(() => {
        getData()
    }, [])

    if (projects.length == 0) {
        return <h4>Loading...</h4>
    }
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<HomePage projects={projects} />}/>
                    {/*<Route path="/projects" element={<ProjectsPage />} />*/}
                    {/*<Route path="/about" element={<AboutPage />} />*/}
                    {/*<Route path="*" element={<NotFoundPage />} />*/}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
