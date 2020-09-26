import fs from "fs";
import path from "path";
import matter from "gray-matter";
import emoji from "remark-emoji";
import highlightCode from "@mapbox/rehype-prism";
import {
	Definition,
	Important,
	Theorem,
	Corollary,
	Lemma,
	Problem,
} from "../components/mdx/admonitions";
import slug from "remark-slug";
import MyImg from "../components/mdx/image";
import MyTable from "../components/mdx/table";
import remarkSmartypants from "./remarkSmartypants";
import renderToString from "next-mdx-remote/render-to-string";
import math from "remark-math";
import katex from "rehype-katex";

const postsDirectory = path.join(process.cwd(), "notes");

const components = {
	table: MyTable,
	img: MyImg,
	Definition,
	Important,
	Theorem,
	Corollary,
	Lemma,
	Problem,
};

export async function getPostData(params) {
	const isHome = "home";
	if (Object.keys(params).length === 0) {
		return { isHome };
	}
	const fullPath = path.join(postsDirectory, `/${params.slug.join("/")}.md`);
	try {
		const fileContents = fs.readFileSync(fullPath, "utf8");
	} catch {
		return { params };
	}
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const matterResult = matter(fileContents);
	const contentHtml = await renderToString(matterResult.content, {
		components: components,
		mdxOptions: {
			remarkPlugins: [slug, emoji, math, remarkSmartypants, math],
			rehypePlugins: [highlightCode, katex],
		},
	});
	return {
		params,
		contentHtml,
		...matterResult.data,
	};
}
