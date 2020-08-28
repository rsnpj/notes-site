const dirTree = require("directory-tree");

export function getTree() {
	const tree = dirTree("notes");
	return tree;
}

export function getPaths() {
	const tree = dirTree("notes");
	const list = [{ params: { slug: [] } }];

	for (var i of tree.children) {
		for (var j of i.children) {
			for (var k of j.children) {
				if (k.name.endsWith(".md")) {
					list.push({
						params: {
							slug: [
								i.name,
								j.name,
								k.name.replace(/\.[^/.]+$/, ""),
							],
						},
					});
				} else {
					for (var l of k.children) {
						list.push({
							params: {
								slug: [
									i.name,
									j.name,
									k.name,
									l.name.replace(/\.[^/.]+$/, ""),
								],
							},
						});
					}
				}
			}
		}
	}
	return list;
}
