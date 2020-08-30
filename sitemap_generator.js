const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");

sitemap({
	baseUrl: "https://csnotes.me",
	pagesDirectory: __dirname,
	targetDirectory: "public/",
	ignoredExtensions: ["js", "map"],
	ignoredPaths: ["[fallback]"],
});
