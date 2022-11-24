import "./home.css";
import React from "react";
import logo from './img/logo.png'

import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <div className="header">
      <div className="logo-section">
      <img className="logo" src={logo} alt="Logo" />
      <p> Mejora tus hábitos, mejora el mundo, mejora tu paladar. Prueba Nigiri y enamórate otra vez.</p>
      
      <div>
        <a href="/Menu">
      <Button variant="dark">Menú</Button>
      </a>
      </div>
      </div>
    </div>
    
  );
};

export default Home