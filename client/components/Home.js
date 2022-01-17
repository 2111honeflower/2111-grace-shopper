import React from "react";
import { connect } from "react-redux";
import AllMovies from "./AllMovies";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <AllMovies />
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
