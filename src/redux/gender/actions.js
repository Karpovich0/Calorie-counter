import { SET_GENDER } from "./types";

export const setGender = (gender) => {
	return {
		type: SET_GENDER,
		payload: gender,
	};
};
