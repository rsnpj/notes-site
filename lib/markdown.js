import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { MDXProvider } from "@mdx-js/react";
import { renderToString } from "react-dom/server";
const postsDirectory = path.join(process.cwd(), "notes");

import dynamic from "next/dynamic";
const DynamicComponent = dynamic(() =>
  import(
    "../notes/Year_1/Algorithms_and_Data_Structures/Algorithms/pre-rendering.md"
  )
);
export async function getMarkdown(context) {
  const file = path.join(
    postsDirectory,
    context.params.year +
      "/" +
      context.params.module +
      "/" +
      context.params.submodule +
      "/" +
      context.params.lecture +
      ".md"
  );
  // console.log(<HelloWorld />);
  const fileContents = fs.readFileSync(file, "utf8");
  // import HelloWorld from context.params.year +
  // "/" +
  // context.params.module +
  // "/" +
  // context.params.submodule +
  // "/" +
  // context.params.lecture +
  // ".md"
  // Use gray-matter to parse the post metadata section

  const notes = require.context("../notes");
  const matterResult = matter(fileContents);
  console.log("START of file contents");
  console.log(notes);
  console.log("END of file contents");
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  // const contentHtml = processedContent.toString();

  const contentHtml = renderToString(
    <MDXProvider>
      <DynamicComponent />
    </MDXProvider>
  );

  return { contentHtml, ...matterResult.data };
}
