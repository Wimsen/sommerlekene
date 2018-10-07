import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import * as matchesActions from "../actions/matches";
import MatchDetail from "../components/matchDetail";
import Loading from "../components/loading";

class Game extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        const { gameId, matchId } = this.props.match.params;
        await this.props.getMatchByGameAndId(gameId, matchId);
    }

    registerWinner = async winnerId => {
        const { game_id, id } = this.props.selectedMatch;
        await this.props.registerWinner(game_id, id, winnerId);
        this.props.push(`/games/${game_id}`);
    };

    render() {
        return (
            <Loading loading={this.props.getMatchLoading}>
                <MatchDetail
                    registerLoading={this.props.registerLoading}
                    registerWinner={this.registerWinner}
                    {...this.props.selectedMatch}
                />
            </Loading>
        );
    }
}

Game.defaultProps = {
    selectedMatch: {}
};

const mapStateToProps = state => ({
    ...state.matches
});

const mapDispatchToProps = {
    ...matchesActions,
    push: push
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
