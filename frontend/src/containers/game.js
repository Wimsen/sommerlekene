import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import * as gamesActions from "../actions/games";

import MatchList from "../components/matchList";
import Standings from "../components/standings";
import Loading from "../components/loading";

class Game extends Component {

    async componentWillMount() {
        const gameId = this.props.match.params.id;
        await this.props.getGame(gameId);
    }

    render() {
        return (
            <Loading loading={this.props.loading}>
                <Grid container justify="center">
                    <Typography variant="h4">{this.props.game.title}</Typography>
                </Grid>
                <Standings standings={this.props.standings} />
                <MatchList game={this.props.game} upcomingMatches={this.props.upcomingMatches} playedMatches={this.props.playedMatches} />
            </Loading>
        );
    }
}

Game.defaultProps = {
    game: {},
    upcomingMatches: [],
    playedMatches: [],
    standings: []
};

const mapStateToProps = state => ({
    loading: state.games.getGameLoading,
    ...state.games.gameDetail
});

const mapDispatchToProps = {
    ...gamesActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
