import React, { useEffect, useState } from 'react';
import ItemListContainer from './ItemListContainer';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        setData(jsonData.products);
      } catch (error) {
        console.log('Error al obtener los datos de la API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <ItemListContainer data={data} />
    </div>
  );
};

export default App;



