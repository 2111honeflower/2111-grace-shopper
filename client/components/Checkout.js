import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Cart from './Cart';
//import { fetchCart } from '../store/cart'

class Checkout extends Component {
 constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.deleteFromCart = this.deleteFromCart.bind(this)
  }
 //componentDidMount() {
  // this.props.loadCart()
  //}

  

  //handleChange = event => {
   // this.setState({
    //  [event.target.name]: event.target.value
   // })
 // }

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

    return (

      <div>
          <div>
          <form>
                <label>Your Name: </label>
                <input type="text" placeholder="Enter your name here"/>
                <label>Email:</label>
                <input type="text" placeholder="example@domain.com"/>
                <label>Shipping Address:</label>
                <input type="text" />
                <label htmlFor="ccn">Credit Card Number:</label>
                <input maxlength="19" placeholder="xxxx xxxx xxxx xxxx" />  
                </form>
          </div> .
          <div style={{ position: 'absolute', left: 200}}>
            <div>
              <h2 >Review Order: </h2>
                <div id="cart" style={{alignItems:'left'}}>
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
                <Link to={`/confirmation`} id="checkout-button" >
                    <button type="submit"> Confirm Purchase </button>
                </Link>
                ) : (
                ""
                )}
          </div>
          </div>
    </div>  
    )
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

export default connect(mapState, mapDispatch)(Checkout)
