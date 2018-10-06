import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import RegisterGameForm from "./registerGameForm";

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

class RegisterGame extends Component {
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
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={this.toggleModal}>
                            Registrer ny gren
                        </Button>
                    </Grid>
                </Grid>

                <Modal open={this.state.modalOpen} onClose={this.onClose}>
                    <div className={classes.paper}>
                        <RegisterGameForm
                            onClose={this.onClose}
                            createGameLoading={this.props.createGameLoading}
                            onSubmit={this.props.onSubmit}
                        />
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(RegisterGame);
