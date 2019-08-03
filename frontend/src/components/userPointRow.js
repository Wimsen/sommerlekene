import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const style = {
    textAlign: "center"
};

const UserPointRow = props => {
    const { classes } = props;
    return (
        <ListItem divider>
            <Typography variant="body1">{props.username}</Typography>
        </ListItem>
    );
};

export default UserPointRow;
