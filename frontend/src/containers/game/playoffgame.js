import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import MatchList from "../../components/matchList";

class PlayoffGame extends Component {
    render() {
        const stageHeaders = {
            2: "Finale",
            3: "Bronsjefinale",
            4: "Semifinale",
            8: "Kvartfinale"
        };

        const matches = [...this.props.upcomingMatches, ...this.props.playedMatches];
        const matchesByStage = {};
        matches.forEach(match => {
            if (matchesByStage[match.stage]) matchesByStage[match.stage] = [...matchesByStage[match.stage], match];
            else matchesByStage[match.stage] = [match];
        });

        const stages = Object.keys(matchesByStage).sort((a, b) => a - b);

        return (
            <React.Fragment>
                <Grid container justify="center">
                    <Typography variant="h4">{this.props.game.title}</Typography>
                </Grid>
                {
                    stages.map(stage => <MatchList key={stage} header={stageHeaders[stage]} matches={matchesByStage[stage]} />)
                }
            </React.Fragment>
        );
    }
}

export default PlayoffGame;
