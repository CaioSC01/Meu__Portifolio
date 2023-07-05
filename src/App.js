import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
				<Services/>
      </main>
    </>
  );
};

export default App;
