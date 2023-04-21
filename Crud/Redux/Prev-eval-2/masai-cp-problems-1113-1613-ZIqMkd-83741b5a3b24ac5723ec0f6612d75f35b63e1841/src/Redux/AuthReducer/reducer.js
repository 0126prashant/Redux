import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"
const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: ""
}
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isloading: true }
        case LOGIN_SUCCESS:
            return { ...state, isloading: false, token: payload, isAuth: true }
        case LOGIN_FAILURE:
            return { ...state, isloading: false, isError: true }
        default:
            return state
    }
}


