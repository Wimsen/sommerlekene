import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import * as userActions from "../actions/users";
import UserList from "../components/userList";
import Loading from "../components/loading";

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
                <Loading loading={this.props.allUserLoading}>
                    <UserList users={this.props.users} />
                </Loading>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <Loading loading={this.props.createUserLoading}>
                            <Button variant="contained" color="primary" onClick={this.createUser}>
                                Create new user
                            </Button>
                        </Loading>
                    </Grid>
                </Grid>
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
