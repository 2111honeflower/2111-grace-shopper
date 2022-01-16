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
    // this.props.loadCart(this.props.match.params.id);
    // this.props.loadMovies(this.props.match.params.id);
  }

  render() {
    const cartMovies = JSON.parse(localStorage.getItem("products"));
    //const cart = this.props.thisCart;
    console.log(cartMovies, "CART MOVIES");
    return (
      <div>
        <h2>CART:</h2>
        <div id="cart">
          {cartMovies.map((movie) => {
            return (
              <div className="cart-items" key={movie.id}>
                <Link to={`/movies/${movie.id}`} className="product">
                  <img src={movie.imageUrl} />
                  &nbsp; &nbsp;
                  <h3>{movie.name}</h3>
                </Link>

                  <h4>${movie.price}</h4>

                  <h4>QUANTITY HERE</h4>

                  <img src="https://www.shareicon.net/data/512x512/2016/09/10/827820_delete_512x512.png" id="delete-button"/>

              </div>
            );
          })}
        </div>
        {/* <p>SUB-TOTAL:{cart.totalPrice}</p> */}
        <Link to={`/cart/${this.props.match.params.id}/checkout`}>
          <button type="submit">Proceed to Checkout</button>
        </Link>
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
