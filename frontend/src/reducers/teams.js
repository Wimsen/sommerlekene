let initialState = {
    numTeamsLoading: 0,
    loading: true
};

const teamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_TEAM_STARTED":
            return {
                ...state,
                loading: true,
                numTeamsLoading: state.numTeamsLoading += 1
            };
        case "FETCH_TEAM_SUCCEEDED":
            const numTeamsLoading = state.numTeamsLoading - 1;
            const loading = numTeamsLoading === 0 ? false : true;
            return {
                ...state,
                ...action,
                numTeamsLoading: numTeamsLoading,
                loading: loading
            };
        default:
            return state;
    }
}

export default teamsReducer;
