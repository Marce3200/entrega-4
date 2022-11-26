import React from "react";
import "../ErrorPage/errorpage.css";

const ErrorPage = () => {
  return (
    <div className="contenedor-error row ">
      <div className="text-center  mensaje col-2 container">
        <p className="titulo-re">
          Error 404: <br />
          Algo no funciona!
        </p>
        <p className="texto-descripcion-reserva pt-2 p-5">
          {" "}
          Escribanos a la sección contacto y trataremos de resolverlo.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
