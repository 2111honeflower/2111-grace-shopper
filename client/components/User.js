import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSingleUser } from '../store/user';

class SingleUser extends React.Component {
    componentDidMount() {
       this.props.fetchSingleUser(this.props.match.params.id)
    }

    render() {
        return (
            <div>  
              <p>Username: {this.props.userName}</p>
              <p>Email: {this.props.email}</p>
            </div>
        )
    }
}

const mapState = (state) => ({
    user: state.user
});

const mapDispatch = (dispatch) => ({
    fetchSingleUser:(id) => dispatch(fetchSingleUser(id))
})

export default connect(mapState, mapDispatch)(SingleUser)
