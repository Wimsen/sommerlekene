import { combineReducers } from "redux";

import usersReducer from "./users";
import gamesReducer from "./games";
import matchesReducer from "./matches";

const rootReducer = combineReducers({
    users: usersReducer,
    games: gamesReducer,
    matches: matchesReducer
});

export default rootReducer;
