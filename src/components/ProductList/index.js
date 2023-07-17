import React from "react";

import "./ProductList.css";
import Product from "../Product";
import { products } from "../../data";
import { IoMdWarning } from "react-icons/io";

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="pl-info">
        <h1 className="pl-title">Reach beyond the stars. Here's Skye.</h1>
        <p className="pl-desc">
          Web development helps me connect the abstract pieces of my thoughts
          into a virtual canvas. I am able to express my creativity and
          aesthetic through all of my projects.
        </p>
        <span className="pl-warn">
          <IoMdWarning className="inline-icon" /> Product is not completed or
          under maintenance
        </span>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <div className="product-container">
            <a href={item.link} target="_blank" rel="noreferrer noopener">
              {item.isComplete ? (
                <h2 className="product-heading">{item.name}</h2>
              ) : (
                <h2 className="product-heading product-warning">
                  {item.name} <IoMdWarning className="product-icon" />
                </h2>
              )}
              <Product
                key={item.id}
                img={item.img}
                isComplete={item.isComplete}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
