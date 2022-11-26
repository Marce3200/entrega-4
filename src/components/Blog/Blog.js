import React from "react";
import "./blog.css";
import SendComment from "./SendComment";
import Comments from "./Comments";
import { db } from "../Firestore";
import { collection, getDocs } from "firebase/firestore";
import { Container, Row, Col } from "react-bootstrap";

function Blog() {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    const readData = async (coleccion) => {
      try {
        const datos = await getDocs(collection(db, coleccion));

        const arrComents = datos.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setComments(arrComents);
        console.log(arrComents);
      } catch (error) {
        console.log("Error leyendo los datos: ,error");
      }
    };
    readData("comments");
  }, []);

  return (
    <Container>
      <SendComment />

      {comments.map((comment) => (
        <Comments
          key={comment.id}
          user={comment.user}
          message={comment.message}
        ></Comments>
      ))}
    </Container>
  );
}

export default Blog;
