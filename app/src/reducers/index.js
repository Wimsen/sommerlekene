import { combineReducers } from "redux";

import testReducer from "./test";
import apireducer from "./api";

const rootReducer = combineReducers({
    test: testReducer,
    api: apireducer
});

export default rootReducer;
