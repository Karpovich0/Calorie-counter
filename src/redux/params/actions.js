import { INPUT_AGE, INPUT_HEIGHT, INPUT_WEIGHT } from "./types";

export const inputAge = (age) => {
	return {
		type: INPUT_AGE,
		payload: age,
	};
};

export const inputHeight = (height) => {
	return {
		type: INPUT_HEIGHT,
		payload: height,
	};
};

export const inputWeight = (weight) => {
	return {
		type: INPUT_WEIGHT,
		payload: weight,
	};
};
