import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleUser } from '../../store/user';

class SingleUser extends React.Component {

    componentDidMount() {
       this.props.fetchSingleUser(this.props.match.params.id)
    }

    render() {
        const { user } = this.props;
        console.log(user)
        return (
            <div className="all-movies">
              <p>Username: {user.userName}</p>
              <p>Email: {user.email}</p>
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
