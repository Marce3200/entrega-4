import React from "react";
import Form from "react-bootstrap/Form";
import "./contacto.css";
import Button from "react-bootstrap/Button";

const Contacto = () => {
  return (
    <div className="container row">
      <div className="col">
        <p className="titulo-home">Visítanos</p>

        <p className="texto-descripcion">
          Nigiri Sushi House restaurant con 14 años de trayectoria y un listado
          de preparaciones que no solo cuenta con recetas tradicionales de
          Japón, sino también con platos de autor con ingredientes de diferentes
          países del continente asiático. Todo en manos del chef y fundador,
          Minsu Bang.
        </p>
        <p className="texto-descripcion-1">
          Estamos ubicados en Providencia 2463 Santiago, Chile
        </p>
      </div>

      <div className="col">
        <p className="titulo-home">Contáctanos</p>

        <Form className="form-contacto">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label className="form-label">Nombre</Form.Label>
            <Form.Control size="sm" type="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">Email address</Form.Label>
            <Form.Control
              size="sm"
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="form-label">
              Escríbenos y te contestaremos a la brevedad
            </Form.Label>
            <Form.Control size="sm" as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <div className="container-boton">
          <Button className="button-enviar" size="sm" variant="dark">
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
