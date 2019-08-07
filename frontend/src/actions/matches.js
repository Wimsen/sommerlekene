import { asyncCall } from "./api";

export const getMatchByGameAndId = (gameId, matchId) => async dispatch => {
    dispatch({ type: "FETCH_MATCH_STARTED" });
    try {
        let selectedMatch = await asyncCall(`/api/games/${gameId}/matches/${matchId}`);
        dispatch({ type: "FETCH_MATCH_SUCCEEDED", selectedMatch: selectedMatch });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};

export const registerWinner = (gameId, matchId, winnerId) => async dispatch => {
    dispatch({ type: "REGISTER_WINNER_STARTED" });
    try {
        // let selectedMatch = await asyncCall(`/api/games/${gameId}/matches/${matchId}`, { winnerId: winnerId });
        dispatch({ type: "REGISTER_WINNER_SUCCEEDED" });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};
