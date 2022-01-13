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
              <h1>{this.props.userName}</h1>
              <h2>{this.props.email}</h2>
            </div>
        )
    }
}

const mapState = (state) => ({
    user: state.user
});

const mapDispatch = (dispatch) => ({
    fetchUsers:(id) => dispatch(fetchSingleUser(id))
})

export default connect(mapState, mapDispatch)(SingleUser)
