import React, {useState, useEffect} from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
    const [viajesGuardados, setViajesGuardados] = useState([]);

    //llamando la lista de viajes guardados en el localStorage
    useEffect(() => {
        const viajes = JSON.parse(localStorage.getItem('viajesGuardados')) || [];
        setViajesGuardados(viajes);
      }, [isOpen]);
  
    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      };

  return (
    <>
      {isOpen && (
        <div className="sidebar">
          <div className="sidebar__content">
            <button className="sidebar__close" onClick={onClose}>
              X
            </button>
            <ul>
              {viajesGuardados.map((viaje, index) => (
                <li key={index}>
                 <ul>
                    <li>Origen: {viaje.origen}</li>
                    <li>Destino: {viaje.destino}</li>
                    
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar__backdrop" onClick={handleBackdropClick} />
        </div>
      )}
    </>
  );
};

export default Modal;
