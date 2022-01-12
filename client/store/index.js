import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import moviesReducer from './movies';
import movieReducer from './singleMovie';
import usersReducer from './users';
import singleUserReducer from './user';

const reducer = combineReducers({
  auth,
  movies: moviesReducer,
  movie: movieReducer,
  usersReducer,
  singleUserReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from './auth';
