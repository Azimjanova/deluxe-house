<<<<<<< HEAD
import React from 'react';
import StudioDyzine from "../studio_dyzain/StudioDyzine.jsx";
import ProjectsPage from "../projectPage/ProjectsPage.jsx";
import ProjectsCard from "../projectsCard/ProjectsCard.jsx";
import ExclusiveDyzine from "../exclusive_dyzine/ExclusiveDyzine.jsx";
import Professional from "../professional/Professional.jsx";
import Vnimatelnyi from "../vnimatelnyi/Vnimatelnyi.jsx";
import Raschet from "../raschet/Raschet.jsx";
import InfoAboutUs from "../infoAboutUs/InfoAboutUs.jsx";
import RemontCard from "../remontpageCard/RemontCard.jsx";
import FooterUp from "../footerUp/FooterUp.jsx";
import HeaderDown from "../headerDown/HeaderDown.jsx";
import RemontPage from "../remontPage/RemontPage.jsx";
import Jilye from "../../components/portfoli/jilye/Jilye.jsx";
import Marjan from "../marjan/Marjan.jsx";
import Marjan2 from "../marjan2/Marjan2.jsx";
import Marjan3 from "../marjan3/Marjan3.jsx";


const HomePage = ({projects}) => {
    return <>
        <HeaderDown/>
        <Marjan/>
        <Marjan2/>
        <Marjan3/>
        <ProjectsCard projects={projects}/>
        <StudioDyzine/>
        <ProjectsPage/>
        <ExclusiveDyzine/>
        <Professional/>
        <Vnimatelnyi/>
        <Raschet/>
        <InfoAboutUs/>
        <RemontCard/>
        <FooterUp/>
    </>
};

export default HomePage;
=======
import React from "react";
import "../../layout/header/Header.css";
import Successful from "../../successful/Successful.jsx";
import Payment from "../../payment/Payment.jsx";
import Remont from "../../remont/RemontPage.jsx";
import Work from "../../work/Work.jsx";
import SliderComponent from "../../components/slider/SliderComponent.jsx";
import Texnica from "../../texnics/Texnica.jsx";
import HeaderDown from "../../headerdown/HeaderDown.jsx";

const HomePage = () => {
  return (
    <div>
      <HeaderDown />
      <Successful />
      <Payment />
      <Remont />
      <Work />
      <SliderComponent />
      <Texnica />
    </div>
  );
};

export default HomePage;
>>>>>>> 95cc514a16e7a0a71775e6618c6fe6a9ca24a0f2
