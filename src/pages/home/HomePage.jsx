import React from 'react';
import StudioDyzine from "../studio_dyzain/StudioDyzine.jsx";
import ProjectsPage from "../projectCards/ProjectsPage.jsx";
import ProjectsCard from "../projectsCard/ProjectsCard.jsx";
import ExclusiveDyzine from "../exclusive_dyzine/ExclusiveDyzine.jsx";
import Professional from "../professional/Professional.jsx";

const HomePage = ({projects}) => {
    return <>
        <ProjectsCard projects={projects}/>
        <StudioDyzine/>
        <ProjectsPage /*aboutUs={aboutUs}*//>
        <ExclusiveDyzine/>
        <Professional/>
    </>
};

export default HomePage;