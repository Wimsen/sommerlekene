import React, { Component } from "react";

import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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

                <Modal open={this.state.modalOpen} onClose={this.onClose}>
                    <div className={classes.paper}>
                        <Grid container justify="center">
                            <Typography variant="display1">Registrer vinner</Typography>
                        </Grid>

                        <Loading loading={this.props.createGameLoading}>
                            <Loading loading={this.props.registerLoading}>
                                <Grid container justify="center">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => this.props.registerWinner(this.props.team1_id)}
                                    >
                                        {this.props.team1_name}
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => this.props.registerWinner(this.props.team2_id)}
                                    >
                                        {this.props.team2_name}
                                    </Button>
                                </Grid>
                            </Loading>
                        </Loading>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}
export default withStyles(styles)(MatchDetail);
