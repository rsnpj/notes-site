import { useState } from "react";
import mdconvert from "../lib/remark";

function Theorem(props) {
	const [theorem, setTheorem] = useState("Theorem");
	if (theorem === "Theorem") {
		mdconvert(setTheorem, props.children);
	}
	return (
		<div className="bg-clip-border bg-gradient-to-r from-orange-300 via-green-300 to-purple-300 py-1 rounded my-4">
			<div className="bg-white p-4 m-2">
				<span className="block text-2xl font-semibold text-black">
					Theorem {props.name ? "- " + props.name : ""}
				</span>
				<div
					className="italic"
					dangerouslySetInnerHTML={{ __html: theorem }}
				/>
			</div>
		</div>
	);
}

export default Theorem;
