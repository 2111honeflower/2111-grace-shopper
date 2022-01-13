import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCart } from "../store/cart";

export class Cart extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.loadCart(this.props.match.params.id)
  }

  render(){
    return (

    )
  }
}

const mapState = (state) => {
  return {
    thisCart: state
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadCart: (id) => dispatch(fetchCart(id))
  }
}

export default connect(mapState, mapDispatch)(Cart)
