import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ActivateButton from "./components/ActivateButton";
import "./styles/App.css";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  function logoAndBrand(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div id="MainContainer">
      <Header logoAndBrand={logoAndBrand} />
      <br />
      <>
        <MainSection mainBody={function (): void {}} />
      </>
      <div id="ActivateButton">
        <ActivateButton button={function (): void {}} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
