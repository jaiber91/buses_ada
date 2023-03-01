import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";
import iconDelete from "../../assets/icons/delete.png";

const Modal = ({ isOpen, onClose }) => {
  const [viajesGuardados, setViajesGuardados] = useState([]);

  const navigate = useNavigate();

  // cuando se abre el componente lee lo que hay en el  localStorage
  useEffect(() => {
    const viajes = JSON.parse(localStorage.getItem("viajesGuardados")) || [];
    setViajesGuardados(viajes);
  }, [isOpen]);

  //Cerrando el sidebar
  const handleBackClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  //Para el botón de cantidad sin depender del estado
  const handleCantidadChange = (index, cantidad) => {
    setViajesGuardados(
      viajesGuardados.map((viaje, i) => {
        if (index === i) {
          return { ...viaje, cantidad };
        }
        return viaje;
      })
    );
  };

  //Eliminar una card del sidebar y actualizar el localStorage
  const handleEliminarClick = (index) => {
    const viajesActualizados = [...viajesGuardados];
    viajesActualizados.splice(index, 1);
    setViajesGuardados(viajesActualizados);
    localStorage.setItem("viajesGuardados", JSON.stringify(viajesActualizados));
  };

  // Guardar los datos en el localStorage antes de navegar a la ruta de detalles
  const handleConfirmarClick = () => {
    localStorage.setItem("viajesGuardados", JSON.stringify(viajesGuardados));
    navigate("/detailsbooking", {
      state: { viajesGuardados },
    });
  };

  return (
    <>
      {isOpen && (
        <div className="sidebar">
          <div className="sidebar__content">
            <button className="sidebar__close" onClick={onClose}>
              X
            </button>
            <ul className="sidebar__items">
              {viajesGuardados.map((viaje, index) => (
                <div className="sidebar__details" key={index}>
                  <li>
                    Origen: <p>{viaje.origen}</p>{" "}
                  </li>
                  <li>
                    Destino: <p>{viaje.destino}</p>{" "}
                  </li>
                  <li className="sidebar__counter">
                    Cantidad:
                    <input
                      type="number"
                      min="1"
                      value={viaje.cantidad}
                      onChange={(event) =>
                        handleCantidadChange(index, event.target.value)
                      }
                    />
                  </li>
                  <li className="sidebar__delete">
                    <button
                      className="sidebar__delete--btn"
                      onClick={() => handleEliminarClick(index)}
                    >
                      <img src={iconDelete} alt="icono elminar" />
                    </button>
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="sidebar__backdrop" onClick={handleBackClick} />
          <button onClick={handleConfirmarClick}>Confirmar Reserva</button>
        </div>
      )}
    </>
  );
};

export default Modal;
