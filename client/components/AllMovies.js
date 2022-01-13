import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { fetchMovies, deleteMovie } from "../store/movies";

class AllMovies extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.getMovies();
  }

  handleClick(id, event) {
    event.preventDefault();
    this.props.deleteMovie(id);
  }

  render(){
    const movieData = this.props.movies;
    const movieList = movieData.map(movie => (
      <Link to={`/movies/${movie.id}`} key={movie.id} >
        <h3>{movie.name}</h3>
        <img src={movie.imageUrl} />
        <p>Genre: {movie.genre}</p>
        <p>Price: ${movie.price}</p>
        <div>
          <button type="button" onClick={(e) => this.handleClick(movie.id, e)}>Delete</button>
        </div>
      </Link>
    ))

    return (
      <main>
        <h2>Movie List</h2>
        <div>
          {movieData.length > 1 ? movieList : "No Movies Available"}
        </div>
      </main>

    );
  }

}

const mapState = (state) => ({
  movies: state.movies
});

const mapDispatch = (dispatch) => ({
  getMovies: () => dispatch(fetchMovies()),
  deleteMovie: (id) => dispatch(deleteMovie(id))
});


export default connect(mapState, mapDispatch)(AllMovies);
