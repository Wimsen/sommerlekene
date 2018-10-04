import { asyncCall } from "./api";

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
        let response = await asyncCall("/api/games", form);
        dispatch({ type: "CREATE_GAME_SUCCEEDED" });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};
