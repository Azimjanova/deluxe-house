import React from "react";

const Services = () => {
  return (
    <div>
      <div className="header-container">
        <div
          className="background"
          style={{
            backgroundImage: `url("https://static.tildacdn.pro/tild6666-6164-4538-a362-653135666234/image.png")`,
          }}
        ></div>
        <div className="overlay"></div>
        <div className="header-content">
          <h6>Самое лучшее соотношение цены и качества!</h6>
          <h1>Услуги и цены</h1>
        </div>
        <div className="breadcrumb">Главная / Услуги и цены</div>
      </div>
    </div>
  );
};

export default Services;
