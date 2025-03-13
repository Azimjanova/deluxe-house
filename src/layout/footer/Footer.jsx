import React from "react";
import "./Footer.css"; // Подключаем стили
import inst from ''

const Footer = () => {
    return (
        <footer className="footer w-[1440px]">
            <div className="footer-container">
                {/* Блок с телефоном */}
                <div className="footer-section">
                    <h4>Наш телефон</h4>
                    <p>8 (700) 300-03-40</p>
                    <p>8 (778) 800-03-40</p>
                    <h4  className="join-button">Присоединяйтесь</h4>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-pinterest"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-vk"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                    </div>
                </div>

                {/* Блок с адресом */}
                <div className="footer-section">
                    <h4>Наш адрес</h4>
                    <p>Республика Казахстан, 010000,</p>
                    <p>г. Нур-Султан, ул. Достык 13</p>
                </div>

                {/* Блок с email */}
                <div className="footer-section">
                    <h4>Написать на почту</h4>
                    <p><a href="mailto:dh.studio.kz@gmail.com">dh.studio.kz@gmail.com</a></p>
                </div>
                <div>
                    <img className="footer-image w-[571px]"
                        src="https://s3-alpha-sig.figma.com/img/42d8/8f33/f0fec0a0e5473e4d0a8afb703da912f6?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S0DucQSlH6I4v6cqis0n7LW4JF6WmHTPPiH61~J56QnB1N417iVs3bzPDPQKs5MapQFq7gFOJ-bh8B6NPFJvnMbCiDTT3aEb-3oexncA1x3IeBwPom5LJ6oamdWdM8ro9pcIUTIR5Ubtz7XB7kAaLA8OvLON7sFDPfKjKcyTDRTeXGoCtkCohfivPPL4jOAAPsSjbHgz56eHJTarNEolAEMp8JXrTDUY3tXas3Bv0ES4ufOgGJ~z4DADcB0yJMrAwxTQVLLlj2LYA0-a8QfQ7HxfHgqYbMoQjAyZKYUYQFDfgSHEZBFmbDAwSIYOQzeXG8OuXFi77E2~x9H~cWQLHA__"
                        alt=""/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
