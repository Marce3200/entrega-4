import { Router,Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservas from "./components/Reservas";
import Contacto from "./components/Contacto";
import Blog from "./components/Blog";

function Rutas() {
  return (
    <Router>

    
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" />
    </Routes>
    </Router>
  );
}

export default Rutas;
