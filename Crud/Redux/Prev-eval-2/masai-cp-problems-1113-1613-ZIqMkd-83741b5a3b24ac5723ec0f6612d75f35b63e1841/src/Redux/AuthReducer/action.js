import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
export const login = () => {

  const loginRequest = () => {
    return { type: LOGIN_REQUEST }
  }
  const loginSuccess = (payload) => {
    return { type: LOGIN_SUCCESS, payload }
  }
  const loginFailure = () => {
    return { type: LOGIN_FAILURE }
  }

  return { loginRequest, loginSuccess, loginFailure }
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
