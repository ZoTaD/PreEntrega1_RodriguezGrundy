import React, { useState } from "react";
import CartWidget from "./CartWidget";
import LabelComponent from "./LabelComponent";
import "./LabelComponent.css";

const NavBar = () => {
  const [itemCount, setItemCount] = useState(0);

  const handleImageClick = () => {
    setItemCount(itemCount + 1);
  };

  return (
    <nav className="navMenu">
      <div className="titleContainer">
        <h1>TIENDA DE PROGRAMACION</h1>
      </div>
      <div className="menuContainer">
        <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
          <li style={{ marginRight: "10px" }}>
            <a href="#inicio">Inicio</a>
          </li>
          <li style={{ marginRight: "10px" }}>
            <a href="#categorias">Categorías</a>
          </li>
          <li>
            <CartWidget itemCount={itemCount} />
          </li>
        </ul>
      </div>
      <div className="galeriaContainer">{/* ... */}</div>
      <LabelComponent handleImageClick={handleImageClick} />
    </nav>
  );
};

export default NavBar;



