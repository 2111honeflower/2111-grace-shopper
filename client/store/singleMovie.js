import axios from 'axios';

//action types
const SET_SINGLE_MOVIE = 'SET_SINGLE_MOVIE';

//action creators
export const setSingleMovie = (movie) => ({
  type: SET_SINGLE_MOVIE,
  movie,
});

//thunks
export const fetchSingleMovie = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/movies/${id}`);
      dispatch(setSingleMovie(data));
    } catch (err){
      console.log(err);
    }
  };
};

const initialState = {};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_MOVIE:
      return action.movie;
    default:
      return state;
  }
}
