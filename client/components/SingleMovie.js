import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addingToCart } from "../store/cart";
import { fetchSingleMovie } from "../store/singleMovie";

class SingleMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  addToCart() {
    let movie = this.props.movie;
    let products = [];
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    }
    products.push(movie);
    localStorage.setItem("products", JSON.stringify(products));
    console.log(localStorage);
    // this.props.addMovieToCart(this.props.movie, this.state.quantity)
  }

  render() {
    const movie = this.props.movie;
    return (
      <div className="single-movie">
        <img src={movie.imageUrl} />

        <div id="single-movie-details">
          <h1>{movie.name}</h1>
          <h3>Price: ${movie.price}</h3>
          <h2>Description: {movie.description}</h2>
          <p>Genre: {movie.genre}</p>
          <input type="number" min="1" max="100" value="1" />
          <button type="submit" onClick={this.addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  movie: state.movie,
});

const mapDispatch = (dispatch) => ({
  getMovie: (id) => dispatch(fetchSingleMovie(id)),
  addMovieToCart: (movie, quantity) => dispatch(addingToCart(movie, quantity)),
});

export default connect(mapState, mapDispatch)(SingleMovie);
