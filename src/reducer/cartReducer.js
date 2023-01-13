import { TYPES } from "../actions/cartActions";

export const cartInitialState = {
  products: [],
  cart: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let identificarProducto = state.products.find(
        (product) => product.id === action.payload
      );
      /*         console.log(identificarProducto); */
      let articuloEnCarro = state.cart.find(
        (articulo) => articulo.id === identificarProducto.id
      );
      /*         console.log(articuloEnCarro); */
      return articuloEnCarro
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === identificarProducto.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...identificarProducto, quantity: 1 }],
          };
    }
    /*         return console.log(state) */
    case TYPES.REMOVE_FROM_CART: {
      let removerProducto = state.cart.find(
        (product) => product.id === action.payload
      );
      return removerProducto.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === removerProducto.id
                ? { ...item, quantity: item.quantity - 1 }
                : { ...item }
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      }
    }
    case TYPES.CLEAR_CART: {
      return cartInitialState;
    }
    default:
      return state;
  }
}
