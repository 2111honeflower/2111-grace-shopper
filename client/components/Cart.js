import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCart } from "../store/cart";
import { fetchCartMovies } from "../store/movies";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.deleteFromCart = this.deleteFromCart.bind(this)
  }
  componentDidMount() {
    // event.preventDefault()
    // this.props.loadCart(this.props.match.params.id);
    // this.props.loadMovies(this.props.match.params.id);
  }
  handleClick(id, event) {
    event.preventDefault()
    this.deleteFromCart(id)
    this.forceUpdate()
  }
  deleteFromCart(id) {
    let cartMovies = JSON.parse(localStorage.getItem("products"));
    console.log(cartMovies, "cartMovies")
    let movies = cartMovies.filter((movie) => movie.id !== id);
    console.log(movies, "movies filtered")
    localStorage.setItem("products", JSON.stringify(movies));
    console.log(localStorage, "local storage")

  }

  render() {
    const cartMovies = JSON.parse(localStorage.getItem("products"));
    //const cart = this.props.thisCart;
    //  console.log(cartMovies, "CART MOVIES");

    return (
      <div>
        <h2>CART:</h2>
        <div id="cart">
          {cartMovies.length > 0
            ? cartMovies.map((movie) => {
                return (
                  <div className="cart-items" key={movie.id}>
                    <Link to={`/movies/${movie.id}`} className="product">
                      <img src={movie.imageUrl} />
                      &nbsp; &nbsp;
                      <h3>{movie.name}</h3>
                    </Link>

                    <h4>${movie.price}</h4>

                    <h4>QUANTITY HERE</h4>


                    <button type="submit" onClick={(event) => this.handleClick(movie.id, event)} id="delete-button">
                      <img
                        src="https://www.shareicon.net/data/512x512/2016/09/10/827820_delete_512x512.png"

                      />
                    </button>

                  </div>
                );
              })
            : "Cart is Empty"}
          {/* <p>SUB-TOTAL:{cart.totalPrice}</p> */}
        </div>
        {cartMovies.length > 0 ? (
          <Link
            to={`/cart/${this.props.match.params.id}/checkout`}
            id="checkout-button"
          >
            <button type="submit">Proceed to Checkout</button>
          </Link>
        ) : (
          ""
        )}
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
