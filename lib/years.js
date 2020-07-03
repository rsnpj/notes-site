import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "notes");

export function getYears() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    // const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    // const fullPath = path.join(postsDirectory, fileName);
    // const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section

    // Combine the data with the id
    return {
      fileName,
    };
  });
  // Sort posts by date
  //   return allPostsData.sort((a, b) => {
  //     if (a.date < b.date) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
}
