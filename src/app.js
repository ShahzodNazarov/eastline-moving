import React from "react";
import supercontex from "./contex/supercontex";
import ServiceCompOne from "./components/sources/serviseCompOne";
import ServiceCompTwo from "./components/sources/serviceCompTwo";
import ServiceCompThree from "./components/sources/serviceCompThree";
import ServiceCompFour from "./components/sources/serviceCompFour";
import ServiceCompFive from "./components/sources/serviceCompFive";
import ServiceCompSix from './components/sources/serviceCompSix'
import ServiceCompSeven from './components/sources/serviceCompSeven'
import { Routes, Route } from "react-router-dom";
import MainApp from "./mainApp";
import YandexMap from "./contex/test";
import ModalExample from "./contex/test";
import ServiceCompEight from "./components/sources/serviceCompEight";

export default function App() {
  const { state, dispatch } = supercontex();
  return (
    <div className="app">
      <Routes>
        {/* <Route path="/" element={ <ModalExample/> } /> */}
        <Route path="/" element={<MainApp />} />
        <Route path="/service-1" element={<ServiceCompOne />} />
        <Route path="/service-2" element={<ServiceCompTwo />} />
        <Route path="/service-3" element={<ServiceCompThree />} />
        <Route path="/service-4" element={<ServiceCompFour />} />
        <Route path="/service-5" element={<ServiceCompFive />} />
        <Route path="/service-6" element={<ServiceCompSix/>} />
        <Route path="/service-7" element={<ServiceCompSeven/>} />
        <Route path="/service-8" element={<ServiceCompEight/>} />
      </Routes>
    </div>
  );
}
