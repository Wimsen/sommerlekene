let initialState = {
    allUserLoading: false,
    createUserLoading: false,
    users: []
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
        default:
            return state;
    }
};

export default usersReducer;
