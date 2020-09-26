export default function Footer() {
	return (
		<footer className="w-full bg-gray-200 text-center py-4 flex justify-evenly flex-wrap gap-y-2">
			<span>
				Credit for the contents of the CS Notes goes to the{" "}
				<a
					className="text-blue-700 hover:underline"
					href="https://www.dur.ac.uk/computer.science/staff/"
				>
					CS Staff of Durham University
				</a>
			</span>
		</footer>
	);
}
