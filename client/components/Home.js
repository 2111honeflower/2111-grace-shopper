import React from "react";
import { connect } from "react-redux";
import AllMovies from "./AllMovies";
import { createCart } from "../store/cart"

/**
 * COMPONENT
 */

class Home extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {

  this.props.getCart(this.props.id)

  }

  render(){

    if(this.props.username){
      return (
        <div>
        <h3>Hello, {this.props.username}!</h3>
        <AllMovies />
      </div>
      )
    } else {
      return (
        <div>
          <h3>Hello!</h3>
          <AllMovies />
        </div>
      );
    }

  }
}

/**
 * CONTAINER
 */
const mapState = (state) => ({
    username: state.auth.userName,
    id: state.auth.id,
    auth: state.auth
})



export default connect(mapState, null)(Home);
