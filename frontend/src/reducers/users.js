let initialState = {
    allUserLoading: false,
    createUserLoading: false,
    teamUsersLoading: false,
    users: {},
    loadingTeamUsers: 0
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_USER_FETCH_STARTED":
            return {
                ...state,
                allUserLoading: true
            };
        case "ALL_USER_FETCH_SUCCEEDED":
            return {
                ...state,
                users: action.users,
                allUserLoading: false
            };
        case "CREATE_USER_STARTED":
            return {
                ...state,
                createUserLoading: true
            };
        case "CREATE_USER_SUCCEEDED":
            return {
                ...state,
                createUserLoading: false
            };

        case "TEAM_USERS_FETCH_STARTED":
            return {
                ...state,
                loadingTeamUsers: state.loadingTeamUsers + 1,
                teamUsersLoading: true
            };

        case "TEAM_USERS_FETCH_SUCCEEDED":
            return {
                ...state,
                teamUsersLoading: false,
                loadingTeamUsers: state.loadingTeamUsers - 1,
                users: {
                    ...state.users,
                    [action.teamId]: action.users
                }
            };

        case "API_ERROR":
            return {
                ...state,
                allUserLoading: false,
                createUserLoading: false,
                teamUsersLoading: false
            };

        default:
            return state;
    }
};

export default usersReducer;
