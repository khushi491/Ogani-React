import { put, all, takeEvery, call } from "redux-saga/effects";
import * as actionLabels from "../../actionLabels/actionLabels";

import {
  deleteProductRequestSuccess,
  deleteProductRequestFail,
  addCartRequestSuccess,
  addCartRequestFail,
} from "../../actions/index";

// eslint-disable-next-line require-yield
function* addCartRequestSaga({ payload }) {
  try {
    const response = yield call({ ...payload });

    if (response.status === 200) {
      yield put(
        addCartRequestSuccess({
          Product: response.data.data,
        })
      );
    } else {
      yield put(addCartRequestFail());
    }
  } catch (error) {
    yield put(addCartRequestFail());
  }
}
// eslint-disable-next-line require-yield
function* deleteProductRequestSaga({ payload }) {
  try {
    const response = yield delete { ...payload };
    if (response.status === 200) {
      yield put(
        deleteProductRequestSuccess({
          cartList: response.data.data,
        })
      );
    } else {
      yield put(deleteProductRequestFail());
    }
  } catch (error) {
    yield put(deleteProductRequestFail());
  }
}

export default function* rootsaga() {
  yield all([
    yield takeEvery(
      actionLabels.DELETE_PRODUCT_REQUEST,
      deleteProductRequestSaga
    ),
    yield takeEvery(actionLabels.ADD_CART_REQUEST, addCartRequestSaga),
  ]);
}
