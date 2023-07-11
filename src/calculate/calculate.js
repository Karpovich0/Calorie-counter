const PhysicalActivityRatio = {
	MIN: 1.2,
	LOW: 1.375,
	MEDIUM: 1.55,
	HIGH: 1.725,
	VERY_HIGHT: 1.9,
};

const CaloriesFormulaFactor = {
	AGE: 5,
	WEIGHT: 10,
	HEIGHT: 6.25,
};

const CaloriesFormulaConstant = {
	MALE: 5,
	FEMALE: -160,
};

const CaloriesMinMaxRatio = {
	MIN: 0.85,
	MAX: 1.15,
};

const getCaloriesMin = (result) => {
	return Math.round(result * CaloriesMinMaxRatio.MIN);
};

const getCaloriesMax = (result) => {
	return Math.round(result * CaloriesMinMaxRatio.MAX);
};

const getCaloriesNorm = (state) => {
	const { gender, params, activity } = state;
	const ageCalculated = CaloriesFormulaFactor.AGE * +params.age;
	const weighCalculated = CaloriesFormulaFactor.WEIGHT * +params.height;
	const heightCalculated = CaloriesFormulaFactor.HEIGHT * +params.weight;
	const genderCalculated = CaloriesFormulaConstant[gender.gender.toUpperCase()];
	let personsActivity;
	switch (activity.activity) {
		case "minimum":
			personsActivity = PhysicalActivityRatio.MIN;
			break;
		case "low":
			personsActivity = PhysicalActivityRatio.LOW;
			break;
		case "medium":
			personsActivity = PhysicalActivityRatio.MEDIUM;
			break;
		case "high":
			personsActivity = PhysicalActivityRatio.HIGH;
			break;
		case "very-high":
			personsActivity = PhysicalActivityRatio.VERY_HIGHT;
			break;
		default:
			break;
	}
	const result = Math.round(
		(weighCalculated + heightCalculated - ageCalculated + genderCalculated) * personsActivity
	);
	const min = getCaloriesMin(result);
	const max = getCaloriesMax(result);
	return {
		result,
		min,
		max,
	};
};

export default getCaloriesNorm;
