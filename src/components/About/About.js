import React from "react";

import "../About/about.css"

import Card from "react-bootstrap/Card";

import premio from "../Home/img/50-premio.jpeg";
import local from "../Home/img/local.jpg"
import chef1 from "../Home/img/chef-1.jpg"
import chef2 from "../Home/img/chef-2.jpg"
import chef3 from "../Home/img/chef-3.jpg"



const About = () => {
  return (
    <div className="container">
    <div className=" row">
      
      <div className="col">
        <img className="foto-premio" src={premio} />
      </div>
      <div className="col">
        <p className="titulo-home">
          5 veces galardonados con el premio "The World 50 Best
          Restaurant"
        </p>
        <p className="texto-descripcion">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>

    <div className="container  row">
    <div className="col">
        <p className="titulo-home">
          Local ubicado en el corazón de Providencia
        </p>
        <p className="texto-descripcion">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="col">
        <img className="foto-premio" src={local} />
      </div>
      </div>

    <div>
      <p className="titulo-home">
          Chefs Reconocidos Internacionalmente
        </p>
      <div className="cards-chefs">
       
        <Card className="card-chef" style={{ width: "18rem" }}>
          <Card.Img className="foto-favorito" variant="top" src={chef1} />
          <Card.Body>
            <Card.Title className="titulo-card">Emiko Lo San Tee</Card.Title>
            <Card.Text className="text-card">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           
          </Card.Body>
        </Card>

        <Card className="card-chef" style={{ width: "18rem" }}>
          <Card.Img className="foto-favorito" variant="top" src={chef2} />
          <Card.Body>
            <Card.Title className="titulo-card">Yu tang Shu</Card.Title>
            <Card.Text className="text-card">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
        
        <Card className="card-chef" style={{ width: "18rem" }}>
          <Card.Img className="foto-favorito" variant="top" src={chef3} />
          <Card.Body className="card-body">
            <Card.Title className="titulo-card" >Lisa Wu.</Card.Title>
            <Card.Text className="text-card">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            
          </Card.Body>
        </Card>
      </div>
      </div>
    </div>
  );
};

export default About;
