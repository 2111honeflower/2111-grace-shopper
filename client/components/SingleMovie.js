import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addingToCart } from '../store/cart';
import { fetchSingleMovie } from '../store/singleMovie';

class SingleMovie extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: 1
    }
    this.addToCart = this.addToCart.bind(this)
  }
  componentDidMount() {
    this.props.getMovie(this.props.match.params.id);
  }

  addToCart() {
    this.props.addMovieToCart(this.props.movie, this.state.quantity)
  }

  render() {
    const movie = this.props.movie;
    return (
      <div>
        <h3>{movie.name}</h3>
        <img src={movie.imageUrl} />
        <p>Description: {movie.description}</p>
        <p>Genre: {movie.genre}</p>
        <p>Price: ${movie.price}</p>
        <button type = "submit" onClick={this.addToCart}>Add To Cart</button>
      </div>
    );
  }
}

const mapState = (state) => ({
  movie: state.movie,
});

const mapDispatch = (dispatch) => ({
  getMovie: (id) => dispatch(fetchSingleMovie(id)),
  addMovieToCart: (movie, quantity) => dispatch(addingToCart(movie, quantity))
});

export default connect(mapState, mapDispatch)(SingleMovie);
