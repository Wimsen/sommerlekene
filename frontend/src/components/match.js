import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

const style = {
    textAlign: "center"
};

const Match = props => {
    return (
        <Link to={`/games/${props.game_id}/matches/${props.id}`} style={{ textDecoration: "none" }}>
            <ListItem divider>
                <Grid container justify="center" alignItems="center">
                    <Grid style={style} item xs={6}>
                        <Typography variant="body1">
                            {props.winner_id === props.team1_id ? <strong>{props.team1_name}</strong> : props.team1_name}
                        </Typography>
                    </Grid>
                    <Grid style={style} item xs={6}>
                        <Typography variant="body1">
                            {props.winner_id === props.team2_id ? <strong>{props.team2_name}</strong> : props.team2_name}
                        </Typography>
                    </Grid>
                </Grid>
            </ListItem>
        </Link>
    );
};

export default Match;
