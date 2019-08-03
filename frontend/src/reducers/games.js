let initialState = {
    games: []
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAME_STARTED":
            return {
                ...state,
                getGameLoading: true
            };

        case "FETCH_GAME_SUCCEEDED":
            return {
                ...state,
                getGameLoading: false,
                game: action.game,
                matches: action.matches
            };

        case "FETCH_STANDINGS_STARTED":
            return {
                ...state,
                getStandingsLoading: true
            };

        case "FETCH_STANDINGS_SUCCEEDED":
            return {
                ...state,
                getStandingsLoading: false,
                standings: action.standings
            };

        case "ALL_GAMES_FETCH_STARTED":
            return {
                ...state,
                allGamesLoading: true
            };

        case "ALL_GAMES_FETCH_SUCCEEDED":
            return {
                ...state,
                games: action.games,
                allGamesLoading: false
            };

        case "CREATE_GAME_STARTED":
            return {
                ...state,
                createGameLoading: true
            };

        case "CREATE_GAME_SUCCEEDED":
            return {
                ...state,
                createGameLoading: false
            };

        case "API_ERROR":
            return {
                ...state,
                createGameLoading: false,
                getStandingsLoading: false,
                getGameLoading: false,
                allGamesLoading: false
            };

        default:
            return state;
    }
};

export default gamesReducer;