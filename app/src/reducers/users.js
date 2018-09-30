const usersReducer = (state = [], action) => {
    switch (action.type) {
        case "ALL_USER_FETCH_SUCCEEDED":
            return action.users;
            break;
        default:
            return [];
            break;
    }
};

export default usersReducer;
