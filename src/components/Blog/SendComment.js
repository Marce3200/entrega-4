import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../Firestore";

const user = React.createRef();
const message = React.createRef();
const email = React.createRef();

function SendComment() {
  const saveData = async (coleccion, user, message, email) => {
    try {
      await addDoc(collection(db, coleccion), {
        user: user,
        message: message,
        email: email,
      });
      console.log("Guardamos el comentario");
      window.location.reload();
    } catch (error) {
      console.log("Error escribiendo tu mensaje", error);
    }
  };

  const addComment = () => {
    saveData(
      "comments",
      user.current.value,
      message.current.value,
      email.current.value
    );
  };

  return (
    <div>
      <p className="titulo-home">Nos Interesa Saber tu Opinión</p>
      <Form className="container form">
        <Form.Group className="mb-3" id="formName">
          <Form.Label className="form-label">Nombre</Form.Label>
          <Form.Control
            ref={user}
            size="sm"
            type="text"
            id="user"
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" id="formMail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            ref={email}
            size="sm"
            type="email"
            placeholder="name@example.com"
            id="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" id="formMessage">
          <Form.Label className="form-label">
            Cuéntanos de tu experiencia en Nigiri
          </Form.Label>
          <Form.Control
            ref={message}
            size="sm"
            as="textarea"
            rows={3}
            id="message"
          />
        </Form.Group>
        <Form.Group className="container-boton" id="formsubmit">
          <Button
            onClick={() => addComment()}
            className="button-enviar"
            size="sm"
            variant="dark"
          >
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SendComment;
