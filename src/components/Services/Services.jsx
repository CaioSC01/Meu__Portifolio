import React from "react";

const Services = () => {
  return (
    <section className="services section" id="servicos">
      <h2 className="section__titulo">Serviços</h2>
      <span className="section__subtitulo">O que tenho a oferecer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Designer de Produtos</h3>
          </div>

          <span className="services__button">
            Ver mais{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil services__modal-close"></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                {" "}
                Com um pouco mais de um ano de experiência, ofereço soluções de
                sistemas, sites e designs modernos e eficientes de alta
                qualidade. Meu portfólio reflete meu compromisso com a
                excelência e minha paixão por criar projetos excepcionais. Estou
                ansioso para colaborar com você e alcançar resultados incríveis
                juntos.{" "}
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu desenvolvo a interface do usuário
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvo páginas Web</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu crio interações de elemento ux
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu dou uma cara nova para sua empresa
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Ui/Ux Designer</h3>
          </div>

          <span className="services__button">
            Ver mais{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                Com um pouco mais de um ano de experiência, ofereço soluções de
                sistemas, sites e designs modernos e eficientes de alta
                qualidade. Meu portfólio reflete meu compromisso com a
                excelência e minha paixão por criar projetos excepcionais. Estou
                ansioso para colaborar com você e alcançar resultados incríveis
                juntos.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu desenvolvo a interface do usuário
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvo páginas Web</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu crio interações de elemento ux
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu dou uma cara nova para sua empresa
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Desenvolvimento de sistemas</h3>
          </div>

          <span className="services__button">
            Ver mais{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className="services__modal">
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title"></h3>
              <p className="services__modal-description">
                {" "}
                Com um pouco mais de um ano de experiência, ofereço soluções de
                sistemas, sites e designs modernos e eficientes de alta
                qualidade. Meu portfólio reflete meu compromisso com a
                excelência e minha paixão por criar projetos excepcionais. Estou
                ansioso para colaborar com você e alcançar resultados incríveis
                juntos.{" "}
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu desenvolvo a interface do usuário
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Desenvolvo páginas Web</p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu crio interações de elemento ux
                  </p>
                </li>
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu dou uma cara nova para sua empresa
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
