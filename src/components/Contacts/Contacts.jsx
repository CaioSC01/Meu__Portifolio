import React from "react";
import "./contacts.css";

const Contacts = () => {
  return (
    <section className="contact section" id="contato">
      <h2 className="section__titulo">Entrar em contato</h2>
      <span className="section__subtitulo">Contate-me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Fale comigo</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                caio.silva.costa.dev@gmail.com
              </span>

              <a
                href="mailto:caio.silva.costa.dev@gmail.com"
                className="contact__button"
              >
                Contate-me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp  contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">(11) 9 93013-0937</span>

              <a
                href="https://api.whatsapp.com/send/?text=Gostaria+de+saber+sobre+o+seus+do+servi%C3%A7os&type=custom_url&app_absent=0 "
                className="contact__button"
              >
                Contate-me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon"></i>
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">@FlexCode_</span>

              <a
                href="https://www.instagram.com/flexcode_/"
                className="contact__button"
              >
                Contate-me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Me descreva seu projeto</h3>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
