import React, { Component } from "react";

import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

import UserPointRow from "../components/userPointRow";
import Loading from "./loading";

const style = {
    textAlign: "center"
};

const styles = theme => ({
    paper: {
        position: "absolute",
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
});

class MatchDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    };

    onClose = () => {
        this.setState({
            modalOpen: false
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Grid container>
                    <Grid container justify="center" alignItems="center">
                        <Link to={`/games/${this.props.game_id}`} style={{ textDecoration: "none" }}>
                            <Grid item>
                                <Typography variant="display1"> {this.props.game_title}</Typography>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                        <Grid style={style} item xs={6}>
                            <Typography variant="headline">
                                {this.props.winner_id == this.props.team1_id ? (
                                    <strong>{this.props.team1_name}</strong>
                                ) : (
                                        this.props.team1_name
                                    )}
                            </Typography>
                        </Grid>
                        <Grid style={style} item xs={6}>
                            <Typography variant="headline">
                                {this.props.winner_id == this.props.team2_id ? (
                                    <strong>{this.props.team2_name}</strong>
                                ) : (
                                        this.props.team2_name
                                    )}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item>
                            <Loading loading={this.props.createUserLoading}>
                                <Button variant="contained" color="primary" onClick={this.toggleModal}>
                                    Registrer vinner
                                </Button>
                            </Loading>
                        </Grid>
                    </Grid>
                </Grid>

                <Loading loading={this.props.teamUsersLoading}>
                    <List>
                        <ListSubheader>{this.props.team1_name}</ListSubheader>
                        {this.props.homePlayers.map(user => <UserPointRow key={user.id} {...user} />)}
                        <ListSubheader>{this.props.team2_name}</ListSubheader>
                        {this.props.awayPlayers.map(user => <UserPointRow key={user.id} {...user} />)}
                    </List>
                </Loading>

                <Modal open={this.state.modalOpen} onClose={this.onClose}>
                    <div className={classes.paper}>
                        <Grid container justify="center" spacing={40}>
                            <Typography variant="display1">Registrer vinner</Typography>
                        </Grid>

                        <Loading loading={this.props.registerLoading}>
                            <Grid container justify="center" spacing={40}>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => this.props.registerWinner(this.props.team1_id)}
                                    >
                                        {this.props.team1_name}
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => this.props.registerWinner(this.props.team2_id)}
                                    >
                                        {this.props.team2_name}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Loading>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

MatchDetail.defaultProps = {
    homePlayers: [],
    awayPlayers: []
};
export default withStyles(styles)(MatchDetail);
