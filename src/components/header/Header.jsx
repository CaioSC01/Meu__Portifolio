import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          SILVA
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list ">
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
              <a href="#servicos" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> 
                serviços
              </a>
            </li>
            <li className="nav__item">
              <a href="#portifolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Projetos
              </a>
            </li>
            <li className="nav__item">
              <a href="#contato" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contatos
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
