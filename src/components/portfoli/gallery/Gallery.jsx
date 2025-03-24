import React, { useEffect, useState } from "react";
import { supabase } from "../../../supabase/index.js";
import "./Gallery.css";
import Image from "../../../assets/Top.png";

const Gallery = () => {
    const [galareya, setGalareya] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        const getAboutUsData = async () => {
            let { data: galareyaData, error: galareyaError } = await supabase
                .from("galareya")
                .select("*");

            if (galareyaError) {
                console.error("Error fetching data:", galareyaError);
                return;
            }

            setGalareya(galareyaData);
        };
        getAboutUsData();
    }, []);

    const openModal = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % galareya.length);
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + galareya.length) % galareya.length);
    };

    if (!galareya.length) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="gallery container">
            <div className={"app-container"}>
                <div
                    className="background"
                    style={{
                        backgroundImage: `url(${Image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "400px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        marginBottom: "50px",
                    }}
                >
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
                        className="header-text"
                        style={{
                            position: "relative",
                            color: "white",
                            textAlign: "center",
                            fontSize: "14px",
                            fontWeight: "400",
                            fontFamily: "Roboto",
                            lineHeight: "22px",
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
                            zIndex: 2,
                        }}
                    >
                        <h1 style={{fontSize: '30px',marginBottom: '30px'}}>Проект квартиры в ЖК "Арман"</h1>
                        <p style={{marginBottom: '13px'}}>Проект квартиры в стиле смешения неоклассики и модерна</p>
                        Дизайн интерьера был выполнен в эклектичном стиле. На разработку проекта ушел 1 месяц, авторский
                        надзор за <br /> проектом составлял период в 3 месяца. Основой концепции создания проекта было
                        желание учесть множество таких <br /> факторов, как проживание в одной квартире членов семьи в 3
                        поколениях с самыми разными и противоречивыми <br /> пожеланиями. Проект был сдан "под ключ" - с
                        полным подбором всех необходимых материалов, мебели и декора.<br />
                        Площадь проектируемого объекта - 230 кв.м.
                    </div>
                </div>
            </div>

            <h1 className="h1">Галерея проекта</h1>
            <div className="gallery-grid" style={{ display: "flex", flexWrap: "wrap", gap: "15px",marginTop: "40px" }}>
                {galareya.map((item, index) => (
                    <div key={index} className="gallery-item" onClick={() => openModal(index)}>
                        <img className="gallery-image hover:" src={item.img} alt={item.description} style={{ width: "570px", height: "384px", objectFit: "cover" }} />
                    </div>
                ))}
            </div>

            {selectedImageIndex !== null && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <button className="prev" onClick={prevImage}>&#10094;</button>
                        <img src={galareya[selectedImageIndex].img} alt="Selected" className="modal-image" />
                        <button className="next" onClick={nextImage}>&#10095;</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
