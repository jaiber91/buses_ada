import React, { useState } from "react";
import "./Search.css";
import data from "../../data/data";
import Card from "../card/Card";

const Search = () => {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [fecha, setFecha] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda] = useState("");

  return (
    <>
      <section className="search">
        <div className="search__filter">
          <label htmlFor="origen">Origen</label>
          <select
            id="origen"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
          >
            <option value="">Seleccione origen</option>
            {data.map((viaje) => (
              <option key={viaje.id} value={viaje.origen}>
                {viaje.origen}
              </option>
            ))}
          </select>

          <label htmlFor="destino">Destino</label>
          <select
            id="destino"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          >
            <option value="">Seleccione destino</option>
            {data.map((viaje) => (
              <option key={viaje.id} value={viaje.destino}>
                {viaje.destino}
              </option>
            ))}
          </select>

          <label htmlFor="fecha">Fecha</label>
          <input
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />

          <button
            onClick={() => {
              const viaje = data.find(
                (v) =>
                  v.origen === origen &&
                  v.destino === destino &&
                  new Date(v.fecha_salida).getTime() ===
                    new Date(fecha).getTime()
              );

              if (viaje) {
                setResultadoBusqueda(<Card viaje={viaje} />);
              } else {
                setResultadoBusqueda("¡No hay viajes disponibles!");
              }
            }}
          >
            Buscar
          </button>
        </div>
        <div className="search__result">{resultadoBusqueda}</div>
      </section>
    </>
  );
};

export default Search;
