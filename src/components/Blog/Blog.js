import React from 'react'
import "./blog.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';

const blog = () => {
  return (
    <div>
<p className="titulo-home">
          Nos Interesa Saber tu Opinión
        </p>
<div>
<Form className='container form'>
  
      <Form.Group className="mb-3" controlId="name">
        <Form.Label className='form-label'>Nombre</Form.Label>
        <Form.Control size="sm" type="name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='form-label'>Email address</Form.Label>
        <Form.Control size="sm" type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="date">
        <Form.Label className='form-label'>Fecha</Form.Label>
        <Form.Control size="sm" type="date"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='form-label'>Cuéntanos de tu experiencia en Nigiri</Form.Label>
        <Form.Control size="sm"  as="textarea" rows={3} />
      </Form.Group>
    </Form>
</div>

      <div className="cards-favoritos container">
       
        <Card className="card-favorito" style={{ width: "18rem" }}>
          
          <Card.Body>
            <Card.Title className="titulo-card">Julia Fernandez</Card.Title>
            <Card.Text className="text-card">
              S Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Card.Text>
            <Button className="button-home" variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className="card-favorito" style={{ width: "18rem" }}>
          
          <Card.Body>
            <Card.Title className="titulo-card">Juanito Perez</Card.Title>
            <Card.Text className="text-card">
            S Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
            </Card.Text>
            <Button className="button-home" variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>
        
        <Card className="card-favorito" style={{ width: "18rem" }}>
          
          <Card.Body className="card-body">
            <Card.Title className="titulo-card" >Daniela P.</Card.Title>
            <Card.Text className="text-card">
            S Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Card.Text>
            <Button className="button-home" variant="dark">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>



    

    </div>
  )
}

export default blog