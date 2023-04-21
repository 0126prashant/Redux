import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";

export const getProducts = () => {
  const getProductRequest = () => {
    return { type: GET_PRODUCT_REQUEST }
  }
  const getProductSuccess = (payload) => {
    return { type: GET_PRODUCT_SUCCESS, payload }
  }
  const getProductFailure = () => {
    return { type: GET_PRODUCT_FAILURE }
  }
  return { getProductRequest, getProductFailure, getProductSuccess }
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
