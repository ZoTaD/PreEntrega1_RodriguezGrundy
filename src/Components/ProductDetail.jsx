import React from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = ({ dataProductos }) => {
  const { productId } = useParams();
  const product = dataProductos.find((producto) => producto.id === parseInt(productId));

  return (
    <div>
      <h2>Product Detail</h2>
      {product ? (
        <>
          <p>Product ID: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetail;


