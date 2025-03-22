import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TelephoneiconSvg from "../../assets/telephoneicon.svg";
import Loco2 from "../../assets/loco2.png";
import "./Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div
      className="home-header1"
      style={{
        margin: "auto",
      }}
    >
      <div
        style={{ width: "1290px", background: "black" }}
        className="home-header"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "9px",
          }}
        >
          <img
            style={{ width: "42px", height: "42px" }}
            src={Loco2}
            alt="Logo"
          />
          <div className="textDelux">
            <p
              style={{
                width: "180px",
                fontSize: "20px",
                fontFamily: "Poppins, sans-serif",
                background:
                  "linear-gradient(to right, rgba(224, 222, 222, 1), rgba(161, 160, 160, 1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              DELUXE HOUSE design studio
            </p>
          </div>
        </div>
        <div className="home-content">
          <Link to="/services">{t("Услуги")}</Link>
          <Link to="/remont">{t("Ремонт")}</Link>
          <a href="#">Портфолио</a>
          <Link to="/about">{t("О нас")}</Link>
          <a href="#">Статьи</a>
          <a href="#">Контакты</a>
          <div className="cursor"></div>
        </div>
        <div className="numberIcon">
          <img src={TelephoneiconSvg} alt="Phone Icon" />
          <p>8 (700) 300-03-40</p>
          <select id="language-select" onChange="translatePage()">
            <option value="ru">ru </option>
            <option value="en">en</option>
            <option value="kg">kg</option>
          </select>
          <h1>{t("Красивая")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
