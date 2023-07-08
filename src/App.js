import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './Components/NavBar';

const App = () => {
  const [dataProductos, setDataProductos] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const jsonData = response.data;
      setDataProductos(jsonData.products);
      console.log('Productos obtenidos de la API:', jsonData.products);
    } catch (error) {
      console.log('Error al obtener los datos de la API:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = (producto) => {
    // Lógica para agregar al carrito
    console.log('Producto agregado al carrito:', producto);
  };

  const handleRemoveFromCart = (producto) => {
    // Lógica para sacar del carrito
    console.log('Producto sacado del carrito:', producto);
  };

  const handleImageClick = (productoId) => {
    // Lógica para manejar el click en la imagen
    console.log('Se hizo click en la imagen del producto con ID:', productoId);
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


























