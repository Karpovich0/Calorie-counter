import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputAge, inputHeight, inputWeight } from "../redux";

export default function InputParams({ id, name }) {
	const params = useSelector((state) => state.params);
	const dispatch = useDispatch();

	let value, changeValue;

	switch (name) {
		case "age":
			value = params.age;
			changeValue = inputAge;
			break;
		case "height":
			value = params.height;
			changeValue = inputHeight;
			break;
		case "weight":
			value = params.weight;
			changeValue = inputWeight;
			break;
		default:
			break;
	}

	const handleInput = (e) => {
		dispatch(changeValue(+e.target.value));
	};

	return (
		<input
			type="text"
			id={id}
			name={name}
			placeholder={0}
			maxLength={3}
			value={value}
			required=""
			onChange={handleInput}
		/>
	);
}
