import './App.css';
import React from "react";
import Header from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Services />
      <About />
      <Prices />
    </div>
  );
}

export default App;
