import React, { Component } from "react";
import { connect } from "react-redux";

import * as gamesActions from "../actions/games";

import Loading from "../components/loading";
import GameList from "../components/gameList";
import RegisterGame from "../components/registerGame";

class Games extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getAllGames();
    }

    onSubmit = async form => {
        const { title, type } = form;
        if (!title || !type) return;
        await this.props.createGame(form);
        await this.props.getAllGames();
    };

    render() {
        return (
            <div>
                <Loading loading={this.props.allGamesLoading}>
                    <GameList games={this.props.games} />
                </Loading>
                <RegisterGame onSubmit={this.onSubmit} createGameLoading={this.props.createGameLoading} />
            </div>
        );
    }
}

Games.defaultProps = {
    games: []
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
)(Games);
