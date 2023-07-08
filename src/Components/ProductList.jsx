import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img src={product.image} alt={product.title} />
          </Link>
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
