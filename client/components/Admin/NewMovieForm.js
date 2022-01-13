import React from "react";
import { connect } from "react-redux";

import { createMovie } from "../../store/movies";

class NewMovieForm extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "",
      price: null, //IS THIS CORRECT STARTING VALUE?
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.createMovie({...this.state});
    this.setState({
      name: "",
      price: null //USED AGAIN HERE
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, price } = this.state;
    return (
      <div>
        <h2>Add New Movie:</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={this.handleChange} value={name} />
            <label htmlFor="price">Price:</label>
            <input type="text" name="price" onChange={this.handleChange} value={price} />
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  createMovie: (movie) => dispatch(createMovie(movie)),
});

export default connect(null, mapDispatch)(NewMovieForm);
