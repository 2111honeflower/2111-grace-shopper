import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCart } from "../store/cart";
import { fetchCartMovies } from "../store/movies";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadCart(this.props.match.params.id);
    this.props.loadMovies(this.props.match.params.id);
  }

  render() {
    const cartMovies = this.props.movies;
    const cart = this.props.thisCart;

    return (
      <div>
        <h2>CART:</h2>
        <div>
          {cartMovies.map((movie) => {
            <div key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img src={movie.imageUrl} />
                <h2>{movie.name}</h2>
              </Link>
              <p>${movie.price}</p>
            </div>;
          })}
        </div>
        <p>TOTAL:{cart.totalPrice}</p>
        <p>QUANTITY:{cart.movieCount}</p>
        <p>SHIPPING:{cart.shippingPrice}</p>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    thisCart: state.cart,
    movies: state.movies,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadCart: (id) => dispatch(fetchCart(id)),
    loadMovies: (id) => dispatch(fetchCartMovies(id)),
  };
};

export default connect(mapState, mapDispatch)(Cart);
