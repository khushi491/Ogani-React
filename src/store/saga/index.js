import { all } from "redux-saga/effects";

import shopSagas from "./shop/shop";

export default function* rootsaga() {
  yield all(shopSagas());
}
