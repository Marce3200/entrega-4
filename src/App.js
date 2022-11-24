import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Rutas from './Rutas'

import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservas from "./components/Reservas/Reservas";
import Contacto from "./components/Contacto";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage";
import Layout from './components/Layout';

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<ErrorPage />} /> 
    </Routes>
   
  );
}

export default App;
