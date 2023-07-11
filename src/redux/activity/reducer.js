import { SET_ACTIVITY } from "./types";

const initialState = {
	activity: "minimum",
};

const activityReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ACTIVITY:
			return { ...state, activity: action.payload };
		default:
			return state;
	}
};

export default activityReducer;
