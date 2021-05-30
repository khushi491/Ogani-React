import * as actionLabels from "../../actionLabels/actionLabels";
import { data } from "../../data";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = data, action) => {
  switch (action.type) {
    case actionLabels.GET_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        dataList: action.payload.dataList,
      };
    case actionLabels.GET_DATA_REQUEST_FAIL:
      return {
        ...state,
        dataList: [],
      };
    case actionLabels.GET_DATA_BY_CATEGORY_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload.dataList,
      };

    default:
      return state;
  }
};
