import React from "react";
import { connect } from "react-redux";
import AllMovies from "./AllMovies";
import { createCart } from "../store/auth"

/**
 * COMPONENT
 */

class Home extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {

// if(this.props.id){
//   this.props.getCart(this.props.id)
// }


  }
  // componentDidUpdate(prevProps){
  //       if (this.props.id !== prevProps.id) {
  //        this.fetchData(this.props.id);
  //       }
  //     }



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
    // const user = this.props.username || "Guest"
    // return (
    //   <div>
    //     <h3>Hello, {user}</h3>
    //     <AllMovies />
    //   </div>
    // );
  }
}
  //do i make this where we find cart? by turning this into a class or in all movies?

//conditional for name display with two returns
/**
 * CONTAINER
 */
const mapState = (state) => ({
    username: state.auth.userName,
    id: state.auth.id,
    auth: state.auth
})

  const mapDispatch = (dispatch) => ({
    getCart: (id) => dispatch(createCart(id)),
  })


export default connect(mapState, mapDispatch)(Home);
