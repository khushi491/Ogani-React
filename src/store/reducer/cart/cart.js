import * as actionLabels from "../../actionLabels/actionLabels";
const initialState = {
  state: { cartItems: [] },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actionLabels.ADD_CART_REQUEST_SUCCESS:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === product.product ? item : x
          ),
        };
      }

      return { cartItems: [...state.cartItems, item] };

    case actionLabels.ADD_CART_REQUEST_FAIL:
      return {
        ...state,
        cart: [],
      };
    case actionLabels.GET_CART_REQUEST_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };
    case actionLabels.GET_CART_REQUEST_FAIL:
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case actionLabels.DELETE_PRODUCT_REQUEST_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      };
    case actionLabels.DELETE_PRODUCT_REQUEST_FAIL:
      return {
        ...state,
        cart: {},
      };
    default:
      return state;
  }
};
