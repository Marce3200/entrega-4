import React from "react";
import Card from "react-bootstrap/Card";
import "../Blog/comments.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const Comments = (props) => {
  return (
    <Container>
      <Col className="cards-comment container">
        <Card className="comment">
          <Card.Body>
            <Card.Title className="titulo-card">{props.user}</Card.Title>
            <Card.Text className="text-card">{props.message}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default Comments;
