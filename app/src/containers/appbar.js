import React from "react";
import { push } from "react-router-redux";
import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const ButtonAppBar = props => {
    const { classes } = props;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" onClick={() => props.push("/")}>
                        Home
                    </Typography>
                    <Typography variant="title" color="inherit" onClick={() => props.push("/users")}>
                        Users
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapDispatchToProps = {
    push: push
};

export default connect(
    null,
    mapDispatchToProps
)(ButtonAppBar);
