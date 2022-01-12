import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { fetchSingleMovie } from "../store/singleMovie";

class SingleMovie extends React.Component {

  componentDidMount(){
    this.props.getMovie(this.props.match.params.id);
  }

  render(){

  }
}

const mapState = (state) => ({
  movie: state.movie
});

const mapDispatch = (dispatch) => ({
  getStudent: (id) => dispatch(fetchSingleMovie(id))
});

export default connect(mapState, mapDispatch)(SingleMovie);
