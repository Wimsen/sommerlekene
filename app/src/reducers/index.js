import { combineReducers } from "redux";

import usersReducer from "./users";
import gamesReducer from "./games";

const rootReducer = combineReducers({
    users: usersReducer,
    games: gamesReducer
});

export default rootReducer;
