import * as actionLables from "../../actionLabels/actionLabels";

export const getDataRequest = () => {
  return {
    type: actionLables.GET_DATA_REQUEST,
  };
};
export const getDataRequestSuccess = () => {
  return {
    type: actionLables.GET_DATA_REQUEST_SUCCESS,
  };
};
export const getDataRequestFail = () => {
  return {
    type: actionLables.GET_DATA_REQUEST_FAIL,
  };
};
export const getDataByCategoryRequest = (category) => {
  return {
    type: actionLables.GET_DATA_BY_CATEGORY_REQUEST,
    category: category,
  };
};
export const getDataByCategoryRequestSuccess = (category) => {
  return {
    type: actionLables.GET_DATA_BY_CATEGORY_REQUEST_SUCCESS,
    category: category,
  };
};
export const getDataByCategoryRequestFail = () => {
  return {
    type: actionLables.GET_DATA_BY_CATEGORY_REQUEST_FAIL,
  };
};
