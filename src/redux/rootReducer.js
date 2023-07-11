import { combineReducers } from "redux";
import genderReducer from "./gender/reducer";
import paramsReducer from "./params/reducer";
import activityReducer from "./activity/reducer";

const rootReducer = combineReducers({
	gender: genderReducer,
	params: paramsReducer,
	activity: activityReducer,
});

export default rootReducer;
