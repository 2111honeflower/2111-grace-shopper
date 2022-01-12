import axios from 'axios';

initialState = {};

// Single users action type
const GET_SINGLE_USER = 'GET_SINGLE_USER';

// Single users action creator
export const getSingleUser = (user) => ({
    type: GET_SINGLE_USER,
    user,
})

// fetchSingleUser Thunk to get all the Users
export const fetchSingleUser = (id) => {
    return async dispatch => {
        try {
            // aliasing data as the variable name 'user'
            const { data: user } = await axios.get(`/api/users/${id}`)
            dispatch(getSingleUser(user))
        } catch(e) {
            console.log('fetchSingleUser thunk error!!', e)
        }
    }
}

//SingleUser Reducer
export default function singleUserReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SINGLE_USER:
            return action.user;
        default: 
            return state; 
    }
}