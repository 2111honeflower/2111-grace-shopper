import Axios from "axios"


//ACTION

const GET_CART = "GET_CART"

export const getCart = (cart) => {
  return {
    type: GET_CART,
    cart
  }
}


//THUNK

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


//REDUCER

const initialState = []

export default function getCartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart
      default:
        return state
  }
}

