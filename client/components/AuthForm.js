import React from "react";
import { connect } from "react-redux";
import { authenticateLogin, authenticateSignup } from "../store";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div id="login-signup">
      <form onSubmit={handleSubmit} name={name}>
        {name === "signup" && (
          <div>
            <label htmlFor="username">
              <small>Username</small>
            </label>
            <input name="username" type="text" />
          </div>
        )}
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatchLogin = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const password = evt.target.password.value;
      const email = evt.target.email.value;
      dispatch(authenticateLogin(password, email, formName));
    },
  };
};

const mapDispatchSignup = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const email = evt.target.email.value;
      dispatch(authenticateSignup(username, password, email, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatchLogin)(AuthForm);
export const Signup = connect(mapSignup, mapDispatchSignup)(AuthForm);
