import { asyncCall } from "./api";

export const getTeam = (id, objectName) => async dispatch => {
    dispatch({ type: "FETCH_TEAM_STARTED" });
    try {
        let response = await asyncCall(`/api/teams/${id}`);
        dispatch({ type: "FETCH_TEAM_SUCCEEDED", [objectName]: response });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};
