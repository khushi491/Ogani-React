import * as actionLables from "../../actionLabels/actionLabels";

//ADD INTO CART
export const addCartRequest = (product) => {
  return {
    type: actionLables.ADD_CART_REQUEST,
    payload: product,
  };
};
export const addCartRequestSuccess = (product) => {
  return {
    type: actionLables.ADD_CART_REQUEST_SUCCESS,
    payload: product,
  };
};
export const addCartRequestFail = () => {
  return {
    type: actionLables.ADD_CART_REQUEST_FAIL,
  };
};

//EDIT CART

export const editCartRequest = (product) => {
  return {
    type: actionLables.EDIT_CART_REQUEST,
    payload: product,
  };
};
export const editCartRequestSuccess = (product) => {
  return {
    type: actionLables.EDIT_CART_REQUEST_SUCCESS,
    payload: product,
  };
};
export const editCartRequestFail = () => {
  return {
    type: actionLables.EDIT_CART_REQUEST_FAIL,
  };
};

//GET CART

export const getCartRequest = (product) => {
  return {
    type: actionLables.GET_CART_REQUEST,
    payload: product,
  };
};
export const getCartRequestSuccess = (product) => {
  return {
    type: actionLables.GET_CART_REQUEST_SUCCESS,
    payload: product,
  };
};
export const getCartRequestFail = () => {
  return {
    type: actionLables.GET_CART_REQUEST_FAIL,
  };
};
