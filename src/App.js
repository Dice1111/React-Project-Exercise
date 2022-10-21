import React from "react";
import ComponentEx1 from "./components/component_tuto/ComponentEx1";
import ComponentEx2 from "./components/component_tuto/ComponentEx2";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./Header";

function App() {
  return (
    <>
      <ComponentEx1/>
      <ComponentEx2/>
      <Header />
      <Navbar />
      <Footer />
    </>
  ) 
}

export default App;
