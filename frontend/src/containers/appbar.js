import React, { Component } from "react";
import { push } from "react-router-redux";
import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

class ButtonAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        };
    }

    toggleDrawer = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    };

    changeRoute = route => () => {
        this.props.push(route);
    };

    render() {
        return (
            <div>
                <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer}>
                    <div tabIndex={0} role="button" onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
                        <div>
                            <List component="nav">
                                <ListItem button onClick={this.changeRoute("/")}>
                                    <ListItemText primary="Hjem" />
                                </ListItem>
                                <ListItem button onClick={this.changeRoute("/users")}>
                                    <ListItemText primary="Spillere" />
                                </ListItem>
                                <ListItem button onClick={this.changeRoute("/games")}>
                                    <ListItemText primary="Leker" />
                                </ListItem>
                            </List>
                        </div>
                    </div>
                </Drawer>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography color="inherit" onClick={this.changeRoute("/")}>
                            Sommerlekene
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapDispatchToProps = {
    push: push
};

export default connect(
    null,
    mapDispatchToProps
)(ButtonAppBar);
