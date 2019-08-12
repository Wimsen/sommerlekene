import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import usersReducer from "./users";
import gamesReducer from "./games";
import matchesReducer from "./matches";
import teamsReducer from "./teams";

export default (history) => combineReducers({
    router: connectRouter(history),
    users: usersReducer,
    games: gamesReducer,
    matches: matchesReducer,
    teams: teamsReducer
});
