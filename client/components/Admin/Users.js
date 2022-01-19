import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../store/users'
import NewMovieForm from './NewMovieForm';
import UpdateMovieForm from './UpdateMovieForm'
import Button from 'react-bootstrap/Button';

class Users extends React.Component {


  componentDidMount() {
    this.props.fetchUsers();
  }


  render() {
    const Columns = () => 
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
        <div>Column 1</div>
        <div>Column 2</div>
        <div>Column 3</div>
      </div>
      const userData = this.props.users;
      console.log(userData)
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
