import React from "react";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

const style = {
    textAlign: "center"
};

const Match = props => {
    const isHomeWinner = props.winner && props.winner.id === props.homeTeam.id;
    const isAwayWinner = props.winner && props.winner.id === props.awayTeam.id;
    return (
        <Link to={`/games/${props.game_id}/matches/${props.id}`} style={{ textDecoration: "none" }}>
            <ListItem divider>
                <Grid container justify="center" alignItems="center">
                    <Grid style={style} item xs={6}>
                        <Typography variant="body1">
                            {isHomeWinner ? <strong>{props.homeTeam.name}</strong> : props.homeTeam.name}
                        </Typography>
                    </Grid>
                    <Grid style={style} item xs={6}>
                        <Typography variant="body1">
                            {isAwayWinner ? <strong>{props.awayTeam.name}</strong> : props.awayTeam.name}
                        </Typography>
                    </Grid>
                </Grid>
            </ListItem>
        </Link>
    );
};

export default Match;
