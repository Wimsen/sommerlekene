import { asyncCall } from "./api";

export const getAllUsers = () => async dispatch => {
    dispatch({ type: "ALL_USER_FETCH_STARTED" });
    try {
        let response = await asyncCall("/api/users");
        dispatch({ type: "ALL_USER_FETCH_SUCCEEDED", users: response });
    } catch (e) {
        console.log(e);
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
};
