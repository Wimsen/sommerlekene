import React, { Component } from "react";
import { push } from "connected-react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as userActions from "../actions/users";
import User from "../components/user";

class Users extends Component {
    componentWillMount() {
        this.props.getAllUsers();
    }

    render() {
        return (
            <div>
                {this.props.users &&
                    this.props.users.map(user => (
                        <User key={user.id} {...user} />
                    ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = {
    ...userActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
