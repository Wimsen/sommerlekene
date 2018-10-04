import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

let Game = props => (
    <ListItem divider>
        <ListItemText primary={props.title} secondary={props.type} />
    </ListItem>
);
export default Game;
