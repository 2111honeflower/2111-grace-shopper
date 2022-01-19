import axios from "axios";
import history from "../history";

const TOKEN = "token";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";
const SET_CART = "SET_CART";

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => {

  return { type: SET_AUTH, auth };
};

const setCart = (cart) => ({ type: SET_CART, cart });
/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);

  if (token) {
    const res = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
console.log(res.data, "res.data")
    return dispatch(setAuth(res.data));
  }
};

export const createCart = (userId) => async (dispatch) => {
  try {
    const cart = await axios.post(`/api/cart/${userId}`);

    return dispatch(setCart(cart));
  } catch (err) {
    console.error("createCart thunk", err);
  }
};

export const authenticateLogin =
  (password, email, method) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, { password, email });
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const authenticateSignup =
  (userName, password, email, method) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, {
        userName,
        password,
        email,
      });
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (authError) {
      return dispatch(setAuth({ error: authError }));
    }
  };

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  history.push("/");
  return {
    type: SET_AUTH,
    auth: {},
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case SET_CART:
      return action.cart;
    default:
      return state;
  }
}
