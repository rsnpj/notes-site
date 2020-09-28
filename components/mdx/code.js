export default function MyCode(props) {
	if (props.className === "language-mermaid") {
		return <div className="mermaid">{props.children}</div>;
	} else {
		return <code {...props} />;
	}
}
