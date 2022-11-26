import "./home.css";
import React from "react";
import logo from "./img/logo.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import roll1 from "./img/california.jpg";
import roll2 from "./img/salmon.jpg";
import roll3 from "./img/salmon2.jpg";
import fotoPremio from "./img/img-premio.jpg"


const Home = () => {
  return (
    <div className="header container-fluid ">
      <div className="background row">
        <div className="logo-section container col">
          <img className="logo" src={logo} alt="Logo" />
          <p className="bajada">
            {" "}
            Mejora tus hábitos, mejora el mundo, mejora tu paladar. <br/>
            Prueba Nigiri y enamórate otra vez.
          </p>
          <div className="clase-button">
            <a href="../Menu/Menu.j">
              <Button className="button-home" variant="dark">Menú</Button>
            </a>
          </div>
        </div>
      </div>
      <p className="titulo-home">
          Nuestros Especiales de la Casa
        </p>
      <div className="cards-favoritos container">
       
        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-favorito" variant="top" src={roll1} />
          <Card.Body>
            <Card.Title className="titulo-card">California Roll</Card.Title>
            <Card.Text className="text-card">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="button-home" variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-favorito" variant="top" src={roll2} />
          <Card.Body>
            <Card.Title className="titulo-card">Ebi Oriental</Card.Title>
            <Card.Text className="text-card">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="button-home" variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>
        
        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-favorito" variant="top" src={roll3} />
          <Card.Body className="card-body">
            <Card.Title className="titulo-card" >Sake Furay</Card.Title>
            <Card.Text className="text-card">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button className="button-home" variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="premios row container">
        <div className="col">
        <img className="foto-premio" src={fotoPremio} alt="premio" />
        </div>
        <div className="col">
        <p className="titulo-home2">
          Reconocidos Mundialmente
        </p>
          <p className="texto-descripcion">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
