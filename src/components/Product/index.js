import React from 'react';

import './Product.css';

const Product = ({ img }) => {
  return (
    <div className='product'>
      <div className='product-browser'>
        <div className='product-circle pc1'></div>
        <div className='product-circle pc2'></div>
        <div className='product-circle pc3'></div>
      </div>
      <img src={img} alt='app' className='product-image'/>
    </div>
  )
}

export default Product
