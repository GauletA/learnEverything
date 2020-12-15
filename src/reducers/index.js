import { combineReducers } from "redux";
import wordTranslation from "../reducers/wordTranslation";

const rootReducer = combineReducers({ wordTranslation });

export default rootReducer;
