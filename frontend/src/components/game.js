import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

let Game = props => (
    <Link to={`/games/${props.id}`} style={{ textDecoration: "none" }}>
        <ListItem divider>
            <ListItemText primary={props.title} secondary={props.type} />
        </ListItem>
    </Link>
);
export default Game;
