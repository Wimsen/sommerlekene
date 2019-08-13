import React, { Component } from "react";
import { connect } from "react-redux";


import * as gamesActions from "../../actions/games";

import Loading from "../../components/loading";
import SeriesGame from "./seriesgame";
import PlayoffGame from "./playoffgame";


class Game extends Component {

    async componentWillMount() {
        const gameId = this.props.match.params.id;
        await this.props.getGame(gameId);
    }

    getGameDetailComponent = () => {
        const type = this.props.gameDetail.game ? this.props.gameDetail.game.type : "";
        if (type === "Serie") return <SeriesGame {...this.props.gameDetail} />;
        else if (type === "Utslag") return <PlayoffGame {...this.props.gameDetail} />;
        else return "";
    }

    render() {
        return (
            <Loading loading={this.props.loading}>
                {this.getGameDetailComponent()}
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
    gameDetail: state.games.gameDetail
});

const mapDispatchToProps = {
    ...gamesActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
