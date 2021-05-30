import { put, all, takeEvery, call } from "redux-saga/effects";
import * as actionLabels from "../../actionLabels/actionLabels";
import { data } from "../../data";
import {
  getDataRequestSuccess,
  getDataRequestFail,
  getDataByCategoryRequestSuccess,
  getDataByCategoryRequestFail,
} from "../../actions/index";

function* getDataRequestSaga() {
  try {
    const response = yield call(data);
    if (response.status === 200) {
      yield put(
        getDataRequestSuccess({
          ShopData: response.data,
        })
      );
    } else {
      yield put(getDataRequestFail());
    }
  } catch (error) {
    yield put(getDataRequestFail());
  }
}

function* getDataByCategoryRequestSaga() {
  try {
    const response = yield call(data);
    if (response.status === 200) {
      yield put(
        getDataByCategoryRequestSuccess({
          ShopData: response.data,
        })
      );
    } else {
      yield put(getDataByCategoryRequestFail());
    }
  } catch (error) {
    yield put(getDataByCategoryRequestFail());
  }
}

export default function* rootsaga() {
  yield all([
    yield takeEvery(actionLabels.GET_DATA_REQUEST, getDataRequestSaga),
    yield takeEvery(
      actionLabels.GET_DATA_BY_CATEGORY_REQUEST,
      getDataByCategoryRequestSaga
    ),
  ]);
}
