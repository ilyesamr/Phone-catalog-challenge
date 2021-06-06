import React from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
const Spinner = () => {
	const style = { position: "fixed", top: "50%", left: "49%", transform: "translate(-50%, -50%)" };

	return (
		<>
			<div style={style}>
				<ClimbingBoxLoader
					size='40'
					color='#6b5ce7'
				/>
			</div>
		</>
	)
};
export default Spinner