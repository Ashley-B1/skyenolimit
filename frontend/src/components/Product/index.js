import React from 'react';

import './Product.css';

const Product = ({ img, link }) => {
  return (
    <div className='product'>
      <div className='product-browser'>
        <div className='product-circle'></div>
        <div className='product-circle'></div>
        <div className='product-circle'></div>
      </div>
      {/* <div className='app-snippet' style={{background: `url(${img}) center no-repeat cover`, height: '100vh'}}></div> */}
      <img src={img} alt='app' className='product-image'/>
    </div>
  )
}

export default Product
