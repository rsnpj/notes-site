import Link from "next/link";
export default function Custom404() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="w-1/4">
				<h1 className="text-center text-4xl font-medium">
					Oops, that's a 404, looks like you're lost
				</h1>
				<img src="/home/MessyDoodle.svg" className="w-full py-4" />
				<div className="flex justify-center">
					<Link href="/">
						<a className="text-3xl text-blue-600 hover:underline">
							Go Home
						</a>
					</Link>
				</div>
				<p className="text-center">Don't think this should be a 404?</p>
			</div>
		</div>
	);
}
