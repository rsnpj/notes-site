import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "notes");

export async function getPostData(params) {
	let csstaff = require("../data/staff.js");
	const staff = csstaff.default;
	// console.log(staff["Andrei"]);
	if (Object.keys(params).length === 0) {
		return { isHome };
	}
	const fullPath = path.join(postsDirectory, `/${params.slug.join("/")}.md`);
	try {
		fs.readFileSync(fullPath, "utf8");
	} catch {
		return { params };
	}
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const matterResult = matter(fileContents);
	var details = null;
	if (matterResult.data.lecturer !== undefined) {
		details = staff[matterResult.data.lecturer];
	}
	const contentHtml = matterResult.content;
	return {
		params,
		details,
		contentHtml,
		...matterResult.data,
	};
}
