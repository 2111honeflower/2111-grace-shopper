import React from "react";
import { connect } from "react-redux";

class Confirmation extends React.Component {
  render() {
    const username = this.props.username || "Guest";
    const thankYou =
      "https://us.123rf.com/450wm/redcollegiya/redcollegiya1709/redcollegiya170900336/86730240-thank-you-lettering-vector-handwritten-text-card-template.jpg?ver=6";
    const confirmationNumber = Math.floor(Math.random() * 10000000000);
    return (
      <div id="confirm">
        <img src={thankYou} />

        <div id="ty-message">
          <h1>Thank you for your purchase, {username}!</h1>
          <h2>Your order number is: {confirmationNumber}</h2>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    username: state.auth.userName,
  };
};

export default connect(mapState, null)(Confirmation);
