import React from "react";
import Card from "react-bootstrap/Card";
import "../Blog/comments.css";

const Comments = (props) => {
  return (
    <div>
      <div className="cards-favoritos container">
        <Card className="card-favorito" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="titulo-card">{props.user}</Card.Title>
            <Card.Text className="text-card">{props.message}</Card.Text>
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Comments;
