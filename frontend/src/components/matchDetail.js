import React, { Component } from "react";

import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';


import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

import UserPointRow from "../components/userPointRow";
import Loading from "./loading";

const styles = theme => ({
    row: {
        padding: theme.spacing(2)
    },
    modal: {
        position: "absolute",
        width: theme.spacing(50),
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
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
        const winnerId = this.props.winner ? this.props.winner.id : undefined;
        return (
            <React.Fragment>
                <Grid container>
                    <Grid container justify="center" alignItems="center">
                        <Grid item>
                            <Link color="inherit" component={RouterLink} to={`/games/${this.props.matchDetail.game.id}`} style={{ textDecoration: "none" }}>
                                <Typography variant="h4"> {this.props.matchDetail.game.title}</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={6} align="center">
                            <Typography>
                                {winnerId === this.props.homeTeam.team.id ? (
                                    <strong>{this.props.homeTeam.team.name}</strong>
                                ) : (
                                        this.props.homeTeam.team.name
                                    )}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} align="center">
                            <Typography >
                                {winnerId === this.props.awayTeam.team.id ? (
                                    <strong>{this.props.awayTeam.team.name}</strong>
                                ) : (
                                        this.props.awayTeam.team.name
                                    )}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center">
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
                        <ListSubheader>{this.props.homeTeam.team.name}</ListSubheader>
                        {this.props.homeTeam.members.map(user => <UserPointRow key={user.id} {...user} />)}
                        <ListSubheader>{this.props.awayTeam.team.name}</ListSubheader>
                        {this.props.awayTeam.members.map(user => <UserPointRow key={user.id} {...user} />)}
                    </List>
                </Loading>

                <Modal open={this.state.modalOpen} onClose={this.onClose}>
                    <div className={classes.modal}>
                        <Grid container justify="center">
                            <Typography>Registrer vinner</Typography>
                        </Grid>

                        <Loading loading={this.props.registerLoading}>
                            <Grid container spacing={3} justify="center">
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => this.props.registerWinner(this.props.homeTeam.team.id)}
                                    >
                                        {this.props.homeTeam.team.name}
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => this.props.registerWinner(this.props.awayTeam.team.id)}
                                    >
                                        {this.props.awayTeam.team.name}
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


export default withStyles(styles)(MatchDetail);
