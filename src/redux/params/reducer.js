import { INPUT_AGE, INPUT_HEIGHT, INPUT_WEIGHT } from "./types";

const initialState = {
	age: "18",
	height: "180",
	weight: "70",
};

const paramsReducer = (state = initialState, action) => {
	if (isNaN(action.payload)) {
		return state;
	}
	switch (action.type) {
		case INPUT_AGE:
			return { ...state, age: action.payload };
		case INPUT_HEIGHT:
			return { ...state, height: action.payload };
		case INPUT_WEIGHT:
			return { ...state, weight: action.payload };
		default:
			return state;
	}
};

export default paramsReducer;
