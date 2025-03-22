import React from "react";
import background from "../assets/img_2.png";

const HeaderDown = () => {
  return (
    <div>
      <div className="header-container">
        <div
          className="background"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="overlay"></div>
        <div className="header-content">
          <h6>Гарантия качества и соблюдения сроков!</h6>
          <h1>Ремонт квартир любой сложности</h1>
        </div>
        <div className="breadcrumb">Главная / Ремонт</div>
      </div>

      <section className="info-section">
        <div className="info-text">
          <p>
            Наш богатый опыт ведения контроля за отделочными работами позволяет
            нам наладить менеджмент на высоком уровне профессионализма.
          </p>
          <p>
            С нами ремонт и отделка квартир и общественных помещений станут
            приятным событием. Проводить все работы по ремонту и отделке будет
            большая высоко квалифицированная бригада знающих мастеров со стажем
            ремонтно-отделочных работ более 10 лет.
          </p>
        </div>
        <div className="info-highlight"></div>
      </section>
    </div>
  );
};

export default HeaderDown;
