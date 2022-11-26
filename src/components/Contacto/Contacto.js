import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { db } from "../Firestore";
import "./contacto.css";
import swal from "sweetalert";

export default function Contacto() {
  const [formValues, setFormValues] = useState({
    nombre: "",
    mail: "",
    mensaje: "",
  });
  async function handleSubmit() {
    console.log(formValues);

    swal("Hemos recibido tu mensaje!");

    try {
      const docRef = await addDoc(collection(db, "contacto"), formValues);
      window.location.reload();
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  function handleFormChange(event) {
    const { target } = event;
    const { name, value } = target;
    const newValues = { ...formValues, [name]: value };
    setFormValues(newValues);
  }
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
          Estamos ubicados en Providencia 2463 Santiago, Chile <br />
          info@nigirisushihouse.cl
        </p>
      </div>
      <div className="col">
        <p className="titulo-home">Contáctanos</p>
        <Form className="form-contacto">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label className="form-label">Nombre*</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="nombre"
              value={formValues.nombre || ""}
              onChange={handleFormChange}
              placeholder=""
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              type="email"
              name="mail"
              value={formValues.mail || ""}
              onChange={handleFormChange}
              size="sm"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="form-label">
              Escríbenos y te contestaremos a la brevedad
            </Form.Label>
            <Form.Control
              type="text"
              name="mensaje"
              value={formValues.mensaje || ""}
              onChange={handleFormChange}
              placeholder=""
              size="sm"
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>
        <div className="container-boton">
          <Button
            className="button-enviar"
            size="sm"
            variant="dark"
            onClick={handleSubmit}
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
}
