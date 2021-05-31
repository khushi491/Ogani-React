import { all } from "redux-saga/effects";

import shopSagas from "./shop/shop";
import cartSaga from "./cart/cart";

export default function* rootsaga() {
  yield all[(shopSagas(), cartSaga())];
}
