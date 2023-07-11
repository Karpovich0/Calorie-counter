import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActivity } from "../redux";

export default function InputActivity({ id, value }) {
	const activity = useSelector((state) => state.activity.activity);
	const dispatch = useDispatch();

	return (
		<input
			id={id}
			name="activity"
			type="radio"
			value={value}
			required=""
			onChange={() => dispatch(setActivity(value))}
			checked={activity == value}
		/>
	);
}
