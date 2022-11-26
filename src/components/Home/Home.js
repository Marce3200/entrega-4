import "./home.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./img/logo.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import roll1 from "./img/california.jpg";
import roll2 from "./img/salmon.jpg";
import roll3 from "./img/salmon2.jpg";
import fotoPremio from "./img/img-premio.jpg";

const Home = () => {
  return (
    <div className="header container-fluid ">
      <div className="background row">
        <div className="logo-section container col">
          <img className="logo" src={logo} alt="Logo" />
          <p className="bajada">
            {" "}
            Mejora tus hábitos, mejora el mundo, mejora tu paladar. <br />
            Prueba Nigiri y enamórate otra vez.
          </p>
        </div>
      </div>
      <p className="titulo-home">Nuestros Especiales de la Casa</p>
      <div className="cards-favoritos container">
        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-favorito" variant="top" src={roll1} />
          <Card.Body>
            <Card.Title className="titulo-card">California Roll</Card.Title>
            <Card.Text className="text-card">
              Relleno con arroz y unas ramitas verdes, impresiona su simpleza y
              sabor.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-favorito" variant="top" src={roll2} />
          <Card.Body>
            <Card.Title className="titulo-card">Ebi Oriental</Card.Title>
            <Card.Text className="text-card">
              El samón molido es su ingrediente principal, con unas pelotitas
              naranjas que lo invitan a sumergirse en la experiencia culinaria,
              y porqué no, tambien ramitas verdes.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-favorito" variant="top" src={roll3} />
          <Card.Body className="card-body">
            <Card.Title className="titulo-card">Sake Furay</Card.Title>
            <Card.Text className="text-card">
              Envuelto en salmón del Mar Negro, esta especialidad de la casa es
              la favorita de Chef.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="premios row container">
        <div className="col">
          <img className="foto-premio" src={fotoPremio} alt="premio" />
        </div>
        <div className="col">
          <p className="titulo-home2">Reconocidos Mundialmente</p>
          <p className="texto-descripcion">
            El menú de este restorán, fundado por Emiko Lo San Tee, ha sido
            reconocido a nivel mundial y se caracteriza por ser una prolija
            degustación de productos endémicos, salvo por el salmón del Mar
            Negro. Sus propuestas culinarias se inspiran en la experimentación y
            reinterpretación de los ingredientes ancestrales de la biodiversa
            geografía chileno-japonesa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
