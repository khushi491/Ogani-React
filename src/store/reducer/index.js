import { combineReducers } from "redux";

import shopReducer from "./shop/shop";
import cartReducer from "./cart/cart";

const allReducer = combineReducers({
  shopReducer,
  cartReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
    state = undefined;
  }
  return allReducer(state, action);
};

export default rootReducer;
