import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addingToCart } from "../store/cart";
import { fetchSingleMovie } from "../store/singleMovie";

class SingleMovie extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  addToCart(event) {
    event.preventDefault();
    let quantity =
      document.getElementById("single-movie-qty").elements[0].value;
    let movie = this.props.movie;
    let products = [];
    let double = false;
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
    }
    products.filter((cartMovie) => {
      if (cartMovie.id === movie.id) {
        let oldQty = Number(cartMovie.qty);
        let newQty = oldQty + Number(quantity);
        cartMovie.qty = `${newQty}`;
        double = true;
      }
    });
    if (!double) {
      products.push({ ...movie, qty: quantity });
    }

    localStorage.setItem("products", JSON.stringify(products));
    document.getElementById("single-movie-qty").reset();
    // this.forceUpdate()
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
          <form id="single-movie-qty">
            <input type="number" min="1" max="10" id="input-qty" />
            <input
              type="submit"
              value="Add To Cart"
              onClick={(e) => this.addToCart(e)}
              id="input-button"
            />
          </form>
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
