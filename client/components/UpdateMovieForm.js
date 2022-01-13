import React from "react";
import { connect } from "react-redux";

import { updateMovie } from "../store/singleMovie";

class UpdateMovieForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price: null, //IS NULL CORRECT?
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movie.name !== this.props.movie.name ||
      prevProps.movie.price !== this.props.movie.price) {
      this.setState({
        name: this.props.movie.name || '',
        price: this.props.movie.price || ''
      });
    }
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.updateMovie({ ...this.props.movie, ...this.state });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, price } = this.state;
    return (
      <div>
        <h3>Update Movie:</h3>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={this.handleChange} value={name} />
            <label htmlFor="price">Price:</label>
            <input type="text" name="price" onChange={this.handleChange} value={price} />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapState = (state) => ({
  movie: state.movie
});

const mapDispatch = (dispatch) => ({
  updateMovie: (movie) => dispatch(updateMovie(movie))
});

export default connect(mapState, mapDispatch)(UpdateMovieForm);
