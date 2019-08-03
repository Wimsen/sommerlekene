import { asyncCall } from "./api";

export const getAllUsers = () => async dispatch => {
    dispatch({ type: "ALL_USER_FETCH_STARTED" });
    try {
        let response = await asyncCall("/api/users");
        setTimeout(() => {
            dispatch({ type: "ALL_USER_FETCH_SUCCEEDED", users: response });
        }, 500);
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};

export const getUsersByTeam = teamId => async dispatch => {
    dispatch({ type: "TEAM_USERS_FETCH_STARTED" });
    try {
        let response = await asyncCall(`/api/teams/${teamId}/users`);
        setTimeout(() => {
            dispatch({ type: "TEAM_USERS_FETCH_SUCCEEDED", teamId: teamId, users: response });
        }, 500);
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};

export const createUser = () => async dispatch => {
    dispatch({ type: "CREATE_USER_STARTED" });
    try {
        let response = await asyncCall("/api/users", { username: "TestName" });
        dispatch({ type: "CREATE_USER_SUCCEEDED" });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};
