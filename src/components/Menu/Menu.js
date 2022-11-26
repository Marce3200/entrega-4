import React from "react";
import "../Menu/menu.css";
import Card from "react-bootstrap/Card";

import sushi1 from "./imgMenu/sushi1.jpeg";
import sushi2 from "./imgMenu/sushi2.png";
import sushi4 from "./imgMenu/sushi4.png";
import sushi6 from "./imgMenu/sushi6.png";
import sushi7 from "./imgMenu/sushi7.png";
import sushi8 from "./imgMenu/sushi8.png";
import sushi9 from "./imgMenu/sushi9.png";
import sushi10 from "./imgMenu/sushi10.jpeg";
import sushi11 from "./imgMenu/sushi11.png";

const Menu = () => {
  return (
    <div className="header container-fluid text-center">
      <p className="titulo-home">Menú</p>
      <p className="texto-descripcion">
        {" "}
        Todos nuestros platos están acompañados del vino de casa o agua de
        niebla filtrada, a su elección
      </p>
      <div className="cards-favoritos container">
        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-menu" variant="top" src={sushi1} />
          <Card.Body>
            <Card.Title className="titulo-card">California Roll</Card.Title>
            <Card.Text className="text-card">
              Sushi preparado con salmón del mar negro y exclusivas paltas de
              Petorca. Dada la escasez de los ingredientes, este es el único
              restaurant en latinoamrecia que ofrece esta preparación. Es una
              pieza por persona. <br />
              $87.000
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-menu" variant="top" src={sushi2} />
          <Card.Body>
            <Card.Title className="titulo-card">Degustación del día</Card.Title>
            <Card.Text className="text-card">
              Creaciones del chef seleccionadas, menú de 12 piezas. Cada día el
              Chef presenta 12 combinaciones distintas, que nunca se volverán a
              repetir.
              <br />
              $540.000
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-menu" variant="top" src={sushi6} />
          <Card.Body>
            <Card.Title className="titulo-card">Gorrito Japonés</Card.Title>
            <Card.Text className="text-card">
              Exquisito arroz cubierto por un sombrero de pan de almendras,
              aplastado cuidadosamente por los deditos del Chef durante su hora
              de meditación. Las dos piezas se sirven directo sobre la mesa para
              incentivar la experiencia sensorial del cliente
              <br />
              $37.000
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-menu" variant="top" src={sushi7} />
          <Card.Body>
            <Card.Title className="titulo-card">Gyosas de Bambi</Card.Title>
            <Card.Text className="text-card">
              Carne macerada de ciervo en especias del oriente, envueltas en
              masa de ojaldre dulce. Es uno de los favoritos del Chef.
              <br />
              $63.000
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-menu" variant="top" src={sushi8} />
          <Card.Body>
            <Card.Title className="titulo-card">
              Hermanitos Envueltos
            </Card.Title>
            <Card.Text className="text-card">
              7 piezas de sushi, exactamente iguales entre si, rellenas de
              espárragos de la huerta personal del Chef y trocitos de zanahoria
              apanados en pan de semillas de sésamo.
              <br />
              $327.000
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-menu" variant="top" src={sushi9} />
          <Card.Body>
            <Card.Title className="titulo-card">Sushi Romano</Card.Title>
            <Card.Text className="text-card">
              Honrando sus ancestros italianos, nuestro Chef propone un
              innovador sushi triangular, relleno con queso de las cabras de
              monte de base, cubiertos por vegetales de la temporada y su
              corteza rodeada de algas nori.
              <br />
              $58.000
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-menu" variant="top" src={sushi10} />
          <Card.Body>
            <Card.Title className="titulo-card">Dulce Corazón</Card.Title>
            <Card.Text className="text-card">
              Sushi con forma de pancake, con base de galletas de arroz y salsa
              de salmón ahumado. Cubierto por frutas frescas de la temporada.
              <br />
              $34.000
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-menu" variant="top" src={sushi11} />
          <Card.Body className="card-body">
            <Card.Title className="titulo-card">Gohan Han Han </Card.Title>
            <Card.Text className="text-card">
              Plato preparado en honor al Chef Han Han, maestro inspirador de
              nuestro Chef, recordando sus tiempos en Japón. Salmón del Mar
              Negro, paltas de Petorca, camarones de Tailandia y queso fresco
              del sur de Chile. Todo se combina en un equilibrio máximo,
              decorado por palmitos envueltos en pimentones rojos.
              <br />
              $87.000
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Img className="foto-menu" variant="top" src={sushi4} />
          <Card.Body className="card-body">
            <Card.Title className="titulo-card">Completamente Sushi</Card.Title>
            <Card.Text className="text-card">
              Nuestro Chef innova de nuevo creando este sushi alargado, relleno
              de carne de origen misterioso, sólo conocido por nuestro Chef.
              Cubierto por unadelicada salsa de cilantro, y decorado con
              mayonesa casera preparada en el momento. Plato galardonado con el
              premio Innovación Culinaria 2022, en Santiago de Chile.
              <br />
              $39.000
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Menu;
