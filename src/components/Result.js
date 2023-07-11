import React from "react";
function Result({ data, showPopup }) {
	return (
		<section className={"counter__result " + (!showPopup && "counter__result--hidden")}>
			<h2 className="heading">Result</h2>
			<ul className="counter__result-list">
				<li className="counter__result-item">
					<h3>
						<span id="calories-norm">{data ? data.result : 0}</span> Calories/day
					</h3>
					<p>Maintain weight</p>
				</li>
				<li className="counter__result-item">
					<h3>
						<span id="calories-minimal">{data ? data.min : 0}</span> Calories/day
					</h3>
					<p>Weight loss</p>
				</li>
				<li className="counter__result-item">
					<h3>
						<span id="calories-maximal">{data ? data.max : 0}</span> Calories/day
					</h3>
					<p>Weight gain</p>
				</li>
			</ul>
		</section>
	);
}

export default Result;
