const highlightCode = require("@mapbox/rehype-prism");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
  options: {
    rehypePlugins: [highlightCode],
  },
});
