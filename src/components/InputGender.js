import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGender } from "../redux";

export default function InputGender({ id, value }) {
	const gender = useSelector((state) => state.gender.gender);
	const dispatch = useDispatch();
	return (
		<input
			id={id}
			name="gender"
			value={value}
			type="radio"
			required=""
			checked={value == gender}
			onChange={() => dispatch(setGender(value))}
		/>
	);
}
