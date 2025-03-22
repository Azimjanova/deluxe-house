import React from "react";
// import inst from '/src/assets/inst.svg'
// import pint from '/src/assets/pint.svg'
// import facebook from '/src/assets/facebook.svg'
import { IoLogoVk } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="container bg-rgba(31, 31, 31, 1) text-white pt-2 text-sm md:text-base font-serif footer-container">
      <div
        className=" p-6 flex justify-between text-gray-300 relative"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <div className="mr-40 flex">
          <h3 className="text-lg font-semibold">Наш телефон</h3>
          <p className="mt-2">8 (700) 300-03-40</p>
          <p>8 (778) 800-03-40</p>

          <h3 className="text-lg font-semibold mt-[10px]">Присоединяйтесь</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/dh_studio/"
              className="text-2xl p-2 rounded-full border border-[1.5px] border-[rgba(225, 222, 206, 1)] text-[rgba(225, 222, 206, 1)] hover:text-black hover:bg-[rgba(225, 222, 206, 1)] transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.pinterest.com/dhstudiokz/_created/"
              className="text-2xl p-2 rounded-full border border-[1.5px] border-[rgba(225, 222, 206, 1)] text-[rgba(225, 222, 206, 1)] hover:text-black hover:bg-[rgba(225, 222, 206, 1)] transition-all duration-300"
            >
              <FaPinterestP />
            </a>

            <a
              href="https://www.facebook.com/DHstudioKZ"
              className="text-2xl p-2 rounded-full border border-[1.5px] border-[rgba(225, 222, 206, 1)] text-[rgba(225, 222, 206, 1)] hover:text-black hover:bg-[rgba(225, 222, 206, 1)] transition-all duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://vk.com/dh_studio_kz"
              className="text-2xl p-2 rounded-full border border-[1.5px] border-[rgba(225, 222, 206, 1)] text-[rgba(225, 222, 206, 1)] hover:text-black hover:bg-[rgba(225, 222, 206, 1)] transition-all duration-300"
            >
              <IoLogoVk />
            </a>
          </div>
        </div>

        <div className="">
          <h3 className="text-lg font-semibold">Наш адрес</h3>
          <p className="mt-2">
            Республика Казахстан, 010000,г. Нур-Султан, ул. Достык 13
          </p>
          <h3
            className="text-lg font-semibold mt-6"
            style={{ marginTop: "30px" }}
          >
            Написать на почту
          </h3>
          <p className="mt-2">dh.studio.kz@gmail.com</p>
        </div>

        <div
          className="container"
          style={{ marginLeft: "150px", marginRight: "-250px" }}
        >
          <iframe
            className="w-full md:w-2/3 h-64 rounded-lg shadow-lg border border-gray-700"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.55202165677!2d71.4179641762596!3d51.128345049843314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580c9a9a2fceb%3A0x8d5e7baf9e8ff4f0!2sDostyk%2013%2C%20Astana%20010000%2C%20Kazakhstan!5e0!3m2!1sen!2s!4v1648460833274!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div style={{ background: "rgba(31, 31, 31, 1)" }}>
        <div
          className="text-left mt-8 text-gray-500 p-5 flex justify-between tect-center "
          style={{
            fontSize: "16px",
            width: "1170px",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <p>
            © 2021{" "}
            <a href="#" className="hover:text-white">
              Все права защищены.
              <br />
              Политика конфиденциальности
            </a>
          </p>
          <p>
            Сайт разработан специально <br /> от{" "}
            <a
              href="https://mywebstudio.kz"
              className="text-blue-400 hover:text-white"
            >
              mywebstudio.kz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
