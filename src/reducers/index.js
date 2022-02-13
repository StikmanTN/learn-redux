import counterReducer from "./counter";
import loggdReducer from "./islogged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter : counterReducer,
    isLOgged : loggdReducer
});
export default allReducer;