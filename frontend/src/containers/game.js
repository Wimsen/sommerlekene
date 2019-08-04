import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import * as gamesActions from "../actions/games";

import MatchList from "../components/matchList";
import Standings from "../components/standings";
import Loading from "../components/loading";

class Game extends Component {

    loading = () => {
        return this.props.getGameLoading || this.props.getStandingsLoading;
    };

    async componentWillMount() {
        const gameId = this.props.match.params.id;
        await Promise.all([this.props.getGame(gameId), this.props.getStandings(gameId)]);
    }

    render() {
        return (
            <Loading loading={this.loading()}>
                <Grid container justify="center">
                    <Typography variant="headline">{this.props.game.title}</Typography>
                </Grid>
                <Standings standings={this.props.standings} />
                <MatchList type={this.props.game.type} matches={this.props.matches} />
            </Loading>
        );
    }
}

Game.defaultProps = {
    game: {},
    matches: []
};

const mapStateToProps = state => ({
    ...state.games
});

const mapDispatchToProps = {
    ...gamesActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
