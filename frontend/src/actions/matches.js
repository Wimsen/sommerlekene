import { asyncCall } from "./api";

export const getMatchById = (matchId) => async dispatch => {
    dispatch({ type: "FETCH_MATCH_STARTED" });
    try {
        let matchDetail = await asyncCall(`/api/matches/${matchId}`);
        dispatch({ type: "FETCH_MATCH_SUCCEEDED", matchDetail: matchDetail });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};

export const registerWinner = (matchId, winnerId) => async dispatch => {
    dispatch({ type: "REGISTER_WINNER_STARTED" });
    try {
        await asyncCall(`/api/matches/${matchId}`, winnerId);
        dispatch({ type: "REGISTER_WINNER_SUCCEEDED" });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};
