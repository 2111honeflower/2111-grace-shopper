import axios from 'axios';

//action types
const SET_MOVIES = 'SET_MOVIES';
const DELETE_MOVIE = 'DELETE_MOVIE'

//action creators
export const setMovies = (movies) => ({
  type: SET_MOVIES,
  movies
});

const _deleteMovie = (movie) => ({
  type: DELETE_MOVIE,
  movie
});

//thunks
export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get('/api/movies');
      dispatch(setMovies(data));
    } catch (err){
      console.log(err);
    }
  };
};

export const deleteMovie = (id) => {
  return async (dispatch) => {
    try {
      const { data: movie } = await axios.delete(`/api/movies/${id}`);
      dispatch(_deleteMovie(movie));
    } catch (err) {
      console.log(err);
    }
  };
};


const initialState = [];

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.movies;
    case DELETE_MOVIE:
      return state.filter(movie => movie.id !== action.movie.id);
    default:
      return state;
  }
}
