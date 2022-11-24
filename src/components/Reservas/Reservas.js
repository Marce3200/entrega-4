import React from "react";
import { useState } from "react";
import { db } from "../Firestore";
import { collection, addDoc } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
export function Reservas() {
  const [inputs, setInputs] = useState({});

  //obtiene nombre y value, los almacena y lo transforma en objeto y eso alimenta handleSubmit
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };


//   async function handleSubmit(event) {
//     event.preventDefault();
//     console.log(formValues);
//     const { fechaReserva } = formValues;
//     let fecha = new Date(fechaReserva).toISOString();
//     formValues.fechaReserva = fecha;

//     //para mostar
//     //  console.log(new Date(fecha).toLocaleString())
//     // aqui poner
//     try {
//       const docRef = await addDoc(collection(db, "contactos"), formValues);
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }



  //manda datos a firestore
  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "reservas"), {
      nombreCliente: inputs.nombre,
      fechaReserva: inputs.fechareserva,
    });
    //funcion para recargar la pagina que recarga el home
    window.location.reload(false);
  };

  //onsubmit ejecuta funcion que manda datos a firestore
  return (
    <div className="reservacion">
      <h1>RESERVAS</h1>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
        //   id="name"
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
          placeholder="escriba el nombre"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
        //   id="apellido"
          type="text"
          name="apellido"
          value={inputs.apellido || ""}
          onChange={handleChange}
          placeholder="escriba el apellido"
        />
      </Form.Group>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            id="telefono"
            type="tel"
            name="telefono"
            value={inputs.telefono || ""}
            onChange={handleChange}
            placeholder="escribe tu numero aqui"
          />
        </Form.Group>

        <Dropdown>
          <Dropdown.Toggle  variant= "outline-info"id="dropdown-basic">
            Cantidad de personas
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item option value="1">
              1 persona
            </Dropdown.Item>
            <Dropdown.Item option value="2">
              2 personas
            </Dropdown.Item>
            <Dropdown.Item option value="3">
              3 personas
            </Dropdown.Item>
            <Dropdown.Item option value="4">
              4 personas
            </Dropdown.Item>
            <Dropdown.Item option value="5">
              5 personas
            </Dropdown.Item>
            <Dropdown.Item option value="6">
              6 personas
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

     
        <label>
          Ingresa fecha:
          <input
            id="fechaReserva"
            type="datetime-local"
            name="fechareserva"
            value={inputs.fechaReserva || ""}
            onChange={handleChange}
            placeholder="escriba el mail"
          />
        </label>

        <Button type="submit">Reservar</Button>
      </Form>

	  <div className=" lg gap-2">
      <Button variant= "outline-info" size="lg">
        Lista de Espera
      </Button>
      
    </div>
    </div>
  );
}

export default Reservas;
