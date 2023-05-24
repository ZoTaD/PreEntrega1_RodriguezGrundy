import React from "react";
import carritoIcon from "../Components/images/javascript logo.png";
import carritoIcon2 from "../Components/images/4990671.png";
import carritoIcon3 from "../Components/images/java-logo-1.png";

const LabelComponent = ({ handleImageClick }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={carritoIcon}
          alt="Imagen 1"
          onClick={handleImageClick}
          style={{ width: "170px",paddingTop: "50px", margin: "0 auto" }}
        />
        <img
          src={carritoIcon2}
          alt="Imagen 2"
          onClick={handleImageClick}
          style={{ width: "100px",paddingTop: "50px", margin: "0 auto" }}
        />
        <img
          src={carritoIcon3}
          alt="Imagen 3"
          onClick={handleImageClick}
          style={{ width: "100px",paddingTop: "50px", margin: "0 auto" }}
        />
      </div>
    </div>
  );
};

export default LabelComponent;








