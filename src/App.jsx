import React, { useEffect, useReducer, useState } from "react";
import { TYPES } from "./actions/cartActions";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import { cartInitialState, cartReducer } from "./reducer/cartReducer";
import "./app.css";

const App = () => {
  const [productos, setProducts] = useState([]);
  async function callApi() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    callApi();
  }, []);

  /*   console.log(cartInitialState); */
  cartInitialState.products = productos;
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const { products, cart } = state;

  /*   console.log(state); */

  const addToCart = (id) => dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  const removeFromCart = (id, all = false) =>
    dispatch(
      all
        ? { type: TYPES.REMOVE_ALL_FROM_CART, payload: id }
        : { type: TYPES.REMOVE_FROM_CART, payload: id }
    );
  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

  const [displayCart, setDisplayCart] = useState(false);
  const handleDisplayCart = () => {
    displayCart ? setDisplayCart(false) : setDisplayCart(true);
    /*     console.log(displayCart); */
  };

  return (
    <div>
      <header>
        <h1 className="title">
          Fake<span>-Store</span>
        </h1>
        <button className="cart" onClick={() => handleDisplayCart()}>
          <p>Cart</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-shopping-cart"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="19" r="2" />
            <circle cx="17" cy="19" r="2" />
            <path d="M17 17h-11v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
          </svg>
        </button>
        {displayCart ? (
          <>
            <div className="displayedHeader">
              <button className="displayedHeader__button">Buy</button>
              <p className="displayedHeader__total">Total = ${state.cart.map(product => parseInt(product.price*product.quantity)).reduce((prev, curr)=> prev + curr, 0)} dls</p>
              <button
                className="displayedHeader__button"
                onClick={() => {
                  clearCart(), setDisplayCart(false);
                }}
              >
                Clear Cart
              </button>
            </div>

            <div className="displayedCart">
              {cart.map((cartProduct, i) => (
                <Cart
                  key={i}
                  data={cartProduct}
                  removeFromCart={removeFromCart}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </>
        ) : null}
      </header>
      <main>
        {products.map((product) => (
          <Products key={product.id} data={product} addToCart={addToCart} />
        ))}
      </main>
    </div>
  );
};
export default App;
