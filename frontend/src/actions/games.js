import { asyncCall } from "./api";

export const getGame = id => async dispatch => {
    dispatch({ type: "FETCH_GAME_STARTED" });

    try {
        let response = await asyncCall(`/api/games/${id}`);
        dispatch({ type: "FETCH_GAME_SUCCEEDED", game: response.game, matches: response.matches });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};

export const getAllGames = () => async dispatch => {
    dispatch({ type: "ALL_GAMES_FETCH_STARTED" });
    try {
        let response = await asyncCall("/api/games");
        dispatch({ type: "ALL_GAMES_FETCH_SUCCEEDED", games: response });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};

export const createGame = form => async dispatch => {
    dispatch({ type: "CREATE_GAME_STARTED" });

    try {
        await asyncCall("/api/games", form);
        dispatch({ type: "CREATE_GAME_SUCCEEDED" });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};

export const getStandings = id => async dispatch => {
    dispatch({ type: "FETCH_STANDINGS_STARTED" });

    try {
        let standings = await asyncCall(`/api/games/${id}/standings`);
        dispatch({ type: "FETCH_STANDINGS_SUCCEEDED", standings: standings });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};
