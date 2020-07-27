const dirTree = require("directory-tree");

export function getTree() {
  const tree = dirTree("notes");
  return tree;
}
