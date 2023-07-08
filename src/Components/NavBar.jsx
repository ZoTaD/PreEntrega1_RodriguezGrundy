import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';
import axios from "axios";

const NavBar = ({ dataProductos, handleAddToCart, handleRemoveFromCart, handleImageClick }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCartClick = (producto) => {
    handleAddToCart(producto);
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCartClick = (producto) => {
    if (cartCount > 0) {
      handleRemoveFromCart(producto);
      setCartCount(cartCount - 1);
    }
  };

  return (
    <nav className="navMenu">
      <div className="titleContainer">
        <h1>TIENDA DE PROGRAMACIÓN</h1>
        <div className="cartContainer">
          <FaShoppingCart className="cartIcon" />
          <div className="cartCount">{cartCount}</div>
        </div>
      </div>
      <div className="menuContainer">
        {/* Aquí puedes agregar otros elementos del menú */}
      </div>
      <div className="galeriaContainer">
        {dataProductos.map((producto) => (
          <div key={producto.id} className="productoItem">
            <a href="#" onClick={() => handleImageClick(producto)}>
              <img src={producto.thumbnail} alt={producto.title} />
            </a>
            <h3>{producto.title}</h3>
            <p>Precio: ${producto.price}</p>
            <button onClick={() => handleAddToCartClick(producto)}>Agregar al carrito</button>
            <button onClick={() => handleRemoveFromCartClick(producto)}>Sacar del carrito</button>
          </div>
        ))}
      </div>
    </nav>
  );
};

const App = () => {
  const [dataProductos, setDataProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const jsonData = response.data.products;
        setDataProductos(jsonData);
      } catch (error) {
        console.log('Error al obtener los datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (producto) => {
    // Lógica para agregar al carrito
    console.log('Agregar al carrito:', producto);
  };

  const handleRemoveFromCart = (producto) => {
    // Lógica para quitar del carrito
    console.log('Sacar del carrito:', producto);
  };

  const handleImageClick = (producto) => {
    // Lógica para redirigir a la descripción del producto
    console.log('Imagen clickeada:', producto);
  };

  return (
    <div className="App">
      <NavBar
        dataProductos={dataProductos}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleImageClick={handleImageClick}
      />
    </div>
  );
};

export default App;








