var base64 = require("base-64");
export default function MyCode(props) {
	if (props.className === "language-mermaid") {
		var result = base64.encode(props.children);
		return <img src={"https://mermaid.ink/img/" + result} />;
	} else {
		return <code {...props} />;
	}
}
