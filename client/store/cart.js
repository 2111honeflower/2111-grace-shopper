import axios from "axios"
import Axios from "axios"


//ACTION TYPES

const GET_CART = "GET_CART"
const ADD_TO_CART = "ADD_TO_CART"

//ACTION CREATORS
export const getCart = (cart) => {
  return {
    type: GET_CART,
    cart
  }
}

export const addToCart = (movie, quantity = 1) => ({
  type: ADD_TO_CART,
  movie,
  quantity
})

//THUNKS

export const fetchCart = (cartId) => {
  return async (dispatch) => {
    try {
      const { data } = await Axios.get(`/api/cart/${cartId}`)
      dispatch(getCart(data))
    } catch (err) {
      console.error("error in cart thunk", err)
    }
  }
}

//this needs work!!
export const addingToCart = (movieId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/cart/${movieId}`)
      dispatch(addToCart(data))
    } catch(err) {
      console.error(`Adding ${movieId} was unsucessful`, err)
    }
  }
}


//REDUCER

const initialState = []

export default function getCartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
    case ADD_TO_CART:
      return [action.cart]
      default:
        return state
  }
}

