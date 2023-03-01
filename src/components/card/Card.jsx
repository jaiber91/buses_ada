import { useState, useEffect } from 'react';
import './Card.css';
import Modal from '../modal/Modal';

const Card = ({ viaje }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [viajesGuardados, setViajesGuardados] = useState([]);

     // Leer el contenido del localStorage cuando se carga el componente
  useEffect(() => {
    const viajes = JSON.parse(localStorage.getItem("viajesGuardados")) || [];
    setViajesGuardados(viajes);
  }, []);

   // Actualizar la variable de estado y el localStorage al reservar un viaje
  const handleReservarClick = () => {
    const viajesActualizados = [...viajesGuardados, viaje];
    setViajesGuardados(viajesActualizados);
    localStorage.setItem("viajesGuardados", JSON.stringify(viajesActualizados));
    setModalOpen(true);
  };

  return (
    <div className="card">
      <h3>¡Viaje encontrado!</h3>
      <ul className="card__items">
        <li>Origen <p>{viaje.origen}</p></li>
        <li>Destino <p>{viaje.destino}</p></li>
        <li>Fecha de salida <p>{viaje.fecha_salida}</p></li>
        <li>Hora de salida <p>{viaje.hora_salida}</p></li>
        <li>Cupo <p>{viaje.cupos_disponibles}</p></li>
      </ul>
    <button onClick={handleReservarClick}>Reservar</button>
    <Modal 
    isOpen={modalOpen} 
    onClose={() => setModalOpen(false)} 
    /> 

    </div>
  );
};

export default Card;
