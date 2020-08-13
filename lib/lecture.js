import fs from "fs";
import path from "path";
import matter from "gray-matter";
import emoji from "remark-emoji";
const babel = require("@babel/core");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const mdx = require("@mdx-js/mdx");
const { MDXProvider, mdx: createElement } = require("@mdx-js/react");
const transform = (code) =>
  babel.transform(code, {
    plugins: [
      "@babel/plugin-transform-react-jsx",
      "@babel/plugin-proposal-object-rest-spread",
    ],
  }).code;
const renderWithReact = async (mdxCode) => {
  const jsx = await mdx(mdxCode, { skipExport: true, remarkPlugins: [emoji] });
  const code = transform(jsx);
  const scope = { mdx: createElement };
  const fn = new Function(
    "React",
    ...Object.keys(scope),
    `${code}; return React.createElement(MDXContent)`
  );
  const element = fn(React, ...Object.values(scope));
  const components = {
    h1: ({ children }) =>
      React.createElement("h1", { style: { color: "tomato" } }, children),
  };
  const elementWithProvider = React.createElement(
    MDXProvider,
    { components },
    element
  );
  return renderToStaticMarkup(elementWithProvider);
};

const postsDirectory = path.join(process.cwd(), "notes");

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug.join("/")}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const contentHtml = await renderWithReact(matterResult.content);
  return {
    contentHtml,
    ...matterResult.data,
  };
}
