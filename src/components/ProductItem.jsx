import React from 'react';

const ProductItem = (props) => {
  const product = props.product;
  return (
    <div>
      <h3>{product.ten}</h3>
      <h4>{product.gia}</h4>
    </div>
  );
}

export default ProductItem;
