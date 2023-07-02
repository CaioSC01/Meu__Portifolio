import React from "react";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
};

export default App;
