import React from "react";
import Card from "react-bootstrap/Card";
import "../Blog/comments.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Comments = (props) => {
  return (
    <Container>
      <Row className="cards-comment container">
        <Col>
        <Card className="comment" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="titulo-card">{props.user}</Card.Title>
            <Card.Text className="text-card">{props.message}</Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Comments;
