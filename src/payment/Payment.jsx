import React from "react";
import { useTranslation } from "react-i18next";

const Payment = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        color: "#fff",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Garamond",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        {t("Порядок оплаты")}
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        <div style={{ width: "50%" }}>
          <p style={{ fontSize: "18px" }}>
            Грамотно составленный Договор на оказание даст Вам юридическую
            защищенность. Оплата производится поэтапно:
          </p>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "18px" }}>
            <li>
              <strong>35%</strong> от общей суммы – предоплата
            </li>
            <li>
              <strong>35%</strong> от общей суммы – после завершения черновых
              работ
            </li>
            <li>
              <strong>30%</strong> от общей суммы – после ввода объекта в
              эксплуатацию
            </li>
          </ul>
        </div>

        <div style={{ width: "50%" }}>
          <p style={{ fontSize: "18px" }}>{t("pay_content")}</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
