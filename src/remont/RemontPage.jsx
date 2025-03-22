import React, { useEffect, useState } from "react";
import { supabase } from "../supabase/index.js";
import "./RemontPage.css";
import Rate from "../rate/Rate.jsx";

const RemontPage = () => {
  const [remont, setRemont] = useState([]);
  const [tarif, setTarif] = useState([]); // Добавляем состояние для тарифов
  const [selectedTab, setSelectedTab] = useState("standard");

  // Загрузка данных о сроках ремонта
  useEffect(() => {
    const getRemont = async () => {
      let { data, error } = await supabase.from("remont").select("*");

      if (error) {
        console.error("Ошибка при загрузке данных:", error);
        return;
      }

      const formattedData = data.map((item) => ({
        ...item,
        term: typeof item.term === "string" ? JSON.parse(item.term) : item.term,
      }));

      setRemont(formattedData);
    };

    getRemont();
  }, []);

  // Загрузка данных о тарифах
  useEffect(() => {
    const getTarif = async () => {
      let { data, error } = await supabase.from("tarif").select("*");

      if (error) {
        console.error("Ошибка при загрузке тарифов:", error);
        return;
      }

      console.log("Tarif Data:", data); // Логируем данные для проверки
      setTarif(data);
    };

    getTarif();
  }, []);

  // Показываем "Loading..." пока данные не загрузились
  if (!remont.length || !tarif.length) {
    return <h2>Loading...</h2>;
  }

  // Фильтрация данных для сроков ремонта
  const filteredData = remont.map((item) => ({
    ...item,
    term:
      selectedTab === "standard" ? item.term.slice(0, 3) : item.term.slice(3),
  }));

  // Функция для кнопки "О НАС"
  const handleClick = () => {
    console.log('Кнопка "О НАС" нажата');
    // Здесь можно добавить переход на страницу "О нас"
  };

  return (
    <div className="remont-container">
      <h1 className="remont-title">Сроки ремонта</h1>

      {/* Таб кнопки */}
      <div className="tab-buttons">
        <button
          className={`tab-button ${selectedTab === "standard" ? "active" : ""}`}
          onClick={() => setSelectedTab("standard")}
        >
          Ремонт без дизайна
        </button>
        <button
          className={`tab-button ${selectedTab === "design" ? "active" : ""}`}
          onClick={() => setSelectedTab("design")}
        >
          Ремонт с дизайном
        </button>
      </div>

      {/* Таблица сроков ремонта */}
      <div className="table-container">
        <table className="remont-table">
          <thead>
            <tr>
              <th>Название</th>
              <th>Черновая</th>
              <th>Предчистовая</th>
              <th>Вторичка</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.term?.[0] ?? "Нет данных"} мес</td>
                <td>{item.term?.[1] ?? "Нет данных"} мес</td>
                <td>{item.term?.[2] ?? "Нет данных"} мес</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Кнопка "О НАС" */}
      <div className="about-us-container">
        <button className="about-us-button" onClick={handleClick}>
          О НАС
        </button>
      </div>

      {/* Добавляем компонент Rate и передаем данные tarif и selectedTab */}
      <Rate tarif={tarif} selectedTab={selectedTab} />
    </div>
  );
};

export default RemontPage;
