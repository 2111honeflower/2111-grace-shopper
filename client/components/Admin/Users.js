import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../store/users'
import NewMovieForm from './NewMovieForm';
import UpdateMovieForm from './UpdateMovieForm'
<<<<<<< HEAD
=======

>>>>>>> 5f58f82cd415ed27682abe64326777e1deeb94fc

class Users extends React.Component {


  componentDidMount() {
    this.props.fetchUsers();
  }


  render() {
      const userData = this.props.users;

      const userList = userData.map((user) => (
        <div className="all-movies" key={user.id}>
          <Link to={`/users/${user.id}`} >
            <h3>{user.userName}</h3>
            <h3>{user.email}</h3>
          </Link>
        </div>
      ));

    return (
      <main>
        <h1 className = "row">Registered Users</h1>
          <div id="all-users" className='column'>{userData.length >= 1 ? userList : "Loading..."}</div>
          <NewMovieForm> </NewMovieForm >
          <UpdateMovieForm></UpdateMovieForm>
      </main>

    );
  }
}

const mapState = (state) => ({
  users: state.users,
  isAdmin: state.auth.isAdmin
});

const mapDispatch = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapState, mapDispatch)(Users);
