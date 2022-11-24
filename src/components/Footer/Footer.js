import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Restaurant Japonés sin nombre aún</h4>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>VEN A VISITARNOS</h4>
            <ul className="list-unstyled">
              <li>+562 223 5644</li>
              <li>Providencia 2463</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>AQUÍ ESTAMOS</h4>
            <ul className="list-unstyled">
              <li><a href="/reservas">Reservas</a></li>
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/menu">Menú</a></li>
              <li><a href="/about">Nosotros</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;2022 @AntoDev y @MarceDev | Todos los derechos reservados |
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
