import React from 'react';
import ProductCard from './ProductCard'; 


const ProductList = ({ products }) => {
  return (
    
    <div className="grid gap-6 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
       
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          inStock={product.inStock}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;