import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom" style={{ backgroundColor: 'black', color: 'white'  }}>
    <div className="container">
      <a className="navbar-brand" href="/">INICIO</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/productos/hamburguesas">HAMBURGUESAS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/productos/bebidas">BEBIDAS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/productos/dips">DIPS</Link>
          </li>


          <li className="nav-item">
              <div className="nav-link active cart-container">
               <CartWidget/>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
}

export default NavBar;