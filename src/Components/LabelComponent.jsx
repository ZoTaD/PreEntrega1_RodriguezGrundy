import React, { useState, useEffect } from "react";
import carritoIcon from "../Components/images/javascript logo.png";
import carritoIcon2 from "../Components/images/4990671.png";
import carritoIcon3 from "../Components/images/java-logo-1.png";

const LabelComponent = ({ handleAddToCart }) => {
  const [itemCounts, setItemCounts] = useState({
    image1: 0,
    image2: 0,
    image3: 0,
  });

  useEffect(() => {
    // Calcular el total de elementos en el carrito
    const totalItems = Object.values(itemCounts).reduce(
      (total, count) => total + count,
      0
    );

    // Actualizar el contador del carrito en el componente NavBar
    handleAddToCart(totalItems);
  }, [itemCounts, handleAddToCart]);

  const handleIncrement = (image) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [image]: prevCounts[image] + 1,
    }));
  };

  const handleDecrement = (image) => {
    if (itemCounts[image] > 0) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [image]: prevCounts[image] - 1,
      }));
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <img
            src={carritoIcon}
            alt="Imagen 1"
            onClick={() => handleIncrement("image1")}
            style={{ width: "170px", paddingTop: "50px", margin: "0 auto" }}
          />
          <div>
            <button onClick={() => handleIncrement("image1")}>
              Agregar al carrito
            </button>
            <button onClick={() => handleDecrement("image1")}>
              Sacar del carrito
            </button>
            <span>{itemCounts.image1}</span>
          </div>
        </div>
        <div>
          <img
            src={carritoIcon2}
            alt="Imagen 2"
            onClick={() => handleIncrement("image2")}
            style={{ width: "100px", paddingTop: "50px", margin: "0 auto" }}
          />
          <div>
            <button onClick={() => handleIncrement("image2")}>
              Agregar al carrito
            </button>
            <button onClick={() => handleDecrement("image2")}>
              Sacar del carrito
            </button>
            <span>{itemCounts.image2}</span>
          </div>
        </div>
        <div>
          <img
            src={carritoIcon3}
            alt="Imagen 3"
            onClick={() => handleIncrement("image3")}
            style={{ width: "100px", paddingTop: "50px", margin: "0 auto" }}
          />
          <div>
            <button onClick={() => handleIncrement("image3")}>
              Agregar al carrito
            </button>
            <button onClick={() => handleDecrement("image3")}>
              Sacar del carrito
            </button>
            <span>{itemCounts.image3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelComponent;




