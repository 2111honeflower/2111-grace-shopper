import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import { me } from "./store";
import SingleMovie from "./components/SingleMovie";
import Cart from "./components/Cart"
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";
import Users from "./components/Admin/Users";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (

          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/" exact component={HomePage} />
            <Route path="/movies/:id" component={SingleMovie} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/users" component={Users} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/movies/:id" component={SingleMovie} />
            <Route path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path ="/confirmation" component={Confirmation} />
            <Route exact path="/users" component={Users}/>
          </Switch>
        )}
      </div>
    ); 
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
