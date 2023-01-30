import { productActionTypes } from "../actionTypes/productActionTypes";
const initialState = {
  products: [],
  product: {},
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    case productActionTypes.SELECTED_PRODUCT:
      return { ...state, product: payload };
    case productActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, product: {} };
    default:
      return state;
  }
};
