import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

let User = props => (
    <ListItem divider>
        <ListItemText primary={props.username} />
    </ListItem>
);
export default User;
