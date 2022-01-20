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

    cartMovies.filter((movie) => {
      if (movie.id === id) {
        const quantity = Number(event.target.value);
        movie.qty = quantity;
      }
    });
    console.log(cartMovies);
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
      <main>
        {!cartMovies ? (
          <div id="cart"> Cart is Empty </div>
        ) : (
          <div>
            <div id="cart">
              {cartMovies.length > 0
                ? cartMovies.map((movie) => {
                    return (
                      <div className="cart-items" key={movie.id}>
                        <Link to={`/movies/${movie.id}`} className="product">
                          <img src={movie.imageUrl} />
                          &nbsp; &nbsp;
                          <h2>{movie.name}</h2>
                        </Link>

                        <h2>${(movie.price * movie.qty).toFixed(2)}</h2>
                        <h3 id="cart-qty">
                          Qty:
                          <input
                            type="number"
                            min="1"
                            max="10"
                            defaultValue={movie.qty}
                            onClick={(event) =>
                              this.handleSubmit(movie.id, event)
                            }
                          />
                        </h3>
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
            </div>
            {cartMovies.length > 0 ? (
              <Link to={`/checkout`} id="checkout-button">
                <button type="submit">Proceed to Checkout</button>
              </Link>
            ) : (
              ""
            )}
          </div>
        )}
      </main>
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
