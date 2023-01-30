import { productActionTypes } from "../actionTypes/productActionTypes";
export const setProducts = (products) => {
  return {
    type: productActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: productActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: productActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
