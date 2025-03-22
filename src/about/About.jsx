import React from "react";
import background from "../assets/img_1.png";
import "../App.css";

const About = () => {
  return (
    <div
      style={{
        maxWidth: "1440px",
        margin: "auto",
      }}
    >
      <div
        className="header-container"
        style={{ position: "relative", textAlign: "center", color: "white" }}
      >
        <div
          className="background"
          style={{
            backgroundImage: `url(${background})`,
            // backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "450px",
            position: "relative",
          }}
        ></div>
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>

        <div
          className="header-content"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "1.5",
          }}
        >
          <h6 style={{ margin: "0" }}>
            Мы не просто дизайн-студия, мы - команда талантливых людей, <br />
            обладающих тонким чутьем, вкусом и большим опытом <br />
            во главе с опытным и творческим руководителем.
          </h6>
        </div>

        <div
          className="breadcrumb"
          style={{
            position: "absolute",
            bottom: "15px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "14px",
            color: "#ccc",
          }}
        >
          Главная / О нас
        </div>
      </div>

      <div
        className="iframe"
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <iframe
          width="1200"
          height="700"
          src="https://www.youtube.com/embed/bLwQnK6xplI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
