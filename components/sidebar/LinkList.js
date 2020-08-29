import ActiveLink from "./ActiveLink";

export default function LinkList(props) {
	return (
		<ActiveLink
			activeClassName="bg-blue-100 text-blue-800 py-1 rounded hover:text-blue-800"
			href="/[[...slug]]"
			as={
				"/" +
				props.year +
				"/" +
				props.module +
				"/" +
				(props.submodule ? props.submodule + "/" : "") +
				props.lecture.replace(/\.[^/.]+$/, "")
			}
		>
			<a className="hover:text-gray-900 text-gray-600 font-medium">
				<li
					key={props.lecture}
					className="pl-2 py-1 rounded"
					style={{
						backgroundColor: "inherit",
					}}
				>
					{props.lecture.replace(/\.[^/.]+$/, "").replace(/_/g, " ")}
				</li>
			</a>
		</ActiveLink>
	);
}
