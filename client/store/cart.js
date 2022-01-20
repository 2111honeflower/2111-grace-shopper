import axios from "axios";

//ACTION TYPES
const SET_CART = "SET_CART";
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";

//ACTION CREATORS
const setCart = (cart) => ({ type: SET_CART, cart });
const getCart = (cart) => ({ type: GET_CART, cart });
const addToCart = (movie) => ({ type: ADD_TO_CART, movie });

//THUNKS
export const createCart = (userId) => async (dispatch) => {
  try {
    const cart = await axios.post(`/api/cart/${userId}`);
    return dispatch(setCart(cart));
  } catch (err) {
    console.error("createCart thunk", err);
  }
};

export const fetchCart = (cartId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/cart/${cartId}`);

      dispatch(getCart(data));
    } catch (err) {
      console.error("fetchCart thunk", err);
    }
  };
};

//this needs work!!
export const addingToCart = (movieId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/users/cart/${movieId}`);
      dispatch(addToCart(data));
    } catch (err) {
      console.error(`Adding ${movieId} was unsucessful`, err);
    }
  };
};

//REDUCERS

export default function getCartReducer(state = [], action) {
  switch (action.type) {
    case GET_CART:
      return [...state, ...action.cart];
    case ADD_TO_CART:
      return [state, ...action.cart];
    case SET_CART: {
      const cart = action.cart.data;
      return [...state, cart];
    }
    default:
      return state;
  }
}
