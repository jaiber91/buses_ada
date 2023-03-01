import React from "react";
import { useLocation } from "react-router-dom";
import "./DetailsBooking.css";
import Navbar from "../../components/navbar/Nabvar";
import Footer from "../../components/footer/Footer";

const DetailsBooking = () => {
  const location = useLocation();
  const viajesGuardados = location.state?.viajesGuardados || [];

  return (
    <>
      <Navbar />
      <div className="detailsbooking">
        <h1>Estas son tus reservas</h1>
        {viajesGuardados && viajesGuardados.length > 0 ? (
          <ul>
            {viajesGuardados.map((viaje, index) => (
              <div className="detailsbooking__items" key={index}>
                <li>
                  Origen <p>{viaje.origen} </p>
                </li>
                <li>
                  Destino <p>{viaje.destino}</p>
                </li>
                <li>
                  Cantidad <p>{viaje.cantidad}</p>
                </li>
                <li>
                  Fecha de salida <p>{viaje.fecha_salida}</p>
                </li>
                <li>
                  Hora de salida <p>{viaje.hora_salida}</p>
                </li>
              </div>
            ))}
          </ul>
        ) : (
          <div>No hay viajes guardados</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DetailsBooking;
