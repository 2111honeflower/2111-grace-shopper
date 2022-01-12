import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../store/users';

class User extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div>
            <h1>All Users</h1>
            {this.props.users.map(user => (
              <div key={user.id}>
               <Link to = {`/users/${user.id}`}>
                  <h3>{user.userName}</h3>
                  <h3>{user.email}</h3>
               </Link>
              </div>
              ))}
          </div> 
        )
    }
}
