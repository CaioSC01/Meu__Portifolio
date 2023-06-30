import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Costa
        </a>
        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#inicio" className="nav__link active__link">
                <i className="uil uil-estate nav__icon "></i> Inicio
              </a>
            </li>
            <li className="nav__item">
              <a href="#sobre" className="nav__link">
                <i className="uil uil-user nav__icon"></i> Sobre mim
              </a>
            </li>
            <li className="nav__item">
              <a href="#habilidades" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Habilidades
              </a>
            </li>
            <li className="nav__item">
              <a href="#serviços" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Meus
                serviços
              </a>
            </li>
            <li className="nav__item">
              <a href="#portifolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portifolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contato" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contatos
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close"></i>
        </div>
        <div className="nav__toggle">
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
