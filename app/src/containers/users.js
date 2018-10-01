import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

import * as userActions from "../actions/users";
import UserList from "../components/userList";

class Users extends Component {
    componentWillMount() {
        this.props.getAllUsers();
    }

    createUser = async () => {
        await this.props.createUser();
        await this.props.getAllUsers();
    };

    render() {
        return (
            <div>
                {this.props.allUserLoading ? <CircularProgress /> : <UserList users={this.props.users} />}
                {this.props.createUserLoading ? (
                    <CircularProgress />
                ) : (
                    <Grid container>
                        <Button variant="contained" color="primary" onClick={this.createUser}>
                            Create new user
                        </Button>
                    </Grid>
                )}
            </div>
        );
    }
}

Users.defaultProps = {
    users: [],
    allUserLoading: false,
    createUserLoading: false
};

const mapStateToProps = state => ({
    ...state.users
});

const mapDispatchToProps = {
    ...userActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
