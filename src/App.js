import React, { useState } from "react";
import Switcher from "./components/Switcher";
import InputParams from "./components/InputParams";
import InputActivity from "./components/InputActivity";
import ButtonCalculate from "./components/ButtonCalculate";
import Result from "./components/Result";
import { useSelector } from "react-redux";
import getCaloriesNorm from "./calculate/calculate";

export default function App() {
	const params = useSelector((state) => state.params);
	const state = useSelector((state) => state);

	let [isDisabled, setIsDisabled] = useState(true);
	let [showPopup, setShoPopup] = useState(false);
	let [data, setData] = useState({});

	if (params.age != "" && params.weight != "" && params.height != "") {
		if (isDisabled == true) {
			setIsDisabled(false);
		}
	} else {
		if (isDisabled == false) {
			setIsDisabled(true);
		}
	}
	return (
		<main className="main">
			<div className="container">
				<article className="counter">
					<h1 className="counter__heading heading-main">Calorie counter</h1>
					<form className="counter__form form" name="counter" action="#" method="post">
						<div className="form__item">
							<h2 className="heading">Gender</h2>
							<Switcher />
						</div>
						<fieldset className="form__item form__parameters" name="parameters">
							<legend className="visually-hidden">Parameters</legend>
							<div className="inputs-group">
								<div className="input">
									<div className="input__heading">
										<label className="heading" htmlFor="age">
											Age
										</label>
										<span className="input__heading-unit">y.o.</span>
									</div>
									<div className="input__wrapper">
										<InputParams id="age" name="age" />
									</div>
								</div>
								<div className="input">
									<div className="input__heading">
										<label className="heading" htmlFor="height">
											Height
										</label>
										<span className="input__heading-unit">cm</span>
									</div>
									<div className="input__wrapper">
										<InputParams id="height" name="height" />
									</div>
								</div>
								<div className="input">
									<div className="input__heading">
										<label className="heading" htmlFor="weight">
											Weight
										</label>
										<span className="input__heading-unit">kg</span>
									</div>
									<div className="input__wrapper">
										<InputParams id="weight" name="weight" />
									</div>
								</div>
							</div>
						</fieldset>
						<fieldset className="form__item">
							<legend className="heading">Activity</legend>
							<ul className="radios-group">
								<li className="radio">
									<div className="radio__wrapper">
										<InputActivity id="activity-minimal" value="minimum" />
										<label htmlFor="activity-minimal">Minimum</label>
									</div>
									<p className="radio__description">Sedentary work and no physical activity</p>
								</li>
								<li className="radio">
									<div className="radio__wrapper">
										<InputActivity id="activity-low" value="low" />
										<label htmlFor="activity-low">Low</label>
									</div>
									<p className="radio__description">
										Infrequent, irregular exercise, activity at home
									</p>
								</li>
								<li className="radio">
									<div className="radio__wrapper">
										<InputActivity id="activity-medium" value="medium" />
										<label htmlFor="activity-medium">Medium</label>
									</div>
									<p className="radio__description">Workout 3-5 times a week</p>
								</li>
								<li className="radio">
									<div className="radio__wrapper">
										<InputActivity id="activity-high" value="high" />
										<label htmlFor="activity-high">High</label>
									</div>
									<p className="radio__description">Workout 6-7 times a week</p>
								</li>
								<li className="radio">
									<div className="radio__wrapper">
										<InputActivity id="activity-very-high" value="very-high" />
										<label htmlFor="activity-very-high">Very high</label>
									</div>
									<p className="radio__description">
										More than 6 workouts per week and physical work
									</p>
								</li>
							</ul>
						</fieldset>
						<div className="form__submit">
							<ButtonCalculate
								isDisabled={isDisabled}
								onClick={() => {
									setData(getCaloriesNorm(state));
									setShoPopup(true);
								}}
							/>
						</div>
					</form>
					<Result showPopup={showPopup} data={data} />
				</article>
			</div>
		</main>
	);
}
