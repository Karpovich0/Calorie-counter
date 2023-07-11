import { SET_ACTIVITY } from "./types";

export const setActivity = (activity) => {
	return {
		type: SET_ACTIVITY,
		payload: activity,
	};
};
