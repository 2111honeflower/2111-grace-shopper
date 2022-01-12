
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

}
