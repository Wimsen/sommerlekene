let initialState = {
    selectedMatch: {}
};

const matchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MATCH_STARTED":
            return {
                ...state,
                getMatchLoading: true
            };

        case "FETCH_MATCH_SUCCEEDED":
            return {
                ...state,
                getMatchLoading: false,
                matchDetail: action.matchDetail
            };

        case "REGISTER_WINNER_STARTED":
            return {
                ...state,
                registerLoading: true
            };

        case "REGISTER_WINNER_SUCCEEDED":
            return {
                ...state,
                registerLoading: false
            };

        case "API_ERROR":
            return {
                ...state,
                registerLoading: false,
                getMatchLoading: false
            };

        default:
            return state;
    }
};

export default matchesReducer;
