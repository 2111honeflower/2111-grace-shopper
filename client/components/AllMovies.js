
import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { fetchMovies } from "../store/movies";

class AllMovies extends React.Component {
  constructor(){
    componentDidMount(){
      this.props.getMovies();
    }
  }

  render(){
    const movieData = this.props.movies;
    const movieList =
  }

}

const mapState = (state) => ({
  movies: state.movies
});

const mapDispatch = (dispatch) => ({
  getMovies: () => dispatch(fetchMovies())
});


export default connect(mapState, mapDispatch)(AllMovies);
