import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <div id="header">
      <img src="https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_oy4mm1w4ron61.jpg?format=pjpg&s=1ec2fcb50762f4d891526740572ec2316ae5c5e6" />
      <h1>HONEFLOWER MOVIES</h1>
    </div>
    <nav>
    {isAdmin ? (
      <Link to = "/users">View All Users</Link>
    ) : (
      ""
    )}

      <Link to="/">Browse All</Link>
      {isLoggedIn ? (
        <div>
          <a href="#" onClick={handleClick}>
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

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: state.auth.id,
    isAdmin: state.auth.id
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
