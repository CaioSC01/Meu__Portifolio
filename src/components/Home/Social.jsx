/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/caiosilva-costa"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/CaioSC01"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
