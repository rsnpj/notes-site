export default function Layout(props) {
	return (
		<div className="flex flex-col">
			<div className="fixed w-full z-30">{props.navbar}</div>
			<div className="flex pt-16">
				<div className="h-screen sticky top-0 max-w-xs border-r border-gray-400 px-4 overflow-y-auto pt-4">
					{props.sidebar}
				</div>
				<div className="flex-grow">{props.main}</div>
			</div>
		</div>
	);
}
