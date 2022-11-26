import React from "react";
import { useState } from "react";
import { db } from "../Firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "../Reservas/Reservas.css";
import { Col, Container, Row } from "react-bootstrap";

export function Reservas() {
  
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const [fechasOcupadas, setFechasOcupadas] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    inputs.cantidadPersonas = !inputs.cantidadPersonas
      ? "1"
      : inputs.cantidadPersonas;

      //traigo los datos de reservas, los guardo en arrFechas
    const readData = async (coleccion) => {
      const datos = await getDocs(collection(db, coleccion));

      const arrFechas = datos.docs.map((doc) => doc.data().fechaReserva);
      //no funciona setFechasOcupados, deberia guardarse ahi arrFechas
      await setFechasOcupadas([...arrFechas]);
    };

    //comparo si fechaReserva =
    await readData("reservas");
    console.log(fechasOcupadas);
    let resultado = fechasOcupadas.find((fecha) => {
      console.log(fecha);
      return fecha === inputs.fechaReserva;
    });
    if (resultado) {
      swal(
        "La fecha elegida esta ocupada, te invitamos a dejar tus datos en la lista de espera"
      );
    } else {
      console.log(fechasOcupadas);
      console.log(inputs.fechaReserva);
      console.log(resultado);

      await addDoc(collection(db, "reservas"), {
        nombreCliente: inputs.nombreCliente,
        apellidoCliente: inputs.apellidoCliente,
        fechaReserva: inputs.fechaReserva,
        cantidadPersonas: inputs.cantidadPersonas,
        telefono: inputs.telefono,
      });
      try {
        const docRef = await addDoc(collection(db, "reservas"), inputs);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      navigate("/reserva-exitosa");
    }
    //funcion para recargar la pagina que recarga el home
    // window.location.reload(false);
  };

  //onsubmit ejecuta funcion que manda datos a firestore
  return (
    <Container>
      <Row>
        <p className="titulo-home">Reservas</p>
        <Col className="d-flex justify-content-center">
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 ">
              <Form.Label>Nombre*</Form.Label>
              <Form.Control
                //   id="name"
                type="text"
                name="nombreCliente"
                value={inputs.nombreCliente || ""}
                onChange={handleChange}
                placeholder=""
                size="sm"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Apellido*</Form.Label>
              <Form.Control
                //   id="apellido"
                type="text"
                name="apellidoCliente"
                value={inputs.apellidoCliente || ""}
                onChange={handleChange}
                placeholder=""
                size="sm"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mail*</Form.Label>
              <Form.Control
                type="email"
                name="mail"
                value={inputs.mail || ""}
                onChange={handleChange}
                placeholder=""
                size="sm"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Telefono* (+56)</Form.Label>
              <Form.Control
                id="telefono"
                type="tel"
                name="telefono"
                value={inputs.telefono || ""}
                onChange={handleChange}
                placeholder=""
                size="sm"
              />
              <Form.Text className="text-muted">Formato: 931111111</Form.Text>
            </Form.Group>
            <div className="row">
              <Form.Group
                className="col"
                controlId="exampleForm.ControlSelect1"
              >
                <Form.Label>Cantidad de personas*</Form.Label>
                <Form.Control
                  as="select"
                  onChange={handleChange}
                  name="cantidadPersonas"
                  value={inputs.cantidadPersonas || "1"}
                  size="sm"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </Form.Control>
              </Form.Group>

              <div className="col">
              <Form.Label>Ingresa fecha*:</Form.Label>
                
                <input
                className="input-fecha"
                  id="fechaReserva"
                  type="datetime-local"
                  name="fechaReserva"
                  value={inputs.fechaReserva || ""}
                  onChange={handleChange}
                  placeholder="escriba el mail"
                />
              </div>
            </div>

            <div className="row">
              <Form.Text className="text-muted text-center">
                (*) Campos obligatorios <br />
                No te preocupes, nunca compartiremos tu datos con terceros.
              </Form.Text>

              <Button
                className="button-reserva mt-4"
                type="submit"
                variant="dark"
                size="sm"
              >
                Reservar
              </Button>

              
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Reservas;
