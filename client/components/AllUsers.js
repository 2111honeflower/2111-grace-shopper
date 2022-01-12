import React from 'react';

class User extends React.Component {
    componentDidMount() {
    //thunk will go here to
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