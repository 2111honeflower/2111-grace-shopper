import axios from 'axios';

//action types
const SET_MOVIES = 'SET_MOVIES';

//action creators
export const setMovies = (movies) => ({
  type: SET_MOVIES,
  movies,
});

//thunks
export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/movies');
      dispatch(setMovies(data));
    } catch (err){
      console.log(err);
    }
  };
};

export const fetchCartMovies = (id) => {
  return async (dispatch) => {
    try{
      const { data } = await axios.get(`/api/${id}/movie-cart`)
      dispatch(setMovies(data))
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = [];

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.movies;
    default:
      return state;
  }
}
