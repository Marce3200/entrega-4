import React from "react";
import "./ReservaExitosa.css";

const ReservaExitosa = () => {
  return (
    <div className="contenedor-exito row ">
      <div className="text-center  mensaje col-2 container">
        <p className="titulo-re">
          Se ha realizado tu reserva <br />
          con exito
        </p>
        <p className="texto-descripcion-exito pt-2 p-5">
          {" "}
          Felicidades, hemos registrado tu reserva en nuestra base de datos.
          Recibirás un mail con la información de tu reserva a la brevedad.
          <br />
          <span className="adress"> Te esperamos en Providencia 2463 </span>
        </p>
      </div>
    </div>
  );
};

export default ReservaExitosa;
