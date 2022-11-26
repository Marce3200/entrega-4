import React from "react";

import "../About/about.css";

import Card from "react-bootstrap/Card";

import premio from "../Home/img/50-premio.jpeg";
import local from "../Home/img/local.jpg";
import chef1 from "../Home/img/chef-1.jpg";
import chef2 from "../Home/img/chef-2.jpg";
import chef3 from "../Home/img/chef-3.jpg";

const About = () => {
  return (
    <div className="container">
      <div className=" row">
        <div className="col">
          <img className="foto-premio" src={premio} alt="foto premio" />
        </div>
        <div className="col">
          <p className="titulo-home">
            5 veces galardonados con el premio "The World 50 Best Restaurant"
          </p>
          <p className="texto-descripcion">
            Respetando la estricta estructura de la cocina japonesa, la
            propuesta de Nigiri aúna la técnica japonesa y el producto español
            incluyendo el toque personal del chef. El chef Emiko Lo San Tee
            pertenece a una nueva generación de chefs de perfil internacional
            que están cambiando el panorama gastronómico chileno. Nigiri es el
            concepto en japonés para describir una filosofía de vida: es
            descubrir tu pasión, ponerla en práctica y hacerlo lo mejor posible.
            Esta filosofía y forma de vida es la que comparte el chef Emiko Lo
            San Tee y la que se disfruta en su propuesta.
          </p>
        </div>
      </div>

      <div className="container  row">
        <div className="col">
          <p className="titulo-home">
            Local ubicado en el corazón de Providencia
          </p>
          <p className="texto-descripcion">
            En esta comuna encontramos varias de las atracciones más importantes
            de Santiago, como el Cerro San Cristóbal y su virgen -icono de la
            ciudad-, el mirador del Costanera Center (el rascacielos más alto de
            Sudamérica) y la Casa de Pablo Neruda entre otras. Encontrarán
            también barrios patrimoniales, centros comerciales, y en el corazón
            del sector gastronómico, se encuentra NIGIRI, restaurant de comida
            japonesa 5 veces galardonado con el premio "The World 50 Best
            Restaurant". Te invitamos a vivir una experiencia única.
          </p>
        </div>
        <div className="col">
          <img className="foto-premio" src={local} alt="foto premio" />
        </div>
      </div>

      <div>
        <p className="titulo-home">Chefs Reconocidos Internacionalmente</p>
        <div className="cards-chefs">
          <Card className="card-chef" style={{ width: "18rem" }}>
            <Card.Img className="foto-favorito" variant="top" src={chef1} />
            <Card.Body>
              <Card.Title className="titulo-card">Emiko Lo San Tee</Card.Title>
              <Card.Text className="text-card">
                Lejos el mejor Chef de comida Japonesa.
                <br />
                Todos creen que es japnonés, pero no es así.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card-chef" style={{ width: "18rem" }}>
            <Card.Img className="foto-favorito" variant="top" src={chef2} />
            <Card.Body>
              <Card.Title className="titulo-card">Yu tang Shu</Card.Title>
              <Card.Text className="text-card">
                Es muy buen Chef, pero no siempre llega a la hora. <br />
                Sin embargo sus sabores son inigualables.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card-chef" style={{ width: "18rem" }}>
            <Card.Img className="foto-favorito" variant="top" src={chef3} />
            <Card.Body className="card-body">
              <Card.Title className="titulo-card">Lisa Wu.</Card.Title>
              <Card.Text className="text-card">
                Chef especialista en innovaciones culinarias. Se dice que fue la
                creadora de la propuesta Completamente Sushi.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
