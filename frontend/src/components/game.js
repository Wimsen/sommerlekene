import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';


let Game = props => (
    <Link component={RouterLink} color="inherit" to={`/games/${props.id}`} style={{ textDecoration: "none" }}>
        <ListItem divider>
            <ListItemText primary={props.title} secondary={props.type} />
        </ListItem>
    </Link>
);
export default Game;
