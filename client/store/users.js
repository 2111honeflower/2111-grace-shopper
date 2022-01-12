import axios from 'axios';

initialState = [];

// All users action type
const GET_USERS = 'GET_USERS';

// All users action creator
export const getUsers = (users) => ({
    type: GET_USERS,
    users,
})

// fetchUsers Thunk to get all the Users
export const fetchUsers = () => {
    return async dispatch => {
        try {
            // aliasing data as the variable name 'users'
            const { data: users } = await axios.get('/api/users')
            dispatch(getUsers(users))
        } catch(e) {
            console.log('fetchUsers thunk error!!', e)
        }
    }
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return action.users;
        default: 
            return state; 
    }
}