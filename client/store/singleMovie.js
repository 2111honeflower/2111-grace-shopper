import axios from 'axios';

//action types
const SET_SINGLE_MOVIE = "SET_SINGLE_MOVIE";
const UPDATE_MOVIE = "UPDATE_MOVIE";

//action creators
export const setSingleMovie = (movie) => ({
  type: SET_SINGLE_MOVIE,
  movie
});

export const _updateMovie = (movie) => ({
  type: UPDATE_MOVIE,
  movie
});

//thunks
export const fetchSingleMovie = (id) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`/api/movies/${id}`);
      dispatch(setSingleMovie(data));
    } catch (error){
      console.log(error);
    }
  };
};

export const updateMovie = (movie) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(`/api/movies/${movie.id}`, movie);
      dispatch(_updateMovie(updated));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = {};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SINGLE_MOVIE:
      return action.movie;
    case UPDATE_MOVIE:
      return {...state, name: action.movie.name, price: action.movie.price};
    default:
      return state;
  }
}
