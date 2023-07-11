import { SET_GENDER } from "./types";

const initialState = {
	gender: "male",
};

const genderReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_GENDER:
			return { ...state, gender: action.payload };
		default:
			return state;
	}
};

export default genderReducer;
