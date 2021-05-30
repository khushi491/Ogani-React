import * as actionLabels from "../../actionLabels/actionLabels";
import { data } from "../../data";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = data, action) => {
  switch (action.type) {
    case actionLabels.ADD_CART_REQUEST_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      };
    case actionLabels.ADD_CART_REQUEST_FAIL:
      return {
        ...state,
        cart: [],
      };
    case actionLabels.GET_CART_REQUEST_SUCCESS:
      return {
        ...state,
        cartList: action.payload.cartList,
      };
    case actionLabels.GET_CART_REQUEST_FAIL:
      return {
        ...state,
        cartList: [],
      };
    case actionLabels.EDIT_CART_REQUEST_SUCCESS:
      return {
        ...state,
        cart: action.payload,
      };
    case actionLabels.EDIT_CART_REQUEST_FAIL:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
