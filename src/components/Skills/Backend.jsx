import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Desenvolvedor Backend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">C#</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">TypeScript</h3>
              <span className="skills__level">IIntermediário</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">SQL Server</h3>
              <span className="skills__level">Básico</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Backend;
