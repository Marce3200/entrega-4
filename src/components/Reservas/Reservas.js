import React from "react";
import { useState } from "react";
import { db } from "../Firestore";
import { collection, addDoc , getDocs} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";


export function Reservas() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  //obtiene nombre y value, los almacena y lo transforma en objeto y eso alimenta handleSubmit
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  //   async function handleSubmit(event) {
  //     event.preventDefault();
  //     const { fechaReserva } = inputs;
  //     let fecha = new Date(fechaReserva).toISOString();
  //     inputs.fechaReserva = fecha;

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
    inputs.cantidadPersonas = !inputs.cantidadPersonas
      ? "1"
      : inputs.cantidadPersonas;

	 
	  //primero traer los datos con get Doc para rescatar fechas. cambiar inputs
	  let resultado = (cosa del get con fechaReserva).map((fecha) => fecha == inputs.fechaReserva )
	  if (resultado.includes(true)) {
		//tirar alerta de lista de espera
	  } 
	  else {

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

	navigate('/reserva-exitosa')
}
    //funcion para recargar la pagina que recarga el home
    // window.location.reload(false);
  };

  //onsubmit ejecuta funcion que manda datos a firestore
  return (
    <div className="reservacion">
      <h1>RESERVAS</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 ">
          <Form.Label>Nombre*</Form.Label>
          <Form.Control
            //   id="name"
            type="text"
            name="nombreCliente"
            value={inputs.nombreCliente || ""}
            onChange={handleChange}
            placeholder="escriba el nombre"
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
            placeholder="escriba el apellido"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mail*</Form.Label>
          <Form.Control
            type="email"
            name="mail"
            value={inputs.mail || ""}
            onChange={handleChange}
            placeholder="Enter email"
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
          />
          <Form.Text className="text-muted">Formato: 931111111</Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Cantidad de personas*</Form.Label>
          <Form.Control
            as="select"
            onChange={handleChange}
            name="cantidadPersonas"
            value={inputs.cantidadPersonas || "1"}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Form.Control>
        </Form.Group>
        {/* <Dropdown>
            <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
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
          </Dropdown> */}

        <label>
          Ingresa fecha*:
          <input
            id="fechaReserva"
            type="datetime-local"
            name="fechaReserva"
            value={inputs.fechaReserva || ""}
            onChange={handleChange}
            placeholder="escriba el mail"
          />
        </label>
        <Form.Text className="text-muted">(*) Campos obligatorios</Form.Text>
        <Button type="submit">Reservar</Button>

        <Form.Text className="text-muted">
          No te preocupes, nunca compartiremos tu datos con terceros.
        </Form.Text>

        <div className=" lg gap-2">
          <Button variant="outline-info" size="lg">
            Lista de Espera
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Reservas;
