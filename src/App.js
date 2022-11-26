import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Reservas from "./components/Reservas/Reservas";
import Contacto from "./components/Contacto/Contacto";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Layout from './components/Layout';
import ReservaExitosa from './components/ReservaExitosa/ReservaExitosa';




function App() {
  return (
   
   
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path="/reserva-exitosa" element={<ReservaExitosa />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<ErrorPage />} /> 
      
    </Routes>
   
  );
}

export default App;
