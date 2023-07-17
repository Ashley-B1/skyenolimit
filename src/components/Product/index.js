import React from "react";

import "./Product.css";

const Product = ({ img, isComplete }) => {
  return (
    <div className="product">
      <div className="product-browser">
        <div className="product-circle pc1"></div>
        <div className="product-circle pc2"></div>
        <div className="product-circle pc3"></div>
      </div>
      {isComplete ? (
          <img src={img} alt="app" className="product-image" />
      ) : (
        <div className="wrapper">
          <img src={img} alt="app" className="product-image" />
        </div>
      )}
    </div>
  );
};

export default Product;
