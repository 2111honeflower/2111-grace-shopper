import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <div id="header">
      <img src="logo.jpeg" />
      <h1>HONEFLOWER MOVIES</h1>
    </div>
    <nav>
      {isAdmin ? <Link to="/users">Users</Link> : ""}

      <Link to="/">Browse All</Link>

      {isLoggedIn ? (
        <div>
          <a href="/" onClick={handleClick}>
            Logout
          </a>
          <Link to="/cart">
            <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" />
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart">
            <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" />
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

const mapState = (state) => {
  return {
    isLoggedIn: state.auth.id,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
