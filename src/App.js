import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
// import Rutas from './Rutas'

import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservas from "./components/Reservas";
import Contacto from "./components/Contacto";
import Blog from "./components/Blog";
// import ErrorPage from "./ErrorPage";

function App() {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/blog" element={<Blog />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
    // </Router>
  );
}

export default App;
