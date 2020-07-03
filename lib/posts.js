import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "notes");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    // const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const subFolders = fs.readdirSync(fullPath);
    // const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    // const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      fileName,
      subFolders,
      // ...matterResult.data,
    };
  });
  // Sort posts by id
  return allPostsData.sort((a, b) => {
    if (a.fileName > b.fileName) {
      return 1;
    } else {
      return -1;
    }
  });
}
