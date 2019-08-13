import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import MatchList from "../../components/matchList";
import Standings from "../../components/standings";

class SeriesGame extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container justify="center">
                    <Typography variant="h4">{this.props.game.title}</Typography>
                </Grid>

                <Standings standings={this.props.standings} />
                <MatchList matches={this.props.upcomingMatches} header="Kommende kamper" />
                <MatchList matches={this.props.playedMatches} header="Spilte kamper" />
            </React.Fragment>
        );
    }
}

export default SeriesGame;
