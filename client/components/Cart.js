import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCart } from "../store/cart";
import { fetchCartMovies } from "../store/movies";

export class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.changeQty = this.changeQty.bind(this);
  }
  componentDidMount() {
    // event.preventDefault()
    // this.props.loadCart(this.props.match.params.id);
    // this.props.loadMovies(this.props.match.params.id);
  }
  handleClick(id, event) {
    event.preventDefault();
    this.deleteFromCart(id);
    this.forceUpdate();
  }
  handleSubmit(id, event) {
    event.preventDefault();
    this.changeQty(id, event);
    this.forceUpdate();
  }
  changeQty(id, event) {
    let cartMovies = JSON.parse(localStorage.getItem("products"));
    let change = document.getElementById(event.target.id).innerHTML;

    cartMovies.filter((movie) => {
      if (movie.id === id) {
        let quantity = Number(movie.qty);

        if (change === "+") {
          quantity += 1;
        } else {
          quantity -= 1;
        }
        movie.qty = `${quantity}`;

      }

    });
    localStorage.setItem("products", JSON.stringify(cartMovies));
  }

  deleteFromCart(id) {
    let cartMovies = JSON.parse(localStorage.getItem("products"));

    let movies = cartMovies.filter((movie) => movie.id !== id);

    localStorage.setItem("products", JSON.stringify(movies));
  }

  render() {
    const cartMovies = JSON.parse(localStorage.getItem("products"));

    return (
      <div>
        <h2>CART:</h2>
        <div id="cart">
          {cartMovies
            ? cartMovies.map((movie) => {
                return (
                  <div className="cart-items" key={movie.id}>
                    <Link to={`/movies/${movie.id}`} className="product">
                      <img src={movie.imageUrl} />
                      &nbsp; &nbsp;
                      <h3>{movie.name}</h3>
                    </Link>

                    <h3>${movie.price}</h3>
                    <div id="qty-buttons">
                      <h3 id="cart-qty">Qty: {movie.qty}</h3>
                      <button
                        type="submit"
                        id="+"
                        onClick={(event) => this.handleSubmit(movie.id, event)}
                      >
                        +
                      </button>
                      <button
                        type="submit"
                        id="-"
                        onClick={(event) => this.handleSubmit(movie.id, event)}
                      >
                        -
                      </button>
                    </div>

                    <button
                      type="submit"
                      onClick={(event) => this.handleClick(movie.id, event)}
                      id="delete-button"
                    >
                      <img src="https://www.shareicon.net/data/512x512/2016/09/10/827820_delete_512x512.png" />
                    </button>
                  </div>
                );
              })
            : "Cart is Empty"}
          {/* <p>SUB-TOTAL:{cart.totalPrice}</p> */}
        </div>
        {cartMovies ? (
          <Link to={`/checkout`} id="checkout-button">
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
