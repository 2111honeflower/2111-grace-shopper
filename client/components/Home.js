import React from "react";
import { connect } from "react-redux";
import HomePage from "./HomePage";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <HomePage />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.userName,
  };
};

export default connect(mapState, null)(Home);
