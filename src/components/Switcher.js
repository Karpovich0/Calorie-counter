import React from "react";
import InputGender from "./InputGender";

export default function Switcher() {
	return (
		<ul className="switcher">
			<li className="switcher__item">
				<InputGender id="gender-male" value="male" />
				<label htmlFor="gender-male">Male</label>
			</li>
			<li className="switcher__item">
				<InputGender id="gender-female" value="female" />
				<label htmlFor="gender-female">Female</label>
			</li>
		</ul>
	);
}
