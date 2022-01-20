import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  finalPurchase() {
    localStorage.clear();
  }

  handleClick(id, event) {
    event.preventDefault();
    this.deleteFromCart(id);
    this.forceUpdate();
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
        <form id="ship-info">
          <label>Your Name: </label>
          <input type="text" placeholder="Enter your name here" />
          <label>Email:</label>
          <input type="text" placeholder="example@domain.com" />
          <label>Shipping Address:</label>
          <input type="text" />
          <label htmlFor="ccn">Credit Card Number:</label>
          <input maxLength="19" placeholder="xxxx xxxx xxxx xxxx" />
        </form>
      <div id="ord-summary"></div>
        <h2>Review Order: </h2>
        <div id="cart" style={{ alignItems: "left" }}>
          {cartMovies.map((movie) => {
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
                    onClick={(event) => this.handleSubmit(movie.id, event)}
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
          })}
        </div>

        <Link to={`/confirmation`} id="checkout-button">
          <button type="submit" onClick={this.finalPurchase}>
            Confirm Purchase
          </button>
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

export default connect(mapState, mapDispatch)(Checkout);
