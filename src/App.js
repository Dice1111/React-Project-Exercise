import React from "react";
import ComponentEx1 from "./components/component_tuto/ComponentEx1";
import ComponentEx2 from "./components/component_tuto/ComponentEx2";
import ComponentEx4 from "./components/component_tuto/ComponentEx4";
import MyFriends from "./components/component_tuto/MyFriends";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./Header";
import Test from "./components/functional_components/test";
import Time from "./components/functional_components/time";
import NumLists from './components/functional_components/NumLists';
import Toggle from './components/component_tuto/Toggle';
import Form from './components/component_tuto/Form';

const numbers = [1,2,3,4,5];

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Footer />
      <ComponentEx1/>
      <ComponentEx2/>
      <ComponentEx4 firstName="Dice" age="18"/>
      <MyFriends/>
      <Test/>
      <Time />
      <NumLists numbers= {numbers}/>
      <Toggle/>
      <Form/>

      
    </>
  ) 
}

export default App;
