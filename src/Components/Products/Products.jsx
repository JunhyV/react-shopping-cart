import React from "react";
import "./product.css";

const Products = ({ data, addToCart }) => {
  const { id, image, price, title } = data;
  /*     console.log(data); */
  return (
    <div className="product">
      <img src={image} alt="product-img" className="product__img" />
      <h3 className="product__name">{title}</h3>
      <p className="product__price">${price} dls</p>
      <button className="product__add" onClick={() => addToCart(id)}>
        <h3>BUY!</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-shopping-cart-plus"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
          <path d="M15 6h6m-3 -3v6" />
        </svg>
      </button>
    </div>
  );
};

export default Products;
