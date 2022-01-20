import axios from "axios";

//ACTION TYPES
const SET_MOVIES = "SET_MOVIES";
const CREATE_MOVIE = "CREATE_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";

//ACTION CREATORS
export const setMovies = (movies) => ({ type: SET_MOVIES, movies });
export const _deleteMovie = (movie) => ({ type: DELETE_MOVIE, movie });
export const _createMovie = (movie) => ({ type: CREATE_MOVIE, movie });

//THUNKS
export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/movies");
      dispatch(setMovies(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createMovie = (movie) => {
  return async (dispatch) => {
    try {
      const { data: created } = await axios.post("/api/movies", movie);
      dispatch(_createMovie(created));
    } catch (err) {
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

export const fetchCartMovies = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/${id}/movie-cart`);
      dispatch(setMovies(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export default function moviesReducer(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.movies;
    case CREATE_MOVIE:
      return [...state, action.movie];
    case DELETE_MOVIE:
      return state.filter((movie) => movie.id !== action.movie.id);
    default:
      return state;
  }
}
