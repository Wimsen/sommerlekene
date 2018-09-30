import { asyncCall } from "./api";

export const testAction = () => async dispatch => {
    dispatch({ type: "TEST_FETCH_STARTED" });
    try {
        let response = await asyncCall("/api/test");
        dispatch({ type: "TEST_FETCH_SUCCEEDED", data: response });
    } catch (e) {
        dispatch({ type: "API_ERROR", errormessage: "Noe gikk galt" });
    }
    dispatch({ type: "API_ERROR", errormessage: "noe gikk galt" });
};
