import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import * as gamesActions from "../actions/games";
import * as matchesActions from "../actions/matches";

import MatchList from "../components/matchList";
import Loading from "../components/loading";

class Game extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        await this.props.getGame(this.props.match.params.id);
    }

    render() {
        return (
            <Loading loading={this.props.getGameLoading}>
                <Grid container justify="center">
                    <Typography variant="headline">{this.props.game.title}</Typography>
                </Grid>
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
