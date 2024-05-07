import React from "react";
import supercontex from "./contex/supercontex";
import ServiceCompOne from './components/sources/serviseCompOne';
import ServiceCompTwo from './components/sources/serviceCompTwo';
import ServiceCompThree from './components/sources/serviceCompThree';
import ServiceCompFour from './components/sources/serviceCompFour';
import ServiceCompFive from './components/sources/serviceCompFive';



import {  Routes, Route } from 'react-router-dom';
import MainApp from "./mainApp";

export default function App() {
  const { state, dispatch } = supercontex();
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainApp/>} />
        <Route path="/service-1" element={<ServiceCompOne/>}/>
        <Route path="/service-2" element={<ServiceCompTwo/>}/>
        <Route path="/service-3" element={<ServiceCompThree/>}/>
        <Route path="/service-4" element={<ServiceCompFour/>}/>
        <Route path="/service-5" element={<ServiceCompFive/>}/>
      </Routes>
    </div>
  );
}
