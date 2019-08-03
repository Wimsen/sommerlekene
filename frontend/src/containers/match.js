import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import * as matchesActions from "../actions/matches";
import * as usersActions from "../actions/users";
import MatchDetail from "../components/matchDetail";
import Loading from "../components/loading";

class Game extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        const { gameId, matchId } = this.props.match.params;
        await this.props.getMatchByGameAndId(gameId, matchId);
        const { team1_id, team2_id } = this.props.matches.selectedMatch;
        console.log(team1_id);
        await Promise.all([this.props.getUsersByTeam(team1_id), this.props.getUsersByTeam(team2_id)]);
    }

    registerWinner = async winnerId => {
        const { game_id, id } = this.props.matches.selectedMatch;
        await this.props.registerWinner(game_id, id, winnerId);
        this.props.push(`/games/${game_id}`);
    };

    render() {
        const { team1_id, team2_id } = this.props.matches.selectedMatch;
        return (
            <Loading loading={this.props.matches.getMatchLoading}>
                <MatchDetail
                    registerLoading={this.props.matches.registerLoading}
                    registerWinner={this.registerWinner}
                    teamUsersLoading={this.props.users.loadingTeamUsers != 0}
                    homePlayers={this.props.users.users[team1_id]}
                    awayPlayers={this.props.users.users[team2_id]}
                    {...this.props.matches.selectedMatch}
                />
            </Loading>
        );
    }
}

Game.defaultProps = {
    selectedMatch: {}
};

const mapStateToProps = state => ({
    matches: state.matches,
    users: state.users
});

const mapDispatchToProps = {
    ...matchesActions,
    ...usersActions,
    push: push
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
