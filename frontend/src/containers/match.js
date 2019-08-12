import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";

import * as matchesActions from "../actions/matches";
import * as usersActions from "../actions/users";
import * as teamsActions from "../actions/teams";
import MatchDetail from "../components/matchDetail";
import Loading from "../components/loading";

class Game extends Component {
    async componentWillMount() {
        const { matchId } = this.props.match.params;
        await this.props.getMatchById(matchId);

        const homeTeamId = this.props.matches.matchDetail.homeTeam.id;
        const awayTeamId = this.props.matches.matchDetail.awayTeam.id;
        await Promise.all([this.props.getTeam(homeTeamId, "homeTeam"), this.props.getTeam(awayTeamId, "awayTeam")]);
    };

    registerWinner = async winnerId => {
        const matchId = this.props.matches.matchDetail.id;
        const gameId = this.props.matches.matchDetail.game.id;
        await this.props.registerWinner(matchId, winnerId);
        this.props.push(`/games/${gameId}`);
    };

    teamsLoading = () => {
        return this.props.teams.numTeamsLoading > 0;
    }

    isFinishedLoading = () => {
        return !(this.props.matches.getMatchLoading || this.props.teams.loading);
    }

    render() {
        const isLoading = !this.isFinishedLoading();
        return (
            <Loading loading={isLoading}>
                <MatchDetail
                    isFinishedLoading={this.isFinishedLoading}
                    registerLoading={this.props.matches.registerLoading}
                    registerWinner={this.registerWinner}
                    homeTeam={this.props.teams.homeTeam}
                    awayTeam={this.props.teams.awayTeam}
                    matchDetail={this.props.matches.matchDetail}
                />
            </Loading>
        );
    }
}

const mapStateToProps = state => ({
    matches: state.matches,
    users: state.users,
    teams: state.teams
});

const mapDispatchToProps = {
    ...matchesActions,
    ...usersActions,
    ...teamsActions,
    push: push
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
