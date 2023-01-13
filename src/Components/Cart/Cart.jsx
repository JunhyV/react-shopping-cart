import React from "react";
import "./cart.css";

const Cart = ({ data, removeFromCart, addToCart }) => {
  const { title, price, image, id, quantity } = data;
  return (
    <div className="productOnCart">
      <img src={image} alt="product-img" className="productOnCart__img" />
      <div className="productOnCart__product">
        <h2 className="productOnCart__product-title">{title}</h2>
        <p className="productOnCart__product-price">
          ${price} dls x{quantity} = ${parseInt(price * quantity)}
        </p>
      </div>
      <div className="productOnCart__buttons">
        <div className="buttons">
          <button className="buttons__add-remove" onClick={() => addToCart(id)}>
            +
          </button>
          <button
            className="buttons__add-remove"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
        </div>
        <svg
          onClick={() => removeFromCart(id, true)}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-minus"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#363073"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      </div>
    </div>
  );
};

export default Cart;
