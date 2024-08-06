import React, { useState } from "react";

function App() {
	let time = new Date().toLocaleTimeString();

	let [now, getTime] = useState(time);

	function newTime() {
		let whatTime = new Date().toLocaleTimeString();
		getTime(whatTime);
	}
	return (
		<div className="container">
			<h1>{now}</h1>
			<button onClick={setInterval(newTime, 1000)}>Get Time</button>
		</div>
	);
}

export default App;
