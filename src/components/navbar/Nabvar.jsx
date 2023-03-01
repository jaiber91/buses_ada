import React from "react";
import "./Navbar.css";
import imgBus from "../../assets/img/bus.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={imgBus} alt="logo" />
        </Link>
        <ul className="navbar__items">
         
          <li>cancelaciones</li>
          <li>rutas</li>
          <li>ayuda</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
