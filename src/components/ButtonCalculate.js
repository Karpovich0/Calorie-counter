import React from "react";

function ButtonCalculate({ isDisabled, onClick }) {
	return (
		<button
			className="form__submit-button button"
			name="calculate"
			type="button"
			disabled={isDisabled}
			onClick={onClick}
		>
			Calculate
		</button>
	);
}

export default ButtonCalculate;
