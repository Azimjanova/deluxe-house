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
